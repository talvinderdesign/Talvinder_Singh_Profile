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

const uxCustomTitles = {
  '11- Menu.png': 'Mobile Banking & Fintech - Navigation Menu UX',
  '12- Send money (Amount).png': 'Mobile Banking - Send Money Amount Selection',
  '13- Send money.png': 'Fintech App - Money Transfer & Recipient Selection',
  '14- Verification.png': 'Security & 2FA Identity Verification Screen',
  '15- Code.png': 'Mobile Banking - OTP Code Verification Interface',
  '16- Receit.png': 'Digital Wallet - Transaction Receipt & Confirmation',
  '17- Cards.png': 'Card Management & Wallet - Debit/Credit Cards',
  '18- Add new card.png': 'Payment Gateway - Add New Card & Onboarding',
  '19- Transactions.png': 'Financial Dashboard - Transaction History Analytics',
  '20- Top up.png': 'Digital Wallet - Balance Top-Up & Quick Refill',
  '23- Bill payment.png': 'Utilities & Recurring Bill Payment Hub',
  '24- Loans.png': 'Personal Loans & Credit Rating Interface',
  '25- Budget.png': 'Financial Planning & Personal Budget Tracker',
  'Tesco 1.jpg': 'Tesco E-Commerce - Homepage & Promotional Offers',
  'Tesco 2.jpg': 'Tesco Grocery - Category Browsing & Clubcard Deals',
  'Tesco 3.jpg': 'Tesco Shopping - Product Listing & Quick Cart',
  'Tesco 4.jpg': 'Tesco Grocery - Product Details & Nutritional Info',
  'Tesco 5.jpg': 'Tesco Mobile - Delivery Slot Selection & Booking',
  'Tesco 6.jpg': 'Tesco Shopping Basket & Order Summary Interface',
  'Tesco 7.jpg': 'Tesco Checkout - Payment & Address Confirmation',
  'Tesco 8.jpg': 'Tesco Clubcard & Rewards Points Portal',
  'Tesco 9.jpg': 'Tesco Order Tracking & Delivery Status UX',
  'Telegram Authorization.png': 'Telegram App Redesign - Phone Login & Security Verification',
  'Telegram Calls.png': 'Telegram App Redesign - Voice & Video Call Log UX',
  'Telegram Chat Modal.png': 'Telegram App Redesign - Instant Message Actions & Modal UI',
  'Telegram Chat.png': 'Telegram App Redesign - Active Chat Screen & Media Sharing',
  'Telegram Contacts.png': 'Telegram App Redesign - Contacts & Status View',
  'Telegram Data and Storage.png': 'Telegram App Redesign - Storage Usage & Network Settings',
  'Telegram Edit Profile.png': 'Telegram App Redesign - Profile Customization & User Info',
  'iPhone 16 Pro Max - 8-1.png': 'Mobile App Experience - Onboarding & Welcome Flow',
  'iPhone 16 Pro Max - 18-1.png': 'Mobile App Experience - Profile & Account Settings',
  'iPhone 16 Pro Max - 19.png': 'Mobile App Experience - Premium Membership & Subscription',
  'Frame 53.png': 'Interactive App Architecture - Mobile Flow Showcase',
  'Frame 54.png': 'Interactive App Architecture - Feature Highlights Dashboard',
  'Screen 25-1.png': 'Mobile UI Design - Splash Screen & Onboarding',
  'Screen 111-1.png': 'Mobile App Suite - Main Dashboard & Quick Actions',
  'Screen 112-1.png': 'Mobile App Suite - Content Feed & Search Filters',
  'Screen 113-1.png': 'Mobile App Suite - Item Details & Navigation',
  'Screen 114-1.png': 'Mobile App Suite - User Activity & Notifications',
  'Screen 116-1.png': 'Mobile App Suite - App Settings & Preferences',
  'Screen 142.png': 'Enterprise Mobile UI - Performance Analytics 01',
  'Screen 143.png': 'Enterprise Mobile UI - Task Manager & Status 02',
  'Screen 144.png': 'Enterprise Mobile UI - Calendar & Schedule Planner 03',
  'Screen 145.png': 'Enterprise Mobile UI - User Management & Roles 04',
  'Screen 146.png': 'Enterprise Mobile UI - Metrics & Data Charts 05',
  'Screen 147.png': 'Enterprise Mobile UI - Media & Resource Library 06',
  'Screen 148.png': 'Enterprise Mobile UI - System Settings & Config 07',
  'Screen 149.png': 'Enterprise Mobile UI - Custom Workflow Builder 08',
  'Screen 150.png': 'Enterprise Mobile UI - Alert & Notification Center 09',
  'Screen 151.png': 'Enterprise Mobile UI - Interactive Report Screen 10',
  'Screen 152.png': 'Enterprise Mobile UI - Account Overview & Security 11'
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

      // If custom title exists for UX design or other files
      let title = '';
      if (uxCustomTitles[file]) {
        title = uxCustomTitles[file];
      } else if (/^\d+$/.test(baseName)) {
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
