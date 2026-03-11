import { content as globalContent } from "@/config/content";

export const streetWheelieContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Street Wheelie",
    game: {
      url: '/game/streetWheelie/index.html',
      title: "streetWheelie",
      externalUrl: '/game/streetWheelie/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title subtly hints at online aspect
    title: "Street Wheelie: Online Game Features & Mayhem",
    items: [
      {
        title: "Realistic Motorcycle Physics",
        // Added "free online game"
        description: "Street Wheelie is built on a physics-based system that accurately simulates the balance and weight of a real motorcycle. Every movement of the throttle or brake has a direct impact on the bike’s position, making the gameplay feel realistic and rewarding."
      },
      {
        title: "Immersive Street Environment",
        // Added "unblocked game"
        description: "The game takes place in an urban street setting, complete with road textures, lighting effects, and backgrounds that enhance the overall experience. This environment makes every wheelie feel more authentic and engaging."
      },
      {
        title: "Multiple Motorcycles to Choose From",
        // Added "free game" context
        description: "Players can unlock or switch between different bikes, each with unique speed, weight, balance point, and handling. Some bikes are better for beginners, while others offer higher performance for advanced players seeking a bigger challenge."
      },
      {
        title: "Skill-Based Progression",
        // Added "online game"
        description: "Street Wheelie is easy to start but difficult to master. As you play more, your balance control and timing improve. This natural progression keeps the game interesting and motivating, encouraging players to push for longer and more stylish wheelies."
      }
    ]
  },

  whatIs: {
    title: "What is Street Wheelie?",
    // Reinforced "free online browser game", added "unblocked"
    description: "Street Wheelie is a free online motorcycle stunt game focused on mastering wheelies and balance control in a realistic street environment. Players ride a powerful bike through an urban-style setting while attempting to lift and maintain the front wheel in the air as long as possible without losing control.\n\n" +
      // Added "free game"
      "Unlike simple racing games, Street Wheelie is all about timing, balance, and precision. Every small input affects the bike’s position and stability. This makes the game both highly engaging and skill-based. Whether you are a beginner learning basic balance or an advanced player attempting long-distance wheelies, Street Wheelie provides a fun and challenging experience..\n\n" +
      // Added "online", reinforced "free"
      "Designed to run directly in your browser, the game requires no installation or downloads. Just open the page and start riding. The realistic physics, smooth animations, and responsive controls make it one of the most immersive wheelie-style games available online.",
    logo: {
      // Image path unchanged
      src: "/assets/img/android-chrome-512x512.png",
      // Added keywords to alt text
      alt: "SoFlo Wheelie Life Free Online Unblocked Game Logo"
    }
  },

  howToPlay: {
    // Added "Online Free" to title
    title: "How to Play Street Wheelie",
    // Added "online", "free game"
    description: "Use the keyboard to control your motorcycle. The acceleration key is used to lift the front wheel, while the brake helps prevent you from flipping backward. Your main objective is to find the perfect balance point, where the bike remains stable on the rear wheel. Achieving this balance is the foundation of every successful wheelie.\n\n" +
      // Added "online game"
      "Do not hold the acceleration continuously. Instead, use light, controlled taps to keep the bike in balance. If the front of the bike rises too high, gently apply the brake to bring it back down. Mastering this rhythm is the key to performing longer and smoother wheelies. As you improve, you can begin adding more complex movements and tricks.\n\n" +
      // Added "unblocked", reinforced "free browser game"
      "Street Wheelie features a detailed street environment that helps simulate real riding conditions. Pay attention to changes in the road, slight slopes, and obstacles that can impact your balance. Try different bikes to find one that fits your riding style. With consistent practice, you will increase your control, extend your wheelie time, and perform more impressive stunts.",
    // Image path unchanged
    image: "/assets/street-wheelie/street-wheelie.png",
    // Added keywords to alt text
    imageAlt: "Street Wheelie Gameplay Guide - Controls for Free Online Unblocked Fun"
  },

  faq: {
    title: "Street Wheelie: Frequently Asked Questions (FAQ)", // Added FAQ acronym for clarity
    items: [
      {
        value: "difficulty",
        question: "Is Street Wheelie free to play?",
        // Added "free online game"
        answer: "Yes. Street Wheelie is 100% free to play online. You do not need to pay or create an account. Simply open the game in your browser and start playing."
      },
      {
        value: "objective",
        question: "Do I need to download anything?",
        // Added "this online game"
        answer: "No downloads or installations are required. Street Wheelie runs directly in your web browser, making it fast and convenient to play on any compatible device."
      },
      {
        value: "game-modes",
        question: "What devices can I use to play Street Wheelie?",
        // Added "free online game"
        answer: "The game works best on desktop or laptop computers with a keyboard. While some mobile browsers may support it, the best experience is achieved using a keyboard for precise control."
      },
      {
        value: "power-ups",
        question: "Is Street Wheelie realistic?",
        // Added "free game"
        answer: "Street Wheelie is not a full motorcycle simulation, but it uses realistic physics that mimic real-life balance and wheelie behavior. This makes the game more challenging and engaging than simple arcade-style racing games."
      },
      {
        value: "technical-requirements",
        // Added "unblocked" to question for relevance
        question: "Can I change my bike in the game?",
        // Added "free browser game", "online", "unblocked"
        answer: "Yes, players can choose or switch between multiple motorcycles. Each bike has its own handling style, allowing you to experiment and find the one that best fits your skill level."
      },
      {
        value: "Practice-essential",
        // Added "unblocked" to question for relevance
        question: "How do I improve at Street Wheelie?",
        // Added "free browser game", "online", "unblocked"
        answer: "Practice is essential. Focus on learning the balance point of the bike, use gentle throttle control, and react quickly to changes. Over time, your skills will naturally improve, allowing you to perform longer and more controlled wheelies."
      }
    ]
  }
};
