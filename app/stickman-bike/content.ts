import { content as globalContent } from "@/config/content";

export const StickmanBikeContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Stickman Bike",
    game: {
      url: '/game/stickmanbike/index.html',
      title: "stickmanbike",
      externalUrl: '/game/stickmanbike/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title reflecting the new game concept
    title: "Stickman Bike - Play Free Online!",
    items: [
      {
        // Highlights the core knockout gameplay with rats
        title: "Simple Yet Challenging Controls",
        description: "Stickman Bike offers easy-to-learn controls, making it accessible for players of all ages. However, the game’s physics and stunts system adds complexity, requiring players to refine their skills over time. The balance system and trick mechanics are fun to master, making each level feel rewarding as you improve."
      },
      {
        // Explains its origin and unique theme
        title: "Variety of Tracks and Obstacles",
        description: "Each level presents new challenges, including ramps, jumps, moving platforms, and tight spaces. Some tracks feature unique obstacles like barrels or swinging objects that require quick reflexes and precise timing. The variety of environments keeps the gameplay fresh and exciting as you progress through the game."
      },
      {
        // Highlights a satisfying visual/gameplay element
        title: "Realistic Physics System",
        description: "The physics engine in Stickman Bike makes the game feel real and dynamic. Every action, from accelerating to landing a jump, affects the bike’s behavior. This adds a level of realism and challenge, as players must carefully balance speed and control to perform stunts and stay on the bike."
      },
      {
        // Emphasizes accessibility and core keywords
        title: "Free to Play with No Downloads",
        description: "Stickman Bike is completely free to play directly in your web browser. There are no downloads or installations required, making it easy to jump into the game whenever you want. The game runs smoothly on most modern browsers, providing a quick and convenient gaming experience without the need for extra software."
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines the game type
    title: "What is Stickman Bike?",
    // Description based on the "knockout rat game" info
    description: "Stickman Bike is an exciting and fast-paced bike stunt game where players control a stick figure riding a bicycle across a series of challenging tracks. The objective is simple: perform stunts, overcome obstacles, and reach the finish line without falling off the bike. The game features a combination of physics-based gameplay and fun, dynamic environments that test your skills and timing. Whether you're jumping over ramps, navigating through tight spaces, or avoiding tricky obstacles, Stickman Bike offers a variety of challenges for players of all ages.\n\n" +
      "This game stands out because of its smooth animations, easy-to-learn controls, and intuitive physics system, which make it accessible yet challenging. Players can perform tricks, earn points, and compete for the fastest times while enjoying a variety of environments and bike designs. Stickman Bike is free to play directly in your web browser with no downloads required, making it a convenient option for quick, casual gaming.",
    logo: {
      // Image path unchanged
      src: "/assets/img/android-chrome-512x512.png",
      // Alt text updated for the new game concept and keywords
      alt: "What is Stickman Bike?"
    }
  },
  
  howToPlay: {
    // Title reflecting the knockout gameplay
    title: "How to Play Stickman Bike Online Free: Master the Rat Rumble!",
    // Description focused on knockout mechanics
    description: "Stickman Bike uses simple keyboard controls to navigate the track. Use the Arrow Keys or WASD Keys to move the stickman bike forward, backward, and maintain balance. The Up Arrow or W key is used to accelerate, while the Down Arrow or S key helps to brake and reverse. You will need to use the Left and Right Arrows to lean forward or backward, helping you stay balanced during jumps and stunts. Mastering the balance and control of the bike is crucial for completing the levels successfully.\n\n" +
      "In Stickman Bike, you can perform a variety of tricks and stunts by using the Left and Right Arrow Keys to tilt the bike. Performing stunts like flips, wheelies, and backflips will earn you bonus points and increase your score. To perform these tricks successfully, timing and control are key, as the physics system reacts to every move you make.\n\n" +
      "Each level in Stickman Bike is filled with obstacles, ramps, and tricky paths. Your goal is to ride through these obstacles, overcoming everything from jumps to tight spaces while maintaining your balance. The more stunts and tricks you perform, the higher your score, but if you fall off the bike, you'll have to restart the level. As you progress, the tracks become more challenging, requiring better control, faster reflexes, and more skillful maneuvers.",
    // Image path unchanged - I am keeping the placeholder you had. If you have a more relevant image for a rat knockout game, you'd update this path.
    image: "/assets/stickman-bike/stickman-bike.png",
    // Alt text updated
    imageAlt: "How to Play Stickman Bike Online Free"
  },
  
  faq: {
    // Title updated
    title: "Stickman Bike: Your Questions Answered (Free Online Knockout Game FAQ)",
    items: [
      {
        value: "difficulty",
        question: "Is Stickman Bike free to play?",
        // Answer reflecting the knockout game's nature
        answer: "Yes, Stickman Bike is completely free to play. You can access the game directly in your web browser without needing to download or register anything. Simply open the game, and you’re ready to start!"
      },
      {
        value: "objective", // New relevant question for a knockout game
        question: "Do I need to download anything to play Stickman Bike?",
        answer: "No downloads are required. Stickman Bike runs directly in your browser, so you can start playing instantly without the need for any additional software or plugins."
      },
      {
        value: "technical-requirements",
        question: "Can I perform stunts in Stickman Bike?",
        answer: "Yes! Stickman Bike allows you to perform a variety of tricks and stunts, such as flips, wheelies, and backflips. Use the Left and Right Arrow Keys to tilt the bike and perform these stunts. Each stunt earns you points and adds to your score."
      },
      {
        value: "origin", // New FAQ based on game info
        question: "Is Stickman Bike suitable for all ages?",
        answer: "Yes, Stickman Bike is designed to be fun for players of all ages. Its easy-to-learn controls and progressively challenging tracks make it a great game for both kids and adults. The family-friendly gameplay ensures that everyone can enjoy it."
      },
      {
        value: "key-features-game", // New FAQ
        question: "How do I unlock new tracks or bikes in Stickman Bike?",
        answer: "Stickman Bike offers a variety of levels and tracks that you can unlock as you progress through the game. Some levels may require you to perform certain stunts or reach specific goals before unlocking the next stage. As you complete levels and improve your skills, you’ll unlock more challenging tracks to conquer."
      }
    ]
  }
};

