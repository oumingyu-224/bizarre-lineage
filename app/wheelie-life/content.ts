import { content as globalContent } from "@/config/content";

export const wheelieLifeContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Wheelie Life",
    game: {
      url: '/game/wheelielife/index.html', // 嵌入链接，后续可能需要调整
      title: "wheelie-life",
      externalUrl: '/game/wheelielife/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title reflecting the game's unique theme and keywords
    title: "Wheelie Life: Online Game Features - Play Free!",
    items: [
      {
        // Highlights the core clicker mechanic and meme theme
        title: "Realistic Physics Engine",
        description: "Wheelie Life features a physics-driven engine that accurately simulates the movement of a motorcycle. Every small change in throttle, braking, and tilt impacts the bike’s stability, making the gameplay feel authentic and rewarding. The game’s responsive controls allow players to make precise adjustments to maintain balance and perform impressive wheelies."
      },
      {
        // Focuses on the character collection aspect
        title: "Multiple Motorcycles to Unlock",
        description: "The game offers a variety of motorcycles with unique attributes. Some bikes are better suited for beginners, while others provide more power and speed for advanced players. As you progress, you can unlock new bikes, each with different performance characteristics. Choosing the right motorcycle for your skill level adds depth to the game and encourages players to experiment with different setups."
      },
      {
        // Describes the addictive gameplay loop
        title: "Diverse Environments and Tracks",
        description: "Wheelie Life features a variety of environments, including city streets, highways, and open fields. Each environment presents different challenges, such as obstacles, ramps, and traffic, which require players to adapt their riding style. As you advance through the levels, the difficulty increases, adding new obstacles and making the game more challenging."
      },
      {
        // Highlights accessibility and play style
        title: "Skill-Based Progression and Achievements",
        description: "Wheelie Life is all about improving your skills over time. As you practice and perform longer wheelies, you’ll unlock new achievements and progress through different levels. The game encourages players to challenge themselves and compete for the longest wheelie and highest score. With each successful wheelie and trick, you gain points that can unlock new bikes, environments, and abilities."
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines the game and includes keywords
    title: "What is Wheelie Life?",
    // Description based on the provided info, integrating keywords
    description: "Wheelie Life is an exciting and free-to-play motorcycle stunt game where players focus on mastering the art of wheelies. The goal is to keep your motorcycle balanced on one wheel for as long as possible while navigating a variety of roads and environments. Whether you’re a beginner or an advanced player, the game’s realistic physics system allows you to experience the thrill of motorcycle stunts.\n\n" +
      "Unlike traditional racing games, Wheelie Life emphasizes skill, timing, and balance. It’s all about controlling the throttle and brake to maintain the bike's balance. You can also perform different stunts, unlock new motorcycles, and explore different urban or scenic environments as you progress through the game. The game's easy-to-learn mechanics and challenging levels keep players engaged and provide a satisfying experience for both casual players and stunt enthusiasts.",
    logo: {
      // Placeholder - update if you have a specific logo for Brainrot Clicker
      src: "/assets/wheelie-life/wheelie-life.png",
      // Alt text updated for the new game concept and keywords
      alt: "Wheelie Life - Free Online Unblocked Meme Clicker Game Logo"
    }
  },
  
  howToPlay: {
    // Title reflecting the game and keywords
    title: "How to Play Wheelie Life",
    // Description focused on clicker mechanics and progression
    description: "Wheelie Life uses simple and intuitive keyboard controls. To begin, use the W key to accelerate and S to brake. The most important controls are the Left Arrow and Right Arrow to tilt the bike forward or backward, helping you balance. To perform a wheelie, you’ll need to press the W key to lift the front wheel while maintaining control of the bike’s tilt. When you find the right balance, you can hold the wheelie longer, making your ride smoother and more impressive.\n\n" +
      "Balancing the bike is the core mechanic of Wheelie Life. As you accelerate, the front wheel will lift off the ground. The key is to use subtle inputs to keep the bike upright. If the bike tilts too far forward, you risk flipping over, and if it tilts too far back, the wheelie will end. With practice, you will learn the perfect timing and precision needed to extend your wheelie.\n\n" +
      "As you get better at controlling your bike, you can start performing advanced stunts. Use the E key to perform special tricks like handstands and jumps. The game rewards you with points for every successful stunt and long wheelie, which can help you unlock more motorcycles and environments. Each new bike has different stats, such as speed, torque, and handling, giving you more options to experiment with and improve your skills.",
    // Placeholder - update if you have a specific gameplay image for Brainrot Clicker
    image: "/assets/wheelie-life/wheelie-life.jpg",
    // Alt text updated
    imageAlt: "How to Play Wheelie Life"
  },
  
  faq: {
    // Title updated
    title: "Wheelie Life: Your Questions Answered (Free Online Meme Game FAQ)",
    items: [
      {
        value: "what-is-wheelie-life", // More specific value
        question: "Is Wheelie Life free to play?",
        answer: "Yes, Wheelie Life is completely free to play. There are no hidden costs, subscriptions, or in-game purchases. You can enjoy the game directly in your browser without any downloads or installations."
      },
      {
        value: "how-to-play-online",
        question: "Do I need to download anything to play?",
        answer: "No, Wheelie Life is a browser-based game, so you don’t need to download anything. Simply open the game in your browser, and you can start playing immediately."
      },
      {
        value: "main-objective-game",
        question: "What devices can I use to play Wheelie Life?",
        answer: "Wheelie Life works best on desktop or laptop computers with a keyboard. While it can be played on mobile devices, the best experience is on a desktop for precise control."
      },
      {
        value: "are-io-games-similar", // Connecting to io games keyword
        question: "Can I perform stunts in Wheelie Life?",
        answer: "Yes! Wheelie Life allows players to perform a variety of stunts, including handstands, flips, and other tricks. The E key is used to trigger stunt actions, and successful stunts earn you additional points and unlock rewards."
      },
      {
        value: "mobile-play",
        question: "Is Wheelie Life suitable for beginners?",
        answer: "Absolutely! The game is easy to start, and players can quickly get the hang of balancing the bike and performing basic wheelies. As you progress, the difficulty increases, providing more challenges for experienced players."
      },
      {
        value: "what-is-WheelieLife-meme",
        question: "How can I improve my skills in Wheelie Life?",
        answer: "Improvement comes with practice. Focus on mastering the balance system, learning how to control your throttle and brake inputs precisely, and performing stunts. As you practice, you’ll improve your timing, reflexes, and ability to perform longer and more difficult wheelies."
      }
    ]
  }
};
