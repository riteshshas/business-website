"use server";

import { validateCreateEnquiry } from "@/lib/validators/enquiry";
import { createClient } from "@/lib/supabase/server";
import type { CreateEnquiryInput, SubmitEnquiryResult } from "@/types/enquiry";

function getFormValue(formData: FormData, field: keyof CreateEnquiryInput): string {
  const value = formData.get(field);

  return typeof value === "string" ? value : "";
}

function toCreateEnquiryInput(formData: FormData): CreateEnquiryInput {
  const email = getFormValue(formData, "email");

  return {
    name: getFormValue(formData, "name"),
    phone: getFormValue(formData, "phone"),
    email: email || undefined,
    service: getFormValue(formData, "service"),
    message: getFormValue(formData, "message"),
  };
}

async function insertEnquiry(input: CreateEnquiryInput): Promise<boolean> {
  try {
    const supabase = createClient();
    const { error } = await supabase.from("enquiries").insert({
      name: input.name,
      phone: input.phone,
      email: input.email ?? null,
      service: input.service,
      message: input.message,
    });

    return error === null;
  } catch {
    return false;
  }
}

/** Validates and persists a website enquiry. */
export async function submitEnquiry(
  input: CreateEnquiryInput,
): Promise<SubmitEnquiryResult> {
  const validation = validateCreateEnquiry(input);

  if (!validation.success) {
    return {
      success: false,
      message: "Please correct the highlighted fields and try again.",
      fieldErrors: validation.fieldErrors,
    };
  }

  const wasSubmitted = await insertEnquiry(validation.data);

  if (!wasSubmitted) {
    return {
      success: false,
      message:
        "We could not submit your enquiry right now. Please try again shortly.",
      fieldErrors: {},
    };
  }

  return {
    success: true,
    message: "Enquiry submitted successfully.",
  };
}

/** Form Action adapter for React's useActionState API. */
export async function submitEnquiryForm(
  _previousState: SubmitEnquiryResult,
  formData: FormData,
): Promise<SubmitEnquiryResult> {
  return submitEnquiry(toCreateEnquiryInput(formData));
}
