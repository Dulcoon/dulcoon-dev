const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sourceImage = "/home/dulcoon/.gemini/antigravity/brain/26d1eaa8-2959-45bc-bd4b-9fe781f63a27/favicon_source_1779525449513.png";
const publicDir = "/home/dulcoon/projects/dulcoon-dev/public";
const appDir = "/home/dulcoon/projects/dulcoon-dev/app";

console.log("Generating favicons from source...");

try {
  // Ensure public and app directory exists
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

  // 1. Copy source to public as favicon.png
  fs.copyFileSync(sourceImage, path.join(publicDir, 'favicon.png'));
  console.log("Copied favicon.png to public");

  // 2. Generate favicon.ico in app/ and public/
  execSync(`convert "${sourceImage}" -resize 32x32 "${path.join(appDir, 'favicon.ico')}"`);
  execSync(`convert "${sourceImage}" -resize 32x32 "${path.join(publicDir, 'favicon.ico')}"`);
  console.log("Generated favicon.ico in app/ and public/");

  // 3. Generate icon.png in app/
  execSync(`convert "${sourceImage}" -resize 512x512 "${path.join(appDir, 'icon.png')}"`);
  console.log("Generated icon.png in app/");

  // 4. Generate apple-icon.png in app/
  execSync(`convert "${sourceImage}" -resize 180x180 "${path.join(appDir, 'apple-icon.png')}"`);
  console.log("Generated apple-icon.png in app/");

  // 5. Generate other manifest assets in public/
  execSync(`convert "${sourceImage}" -resize 96x96 "${path.join(publicDir, 'favicon-96x96.png')}"`);
  execSync(`convert "${sourceImage}" -resize 180x180 "${path.join(publicDir, 'apple-touch-icon.png')}"`);
  execSync(`convert "${sourceImage}" -resize 192x192 "${path.join(publicDir, 'web-app-manifest-192x192.png')}"`);
  execSync(`convert "${sourceImage}" -resize 512x512 "${path.join(publicDir, 'web-app-manifest-512x512.png')}"`);
  console.log("Generated all static assets in public/");

  console.log("Favicon generation completed successfully!");
} catch (error) {
  console.error("Error generating favicons:", error);
  process.exit(1);
}
