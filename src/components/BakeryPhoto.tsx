interface BakeryPhotoProps {
  src: string;
  alt: string;
  className?: string;
  pictureClassName?: string;
  eager?: boolean;
}

export default function BakeryPhoto({
  src,
  alt,
  className = 'h-full w-full object-cover',
  pictureClassName = 'block h-full w-full',
  eager = false,
}: BakeryPhotoProps) {
  const webpSrc = src.endsWith('.jpg') ? src.replace(/\.jpg$/, '.webp') : undefined;

  return (
    <picture className={pictureClassName}>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        referrerPolicy="no-referrer"
        className={className}
      />
    </picture>
  );
}
