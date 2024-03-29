"use client";

import React from "react";
import Image from "next/image";

type Props = {
  src: string | undefined;
  alt: string;
  priority?: boolean;
  loading?: "eager" | "lazy" | undefined;
  quality?: number;
  className?: string;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
} & (Fill | NotFill);

type Fill = {
  fill: true;
  sizes: string;
};
type NotFill = {
  fill: false;
  width: number;
  height: number;
};

export default function ImageComponent(props: Props) {
  const placeholderImage = "/placeholder.png";

  const [image, setImage] = React.useState(
    !!props.src ? props.src : placeholderImage,
  );

  const width = !props.fill ? props.width : undefined;
  const height = !props.fill ? props.height : undefined;
  const sizes = props.fill ? props.sizes : undefined;

  const bgColor = "#020523";
  const shimmerColor = "#17132F";

  const shimmer = (w: number, h: number) => `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient id="g">
              <stop stop-color="${bgColor}" offset="20%" />
              <stop stop-color="${bgColor}" offset="50%" />
              <stop stop-color="${shimmerColor}" offset="70%" />
            </linearGradient>
          </defs>
          <rect width="${w}" height="${h}" fill="${bgColor}" />
          <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
          <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>
    `;
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  const placeholderSvg = (w?: number, h?: number): `data:image/${string}` =>
    `data:image/svg+xml;base64,${toBase64(shimmer(w ? w : 450, h ? h : 450))}`;

  return (
    <Image
      src={image}
      fill={props.fill}
      sizes={sizes}
      width={width}
      height={height}
      quality={props.quality}
      placeholder={placeholderSvg(width, height)}
      onError={() => setImage(placeholderImage)}
      className={props.className}
      alt={props.alt}
      priority={props.priority}
      loading={props.loading}
      onLoad={props.onLoad}
    />
  );
}
