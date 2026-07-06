// Script pour générer les icônes PWA à partir du logo-icon.png
// Exécuter avec: node scripts/generate-icons.mjs

import sharp from "sharp";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputFile = "public/logo-icon.png";
const outputDir = "public/icons";

async function generateIcons() {
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
  }

  for (const size of sizes) {
    const outputFile = `${outputDir}/icon-${size}x${size}.png`;
    await sharp(inputFile)
      .resize(size, size, {
        fit: "contain",
        background: { r: 15, g: 23, b: 42, alpha: 1 }, // spec-black bg
      })
      .png()
      .toFile(outputFile);
    console.log(`✅ Generated ${outputFile}`);
  }

  console.log("\n🎉 All PWA icons generated successfully!");
}

generateIcons().catch(console.error);
