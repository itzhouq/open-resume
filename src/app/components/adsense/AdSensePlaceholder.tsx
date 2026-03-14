/**
 * Google AdSense 占位组件
 *
 * 用于预留广告位置，开发环境显示占位符
 * 生产环境显示真实 AdSense 广告
 */

"use client";

import Script from "next/script";
import { cx } from "lib/cx";

export interface AdSensePlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
  slot?: string; // AdSense 广告位 ID
  adFormat?: string; // 如 "auto", "rectangle", "horizontal", "vertical"
  fullWidthResponsive?: boolean;
  children?: React.ReactNode;
}

// AdSense 发布商 ID
const ADSENSE_ID = "pub-4730905197989922";

/**
 * 通用 AdSense 占位组件
 *
 * 开发环境：显示灰色占位框
 * 生产环境：显示真实广告
 */
export function AdSensePlaceholder({
  className,
  style,
  slot,
  adFormat = "auto",
  fullWidthResponsive = true,
  children,
}: AdSensePlaceholderProps) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div
      className={cx(
        "relative overflow-hidden",
        isDev && "flex min-h-[100px] items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100 text-xs text-gray-500",
        className
      )}
      style={style}
      data-ad-slot={slot}
    >
      {isDev ? (
        <div className="text-center">
          <p>AdSense Placeholder</p>
          {slot && <p className="mt-1">Slot: {slot}</p>}
          {adFormat && <p>Format: {adFormat}</p>}
        </div>
      ) : (
        <>
          <ins
            className="adsbygoogle block"
            style={{ display: "block" }}
            data-ad-client={ADSENSE_ID}
            data-ad-slot={slot}
            data-ad-format={adFormat}
            data-full-width-responsive={fullWidthResponsive.toString()}
          />
          {children}
        </>
      )}
    </div>
  );
}

/**
 * 空白广告占位符
 * 用于预留空间但不显示任何内容
 */
export function AdBlank({
  width = "100%",
  height = "100px",
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <div
      className={cx("hidden md:block", className)}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

/**
 * AdSense 全局脚本组件
 * 需要在页面中引入一次
 */
export function AdSenseScript() {
  // 开发环境不加载 AdSense 脚本
  if (process.env.NODE_ENV === "development") {
    return null;
  }

  return (
    <Script
      id="adsense-init"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4730905197989922"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

/**
 * Adsterra 广告脚本组件
 * 需要在页面中引入一次
 */
export function AdsterraScript() {
  // 开发环境不加载 Adsterra 脚本
  if (process.env.NODE_ENV === "development") {
    return null;
  }

  return (
    <Script
      id="adsterra-init"
      src="https://pl28918096.effectivegatecpm.com/85/20/db/8520db0f1d75b1abba97953fea721e76.js"
      strategy="afterInteractive"
    />
  );
}
