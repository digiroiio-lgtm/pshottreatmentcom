import { TREATMENT_LABEL } from "@/content/treatments";
import type { TreatmentId } from "@/content/types";
import { whatsappUrl } from "./site-config";

// Pre-filled message from the brief. The treatment label is the only part that changes.
export const whatsappMessage = (treatment: TreatmentId = "not-sure") =>
  `Hello, I would like a confidential assessment for erectile dysfunction. I am interested in ${TREATMENT_LABEL[treatment]}.`;

export const whatsappLink = (treatment: TreatmentId = "not-sure") => whatsappUrl(whatsappMessage(treatment));
