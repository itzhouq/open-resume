import { ResumeImportContent } from "./ResumeImportContent";
import { WebPageJsonLd } from "components/seo/JsonLd";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://open-resume.itzhouq.cn";
const url = `${baseUrl}/resume-import`;

export const metadata = {
  title: "导入 PDF 简历 | 智能解析简历数据 | OpenResume",
  description:
    "使用 OpenResume 的 PDF 简历导入功能，智能解析现有简历数据，快速编辑和优化您的简历。支持自动识别个人信息、工作经历、教育背景等。",
  keywords: [
    "PDF简历导入",
    "简历解析",
    "简历数据提取",
    "简历格式转换",
    "在线简历编辑",
    "ATS简历解析",
    "简历智能识别",
  ].join(", "),
  openGraph: {
    title: "导入 PDF 简历 | 智能解析简历数据 | OpenResume",
    description:
      "使用 OpenResume 的 PDF 简历导入功能，智能解析现有简历数据，快速编辑和优化您的简历。",
    url,
    siteName: "OpenResume",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "OpenResume PDF 简历导入",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "导入 PDF 简历 | 智能解析简历数据 | OpenResume",
    description:
      "使用 OpenResume 的 PDF 简历导入功能，智能解析现有简历数据，快速编辑和优化您的简历。",
    images: [`${baseUrl}/twitter-image.png`],
  },
  alternates: {
    canonical: url,
  },
};

export default function ImportResume() {
  return (
    <>
      <WebPageJsonLd
        url={url}
        title="导入 PDF 简历 | 智能解析简历数据 | OpenResume"
        description="使用 OpenResume 的 PDF 简历导入功能，智能解析现有简历数据，快速编辑和优化您的简历。支持自动识别个人信息、工作经历、教育背景等。"
      />
      <ResumeImportContent />
    </>
  );
}
