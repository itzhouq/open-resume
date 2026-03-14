import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";
import { AdSenseScript, AdsterraScript } from "components/adsense/AdSensePlaceholder";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://open-resume.itzhouq.cn";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "在线简历生成器 | 免费、开源且强大的简历生成器 | OpenResume",
    template: "%s | OpenResume",
  },
  description:
    "OpenResume 是一个在线简历生成器，免费、开源且功能强大，帮助你轻松创建专业简历，提升求职竞争力。支持多种模板和个性化设置，无需下载，安全可靠。",
  keywords: [
    "在线简历生成器",
    "免费简历",
    "简历模板",
    "简历制作",
    "简历编辑器",
    "PDF简历",
    "简历下载",
  ].join(", "),
  authors: [{ name: "OpenResume" }],
  creator: "OpenResume",
  publisher: "OpenResume",

  // 搜索引擎验证预留位置
  // TODO: 部署后添加实际的验证码
  verification: {
    // google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    // baidu: process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION,
  },

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

  // Open Graph 默认配置
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "OpenResume",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "OpenResume",
      },
    ],
  },

  // Twitter Card 默认配置
  twitter: {
    card: "summary_large_image",
    title: "OpenResume - 在线简历生成器",
    description: "免费、开源且强大的在线简历生成器",
    images: [`${baseUrl}/twitter-image.png`],
  },

  // 图标
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },

  // Manifest
  manifest: "/manifest.json",

  // 其他
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0ea5e9" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* AdSense 验证 */}
        <meta
          name="google-adsense-platform-account"
          content="ca-host-pub-4730905197989922"
        />
        <meta
          name="google-adsense-platform-domain"
          content="itzhouq.cn"
        />
        {/* 预留搜索引擎验证 meta 标签位置 */}
        {/* TODO: 部署后取消注释并添加实际的验证码 */}
        {/* <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} /> */}
        {/* <meta name="baidu-site-verification" content={process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION} /> */}
      </head>
      <body>
        <AdSenseScript />
        <AdsterraScript />
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
