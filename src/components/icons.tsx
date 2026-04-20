import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Tick02Icon,
  Cancel01Icon,
  PlusSignIcon,
  DocumentAttachmentIcon,
  Github01Icon,
  QuoteUpIcon,
  BarChartIcon,
  SparklesIcon,
  Clock01Icon,
  Shield01Icon,
  Menu01Icon,
  StarIcon,
  TelegramIcon,
} from "@hugeicons/core-free-icons";

type IconProps = { size?: number };

const make =
  (icon: IconSvgElement, defaultSize: number) =>
  ({ size = defaultSize }: IconProps) => (
    <HugeiconsIcon icon={icon} size={size} />
  );

export const Icon = {
  Arrow: make(ArrowRight01Icon, 16),
  Check: make(Tick02Icon, 12),
  X: make(Cancel01Icon, 12),
  Plus: make(PlusSignIcon, 14),
  Doc: make(DocumentAttachmentIcon, 22),
  Github: make(Github01Icon, 22),
  Citation: make(QuoteUpIcon, 22),
  Chart: make(BarChartIcon, 22),
  Sparkles: make(SparklesIcon, 22),
  Clock: make(Clock01Icon, 22),
  Shield: make(Shield01Icon, 22),
  Menu: make(Menu01Icon, 22),
  Star: make(StarIcon, 14),
  Telegram: make(TelegramIcon, 16),
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <HugeiconsIcon icon={SparklesIcon} size={14} />
      {children}
    </span>
  );
}
