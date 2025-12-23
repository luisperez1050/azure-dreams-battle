"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Monster } from "@/app/types";

interface MonsterImageProps {
  monster: Monster;
}

// Generate a placeholder SVG for monsters until real images are added
function generateMonsterPlaceholder(monster: Monster): string {
  const rankColors: Record<Monster["rank"], string> = {
    E: "#6b7280",
    D: "#10b981",
    C: "#3b82f6",
    B: "#a855f7",
    A: "#f97316",
    S: "#ef4444",
  };

  const svg = `<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" fill="${rankColors[monster.rank]}" rx="8"/><text x="64" y="50" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">${monster.name}</text><text x="64" y="75" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">Rank ${monster.rank}</text><text x="64" y="95" font-family="Arial, sans-serif" font-size="10" fill="white" text-anchor="middle">PWR: ${monster.powerLevel}</text></svg>`;

  // Use URL encoding for SVG data URI (more reliable than base64 for SVGs)
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default function MonsterImage({ monster }: MonsterImageProps) {
  // Try to load the image, fallback to placeholder if it fails
  const [imgSrc, setImgSrc] = useState(monster.imageUrl);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
    setImgSrc(monster.imageUrl);
  }, [monster.imageUrl]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(generateMonsterPlaceholder(monster));
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={monster.name}
      fill
      className="object-contain"
      sizes="128px"
      onError={handleError}
      unoptimized
    />
  );
}

