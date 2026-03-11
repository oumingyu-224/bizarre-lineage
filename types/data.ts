/**
 * 数据类型定义
 * Data Type Definitions
 */

// Stand 数据类型
export interface Stand {
  id: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical';
  tier: 'S+' | 'S' | 'A' | 'B' | 'C' | 'D';
  description: string;
  image?: string;
  abilities?: string[];
  stats?: {
    destructivePower?: string;
    speed?: string;
    range?: string;
    durability?: string;
  };
  evolution?: string;
  obtainMethod?: string;
}

// Code 数据类型
export interface Code {
  code: string;
  reward: string;
  isActive: boolean;
  expiryDate?: string;
  addedDate: string;
}

// Changelog Entry 数据类型
export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  changes: {
    type: 'added' | 'changed' | 'fixed' | 'removed';
    description: string;
  }[];
}
