/**
 * Google AdSense 侧边栏广告组件
 *
 * 用于侧边栏的垂直广告位
 *
 * TODO: 添加真实 AdSense 代码步骤：
 * 1. 在 Google AdSense 创建侧边/垂直广告位
 * 2. 复制广告位 ID (data-ad-slot)
 * 3. 更新 DEFAULT_SLOT 常量
 * 4. 在 AdSensePlaceholder.tsx 中启用真实代码
 */

"use client";

import { AdSensePlaceholder, AdBlank } from "./AdSensePlaceholder";
import { cx } from "lib/cx";

// TODO: 替换为真实的 AdSense 广告位 ID
const DEFAULT_SLOT = "0987654321";

export interface AdSenseSidebarProps {
  slot?: string;
  className?: string;
  width?: string;
  minHeight?: string;
  sticky?: boolean;
}

/**
 * 侧边栏广告组件
 * 适合放置在侧边栏或内容旁的垂直区域
 */
export function AdSenseSidebar({
  slot = DEFAULT_SLOT,
  className,
  width = "300px",
  minHeight = "250px",
  sticky = false,
}: AdSenseSidebarProps) {
  return (
    <div
      className={cx("flex justify-center", sticky && "md:sticky md:top-4", className)}
      style={{ width, minHeight }}
    >
      <AdSensePlaceholder
        slot={slot}
        adFormat="vertical"
        style={{ width: "100%", minHeight }}
      />
    </div>
  );
}

/**
 * 响应式侧边栏广告
 * 移动端隐藏，桌面端显示
 */
export function AdSenseSidebarResponsive({ className }: { className?: string }) {
  return (
    <div className={cx("hidden md:block", className)}>
      <AdSenseSidebar slot={DEFAULT_SLOT} />
    </div>
  );
}

/**
 * 文章内嵌广告
 * 适合放置在文章内容之间
 */
export function AdSenseInArticle({ className }: { className?: string }) {
  return (
    <AdSensePlaceholder
      slot={DEFAULT_SLOT}
      adFormat="fluid"
      className={cx("my-6", className)}
      style={{ minHeight: "200px" }}
    />
  );
}
