import type {
  CreateEnquiryInput,
  EnquiryFieldErrors,
} from "@/types/enquiry";

const PHONE_DIGITS_MIN_LENGTH = 7;
const PHONE_DIGITS_MAX_LENGTH = 15;
const NAME_MAX_LENGTH = 255;
const EMAIL_MAX_LENGTH = 320;
const SERVICE_MAX_LENGTH = 100;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 2_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export type CreateEnquiryValidationResult =
  | {
      success: true;
      data: CreateEnquiryInput;
    }
  | {
      success: false;
      fieldErrors: EnquiryFieldErrors;
    };

/** Validates and normalizes user-provided enquiry data without persisting it. */
export function validateCreateEnquiry(
  input: CreateEnquiryInput,
): CreateEnquiryValidationResult {
  const data: CreateEnquiryInput = {
    name: getTrimmedString(input.name),
    phone: getTrimmedString(input.phone),
    email: getTrimmedString(input.email) || undefined,
    service: getTrimmedString(input.service),
    message: getTrimmedString(input.message),
  };
  const fieldErrors: EnquiryFieldErrors = {};

  if (!data.name) {
    fieldErrors.name = ["Name is required."];
  } else if (data.name.length > NAME_MAX_LENGTH) {
    fieldErrors.name = [`Name must not exceed ${NAME_MAX_LENGTH} characters.`];
  }

  if (!data.phone) {
    fieldErrors.phone = ["Phone number is required."];
  } else {
    const digits = data.phone.replace(/\D/g, "");
    if (
      digits.length < PHONE_DIGITS_MIN_LENGTH ||
      digits.length > PHONE_DIGITS_MAX_LENGTH
    ) {
      fieldErrors.phone = [
        `Phone number must contain ${PHONE_DIGITS_MIN_LENGTH} to ${PHONE_DIGITS_MAX_LENGTH} digits.`,
      ];
    }
  }

  if (data.email) {
    if (data.email.length > EMAIL_MAX_LENGTH) {
      fieldErrors.email = [
        `Email address must not exceed ${EMAIL_MAX_LENGTH} characters.`,
      ];
    } else if (!EMAIL_PATTERN.test(data.email)) {
      fieldErrors.email = ["Enter a valid email address."];
    }
  }

  if (!data.service) {
    fieldErrors.service = ["Please select a service."];
  } else if (data.service.length > SERVICE_MAX_LENGTH) {
    fieldErrors.service = [
      `Service must not exceed ${SERVICE_MAX_LENGTH} characters.`,
    ];
  }

  if (!data.message) {
    fieldErrors.message = ["Message is required."];
  } else if (data.message.length < MESSAGE_MIN_LENGTH) {
    fieldErrors.message = [
      `Message must be at least ${MESSAGE_MIN_LENGTH} characters long.`,
    ];
  } else if (data.message.length > MESSAGE_MAX_LENGTH) {
    fieldErrors.message = [
      `Message must not exceed ${MESSAGE_MAX_LENGTH} characters.`,
    ];
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  return { success: true, data };
}
