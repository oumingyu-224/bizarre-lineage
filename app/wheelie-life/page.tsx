import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { wheelieLifeContent } from "./content";

export const metadata: Metadata = {
  title: `Wheelie Life – Free Online Motorcycle Wheelie Game | ${siteConfig.domain}`,
  description: "Play Wheelie Life for free! Master motorcycle wheelies, perform stunts, and unlock new bikes. Enjoy realistic physics and fun challenges. No downloads required.",
  openGraph: {
    title: `Wheelie Life – Free Online Motorcycle Wheelie Game | ${siteConfig.domain}`,
    description: "Play Wheelie Life for free! Master motorcycle wheelies, perform stunts, and unlock new bikes. Enjoy realistic physics and fun challenges. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/wheelie-life`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/wheelie-life/wheelie-life.jpg`,
        alt: `Wheelie Life`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wheelie Life – Free Online Motorcycle Wheelie Game',
    description: 'Play Wheelie Life for free! Master motorcycle wheelies, perform stunts, and unlock new bikes. Enjoy realistic physics and fun challenges. No downloads required.',
    images: [`/assets/wheelie-life/wheelie-life.jpg`],
  },
  alternates: {
    canonical: `/wheelie-life`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Wheelie Life – Free Online Motorcycle Wheelie Game",
    description: "Play Wheelie Life for free! Master motorcycle wheelies, perform stunts, and unlock new bikes. Enjoy realistic physics and fun challenges. No downloads required.",
    url: "/wheelie-life"
  },
  content: wheelieLifeContent
};

export default function BrainrotClickerPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
