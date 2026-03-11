import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { streetWheelieContent } from "./content";

export const metadata: Metadata = {
  title: `Street Wheelie – Free Online Motorcycle Stunt | ${siteConfig.domain}`,
  description: "Play Street Wheelie online for free. Perform realistic motorcycle wheelies, master balance, unlock bikes, and enjoy smooth street-style stunt action in your browser.",
  openGraph: {
    title: `Street Wheelie Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Street Wheelie online for free. Perform realistic motorcycle wheelies, master balance, unlock bikes, and enjoy smooth street-style stunt action in your browser.",
    type: 'website',
    url: `${siteConfig.url}/street-wheelie`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/street-wheelie/street-wheelie.png`,
        alt: `Street Wheelie Unblocked`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Street Wheelie - Free Online Unblocked Game',
    description: 'Play Street Wheelie online for free',
    images: [`/assets/street-wheelie/street-wheelie.png`],
  },
  alternates: {
    canonical: `/street-wheelie`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Street Wheelie",
    description: "Play Street Wheelie online for free. Perform realistic motorcycle wheelies, master balance, unlock bikes, and enjoy smooth street-style stunt action in your browser.",
    url: "/street-wheelie"
  },
  content: streetWheelieContent
};

export default function CrazyCow3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}



