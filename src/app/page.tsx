import { Hero } from "home/Hero";
import { WebSiteJsonLd, WebPageJsonLd, SoftwareApplicationJsonLd, OrganizationJsonLd } from "components/seo/JsonLd";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://open-resume.itzhouq.cn";
const url = baseUrl;

export const metadata = {
  title: "在线简历生成器 | 免费、开源且强大的简历生成器 | OpenResume",
  description:
    "OpenResume 是一个在线简历生成器，免费、开源且功能强大，帮助你轻松创建专业简历，提升求职竞争力。支持多种模板和个性化设置，无需下载，安全可靠，适合各类求职者使用。",
  keywords: [
    "在线简历生成器",
    "免费简历",
    "简历模板",
    "简历制作",
    "简历编辑器",
    "PDF简历",
    "简历下载",
    "简历创建",
    "职业简历",
    "中文简历",
    "开源简历",
  ].join(", "),
  authors: [{ name: "OpenResume" }],
  creator: "OpenResume",
  publisher: "OpenResume",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url,
    title: "在线简历生成器 | 免费、开源且强大的简历生成器 | OpenResume",
    description:
      "OpenResume 是一个在线简历生成器，免费、开源且功能强大，帮助你轻松创建专业简历。",
    siteName: "OpenResume",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "OpenResume 在线简历生成器",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "在线简历生成器 | 免费、开源且强大的简历生成器 | OpenResume",
    description:
      "OpenResume 是一个在线简历生成器，免费、开源且功能强大，帮助你轻松创建专业简历。",
    images: [`${baseUrl}/twitter-image.png`],
  },
  alternates: {
    canonical: url,
  },
};

export default function Home() {
  return (
    <>
      {/* 结构化数据 */}
      <WebSiteJsonLd
        siteUrl={baseUrl}
        siteName="OpenResume"
        description="免费、开源且强大的在线简历生成器，帮助求职者轻松创建专业简历"
        searchAction={false}
      />
      <WebPageJsonLd
        url={url}
        title="在线简历生成器 | 免费、开源且强大的简历生成器 | OpenResume"
        description="OpenResume 是一个在线简历生成器，免费、开源且功能强大，帮助你轻松创建专业简历，提升求职竞争力。支持多种模板和个性化设置，无需下载，安全可靠，适合各类求职者使用。"
      />
      <SoftwareApplicationJsonLd
        name="OpenResume"
        description="免费、开源且强大的在线简历生成器，支持多种简历模板、实时预览、PDF 导出、简历导入解析等功能"
        url={url}
        applicationCategory="UtilitiesApplication"
        operatingSystem="Web"
        offers={{
          price: "0",
          priceCurrency: "CNY",
        }}
      />
      <OrganizationJsonLd
        name="OpenResume"
        url={baseUrl}
        description="免费、开源的在线简历生成器"
        logo={`${baseUrl}/logo.svg`}
        sameAs={[
          "https://github.com/itzhouq/open-resume",
        ]}
      />

      <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
        <Hero />
      </main>
    </>
  );
}
