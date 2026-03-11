export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "soFlo-wheelie-life": {
    id: "soFlo-wheelie-life",
    title: "SoFlo Wheelie Life",
    description: "Experience motorcycle stunts on the streets of South Florida in SoFlo Wheelie Life, where you challenge yourself to wheelie.Enjoy the thrill of balance!",
    image: "/assets/soflowheelielife-howto.jpg",
    url: "/",
  },
  "street-wheelie": {
    id: "street-wheelie",
    title: "Street Wheelie",
    description: "Play Street Wheelie online for free. Perform realistic motorcycle wheelies, master balance, unlock bikes, and enjoy smooth street-style stunt action in your browser.",
    image: "/assets/street-wheelie/street-wheelie.png",
    url: "/street-wheelie",
  },
  "stickman-bike": {
    id: "stickman-bike",
    title: "Stickman Bike",
    description: "A hilarious free online knockout game! Control a goofy rat and battle it out in a chaotic arena to be the last rat standing.",
    image: "/assets/stickman-bike/stickman-bike.png",
    url: "/stickman-bike",
  },
  "wheelie-life": {
    id: "wheelie-life",
    title: "Wheelie Life",
    description: "Dive into Italian Brainrot Clicker! Tap through meme madness in this addictive online clicker game. Instant play, no download!",
    image: "/assets/wheelie-life/wheelie-life.jpg",
    url: "/wheelie-life",
  },
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



