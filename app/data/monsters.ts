import { Monster } from "@/app/types";

// Azure Dreams (PlayStation - Konami, USA Version) monster data
// Official monster list from the game (50 monsters)
// Reference: https://azure-dreams.fandom.com/wiki/Monsters_List_(PSX)
// Power levels range from 1-100, with higher being stronger
// Organized by rank (E through S)
export const monsters: Monster[] = [
  // Rank E (Power 1-20) - Basic monsters from early floors
  { id: "lazy-frog", name: "Lazy Frog", powerLevel: 1, rank: "E", imageUrl: "/monsters/lazy-frog.svg", description: "A new species of water-element frog discovered in Monsbaiya, traded as an ingredient for magic - the weakest monster of all" },
  { id: "pulunpa", name: "Pulunpa", powerLevel: 3, rank: "E", imageUrl: "/monsters/pulunpa.svg", description: "The weakest and most timid kind of monster. It used to live on prairies and in deserts a long time ago, but now lives in a city since it is such easy prey for other monsters. One can be sometimes seen in a back alley" },
  { id: "snowman", name: "Snowman", powerLevel: 10, rank: "E", imageUrl: "/monsters/snowman.svg", description: "A water-element monster that lives in snowy mountains" },
  { id: "block", name: "Block", powerLevel: 12, rank: "E", imageUrl: "/monsters/block.svg", description: "A wind-element magical monster with a body made of metal, friendly to humans" },
  { id: "balloon", name: "Balloon", powerLevel: 6, rank: "E", imageUrl: "/monsters/balloon.svg", description: "A fire-element monster that floats in the air, its exposed lung enables it to elevate" },
  { id: "unicorn", name: "Unicorn", powerLevel: 14, rank: "E", imageUrl: "/monsters/unicorn.svg", description: "A wind-element monster with horizontal stripes, spends childhood in nests on tall trees" },
  
  // Rank D (Power 21-40) - Stronger early-game monsters
  { id: "flame", name: "Flame", powerLevel: 22, rank: "D", imageUrl: "/monsters/flame.svg", description: "A fire-element spirit born from sparks, has a knight-like appearance representing loyalty" },
  { id: "troll", name: "Troll", powerLevel: 28, rank: "D", imageUrl: "/monsters/troll.svg", description: "A fire-element monster curious about everything, quick to learn how to use human tools" },
  { id: "mummy", name: "Mummy", powerLevel: 30, rank: "D", imageUrl: "/monsters/mummy.svg", description: "A water-element ancient wrapped corpse" },
  { id: "metal", name: "Metal", powerLevel: 32, rank: "D", imageUrl: "/monsters/metal.svg", description: "A wind-element aggressive Block monster, tempered in battles with a guarder body like a sharpened blade" },
  { id: "takopoo", name: "Takopoo", powerLevel: 25, rank: "D", imageUrl: "/monsters/takopoo.svg", description: "A water-element octopus seen in tidal pools, its ink comes out as a ball rather than liquid" },
  { id: "mushrom", name: "Mushrom", powerLevel: 20, rank: "D", imageUrl: "/monsters/mushrom.svg", description: "A water-element stationary monster clinging onto decayed tree trunks with radiating foot-shaped roots" },
  { id: "arachne", name: "Arachne", powerLevel: 35, rank: "D", imageUrl: "/monsters/arachne.svg", description: "A spider-like monster with a mysterious aura" },
  
  // Rank C (Power 41-60) - Mid-tier monsters
  { id: "kid", name: "Kid", powerLevel: 42, rank: "C", imageUrl: "/monsters/kid.svg", description: "A fire-element infant dragon, word 'KID' in Monsbaiya Region means an infant dragon" },
  { id: "blume", name: "Blume", powerLevel: 45, rank: "C", imageUrl: "/monsters/blume.svg", description: "A water-element monster with brainwashing abilities" },
  { id: "cyclone", name: "Cyclone", powerLevel: 48, rank: "C", imageUrl: "/monsters/cyclone.svg", description: "A wind-element monster with a large eye, anyone who meets its eyes cannot swallow food" },
  { id: "ogre", name: "Ogre", powerLevel: 50, rank: "C", imageUrl: "/monsters/ogre.svg", description: "A water-element massive brute" },
  { id: "griffon", name: "Griffon", powerLevel: 52, rank: "C", imageUrl: "/monsters/griffon.svg", description: "A fire-element monster that lives in rocky mountains, dives and attacks with sharp claws" },
  { id: "univern", name: "Univern", powerLevel: 54, rank: "C", imageUrl: "/monsters/univern.svg", description: "A wind-element grown Unicorn, its wings are solid enough to support its body weight and can fly freely" },
  { id: "saber", name: "Saber", powerLevel: 47, rank: "C", imageUrl: "/monsters/saber.svg", description: "A water-element grown up Snowman, named for its long sword-like canines" },
  { id: "noise", name: "Noise", powerLevel: 46, rank: "C", imageUrl: "/monsters/noise.svg", description: "A wind-element music-loving cheerful monster, the sound of its flute can block magic of veteran magicians" },
  { id: "ashra", name: "Ashra", powerLevel: 56, rank: "C", imageUrl: "/monsters/ashra.svg", description: "A fire-element monster known for its strength" },
  
  // Rank B (Power 61-80) - Strong monsters
  { id: "nyuel", name: "Nyuel", powerLevel: 65, rank: "B", imageUrl: "/monsters/nyuel.svg", description: "A powerful water-element creature" },
  { id: "zu", name: "Zu", powerLevel: 68, rank: "B", imageUrl: "/monsters/zu.svg", description: "A wind-element monster like a mix of lion and bird, threatens enemies with loud barking that makes air tremble" },
  { id: "glacier", name: "Glacier", powerLevel: 70, rank: "B", imageUrl: "/monsters/glacier.svg", description: "A powerful water-element ice monster" },
  { id: "dragon", name: "Dragon", powerLevel: 75, rank: "B", imageUrl: "/monsters/dragon.svg", description: "A fire-element monster known as 'King of the Monsters', lives deep in caves with intensely hot breath and hard scales" },
  { id: "ifrit", name: "Ifrit", powerLevel: 73, rank: "B", imageUrl: "/monsters/ifrit.svg", description: "A fire-element malevolent deity that rules fire, highly loyal and absolutely obedient to its master" },
  { id: "gargoyle", name: "Gargoyle", powerLevel: 72, rank: "B", imageUrl: "/monsters/gargoyle.svg", description: "A water-element stone creature" },
  { id: "giant", name: "Giant", powerLevel: 74, rank: "B", imageUrl: "/monsters/giant.svg", description: "A massive water-element creature" },
  { id: "grineut", name: "Grineut", powerLevel: 69, rank: "B", imageUrl: "/monsters/grineut.svg", description: "A fire-element transformed Griffon that has lived with humans, wings metamorphosed into arms but strength remains strong" },
  { id: "battnel", name: "Battnel", powerLevel: 67, rank: "B", imageUrl: "/monsters/battnel.svg", description: "A water-element monster, a Nyuel raised for battles, showcasing superior adaptability" },
  
  // Rank A (Power 81-95) - Very strong monsters
  { id: "barong", name: "Barong", powerLevel: 82, rank: "A", imageUrl: "/monsters/barong.svg", description: "A fire-element strange monster that consumes any substance and transforms it into new substances" },
  { id: "naplass", name: "Naplass", powerLevel: 84, rank: "A", imageUrl: "/monsters/naplass.svg", description: "A fire-element monster that loves to nap, very sensitive to noise and will attack angrily if disturbed" },
  { id: "killer", name: "Killer", powerLevel: 86, rank: "A", imageUrl: "/monsters/killer.svg", description: "A fire-element monster with giant axe-like humps on each arm, can smash rocks with awesome destructive power" },
  { id: "tyrant", name: "Tyrant", powerLevel: 88, rank: "A", imageUrl: "/monsters/tyrant.svg", description: "A fire-element violent monster also known as 'Desert Ruffian', extremely greedy and quick to jump to any feed" },
  { id: "volcano", name: "Volcano", powerLevel: 85, rank: "A", imageUrl: "/monsters/volcano.svg", description: "A fire-element monster that lives on volcanoes in groups, favors lava and has a violent temper" },
  { id: "undine", name: "Undine", powerLevel: 87, rank: "A", imageUrl: "/monsters/undine.svg", description: "A powerful water-element spirit" },
  { id: "death", name: "Death", powerLevel: 90, rank: "A", imageUrl: "/monsters/death.svg", description: "A wind-element adult Clown, its cruelty does not change and it is feared by travelers" },
  { id: "clown", name: "Clown", powerLevel: 83, rank: "A", imageUrl: "/monsters/clown.svg", description: "A wind-element monster that lives in windy places, cuts off the neck of prey with a large sickle, called 'Devil of the Wind'" },
  { id: "dreamin", name: "Dreamin", powerLevel: 81, rank: "A", imageUrl: "/monsters/dreamin.svg", description: "A wind-element monster that used to be a devil giving nightmares, mainly nocturnal and active in darkness" },
  { id: "picket", name: "Picket", powerLevel: 89, rank: "A", imageUrl: "/monsters/picket.svg", description: "A wind-element monster that loves to steal, hides in bushes and can steal belongings" },
  { id: "stealth", name: "Stealth", powerLevel: 91, rank: "A", imageUrl: "/monsters/stealth.svg", description: "A wind-element monster with a hard shell and powerful pair of scissors, moves by drilling holes underground" },
  { id: "soilclaw", name: "Soilclaw", powerLevel: 92, rank: "A", imageUrl: "/monsters/soilclaw.svg", description: "A wind-element subfamily of Stealth, eats garbage in soil and converts it into energy, used in vacuum machines" },
  { id: "maliling", name: "Maliling", powerLevel: 93, rank: "A", imageUrl: "/monsters/maliling.svg", description: "A wind-element quiet monster that likes to change into a ball and roll around, generates electricity from rolling" },
  
  // Rank S (Power 96-100) - Legendary monsters
  { id: "weadog", name: "Weadog", powerLevel: 94, rank: "S", imageUrl: "/monsters/weadog.svg", description: "A fire-element monster that has been protecting the Monster Tower since antiquity, skilled in taming other monsters" },
  { id: "maximum", name: "Maximum", powerLevel: 96, rank: "S", imageUrl: "/monsters/maximum.svg", description: "A fire-element monster born in the Monster Tower, the strongest of a completely new species, lives near the top floor" },
  { id: "golem", name: "Golem", powerLevel: 97, rank: "S", imageUrl: "/monsters/golem.svg", description: "A wind-element magical life form created by a magician, has been protecting the Monster Tower since ancient times" },
  { id: "garuda", name: "Garuda", powerLevel: 98, rank: "S", imageUrl: "/monsters/garuda.svg", description: "A wind-element monster that has been protecting the Monster Tower since ancient times, body is half machine" },
  { id: "kewne", name: "Kewne", powerLevel: 99, rank: "S", imageUrl: "/monsters/kewne.svg", description: "A fire-element dragon popular several hundred years ago for personal protection, became extinct due to poor reproductive ability" },
  { id: "hikewne", name: "HiKewne", powerLevel: 100, rank: "S", imageUrl: "/monsters/hikewne.svg", description: "The Ultimate Egg - a Kewne egg laid on the highest floor of the Monster Tower where magical power is strongest, capable of ruling the world" },
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
