import Image, { type ImageProps } from "next/image";

type SiteImageProps = ImageProps;

export function SiteImage({ alt, ...props }: SiteImageProps) {
  return <Image alt={alt} {...props} unoptimized />;
}
