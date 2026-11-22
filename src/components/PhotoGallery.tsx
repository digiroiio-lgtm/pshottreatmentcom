import Image from "next/image";
import { clinicPhotos, type ClinicPhotoKey } from "@/content/images";

/** Real clinic photos with captions. Small source photos are shown at their natural size or smaller, never upscaled into blur. */
export default function PhotoGallery({ heading, intro, photos, id }: { heading: string; intro?: string; photos: ClinicPhotoKey[]; id?: string }) {
  const headingId = `${id ?? "gallery"}-heading`;
  return (
    <section id={id} aria-labelledby={headingId}>
      <h2 id={headingId} className="text-2xl md:text-3xl font-bold text-heading mb-3">{heading}</h2>
      {intro && <p className="text-slate-700 mb-5">{intro}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((key) => {
          const photo = clinicPhotos[key];
          return (
            <figure key={key} className="overflow-hidden rounded-xl border border-teal-700/40 bg-black glow-gold">
              <div className="relative aspect-[4/5]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 18rem, 50vw" className="object-cover" />
              </div>
              <figcaption className="px-3 py-2 text-xs md:text-sm text-slate-700 leading-snug">{photo.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
