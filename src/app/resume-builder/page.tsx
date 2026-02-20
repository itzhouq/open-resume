import { ResumeBuilderContent } from "./ResumeBuilderContent";
import { WebSiteJsonLd, SoftwareApplicationJsonLd } from "components/seo/JsonLd";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://open-resume.itzhouq.cn";
const url = `${baseUrl}/resume-builder`;

export const metadata = {
  title: "在线简历编辑器 | 免费创建专业简历 | OpenResume",
  description:
    "使用 OpenResume 在线简历编辑器轻松创建专业简历。支持实时预览、多种模板、个性化设置，完全免费且开源，数据安全可靠。",
  keywords: [
    "在线简历编辑器",
    "简历生成器",
    "免费简历模板",
    "简历制作工具",
    "在线简历",
    "简历创建",
    "简历模板",
    "PDF简历",
    "开源简历",
    "中文简历",
  ].join(", "),
  openGraph: {
    title: "在线简历编辑器 | 免费创建专业简历 | OpenResume",
    description:
      "使用 OpenResume 在线简历编辑器轻松创建专业简历。支持实时预览、多种模板、个性化设置。",
    url,
    siteName: "OpenResume",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "OpenResume 在线简历编辑器",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "在线简历编辑器 | 免费创建专业简历 | OpenResume",
    description:
      "使用 OpenResume 在线简历编辑器轻松创建专业简历。支持实时预览、多种模板、个性化设置。",
    images: [`${baseUrl}/twitter-image.png`],
  },
  alternates: {
    canonical: url,
  },
};

export default function Create() {
  return (
    <>
      {/* 结构化数据 */}
      <WebSiteJsonLd
        siteUrl={baseUrl}
        siteName="OpenResume"
        description="免费、开源且强大的在线简历生成器"
      />
      <SoftwareApplicationJsonLd
        name="OpenResume 简历编辑器"
        description="免费、开源且强大的在线简历生成器，支持实时预览、多种模板和个性化设置，帮助求职者轻松创建专业简历"
        url={url}
        applicationCategory="UtilitiesApplication"
        operatingSystem="Web"
        offers={{
          price: "0",
          priceCurrency: "CNY",
        }}
      />
      <ResumeBuilderContent />
    </>
  );
}
