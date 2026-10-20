import Image from "next/image";

export function BrandLogo({
  className = "h-9 sm:h-10 md:h-11 w-auto object-contain",
  width = 180,
  height = 48,
  priority = false,
  alt = "ISL Global Education",
}) {
  return (
    <>
      {/* Light mode logo */}
      <Image
        src="/images/logo.png"
        alt={alt}
        width={width}
        height={height}
        className={`${className} dark:hidden`}
        priority={priority}
      />
      {/* Dark mode logo */}
      <Image
        src="/images/logo-light.png"
        alt={alt}
        width={width}
        height={height}
        className={`${className} hidden dark:block`}
        priority={priority}
      />
    </>
  );
}

export default BrandLogo;
