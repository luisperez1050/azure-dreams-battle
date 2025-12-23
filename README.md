# Azure Dreams Battle

A retro-themed two-player monster battle game inspired by Azure Dreams. Players take turns drawing random monsters, and the player with the stronger monster wins each round. First to win the most rounds out of 10 wins the game!

## Features

- 🎮 Two-player battle system
- 🎲 Random monster drawing
- 🏆 10 rounds of gameplay
- 📊 Power level-based combat
- 🎨 Retro-themed modern UI
- 📱 Mobile-first responsive design

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Play

1. Each player clicks "Draw Monster" to get a random monster
2. Once both players have drawn, the game compares power levels
3. The player with the higher power level wins the round
4. If there's a tie, both monsters are re-drawn automatically
5. After 10 rounds, the player with the most wins is declared the champion!

## Monster Ranks

Monsters are ranked by power level:
- **Rank E:** Power 1-20 (Basic monsters)
- **Rank D:** Power 21-40 (Common monsters)
- **Rank C:** Power 41-60 (Uncommon monsters)
- **Rank B:** Power 61-80 (Rare monsters)
- **Rank A:** Power 81-95 (Epic monsters)
- **Rank S:** Power 96-100 (Legendary monsters)

## Project Structure

```
azure-dreams-battle/
├── app/
│   ├── components/
│   │   ├── GameBoard.tsx      # Main game logic
│   │   ├── PlayerCard.tsx      # Player UI component
│   │   ├── MonsterCard.tsx     # Monster display component
│   │   ├── MonsterImage.tsx    # Monster image with fallback
│   │   └── ui/
│   │       └── button.tsx      # Reusable button component
│   ├── data/
│   │   └── monsters.ts         # Monster data and utilities
│   ├── types.ts                # TypeScript type definitions
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── lib/
│   └── utils.ts                # Utility functions (cn helper)
└── public/
    └── monsters/               # Monster images (add your own!)
```

## Adding Monster Images

Place monster images in `public/monsters/` with filenames matching the monster IDs (e.g., `slime.png`, `dragon.png`). The app will automatically use placeholder SVGs if images are not found.

## License

MIT
