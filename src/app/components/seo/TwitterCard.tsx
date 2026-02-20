/**
 * Twitter Card 元标签组件
 * 用于优化 Twitter 分享效果
 */
import { ReactNode } from "react";

export interface TwitterCardProps {
  card?: "summary" | "summary_large_image" | "app" | "player";
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  site?: string; // @username of the website
  creator?: string; // @username of the content creator
}

/**
 * Twitter Card 元标签组件
 * 通常不需要直接使用，因为 Next.js metadata API 已经支持 Twitter Card
 * 这个组件作为备用方案，在需要动态控制时使用
 */
export function TwitterCard({
  card = "summary_large_image",
  title,
  description,
  image,
  imageAlt,
  site,
  creator,
}: TwitterCardProps) {
  return (
    <>
      <meta name="twitter:card" content={card} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
      {site && <meta name="twitter:site" content={site} />}
      {creator && <meta name="twitter:creator" content={creator} />}
    </>
  );
}
