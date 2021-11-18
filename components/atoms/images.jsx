import Image from "next/image";

const Images = ({ src, className, alt, width, height, onClick }) => {
  return (
    <Image
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export default Images;