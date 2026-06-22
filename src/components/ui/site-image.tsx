import Image, { type ImageProps } from "next/image";

type SiteImageProps = ImageProps;

export function SiteImage({
  alt,
  loading,
  priority,
  ...props
}: SiteImageProps) {
  return (
    <Image
      alt={alt}
      {...props}
      priority={priority}
      loading={priority ? undefined : (loading ?? "lazy")}
      unoptimized
    />
  );
}
