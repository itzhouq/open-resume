import { ResumeParserContent } from "./ResumeParserContent";
import { WebPageJsonLd } from "components/seo/JsonLd";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://open-resume.itzhouq.cn";
const url = `${baseUrl}/resume-parser`;

export const metadata = {
  title: "简历解析器原理 | ATS 友好简历 | OpenResume",
  description:
    "了解 OpenResume 简历解析器的工作原理，查看 ATS（ applicant Tracking System）如何解析简历。确保您的简历格式正确，提高求职成功率。",
  keywords: [
    "简历解析器",
    "ATS简历",
    "简历格式",
    "简历解析原理",
    "求职系统",
    "简历兼容性",
    "简历测试",
  ].join(", "),
  openGraph: {
    title: "简历解析器原理 | ATS 友好简历 | OpenResume",
    description:
      "了解 OpenResume 简历解析器的工作原理，查看 ATS 如何解析简历，确保您的简历格式正确。",
    url,
    siteName: "OpenResume",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "OpenResume 简历解析器",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "简历解析器原理 | ATS 友好简历 | OpenResume",
    description:
      "了解 OpenResume 简历解析器的工作原理，查看 ATS 如何解析简历，确保您的简历格式正确。",
    images: [`${baseUrl}/twitter-image.png`],
  },
  alternates: {
    canonical: url,
  },
};

export default function ResumeParser() {
  return (
    <>
      <WebPageJsonLd
        url={url}
        title="简历解析器原理 | ATS 友好简历 | OpenResume"
        description="了解 OpenResume 简历解析器的工作原理，查看 ATS（applicant Tracking System）如何解析简历。确保您的简历格式正确，提高求职成功率。"
      />
      <ResumeParserContent />
    </>
  );
}
