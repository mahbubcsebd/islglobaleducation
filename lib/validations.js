import { z } from "zod";

/**
 * Creates Zod schema for Quick Contact / Inquiry Form with bilingual validation messages.
 * @param {object} dict - Language dictionary containing validation strings.
 */
export function getContactSchema(dict) {
  const v = dict?.validation || {};
  return z.object({
    name: z
      .string()
      .min(1, { message: v.nameRequired || "Name is required" })
      .min(2, { message: v.nameMin || "Name must be at least 2 characters" })
      .max(60, { message: "Name is too long" }),
    phone: z
      .string()
      .min(1, { message: v.phoneRequired || "Phone number is required" })
      .regex(/^[0-9+\s\-()]{8,20}$/, {
        message: v.phoneInvalid || "Please enter a valid phone number",
      }),
    query: z
      .string()
      .min(1, { message: v.queryRequired || "Please write your query" })
      .min(5, { message: v.queryMin || "Query must be at least 5 characters" })
      .max(1000, { message: "Query cannot exceed 1000 characters" }),
  });
}

/**
 * Creates Zod schema for Study Abroad Eligibility Assessment Form with bilingual messages.
 * @param {object} dict - Language dictionary containing validation strings.
 */
export function getEligibilitySchema(dict) {
  const v = dict?.validation || {};
  return z.object({
    fullName: z
      .string()
      .min(1, { message: v.nameRequired || "Full name is required" })
      .min(2, { message: v.nameMin || "Name must be at least 2 characters" })
      .max(60, { message: "Name is too long" }),
    phone: z
      .string()
      .min(1, { message: v.phoneRequired || "Phone number is required" })
      .regex(/^[0-9+\s\-()]{8,20}$/, {
        message: v.phoneInvalid || "Please enter a valid phone number",
      }),
    email: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        { message: v.emailInvalid || "Please enter a valid email address" }
      ),
    destination: z
      .string()
      .min(1, { message: v.destinationRequired || "Please select a destination" }),
    education: z
      .string()
      .min(1, { message: v.educationRequired || "Please select your qualification" }),
    passingYear: z
      .string()
      .min(1, { message: v.passingYearRequired || "Please enter your passing year" })
      .regex(/^(19|20)\d{2}$/, {
        message: v.passingYearInvalid || "Please enter a valid 4-digit year (e.g. 2023)",
      }),
    gpa: z
      .string()
      .min(1, { message: v.gpaRequired || "Please enter your GPA / CGPA" })
      .max(10, { message: "Please enter a valid GPA format" }),
    ieltsStatus: z
      .string()
      .min(1, { message: v.ieltsRequired || "Please select English proficiency status" }),
  });
}
