import { SiteImage } from "@/components/ui/site-image";

type LawyerPhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function LawyerPhoto({
  src,
  alt,
  sizes,
  className = "object-cover object-top",
  priority = false,
}: LawyerPhotoProps) {
  return (
    <SiteImage
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
