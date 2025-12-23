import { Monster } from "@/app/types";

// Azure Dreams inspired monster data with power levels
// Power levels range from 1-100, with higher being stronger
export const monsters: Monster[] = [
  // Rank E (Power 1-20)
  { id: "slime", name: "Slime", powerLevel: 5, rank: "E", imageUrl: "/monsters/slime.png", description: "A basic gelatinous creature" },
  { id: "bat", name: "Bat", powerLevel: 8, rank: "E", imageUrl: "/monsters/bat.png", description: "A small flying creature" },
  { id: "rat", name: "Rat", powerLevel: 3, rank: "E", imageUrl: "/monsters/rat.png", description: "A common rodent" },
  { id: "goblin", name: "Goblin", powerLevel: 12, rank: "E", imageUrl: "/monsters/goblin.png", description: "A small humanoid creature" },
  { id: "skeleton", name: "Skeleton", powerLevel: 15, rank: "E", imageUrl: "/monsters/skeleton.png", description: "An undead warrior" },
  
  // Rank D (Power 21-40)
  { id: "orc", name: "Orc", powerLevel: 25, rank: "D", imageUrl: "/monsters/orc.png", description: "A fierce warrior" },
  { id: "wolf", name: "Dire Wolf", powerLevel: 28, rank: "D", imageUrl: "/monsters/wolf.png", description: "A pack hunter" },
  { id: "spider", name: "Giant Spider", powerLevel: 22, rank: "D", imageUrl: "/monsters/spider.png", description: "A venomous arachnid" },
  { id: "zombie", name: "Zombie", powerLevel: 20, rank: "D", imageUrl: "/monsters/zombie.png", description: "A reanimated corpse" },
  { id: "ghost", name: "Ghost", powerLevel: 32, rank: "D", imageUrl: "/monsters/ghost.png", description: "An ethereal spirit" },
  { id: "kobold", name: "Kobold", powerLevel: 18, rank: "D", imageUrl: "/monsters/kobold.png", description: "A small dragon-like creature" },
  
  // Rank C (Power 41-60)
  { id: "ogre", name: "Ogre", powerLevel: 45, rank: "C", imageUrl: "/monsters/ogre.png", description: "A massive brute" },
  { id: "troll", name: "Troll", powerLevel: 48, rank: "C", imageUrl: "/monsters/troll.png", description: "A regenerating beast" },
  { id: "wraith", name: "Wraith", powerLevel: 52, rank: "C", imageUrl: "/monsters/wraith.png", description: "A powerful undead" },
  { id: "golem", name: "Stone Golem", powerLevel: 55, rank: "C", imageUrl: "/monsters/golem.png", description: "A construct of stone" },
  { id: "wyvern", name: "Wyvern", powerLevel: 50, rank: "C", imageUrl: "/monsters/wyvern.png", description: "A two-legged dragon" },
  { id: "minotaur", name: "Minotaur", powerLevel: 47, rank: "C", imageUrl: "/monsters/minotaur.png", description: "A bull-headed warrior" },
  
  // Rank B (Power 61-80)
  { id: "demon", name: "Demon", powerLevel: 68, rank: "B", imageUrl: "/monsters/demon.png", description: "A creature from hell" },
  { id: "dragon", name: "Dragon", powerLevel: 75, rank: "B", imageUrl: "/monsters/dragon.png", description: "A legendary fire-breathing beast" },
  { id: "lich", name: "Lich", powerLevel: 72, rank: "B", imageUrl: "/monsters/lich.png", description: "An undead sorcerer" },
  { id: "behemoth", name: "Behemoth", powerLevel: 70, rank: "B", imageUrl: "/monsters/behemoth.png", description: "A massive creature" },
  { id: "phoenix", name: "Phoenix", powerLevel: 73, rank: "B", imageUrl: "/monsters/phoenix.png", description: "A fire bird of legend" },
  { id: "kraken", name: "Kraken", powerLevel: 71, rank: "B", imageUrl: "/monsters/kraken.png", description: "A sea monster" },
  
  // Rank A (Power 81-95)
  { id: "archdemon", name: "Archdemon", powerLevel: 88, rank: "A", imageUrl: "/monsters/archdemon.png", description: "A powerful demon lord" },
  { id: "ancient-dragon", name: "Ancient Dragon", powerLevel: 92, rank: "A", imageUrl: "/monsters/ancient-dragon.png", description: "An ancient wyrm" },
  { id: "death-knight", name: "Death Knight", powerLevel: 85, rank: "A", imageUrl: "/monsters/death-knight.png", description: "A fallen paladin" },
  { id: "titan", name: "Titan", powerLevel: 90, rank: "A", imageUrl: "/monsters/titan.png", description: "A god-like being" },
  { id: "leviathan", name: "Leviathan", powerLevel: 87, rank: "A", imageUrl: "/monsters/leviathan.png", description: "A sea serpent of legend" },
  
  // Rank S (Power 96-100)
  { id: "bahamut", name: "Bahamut", powerLevel: 98, rank: "S", imageUrl: "/monsters/bahamut.png", description: "The king of dragons" },
  { id: "tiamat", name: "Tiamat", powerLevel: 99, rank: "S", imageUrl: "/monsters/tiamat.png", description: "The queen of dragons" },
  { id: "god", name: "God of Destruction", powerLevel: 100, rank: "S", imageUrl: "/monsters/god.png", description: "A divine entity" },
];

// Helper function to get a random monster
export function getRandomMonster(): Monster {
  const randomIndex = Math.floor(Math.random() * monsters.length);
  return monsters[randomIndex]!;
}

// Helper function to get monsters by rank
export function getMonstersByRank(rank: Monster["rank"]): Monster[] {
  return monsters.filter((monster) => monster.rank === rank);
}

