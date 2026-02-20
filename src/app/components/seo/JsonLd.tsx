/**
 * JSON-LD 结构化数据组件
 * 支持多种 Schema.org 类型，用于 SEO 优化
 */
import { ReactNode } from "react";

export interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * 将 JSON 数据转换为脚本标签
 * JSON-LD 是搜索引擎推荐的结构化数据格式
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * 生成 WebSite Schema
 * 定义站点基本信息
 */
export function WebSiteJsonLd({
  siteUrl,
  siteName,
  description,
  searchAction = false,
}: {
  siteUrl: string;
  siteName: string;
  description?: string;
  searchAction?: boolean;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": siteName,
    ...(description && { description }),
  };

  if (searchAction) {
    data.potentialAction = {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    };
  }

  return <JsonLd data={data} />;
}

/**
 * 生成 WebPage Schema
 * 定义单个页面的信息
 */
export function WebPageJsonLd({
  url,
  title,
  description,
  dateModified,
  datePublished,
  isPartOf,
}: {
  url: string;
  title: string;
  description?: string;
  dateModified?: string;
  datePublished?: string;
  isPartOf?: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": url,
    "name": title,
    ...(description && { description }),
    ...(dateModified && { dateModified }),
    ...(datePublished && { datePublished }),
    ...(isPartOf && {
      isPartOf: {
        "@type": "WebSite",
        "@id": isPartOf,
      },
    }),
    inLanguage: "zh-CN",
  };

  return <JsonLd data={data} />;
}

/**
 * 生成 SoftwareApplication Schema
 * 将应用定义为软件，适用于简历生成器等工具类应用
 */
interface SoftwareApplicationProps {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
}

export function SoftwareApplicationJsonLd({
  name,
  description,
  url,
  applicationCategory = "UtilitiesApplication",
  operatingSystem = "Web",
  offers,
  aggregateRating,
}: SoftwareApplicationProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    ...(offers && {
      offers: {
        "@type": "Offer",
        "price": offers.price,
        "priceCurrency": offers.priceCurrency,
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "ratingCount": aggregateRating.ratingCount,
      },
    }),
  };

  return <JsonLd data={data} />;
}

/**
 * 生成 BreadcrumbList Schema
 * 面包屑导航结构化数据
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return <JsonLd data={data} />;
}

/**
 * 生成 Organization Schema
 * 组织信息结构化数据
 */
export function OrganizationJsonLd({
  name,
  url,
  logo,
  description,
  sameAs,
}: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    ...(logo && { logo }),
    ...(description && { description }),
    ...(sameAs && { sameAs }),
  };

  return <JsonLd data={data} />;
}
