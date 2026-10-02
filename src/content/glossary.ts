// Defined terms per page, emitted as DefinedTerm in JSON-LD (`mentions`). Definitions repeat what the page already says.
export type Term = { name: string; description: string };

const prp: Term = { name: "Platelet-rich plasma (PRP)", description: "A preparation made from a person's own blood by concentrating platelets in plasma. Its use for erectile dysfunction is experimental." };
const edswt: Term = { name: "EdSWT / Li-ESWT", description: "Erectile dysfunction shockwave therapy, also called low-intensity extracorporeal shockwave therapy: low-intensity shockwaves applied to the penis, mainly for vasculogenic ED." };
const vasculogenic: Term = { name: "Vasculogenic erectile dysfunction", description: "Erectile dysfunction caused by problems with blood flow into the penis or the penis's ability to hold blood." };
const venousLeak: Term = { name: "Venous leak", description: "Also called cavernosal insufficiency or veno-occlusive dysfunction: the penis cannot hold blood well enough to keep an erection." };
const doppler: Term = { name: "Penile Doppler ultrasound", description: "A scan that measures blood flow into and out of the penis to help identify arterial insufficiency or venous leak." };
const exosome: Term = { name: "Exosomes", description: "Tiny vesicles released by cells that carry signalling molecules; investigated as a cell-free regenerative approach." };
const stemCell: Term = { name: "Stem cell therapy", description: "An experimental approach using cells or cell-based preparations, studied for tissue repair in erectile dysfunction." };

export const glossary: Record<string, Term[]> = {
  "/p-shot": [prp],
  "/p-shot-turkey": [prp],
  "/p-shot-antalya": [prp],
  "/prp-for-erectile-dysfunction": [prp],
  "/shockwave-therapy-ed": [edswt, vasculogenic],
  "/edswt": [edswt],
  "/shockwave-therapy-erectile-dysfunction-turkey": [edswt],
  "/vasculogenic-erectile-dysfunction": [vasculogenic, venousLeak],
  "/venous-leak": [venousLeak, doppler],
  "/penile-doppler-ultrasound": [doppler, venousLeak],
  "/exosome-therapy-erectile-dysfunction": [exosome, prp, stemCell],
  "/exosome-therapy-turkey": [exosome],
  "/stem-cell-therapy-erectile-dysfunction": [stemCell, prp, exosome],
  "/stem-cell-treatment-ed-turkey": [stemCell],
};
