/**
 * Google AdSense 横幅广告组件
 *
 * 用于页面顶部或底部的横幅广告位
 *
 * TODO: 添加真实 AdSense 代码步骤：
 * 1. 在 Google AdSense 创建横幅广告位
 * 2. 复制广告位 ID (data-ad-slot)
 * 3. 更新 DEFAULT_SLOT 常量
 * 4. 在 AdSensePlaceholder.tsx 中启用真实代码
 */

"use client";

import { AdSensePlaceholder, AdBlank } from "./AdSensePlaceholder";
import { cx } from "lib/cx";

// TODO: 替换为真实的 AdSense 广告位 ID
const DEFAULT_SLOT = "1234567890";

export interface AdSenseBannerProps {
  slot?: string;
  className?: string;
  minHeight?: string;
  showOnMobile?: boolean;
}

/**
 * 横幅广告组件
 * 适合放置在页面顶部、底部或内容之间的横幅区域
 */
export function AdSenseBanner({
  slot = DEFAULT_SLOT,
  className,
  minHeight = "90px",
  showOnMobile = false,
}: AdSenseBannerProps) {
  // 在移动端可选择隐藏广告
  if (!showOnMobile) {
    return <AdBlank height={minHeight} className={cx("md:hidden", className)} />;
  }

  return (
    <AdSensePlaceholder
      slot={slot}
      adFormat="horizontal"
      className={cx("w-full", className)}
      style={{ minHeight }}
    />
  );
}

/**
 * 页面顶部横幅广告
 */
export function AdSenseHeaderBanner({ className }: { className?: string }) {
  return (
    <div className={cx("mx-auto w-full max-w-screen-2xl", className)}>
      <AdSenseBanner slot={DEFAULT_SLOT} showOnMobile={false} />
    </div>
  );
}

/**
 * 页面底部横幅广告
 */
export function AdSenseFooterBanner({ className }: { className?: string }) {
  return (
    <div className={cx("mx-auto w-full max-w-screen-2xl", className)}>
      <AdSenseBanner slot={DEFAULT_SLOT} showOnMobile={false} />
    </div>
  );
}
