export interface CreateEnquiryInput {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
}

export type EnquiryField = keyof CreateEnquiryInput;

export type EnquiryFieldErrors = Partial<Record<EnquiryField, string[]>>;

export type SubmitEnquiryResult =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      message: string;
      fieldErrors: EnquiryFieldErrors;
    };
