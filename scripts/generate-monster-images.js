const fs = require('fs');
const path = require('path');

// All 50 Azure Dreams PlayStation monsters with rank colors
const monsters = [
  // Rank E
  { id: "lazy-frog", name: "Lazy Frog", rank: "E", color: "#6b7280" },
  { id: "pulunpa", name: "Pulunpa", rank: "E", color: "#6b7280" },
  { id: "snowman", name: "Snowman", rank: "E", color: "#6b7280" },
  { id: "block", name: "Block", rank: "E", color: "#6b7280" },
  { id: "balloon", name: "Balloon", rank: "E", color: "#6b7280" },
  { id: "unicorn", name: "Unicorn", rank: "E", color: "#6b7280" },
  // Rank D
  { id: "flame", name: "Flame", rank: "D", color: "#10b981" },
  { id: "troll", name: "Troll", rank: "D", color: "#10b981" },
  { id: "mummy", name: "Mummy", rank: "D", color: "#10b981" },
  { id: "metal", name: "Metal", rank: "D", color: "#10b981" },
  { id: "takopoo", name: "Takopoo", rank: "D", color: "#10b981" },
  { id: "mushrom", name: "Mushrom", rank: "D", color: "#10b981" },
  { id: "arachne", name: "Arachne", rank: "D", color: "#10b981" },
  // Rank C
  { id: "kid", name: "Kid", rank: "C", color: "#3b82f6" },
  { id: "blume", name: "Blume", rank: "C", color: "#3b82f6" },
  { id: "cyclone", name: "Cyclone", rank: "C", color: "#3b82f6" },
  { id: "ogre", name: "Ogre", rank: "C", color: "#3b82f6" },
  { id: "griffon", name: "Griffon", rank: "C", color: "#3b82f6" },
  { id: "univern", name: "Univern", rank: "C", color: "#3b82f6" },
  { id: "saber", name: "Saber", rank: "C", color: "#3b82f6" },
  { id: "noise", name: "Noise", rank: "C", color: "#3b82f6" },
  { id: "ashra", name: "Ashra", rank: "C", color: "#3b82f6" },
  // Rank B
  { id: "nyuel", name: "Nyuel", rank: "B", color: "#a855f7" },
  { id: "zu", name: "Zu", rank: "B", color: "#a855f7" },
  { id: "glacier", name: "Glacier", rank: "B", color: "#a855f7" },
  { id: "dragon", name: "Dragon", rank: "B", color: "#a855f7" },
  { id: "ifrit", name: "Ifrit", rank: "B", color: "#a855f7" },
  { id: "gargoyle", name: "Gargoyle", rank: "B", color: "#a855f7" },
  { id: "giant", name: "Giant", rank: "B", color: "#a855f7" },
  { id: "grineut", name: "Grineut", rank: "B", color: "#a855f7" },
  { id: "battnel", name: "Battnel", rank: "B", color: "#a855f7" },
  // Rank A
  { id: "barong", name: "Barong", rank: "A", color: "#f97316" },
  { id: "naplass", name: "Naplass", rank: "A", color: "#f97316" },
  { id: "killer", name: "Killer", rank: "A", color: "#f97316" },
  { id: "tyrant", name: "Tyrant", rank: "A", color: "#f97316" },
  { id: "volcano", name: "Volcano", rank: "A", color: "#f97316" },
  { id: "undine", name: "Undine", rank: "A", color: "#f97316" },
  { id: "death", name: "Death", rank: "A", color: "#f97316" },
  { id: "clown", name: "Clown", rank: "A", color: "#f97316" },
  { id: "dreamin", name: "Dreamin", rank: "A", color: "#f97316" },
  { id: "picket", name: "Picket", rank: "A", color: "#f97316" },
  { id: "stealth", name: "Stealth", rank: "A", color: "#f97316" },
  { id: "soilclaw", name: "Soilclaw", rank: "A", color: "#f97316" },
  { id: "maliling", name: "Maliling", rank: "A", color: "#f97316" },
  // Rank S
  { id: "weadog", name: "Weadog", rank: "S", color: "#ef4444" },
  { id: "maximum", name: "Maximum", rank: "S", color: "#ef4444" },
  { id: "golem", name: "Golem", rank: "S", color: "#ef4444" },
  { id: "garuda", name: "Garuda", rank: "S", color: "#ef4444" },
  { id: "kewne", name: "Kewne", rank: "S", color: "#ef4444" },
  { id: "hikewne", name: "HiKewne", rank: "S", color: "#ef4444" },
];

const rankColors = {
  E: "#6b7280",
  D: "#10b981",
  C: "#3b82f6",
  B: "#a855f7",
  A: "#f97316",
  S: "#ef4444",
};

function generateSVG(monster) {
  const color = rankColors[monster.rank];
  const name = monster.name;
  const rank = monster.rank;
  
  return `<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${monster.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color}dd;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" fill="url(#grad-${monster.id})" rx="12" stroke="#fff" stroke-width="2"/>
  <text x="64" y="45" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">${name}</text>
  <text x="64" y="70" font-family="Arial, sans-serif" font-size="11" fill="white" text-anchor="middle">Rank ${rank}</text>
  <circle cx="64" cy="95" r="8" fill="white" opacity="0.3"/>
</svg>`;
}

// Ensure directory exists
const outputDir = path.join(process.cwd(), 'public', 'monsters');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate SVG files
monsters.forEach(monster => {
  const svg = generateSVG(monster);
  const filename = path.join(outputDir, `${monster.id}.svg`);
  fs.writeFileSync(filename, svg);
  console.log(`Generated: ${monster.id}.svg`);
});

console.log(`\nGenerated ${monsters.length} monster placeholder images in ${outputDir}`);
console.log('Note: These are placeholder SVG images. Replace with actual game sprites from Azure Dreams when available.');
