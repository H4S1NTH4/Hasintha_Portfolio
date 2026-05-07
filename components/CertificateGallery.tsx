import Image from "next/image";
import type { PortfolioData } from "./types";

type CertificateGalleryProps = {
  certificates: PortfolioData["certificates"];
};

export function CertificateGallery({ certificates }: CertificateGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {certificates.map((certificate) => (
        <article key={certificate.title} className="glass-panel overflow-hidden rounded-lg">
          <div className="relative aspect-[4/3] bg-white/5">
            <Image
              src={certificate.local_asset}
              alt={certificate.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-white">{certificate.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{certificate.issuer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
