import logoOukei from "@/assets/OUKEI-LOGO-1.png";

interface OukeiLogoProps {
  size?: number;
  className?: string;
}

export function OukeiLogo({ size = 48, className }: OukeiLogoProps) {
  return (
    <img
      src={logoOukei}
      alt="oukei"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
