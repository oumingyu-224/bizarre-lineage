/**
 * Stands 数据
 * Stands Database
 */

import { Stand } from '@/types/data';

export const standsData: Stand[] = [
  // S+ Tier Stands
  {
    id: 'white-snake',
    name: 'White Snake',
    rarity: 'Legendary',
    tier: 'S+',
    description: 'One of the strongest all-around Stands in the current meta, excelling equally in PvP and PvE. Can evolve into C-Moon and Made In Heaven.',
    abilities: ['Disc Steal', 'Acid Spit', 'Illusion', 'Stand Disc'],
    stats: {
      destructivePower: 'A',
      speed: 'B',
      range: 'C',
      durability: 'A',
    },
    evolution: 'C-Moon → Made In Heaven',
    obtainMethod: 'Stand Arrow (Legendary rarity)',
  },
  {
    id: 'made-in-heaven',
    name: 'Made In Heaven',
    rarity: 'Mythical',
    tier: 'S+',
    description: 'Final evolution of White Snake. Incredible speed and time acceleration abilities make it dominant in both PvP and PvE.',
    abilities: ['Time Acceleration', 'Speed Blitz', 'Knife Barrage', 'Universe Reset'],
    stats: {
      destructivePower: 'B',
      speed: 'S',
      range: 'C',
      durability: 'B',
    },
    evolution: 'Final form of White Snake',
    obtainMethod: 'Evolve from C-Moon',
  },
  {
    id: 'c-moon',
    name: 'C-Moon',
    rarity: 'Mythical',
    tier: 'S+',
    description: 'Evolution of White Snake with gravity manipulation powers. Strong in both PvP and PvE, can evolve further into Made In Heaven.',
    abilities: ['Gravity Shift', 'Surface Inversion', 'Uppercut', 'Gravity Punch'],
    stats: {
      destructivePower: 'A',
      speed: 'A',
      range: 'C',
      durability: 'A',
    },
    evolution: 'Made In Heaven',
    obtainMethod: 'Evolve from White Snake',
  },
  {
    id: 'weather-report',
    name: 'Weather Report',
    rarity: 'Legendary',
    tier: 'S+',
    description: 'Best early-game Stand with powerful weather manipulation abilities. Excellent crowd control and damage output.',
    abilities: ['Weather Control', 'Lightning Strike', 'Heavy Weather', 'Poison Frog Rain'],
    stats: {
      destructivePower: 'A',
      speed: 'B',
      range: 'A',
      durability: 'B',
    },
    obtainMethod: 'Stand Arrow (Legendary rarity)',
  },

  // S Tier Stands
  {
    id: 'star-platinum',
    name: 'Star Platinum',
    rarity: 'Legendary',
    tier: 'S',
    description: 'Iconic Stand with incredible precision and speed. Can stop time with Star Platinum: The World evolution.',
    abilities: ['Ora Barrage', 'Star Finger', 'Time Stop', 'Inhale'],
    stats: {
      destructivePower: 'A',
      speed: 'A',
      range: 'C',
      durability: 'A',
    },
    evolution: 'Star Platinum: The World',
    obtainMethod: 'Stand Arrow (Legendary rarity)',
  },
  {
    id: 'the-world',
    name: 'The World',
    rarity: 'Legendary',
    tier: 'S',
    description: 'Dio\'s Stand with time stop abilities. Powerful in both PvP and PvE with high damage output.',
    abilities: ['Muda Barrage', 'Time Stop', 'Knife Throw', 'Road Roller'],
    stats: {
      destructivePower: 'A',
      speed: 'A',
      range: 'C',
      durability: 'A',
    },
    obtainMethod: 'Stand Arrow (Legendary rarity)',
  },
  {
    id: 'king-crimson',
    name: 'King Crimson',
    rarity: 'Legendary',
    tier: 'S',
    description: 'Time erasure Stand with high burst damage. Excellent for PvP with its time skip ability.',
    abilities: ['Time Erase', 'Epitaph', 'Chop', 'Impale'],
    stats: {
      destructivePower: 'A',
      speed: 'A',
      range: 'D',
      durability: 'B',
    },
    obtainMethod: 'Stand Arrow (Legendary rarity)',
  },

  // A Tier Stands
  {
    id: 'crazy-diamond',
    name: 'Crazy Diamond',
    rarity: 'Rare',
    tier: 'A',
    description: 'Josuke\'s Stand with restoration abilities. Great for support and sustained combat.',
    abilities: ['Dora Barrage', 'Restoration', 'Bearing Shot', 'Rock Trap'],
    stats: {
      destructivePower: 'A',
      speed: 'A',
      range: 'D',
      durability: 'B',
    },
    obtainMethod: 'Stand Arrow (Rare rarity)',
  },
  {
    id: 'gold-experience',
    name: 'Gold Experience',
    rarity: 'Legendary',
    tier: 'A',
    description: 'Giorno\'s Stand with life-giving abilities. Can evolve into Gold Experience Requiem.',
    abilities: ['Muda Rush', 'Life Shot', 'Heal', 'Life Giver'],
    stats: {
      destructivePower: 'C',
      speed: 'A',
      range: 'C',
      durability: 'D',
    },
    evolution: 'Gold Experience Requiem',
    obtainMethod: 'Stand Arrow (Legendary rarity)',
  },
  {
    id: 'killer-queen',
    name: 'Killer Queen',
    rarity: 'Legendary',
    tier: 'A',
    description: 'Kira\'s Stand with explosive abilities. High burst damage and unique bomb mechanics.',
    abilities: ['Primary Bomb', 'Sheer Heart Attack', 'Coin Bomb', 'Bites the Dust'],
    stats: {
      destructivePower: 'A',
      speed: 'B',
      range: 'D',
      durability: 'B',
    },
    obtainMethod: 'Stand Arrow (Legendary rarity)',
  },
  {
    id: 'magicians-red',
    name: "Magician's Red",
    rarity: 'Rare',
    tier: 'A',
    description: 'Avdol\'s fire-based Stand. Excellent AoE damage and crowd control.',
    abilities: ['Red Bind', 'Crossfire Hurricane', 'Flame Detector', 'Crimson Blaze'],
    stats: {
      destructivePower: 'B',
      speed: 'B',
      range: 'C',
      durability: 'B',
    },
    obtainMethod: 'Stand Arrow (Rare rarity)',
  },
  {
    id: 'anubis',
    name: 'Anubis',
    rarity: 'Rare',
    tier: 'A',
    description: 'Sword-based Stand that learns from combat. Gets stronger as you fight.',
    abilities: ['Sword Slash', 'Memory', 'Possession', 'Blade Rush'],
    stats: {
      destructivePower: 'B',
      speed: 'B',
      range: 'D',
      durability: 'B',
    },
    obtainMethod: 'Stand Arrow (Rare rarity)',
  },
  {
    id: 'the-world-au',
    name: 'The World AU',
    rarity: 'Legendary',
    tier: 'A',
    description: 'Alternate universe version of The World. Similar time stop abilities with different moveset.',
    abilities: ['Muda Barrage', 'Time Stop', 'Knife Barrage', 'Timestop Movement'],
    stats: {
      destructivePower: 'A',
      speed: 'A',
      range: 'C',
      durability: 'A',
    },
    obtainMethod: 'Stand Arrow (Legendary rarity)',
  },

  // B Tier Stands
  {
    id: 'silver-chariot',
    name: 'Silver Chariot',
    rarity: 'Uncommon',
    tier: 'B',
    description: 'Polnareff\'s rapier-wielding Stand. Fast attacks with armor removal mechanic.',
    abilities: ['Rapier Rush', 'Armor Off', 'Million Pricks', 'Shooting Sword'],
    stats: {
      destructivePower: 'C',
      speed: 'A',
      range: 'C',
      durability: 'C',
    },
    obtainMethod: 'Stand Arrow (Uncommon rarity)',
  },
  {
    id: 'hierophant-green',
    name: 'Hierophant Green',
    rarity: 'Uncommon',
    tier: 'B',
    description: 'Kakyoin\'s Stand with long-range emerald attacks. Good for keeping distance.',
    abilities: ['Emerald Splash', 'Barrier', 'Possession', 'Tentacle Grab'],
    stats: {
      destructivePower: 'C',
      speed: 'B',
      range: 'A',
      durability: 'C',
    },
    obtainMethod: 'Stand Arrow (Uncommon rarity)',
  },
  {
    id: 'sticky-fingers',
    name: 'Sticky Fingers',
    rarity: 'Rare',
    tier: 'B',
    description: 'Bucciarati\'s Stand with zipper creation abilities. Good mobility and utility.',
    abilities: ['Ari Barrage', 'Zipper Glide', 'Extend Arm', 'Zipper Trap'],
    stats: {
      destructivePower: 'A',
      speed: 'A',
      range: 'D',
      durability: 'C',
    },
    obtainMethod: 'Stand Arrow (Rare rarity)',
  },

  // C Tier Stands
  {
    id: 'hermit-purple',
    name: 'Hermit Purple',
    rarity: 'Common',
    tier: 'C',
    description: 'Joseph\'s Stand with vine-based abilities. Utility-focused with divination powers.',
    abilities: ['Vine Slap', 'Grapple', 'Spirit Photo', 'Hamon Infusion'],
    stats: {
      destructivePower: 'D',
      speed: 'C',
      range: 'B',
      durability: 'D',
    },
    obtainMethod: 'Stand Arrow (Common rarity)',
  },
  {
    id: 'the-hand',
    name: 'The Hand',
    rarity: 'Rare',
    tier: 'C',
    description: 'Okuyasu\'s Stand with space erasure abilities. High risk, high reward playstyle.',
    abilities: ['Scrape', 'Erasure', 'Swipe', 'Pull'],
    stats: {
      destructivePower: 'B',
      speed: 'C',
      range: 'D',
      durability: 'C',
    },
    obtainMethod: 'Stand Arrow (Rare rarity)',
  },

  // D Tier Stands
  {
    id: 'echoes-act-3',
    name: 'Echoes ACT 3',
    rarity: 'Uncommon',
    tier: 'D',
    description: 'Koichi\'s Stand with gravity manipulation. Limited range but unique abilities.',
    abilities: ['3 Freeze', 'Punch Barrage', 'Gravity Increase', 'S-H-I-T'],
    stats: {
      destructivePower: 'B',
      speed: 'C',
      range: 'D',
      durability: 'C',
    },
    obtainMethod: 'Stand Arrow (Uncommon rarity)',
  },
  {
    id: 'beach-boy',
    name: 'Beach Boy',
    rarity: 'Common',
    tier: 'D',
    description: 'Fishing rod Stand with hook abilities. Niche use cases.',
    abilities: ['Hook', 'Reel In', 'Phasing Line', 'Heart Hook'],
    stats: {
      destructivePower: 'C',
      speed: 'D',
      range: 'B',
      durability: 'D',
    },
    obtainMethod: 'Stand Arrow (Common rarity)',
  },
];

export function getStandsByRarity(rarity: Stand['rarity']): Stand[] {
  return standsData.filter(stand => stand.rarity === rarity);
}

export function getStandsByTier(tier: Stand['tier']): Stand[] {
  return standsData.filter(stand => stand.tier === tier);
}

export function getStandById(id: string): Stand | undefined {
  return standsData.find(stand => stand.id === id);
}

export function getStandsByRarityCategory(rarity: string): Stand[] {
  return standsData.filter(stand => stand.rarity === rarity);
}
