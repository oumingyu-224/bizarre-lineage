import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play ${siteConfig.name} - Ultimate Motorcycle Wheelie Stunt Game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Telegram", href: "https://t.me/isaac_free_games" },
        { text: "CAL", href: "https://cal.com/isaac-mingyu" },
        { text: "Patreon", href: "https://www.patreon.com/posts/144957222?pr=true" },
        { text: "Linktr", href: "https://linktr.ee/Isaac_mingyu" },
        // { text: "Creem", href: "https://www.creem.io/bip/vincent-ai" },
        { text: "GetAllMyLinks", href: "https://gaml.app/isaac" },
        { text: "AllMyLinks", href: "https://allmylinks.com/isaac-mingyu" },
        { text: "Pinterest | SoFlo Wheelie Life", href: "https://pin.it/1tTYsCdmW" },
        { text: "Github | SoFlo Wheelie Life", href: "https://github.com/oumingyu-224/SoFlo-Wheelie-Life" },
      ]
    },
    games: {  // 添加 games section
      title: "Games",
      links: [
        { text: "SoFlo Wheelie Life", href: "/" },
        { text: "Street Wheelie", href: "/street-wheelie" },
        { text: "Stickman Bike", href: "/stickman-bike" },
        { text: "Wheelie Life", href: "/wheelie-life" },
        // { text: "Italian Brainrot Clicker", href: "/brainrot-clicker" },
        // { text: "Basketball Bros Unblocked", href: "/basketball-bros-unblocked" },
        // { text: "Pokemon Gamma Emerald", href: "/pokemon-gamma-emerald" },
        // { text: "Sprunki Incredibox", href: "/sprunki-incredibox" },
        // { text: "Futbol Libre", href: "/futbol-libre" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.name)}&u=${encodeURIComponent(siteConfig.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} SoFlo Wheelie Life. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate SoFlo Wheelie Life",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 146
  },
  gameSection: {
    title: "SoFlo Wheelie Life",
    game: {
      url: '/game/soFlowheelielife/index.html',
      title: "soFlowheelielife",
      externalUrl: '/game/soFlowheelielife/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    // Added "Online Free", "Play"
    title: "How to Play SoFlo Wheelie Life Online Free - Game Controls & Guide",
    // Added "unblocked", "play this free game"
    description: "To begin playing SoFlo Wheelie Life, simply launch the game in your browser—no downloads or setup required. Once the game loads, you are placed on a motorcycle in a South Florida–inspired night environment designed for practicing wheelies and stunts. Take a moment to get familiar with the bike’s acceleration, braking sensitivity, and overall handling. The game’s simplicity makes it easy for beginners to start, while offering enough depth for players who want to refine and master realistic wheelie techniques.\n\n" +
      // Added "online game"
      "The core gameplay revolves around controlling throttle and braking to maintain the perfect wheelie angle. Press D to accelerate and lift the bike’s front wheel, and use A to brake and prevent flipping backward. The key to maintaining long wheelies is making small, precise adjustments instead of holding the keys continuously. Advanced stunt controls add even more depth: W triggers stand-up wheelies, S performs knee tricks, E activates the handbrake for fine balancing, and R enables no-hands stunts. Each action shifts the bike’s center of gravity, challenging players to react and adapt to the physics in real time.\n\n" +
      // Added "play", "free online game"
      "While practicing your wheelies, you’ll ride through a stylized city environment with occasional obstacles and changes in terrain that test your stability and reaction time. You can switch bikes with F and change helmets with G, experimenting with various motorcycle types—some offering more power, others providing better stability. Improvement comes through repetition: learning to tap the throttle rhythmically, recovering from unstable angles, timing brake adjustments, and smoothly transitioning between stunts. With practice, players develop consistent control and can achieve longer, more impressive wheelie runs.",
    // Image path unchanged
    image: "/assets/soflowheelielife-howto.jpg",
    // Added "Play Online Unblocked"
    imageAlt: "SoFlo Wheelie Life Game Guide - Play Online Unblocked, Controls, Physics, and Strategy Tutorial"
  },
  whatIs: {
    // Added "Play Game Online Free"
    title: "Everything about SoFlo Wheelie Life - Play Game Online Free",
    // Added "free online game", "unblocked"
    description: "SoFlo Wheelie Life is a browser-based motorcycle stunt and wheelie simulation game inspired by the street-riding culture of South Florida. Designed with a focus on realistic balance mechanics, the game challenges players to maintain a controlled wheelie for as long as possible while riding through immersive nighttime city environments. Unlike typical arcade-style motorcycle games, SoFlo Wheelie Life emphasizes precision, physics accuracy, and rider technique, making it feel closer to a real-life stunt practice experience.\n\n" +
      // Added "online game"
      "At its core, the game revolves around mastering throttle and brake control. Players use simple keyboard inputs—primarily the D key to accelerate and the A key to brake—to find the perfect tilt angle that keeps the bike balanced on one wheel. The physics engine responds to every subtle adjustment, meaning small inputs can greatly affect stability. This creates a high-skill, high-reward gameplay loop where progress is earned through practice rather than shortcuts or upgrades.\n\n" +
      // Added "play this free online game", "unblocked"
      "What makes SoFlo Wheelie Life unique is its dedication to stunt authenticity. Beyond basic wheelies, the game includes a full stunt system using keys like W, S, E, and R to perform stand-up wheelies, knee tricks, handbrake stabilizations, and even hands-off tricks. Each stunt alters the bike’s weight distribution, adding complexity and depth to the balancing mechanics.\n\n"+
      "The game also features multiple bikes, customizable rider gear, and dynamic environments that capture the vibe of South Florida’s urban streets. With its blend of realistic wheelie behavior, immersive visuals, and skill-based gameplay, SoFlo Wheelie Life appeals to both motorcycle enthusiasts and players who enjoy physics-driven challenge games. Whether you're a casual gamer or a stunt-riding fan, the experience is all about rhythm, finesse, and mastering the art of balance while cruising through the city at night.",
    logo: {
      // Image path unchanged
      src: "/assets/img/android-chrome-512x512.png",
      // Added "Free Online Unblocked Game"
      alt: "SoFlo Wheelie Life - Free Online Unblocked Game Logo"
    }
  },
  faq: {
    // Title already well-optimized
    title: "Frequently Asked Questions - SoFlo Wheelie Life Online Game",
    items: [
      {
        value: "where-to-play-original", // New item based on PAA
        question: "What is SoFlo Wheelie Life?",
        answer: "SoFlo Wheelie Life is a browser-based motorcycle wheelie and stunt simulation game inspired by South Florida’s street-riding culture. It focuses on realistic physics, precise throttle control, and authentic stunt mechanics. Players can perform long wheelies, practice advanced tricks, switch motorcycles, and experience a visually immersive nighttime city environment—all without needing to download or install any software."
      },
      {
        value: "play-on-mobile", // New item based on PAA
        question: "Do I need to download anything to play?",
        answer: "No. SoFlo Wheelie Life runs entirely in your web browser. There are no downloads, no apps, and no account registration required. Simply open the game, click “Play,” and start riding instantly. This makes the game accessible across different devices and ensures quick, hassle-free gameplay."
      },
      {
        value: "creator-info", // New item based on PAA
        question: "What devices and browsers does SoFlo Wheelie Life support?",
        answer: "The game works on most modern devices, including desktop computers, laptops, tablets, and mobile phones. For the best experience—especially because wheelies require precise timing—playing on a desktop with a keyboard is recommended. Browsers like Chrome, Firefox, Edge, and Safari all support the game, as long as they are kept up to date."
      },
      {
        value: "game-rating", // New item based on PAA
        question: "Is SoFlo Wheelie Life free to play?",
        answer: "Yes. SoFlo Wheelie Life is completely free. There are no paid upgrades, subscriptions, or hidden costs. All bikes, stunt controls, and features are available to every player from the moment they start the game."
      },
      {
        value: "new-player-difficulty", // Adjusted existing item's value for clarity
        question: "Why does my motorcycle flip backward or fall forward?",
        answer: "Flipping usually happens when the throttle is applied too aggressively or when the brake isn’t used to counterbalance the lift. In SoFlo Wheelie Life, the physics are highly sensitive, so mastering wheelies requires tapping the throttle and brake instead of holding the keys. Small input adjustments produce smoother, longer wheelies. With practice, players develop rhythm and balance that prevent sudden crashes."
      },
      {
        value: "technical-requirements-online", // Adjusted existing item's value
        question: "Can I switch motorcycles in the game?",
        answer: "Yes. Press F at any time to switch to a different motorcycle. Each bike has unique characteristics such as weight, torque, and stability. Some models are easier for beginners, while others offer more power and challenge for advanced players looking to push their limits."
      },
      {
        value: "available-game-modes", // Adjusted existing item's value
        question: "How do I customize my rider or helmet?",
        answer: "Customization is simple: press G to change helmets and adjust your rider's look. Although customization is cosmetic, it allows players to personalize their style and enhances the overall experience of riding through the city environment."
      },
      {
        value: "comfort-settings-online-game", // Adjusted existing item's value
        question: "Is SoFlo Wheelie Life realistic?",
        answer: "Yes. One of the game’s main appeals is its realistic wheelie physics. The balance system accurately simulates weight distribution, tilt angles, torque, and braking force. This makes the gameplay challenging but rewarding, especially for players who want a genuine stunt-riding feel."
      },
      {
        value: "winning-tactics-game", // Adjusted existing item's value
        question: "Is the game suitable for beginners?",
        answer: "Absolutely. While SoFlo Wheelie Life includes deep physics mechanics, beginners can start with basic wheelies and gradually improve their balance and timing. The controls are simple, and crashes reset instantly, making it easy to retry without frustration."
      }
    ]
  },
  features: {
    // Title already has "Online Game", added "Play Free"
    title: "Revolutionary Features of SoFlo Wheelie Life - Play Free Online Game",
    items: [
      {
        title: "Advanced Realistic Physics Engine",
        // Added "play this free game"
        description: "SoFlo Wheelie Life is built around a highly responsive physics system that recreates the real-world dynamics of performing wheelies. Every movement—throttle pressure, braking, shifting body weight, and adjusting the bike’s tilt—affects balance and stability. The game simulates torque, gravity, momentum, acceleration curves, and backfall/frontfall limits, allowing players to experience what it actually feels like to hold a precise wheelie angle. This adds depth and challenge, rewarding players who learn to control micro-adjustments instead of simply holding down keys."
      },
      {
        title: "Full Stunt Control System With Multiple Trick Options",
        // Added "unblocked online game"
        description: "Unlike simple wheelie mini-games, SoFlo Wheelie Life gives players a stunt system inspired by real street riding culture. You can perform seated wheelies, stand-up wheelies, knee tricks, handbrake stabilizations, and even no-hands stunts. Keys like W, S, E, and R allow smooth transitions between trick positions. Each trick affects the bike’s balance differently, meaning mastering stunts requires technique rather than memorizing patterns. The variety of moves encourages skill expression and lets players create their own riding style and flow."
      },
      {
        title: "Immersive South Florida Night-Ride Environment",
        // Added "play  online free"
        description: "The game recreates the atmosphere of nighttime street riding inspired by South Florida’s urban scene. Players ride through neon-lit roads, highway lanes, and areas with light traffic to simulate a realistic environment for practicing wheelies. The ambient lights, reflections, and moving vehicles contribute to a sense of speed and immersion. While the focus is on performing stunts, the environment adds visual depth and gives players the feeling of riding through an actual city, not just a static backdrop."
      },
      {
        title: "Customizable Bikes and Rider Gear for Personal Expression",
        // Added "free to play online game"
        description: "SoFlo Wheelie Life allows players to switch between different motorcycle models, each with unique weight, power, and balance characteristics that influence wheelie performance. Players can also change helmets and gear to personalize their rider’s appearance. Customization isn’t just cosmetic—some bikes may feel easier for beginners while others offer more torque and challenge for advanced riders. This adds replay value and encourages players to test different setups as they develop their skills."
      }
    ]
  }
} as const;


