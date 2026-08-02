import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const categories = [
  'ux-design',
  'marketing-collateral',
  'graphic-design',
  'motion-graphics',
  'document-design',
  '3d-game-design'
];

// Ensure public & dist dirs exist
categories.forEach(cat => {
  const pDir = path.join(process.cwd(), 'public', cat);
  const dDir = path.join(process.cwd(), 'dist', cat);
  if (!fs.existsSync(pDir)) fs.mkdirSync(pDir, { recursive: true });
  if (!fs.existsSync(dDir)) fs.mkdirSync(dDir, { recursive: true });
});

function generateGraphicDesignSVG(title, subtitle, iconStr, color1, color2) {
  return `
  <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}" />
        <stop offset="100%" stop-color="${color2}" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="1200" height="850" fill="url(#bgGrad)" />
    <circle cx="200" cy="150" r="300" fill="#ffffff" opacity="0.04" />
    <circle cx="1000" cy="700" r="400" fill="#ffffff" opacity="0.03" />

    <rect x="60" y="50" width="220" height="36" rx="18" fill="#ffffff" opacity="0.2" />
    <text x="170" y="73" fill="#ffffff" font-size="14" font-weight="bold" font-family="Arial, sans-serif" text-anchor="middle">GRAPHIC DESIGN</text>

    <text x="60" y="140" fill="#ffffff" font-size="44" font-weight="900" font-family="Arial Black, sans-serif">${title}</text>
    <text x="60" y="180" fill="#e2e8f0" font-size="22" font-family="Arial, sans-serif">${subtitle}</text>

    <rect x="60" y="220" width="1080" height="570" rx="24" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2" />

    <g transform="translate(120, 270)">
      <rect x="0" y="0" width="300" height="470" rx="16" fill="#ffffff" />
      <rect x="20" y="20" width="260" height="280" rx="12" fill="${color1}" />
      <text x="150" y="180" font-size="100" text-anchor="middle">${iconStr}</text>
      <text x="150" y="340" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">BRAND IDENTITY</text>
      <text x="150" y="370" fill="#64748b" font-size="14" text-anchor="middle" font-family="Arial, sans-serif">Vector Brand Guide and Assets</text>
      <rect x="40" y="400" width="220" height="36" rx="18" fill="${color2}" />
      <text x="150" y="423" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">HAVELLS / ORIENT / SPICE</text>
    </g>

    <g transform="translate(450, 270)">
      <rect x="0" y="0" width="300" height="470" rx="16" fill="#ffffff" />
      <rect x="20" y="20" width="260" height="280" rx="12" fill="${color2}" />
      <text x="150" y="180" font-size="100" text-anchor="middle">🎨📦</text>
      <text x="150" y="340" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">PACKAGING SYSTEM</text>
      <text x="150" y="370" fill="#64748b" font-size="14" text-anchor="middle" font-family="Arial, sans-serif">FMEG Product Packaging SKUs</text>
      <rect x="40" y="400" width="220" height="36" rx="18" fill="${color1}" />
      <text x="150" y="423" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">PRE-PRESS CMYK DIES</text>
    </g>

    <g transform="translate(780, 270)">
      <rect x="0" y="0" width="240" height="470" rx="16" fill="#ffffff" />
      <rect x="15" y="20" width="210" height="280" rx="12" fill="#0f172a" />
      <text x="120" y="180" font-size="80" text-anchor="middle">✨📐</text>
      <text x="120" y="340" fill="#0f172a" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">PRINT MEDIA</text>
      <text x="120" y="370" fill="#64748b" font-size="13" text-anchor="middle" font-family="Arial, sans-serif">Large Format Systems</text>
      <rect x="30" y="400" width="180" height="36" rx="18" fill="#10b981" />
      <text x="120" y="423" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">STANDARDS</text>
    </g>
  </svg>
  `;
}

function generateDocumentDesignSVG(title, subtitle, iconStr, color1, color2) {
  return `
  <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}" />
        <stop offset="100%" stop-color="${color2}" />
      </linearGradient>
    </defs>
    <rect width="1200" height="850" fill="url(#docGrad)" />

    <rect x="60" y="50" width="220" height="36" rx="18" fill="#ffffff" opacity="0.2" />
    <text x="170" y="73" fill="#ffffff" font-size="14" font-weight="bold" font-family="Arial, sans-serif" text-anchor="middle">DOCUMENT DESIGN</text>

    <text x="60" y="140" fill="#ffffff" font-size="44" font-weight="900" font-family="Arial Black, sans-serif">${title}</text>
    <text x="60" y="180" fill="#e2e8f0" font-size="22" font-family="Arial, sans-serif">${subtitle}</text>

    <rect x="60" y="220" width="1080" height="570" rx="24" fill="#ffffff" opacity="0.95" />

    <g transform="translate(100, 260)">
      <rect x="0" y="0" width="460" height="240" rx="12" fill="#0f172a" />
      <rect x="30" y="30" width="120" height="24" rx="4" fill="#38bdf8" />
      <text x="30" y="90" fill="#ffffff" font-size="24" font-weight="bold" font-family="Arial, sans-serif">Executive EY Deck</text>
      <text x="30" y="120" fill="#94a3b8" font-size="14" font-family="Arial, sans-serif">Strategic Advisory and Digital Transformation</text>
      <rect x="30" y="160" width="180" height="10" rx="5" fill="#334155" />
      <rect x="30" y="180" width="260" height="10" rx="5" fill="#334155" />
      <text x="400" y="210" font-size="40" text-anchor="middle">📊</text>

      <rect x="500" y="0" width="460" height="240" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
      <text x="530" y="50" fill="#0f172a" font-size="20" font-weight="bold" font-family="Arial, sans-serif">SharePoint Portal Hierarchy</text>
      <rect x="530" y="75" width="400" height="130" rx="8" fill="#e2e8f0" />
      <text x="730" y="150" font-size="60" text-anchor="middle">📑📂</text>

      <rect x="0" y="270" width="460" height="220" rx="12" fill="#1e293b" />
      <text x="30" y="320" fill="#38bdf8" font-size="20" font-weight="bold" font-family="Arial, sans-serif">Corporate Brochure Systems</text>
      <text x="30" y="350" fill="#cbd5e1" font-size="14" font-family="Arial, sans-serif">InDesign Layouts, Grid Systems, Workflows</text>
      <text x="230" y="440" font-size="50" text-anchor="middle">📄📖</text>

      <rect x="500" y="270" width="460" height="220" rx="12" fill="#0284c7" />
      <text x="530" y="320" fill="#ffffff" font-size="20" font-weight="bold" font-family="Arial, sans-serif">C-Suite Pitch Books</text>
      <text x="530" y="350" fill="#e0f2fe" font-size="14" font-family="Arial, sans-serif">Ernst and Young Global Accounts</text>
      <text x="730" y="440" font-size="50" text-anchor="middle">📈🏆</text>
    </g>
  </svg>
  `;
}

function generateMotionGraphicsSVG(title, subtitle, iconStr, color1, color2) {
  return `
  <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}" />
        <stop offset="100%" stop-color="${color2}" />
      </linearGradient>
    </defs>
    <rect width="1200" height="850" fill="url(#mgGrad)" />

    <rect x="60" y="50" width="220" height="36" rx="18" fill="#ffffff" opacity="0.2" />
    <text x="170" y="73" fill="#ffffff" font-size="14" font-weight="bold" font-family="Arial, sans-serif" text-anchor="middle">MOTION GRAPHICS</text>

    <text x="60" y="140" fill="#ffffff" font-size="44" font-weight="900" font-family="Arial Black, sans-serif">${title}</text>
    <text x="60" y="180" fill="#e2e8f0" font-size="22" font-family="Arial, sans-serif">${subtitle}</text>

    <rect x="60" y="220" width="1080" height="570" rx="24" fill="#090d16" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2" />

    <rect x="100" y="260" width="700" height="380" rx="16" fill="#1e1b4b" stroke="#6366f1" stroke-width="2" />
    <text x="450" y="450" font-size="120" text-anchor="middle">${iconStr}</text>
    <circle cx="450" cy="430" r="50" fill="#ffffff" opacity="0.2" />
    <polygon points="440,405 470,430 440,455" fill="#ffffff" />

    <g transform="translate(100, 660)">
      <rect x="0" y="0" width="980" height="100" rx="12" fill="#1e293b" />
      <line x1="20" y1="30" x2="960" y2="30" stroke="#475569" stroke-width="2" />
      <rect x="50" y="40" width="200" height="20" rx="4" fill="#818cf8" />
      <rect x="270" y="40" width="320" height="20" rx="4" fill="#ec4899" />
      <rect x="610" y="40" width="280" height="20" rx="4" fill="#10b981" />
      <rect x="50" y="68" width="400" height="20" rx="4" fill="#f59e0b" />
      <line x1="380" y1="10" x2="380" y2="90" stroke="#ef4444" stroke-width="3" />
    </g>

    <g transform="translate(830, 260)">
      <rect x="0" y="0" width="250" height="380" rx="16" fill="#1e293b" />
      <text x="125" y="40" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">After Effects Pipeline</text>
      <rect x="20" y="60" width="210" height="40" rx="8" fill="#312e81" />
      <text x="125" y="85" fill="#a5b4fc" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Kinetic Typography</text>
      <rect x="20" y="115" width="210" height="40" rx="8" fill="#312e81" />
      <text x="125" y="140" fill="#a5b4fc" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">3D Logo Animation</text>
      <rect x="20" y="170" width="210" height="40" rx="8" fill="#312e81" />
      <text x="125" y="195" fill="#a5b4fc" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">UI Micro-interactions</text>
      <rect x="20" y="225" width="210" height="40" rx="8" fill="#312e81" />
      <text x="125" y="250" fill="#a5b4fc" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Broadcast Openers</text>
      <rect x="20" y="290" width="210" height="60" rx="12" fill="#6366f1" />
      <text x="125" y="325" fill="#ffffff" font-size="15" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Render 4K 60FPS</text>
    </g>
  </svg>
  `;
}

const generatedAssets = [
  {
    dir: 'graphic-design',
    file: 'gd-brand-identity-system.png',
    svg: generateGraphicDesignSVG('FMEG Brand Identity System', 'Scalable Vector Guidelines and Packaging Systems', '⚡🎨', '#0f172a', '#2563eb')
  },
  {
    dir: 'graphic-design',
    file: 'gd-product-packaging-dies.png',
    svg: generateGraphicDesignSVG('Product Packaging and CMYK Pre-Press', 'Custom Die-Cut Packaging and SKU Asset Libraries', '📦✨', '#1e1b4b', '#7c3aed')
  },
  {
    dir: 'graphic-design',
    file: 'gd-large-format-banners.png',
    svg: generateGraphicDesignSVG('Large Format Retail and Event Standees', 'Nationwide Hoardings, Exhibition Displays and Typography', '🎪🏛️', '#064e3b', '#059669')
  },
  {
    dir: 'graphic-design',
    file: 'gd-vector-illustration-library.png',
    svg: generateGraphicDesignSVG('Corporate Vector Illustration System', 'Custom Iconography, Badges and Visual Guidelines', '📐✏️', '#831843', '#db2777')
  },
  {
    dir: 'document-design',
    file: 'dd-ey-csuite-pitchbook.png',
    svg: generateDocumentDesignSVG('EY Executive Pitch Book and Strategy Deck', 'High-Impact Boardroom Presentations and InDesign Systems', '📊📑', '#0f172a', '#0284c7')
  },
  {
    dir: 'document-design',
    file: 'dd-sharepoint-document-portal.png',
    svg: generateDocumentDesignSVG('SharePoint Enterprise Document Architecture', 'Metadata Standards, Layout Taxonomies and Portal Templates', '📂🌐', '#111827', '#10b981')
  },
  {
    dir: 'document-design',
    file: 'dd-indesign-corporate-brochure.png',
    svg: generateDocumentDesignSVG('Corporate InDesign Brochure Layouts', 'Multi-Page Annual Reports and Editorial Typography', '📖📰', '#311042', '#9333ea')
  },
  {
    dir: 'motion-graphics',
    file: 'mg-brand-kinetic-typography.png',
    svg: generateMotionGraphicsSVG('Kinetic Typography and Broadcast Opener', 'After Effects 2D/3D Kinetic Text and Motion Sequences', '🎬💥', '#18181b', '#6366f1')
  },
  {
    dir: 'motion-graphics',
    file: 'mg-ui-micro-interaction.png',
    svg: generateMotionGraphicsSVG('UI Micro-Interactions and Lottie Animations', 'App Transition Loops, Animated Badges and Video Promos', '📱✨', '#030712', '#0284c7')
  },
  {
    dir: 'motion-graphics',
    file: 'mg-3d-logo-animation.png',
    svg: generateMotionGraphicsSVG('3D Logo Reveal and Broadcast Graphics', 'Cinema 4D Element Renders and Commercial Intros', '🌌🚀', '#090514', '#d946ef')
  }
];

async function runBuild() {
  console.log('Generating missing gallery assets...');
  for (const item of generatedAssets) {
    const buffer = await sharp(Buffer.from(item.svg)).png().toBuffer();
    const pPath = path.join(process.cwd(), 'public', item.dir, item.file);
    const dPath = path.join(process.cwd(), 'dist', item.dir, item.file);
    fs.writeFileSync(pPath, buffer);
    fs.writeFileSync(dPath, buffer);
    console.log(`Saved: ${pPath}`);
  }

  console.log('Syncing public folder to dist...');
  categories.forEach(cat => {
    const pDir = path.join(process.cwd(), 'public', cat);
    const dDir = path.join(process.cwd(), 'dist', cat);
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
  console.log('Sync complete!');
}

runBuild().catch(console.error);
