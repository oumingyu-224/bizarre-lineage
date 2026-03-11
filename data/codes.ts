/**
 * Codes 数据
 * Codes Database
 */

import { Code } from '@/types/data';

export const codesData: Code[] = [
  {
    code: '30kLikes',
    reward: '1 Stand Stat Point Essence',
    isActive: true,
    addedDate: '2026-03-01',
  },
  {
    code: '100kLikes',
    reward: '1 Stand Stat Point Essence + 1 Rare Chest',
    isActive: true,
    addedDate: '2026-03-05',
  },
  {
    code: 'shutdownwoops',
    reward: 'Free Rewards',
    isActive: true,
    addedDate: '2026-03-08',
  },
  {
    code: '1week',
    reward: 'Free Rewards',
    isActive: true,
    addedDate: '2026-03-04',
  },
  {
    code: 'RELEASE',
    reward: '1 Stand Arrow',
    isActive: false,
    addedDate: '2026-02-28',
    expiryDate: '2026-03-10',
  },
  // More codes will be added as the developer releases them at milestone achievements
  // Next expected code: 200kLikes (when game reaches 200k likes)
];

export function getActiveCodes(): Code[] {
  return codesData.filter(code => code.isActive);
}

export function getExpiredCodes(): Code[] {
  return codesData.filter(code => !code.isActive);
}
