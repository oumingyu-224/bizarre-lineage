import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { StickmanBikeContent } from "./content";

export const metadata: Metadata = {
  title: `Stickman Bike – Free Online Bike Game| ${siteConfig.domain}`,
  description: "Play Stickman Bike online for free. Perform cool bike stunts, race through challenging tracks, and enjoy smooth, fast-paced gameplay. No downloads needed!",
  openGraph: {
    title: `Stickman Bike – Free Online Bike Game | ${siteConfig.domain}`,
    description: "Play Stickman Bike online for free. Perform cool bike stunts, race through challenging tracks, and enjoy smooth, fast-paced gameplay. No downloads needed!",
    type: 'website',
    url: `${siteConfig.url}/stickman-bike`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/stickman-bike/stickman-bike.png`,
        alt: `Stickman Bike Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stickman Bike – Free Online Bike Game',
    description: 'Play Stickman Bike online for free. Perform cool bike stunts, race through challenging tracks, and enjoy smooth, fast-paced gameplay. No downloads needed!',
    images: [`/assets/stickman-bike/stickman-bike.png`],
  },
  alternates: {
    canonical: `/stickman-bike`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Stickman Bike",
    description: "Play Stickman Bike online for free. Perform cool bike stunts, race through challenging tracks, and enjoy smooth, fast-paced gameplay. No downloads needed!",
    url: "/stickman-bike"
  },
  content: StickmanBikeContent
};

export default function StickmanBikePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}





