import fs from 'fs';
import path from 'path';

const categoryLabels = {
  'ux-design': 'UX/UI Designs',
  'marketing-collateral': 'Marketing Collateral',
  'graphic-design': 'Graphic Design',
  'motion-graphics': 'Motion Graphics',
  'document-design': 'Document Design',
  '3d-game-design': '3D Game design'
};

const categoryClients = {
  'ux-design': 'Tesco PLC / Mobile App Studio',
  'marketing-collateral': 'WNS Global / Havells / Orient',
  'graphic-design': 'Havells India / Orient / Spice Labs',
  'motion-graphics': 'After Effects / Motion Studio',
  'document-design': 'Ernst & Young Global Limited',
  '3d-game-design': 'Spice Labs & Mobile Gaming Studio'
};

function buildGalleryData() {
  const publicDir = path.join(process.cwd(), 'public');
  const items = [];

  // 1. First add generated UX mobile & Tesco screens
  const uxGenerated = [
    { name: 'ux-mobile-hangman.png', title: 'Hangman Kids Plus - Mobile UI & Educational Game' },
    { name: 'ux-mobile-photoviewer.png', title: 'Photoviewer & Child Lock - Mobile Safety & Gallery UX' },
    { name: 'ux-mobile-rhymes.png', title: 'Kiddo Rhymes - Interactive Audio & Music Player Interface' },
    { name: 'ux-tesco-valentines-hero.png', title: 'Tesco E-Commerce - Seasonal Campaign Hero & Portal' },
    { name: 'ux-tesco-fresh-food.png', title: 'Tesco Fresh Food - Category Pills & Filter UX' },
    { name: 'ux-tesco-confectionery.png', title: 'Tesco Confectionery - Clubcard Yellow Badge Pricing UI' },
    { name: 'ux-tesco-fashion-hero.png', title: 'Tesco F&F Clothing - Department Landing Page UX' },
  ];

  uxGenerated.forEach((u, idx) => {
    const fPath = path.join(publicDir, 'ux-gallery', u.name);
    if (fs.existsSync(fPath)) {
      items.push({
        id: `ux-gen-${idx+1}`,
        url: `/ux-gallery/${u.name}`,
        title: u.title,
        category: 'ux-design',
        categoryLabel: 'UX/UI Designs',
        client: 'Tesco PLC / Mobile App Studio',
        caption: u.title
      });
    }
  });

  // 1.5 Motion Graphics YouTube Videos
  const motionVideos = [
    { id: '_7JVY9FZqtI', title: 'Motion Graphics - 3D & Brand Animation Reel 01' },
    { id: 'r2TzYPMPMR0', title: 'Motion Graphics - Kinetic Typography & VFX Reel 02' },
    { id: '40ZGHTEn1BY', title: 'Motion Graphics - UI Micro Interactions Reel 03' },
    { id: '5vAn6HfxjaA', title: 'Motion Graphics - Commercial & Promo Motion 04' },
    { id: 'TQPkt3o1FYc', title: 'Motion Graphics - Brand Identity Motion Showcase 05' },
    { id: 'PA5w2sqszms', title: 'Motion Graphics - Title Sequences & Visual Effects 06' },
    { id: 'e-jZDFJZJEE', title: 'Motion Graphics - Broadcast & Character Motion 07' },
    { id: 'xi1lahjDF4U', title: 'Motion Graphics - Product Showcase & 3D Motion 08' }
  ];

  motionVideos.forEach((video, idx) => {
    items.push({
      id: `motion-video-${idx + 1}`,
      url: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
      youtubeId: video.id,
      title: video.title,
      category: 'motion-graphics',
      categoryLabel: 'Motion Graphics',
      client: 'After Effects / Motion Studio',
      caption: video.title
    });
  });

  // 2. Scan all category folders
  Object.keys(categoryLabels).forEach(cat => {
    // Skip motion-graphics directory scan if we already populated from YouTube videos, or include local files after
    if (cat === 'motion-graphics') return;
    const dirPath = path.join(publicDir, cat);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath).filter(f => {
      const full = path.join(dirPath, f);
      try {
        return !f.startsWith('.') && 
          (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')) &&
          fs.statSync(full).size > 0;
      } catch (e) {
        return false;
      }
    });

    // Sort files naturally (numeric sort for 1.jpg, 2.jpg, 10.jpg)
    files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    files.forEach((file, index) => {
      // Create clean human readable title
      let baseName = file.replace(/\.(jpg|jpeg|png)$/i, '');
      let cleanTitle = baseName
        .replace(/^(large_|original_)/, '')
        .replace(/^(722357_|gd-|dd-|mg-)/, '')
        .replace(/_/g, ' ')
        .replace(/-/g, ' ');

      // If it's a simple number (e.g. 1, 2, 3)
      let title = '';
      if (/^\d+$/.test(baseName)) {
        title = `${categoryLabels[cat]} - Sheet ${baseName}`;
      } else {
        cleanTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);
        title = `${categoryLabels[cat]} Asset - ${cleanTitle}`;
      }

      items.push({
        id: `${cat}-${index + 1}`,
        url: `/${cat}/${encodeURI(file)}`,
        title: title,
        category: cat,
        categoryLabel: categoryLabels[cat],
        client: categoryClients[cat],
        caption: title
      });
    });
  });

  // Also sync public directory to dist directory so build/preview picks up everything
  const distDir = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distDir)) {
    Object.keys(categoryLabels).forEach(cat => {
      const pDir = path.join(publicDir, cat);
      const dDir = path.join(distDir, cat);
      if (!fs.existsSync(dDir)) fs.mkdirSync(dDir, { recursive: true });
      if (fs.existsSync(pDir)) {
        fs.readdirSync(pDir).forEach(f => {
          const srcFile = path.join(pDir, f);
          const destFile = path.join(dDir, f);
          if (fs.statSync(srcFile).isFile()) {
            fs.copyFileSync(srcFile, destFile);
          }
        });
      }
    });
  }

  console.log(`Total gallery items collected: ${items.length}`);

  const content = `export interface GalleryItem {
  id: string;
  url: string;
  youtubeId?: string;
  title: string;
  category: 'ux-design' | 'marketing-collateral' | 'graphic-design' | 'motion-graphics' | 'document-design' | '3d-game-design';
  categoryLabel: string;
  client: string;
  caption: string;
}

export const UX_GALLERY_IMAGES: GalleryItem[] = ${JSON.stringify(items, null, 2)};
`;

  const targetPath = path.join(process.cwd(), 'src', 'data', 'uxGalleryData.ts');
  fs.writeFileSync(targetPath, content);
  console.log(`Updated ${targetPath} successfully!`);
}

buildGalleryData();
