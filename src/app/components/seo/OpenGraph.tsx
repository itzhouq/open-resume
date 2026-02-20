/**
 * Open Graph 元标签组件
 * 用于优化社交媒体分享效果（Facebook、LinkedIn 等）
 */
import { ReactNode } from "react";

export interface OpenGraphProps {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  type?: string;
  locale?: string;
  alternateLocale?: string[];
}

/**
 * Open Graph 元标签组件
 * 通常不需要直接使用，因为 Next.js metadata API 已经支持 OG
 * 这个组件作为备用方案，在需要动态控制时使用
 */
export function OpenGraph({
  title,
  description,
  url,
  siteName,
  images,
  type = "website",
  locale = "zh_CN",
  alternateLocale,
}: OpenGraphProps) {
  return (
    <>
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      {alternateLocale?.map((altLocale) => (
        <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
      ))}
      {images?.map((image, index) => (
        <meta
          key={index}
          property="og:image"
          content={image.url}
          {...(image.width && { width: image.width.toString() })}
          {...(image.height && { height: image.height.toString() })}
          {...(image.alt && { alt: image.alt })}
        />
      ))}
    </>
  );
}
