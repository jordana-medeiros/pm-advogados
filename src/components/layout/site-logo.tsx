import { SiteImage } from "@/components/ui/site-image";
import Link from "next/link";

import { brandLogos, siteName } from "@/lib/site-data";

type SiteLogoProps = {
  variant?: keyof typeof brandLogos;
  onNavigate?: () => void;
  priority?: boolean;
  className?: string;
};

export function SiteLogo({
  variant = "white",
  onNavigate,
  priority = false,
  className = "h-10 w-auto sm:h-11",
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="inline-flex min-w-0 shrink-0 items-center"
    >
      <SiteImage
        src={brandLogos[variant]}
        alt={siteName}
        width={220}
        height={72}
        priority={priority}
        className={className}
      />
    </Link>
  );
}
