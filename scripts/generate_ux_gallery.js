import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const galleryDir = path.join(process.cwd(), 'public', 'ux-gallery');
const distGalleryDir = path.join(process.cwd(), 'dist', 'ux-gallery');

[galleryDir, distGalleryDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper SVG drawer
function createTescoHeader(activeTab = 'Groceries & Essentials') {
  return `
    <rect x="0" y="0" width="1200" height="110" fill="#FFFFFF" />
    <!-- Top Nav Bar -->
    <rect x="0" y="0" width="1200" height="32" fill="#00539F" />
    <text x="560" y="21" fill="#FFFFFF" font-size="12" font-family="Arial, sans-serif" font-weight="bold">Tesco Bank   Tesco Mobile   Delivery Saver   Store locator   Help   Feedback</text>
    
    <!-- Tesco Logo -->
    <text x="40" y="78" fill="#E00000" font-size="34" font-weight="900" font-family="'Arial Black', sans-serif" letter-spacing="-1">TESCO</text>
    
    <!-- Search Bar -->
    <rect x="220" y="48" width="500" height="40" rx="4" fill="#FFFFFF" stroke="#00539F" stroke-width="2" />
    <text x="240" y="73" fill="#666666" font-size="14" font-family="Arial, sans-serif">Search with a list of items...</text>
    <circle cx="700" cy="68" r="14" fill="#00539F" />
    <path d="M695 63 L705 73 M702 63 A 4 4 0 1 1 694 71" stroke="#FFFFFF" stroke-width="2.5" fill="none" />

    <!-- Right User Buttons -->
    <rect x="800" y="48" width="80" height="40" rx="20" fill="#00539F" />
    <text x="822" y="73" fill="#FFFFFF" font-size="13" font-weight="bold" font-family="Arial, sans-serif">Sign in</text>
    <rect x="895" y="48" width="90" height="40" rx="20" fill="#FFFFFF" stroke="#00539F" stroke-width="2" />
    <text x="912" y="73" fill="#00539F" font-size="13" font-weight="bold" font-family="Arial, sans-serif">Register</text>

    <!-- Nav Tabs -->
    <line x1="0" y1="110" x2="1200" y2="110" stroke="#E5E7EB" stroke-width="1" />
  `;
}

function createSideBasket() {
  return `
    <!-- Basket Sidebar -->
    <rect x="940" y="120" width="230" height="700" fill="#FFFFFF" rx="8" stroke="#E5E7EB" stroke-width="1" />
    <text x="960" y="155" fill="#111827" font-size="18" font-weight="bold" font-family="Arial, sans-serif">Basket</text>
    <rect x="960" y="175" width="190" height="40" rx="20" fill="#93C5FD" opacity="0.6" />
    <text x="1020" y="200" fill="#FFFFFF" font-size="14" font-weight="bold" font-family="Arial, sans-serif">Checkout</text>
    <line x1="960" y1="235" x2="1150" y2="235" stroke="#E5E7EB" stroke-width="1" />
    <text x="960" y="265" fill="#111827" font-size="15" font-weight="bold" font-family="Arial, sans-serif">Groceries</text>
    <text x="960" y="290" fill="#6B7280" font-size="12" font-family="Arial, sans-serif">Reserve a slot for home</text>
    <text x="960" y="306" fill="#6B7280" font-size="12" font-family="Arial, sans-serif">delivery or collection</text>

    <circle cx="1055" cy="380" r="24" fill="#F3F4F6" />
    <text x="1045" y="386" fill="#9CA3AF" font-size="18">🛒</text>
    <text x="970" y="425" fill="#111827" font-size="14" font-weight="bold" font-family="Arial, sans-serif">Grocery basket empty</text>
    <text x="960" y="445" fill="#6B7280" font-size="11" font-family="Arial, sans-serif">Products you add will appear here</text>
  `;
}

const uxImages = [
  // 1. Hangman
  {
    name: 'ux-mobile-hangman.png',
    render: () => `
      <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="850" fill="#DCEEFF" />
        <!-- Header Title -->
        <text x="600" y="70" fill="#CC0000" font-size="42" font-weight="900" text-anchor="middle" font-family="Arial Black, sans-serif">Mobile Designing</text>
        <text x="600" y="110" fill="#0B2545" font-size="26" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Hangman Kids Plus</text>
        
        <!-- App Store Link Pill -->
        <circle cx="1020" cy="90" r="55" fill="#38BDF8" />
        <text x="1020" y="82" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">App store</text>
        <text x="1020" y="98" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">link for</text>
        <text x="1020" y="114" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">apps</text>
        <text x="1020" y="160" fill="#1E3A8A" font-size="12" text-anchor="middle" font-family="Arial, sans-serif">http://appworld.blackberry.com/webstore/vendor/2004</text>

        <!-- Main App Icon -->
        <text x="600" y="160" fill="#1E293B" font-size="16" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">App icon</text>
        <rect x="520" y="180" width="160" height="160" rx="36" fill="#FDE047" stroke="#0284C7" stroke-width="4" />
        <text x="600" y="270" font-size="80" text-anchor="middle">🐰➕</text>
        <text x="600" y="370" fill="#1E293B" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Game Screens</text>

        <!-- 3 Game Screens -->
        <!-- Screen 1 Orange -->
        <rect x="80" y="400" width="300" height="380" rx="28" fill="#15803D" />
        <rect x="100" y="420" width="260" height="150" fill="#FFFFFF" rx="12" />
        <text x="230" y="500" font-size="70" text-anchor="middle">🍊</text>
        <rect x="180" y="585" width="100" height="30" fill="#FFFFFF" rx="4" />
        <text x="230" y="607" fill="#111827" font-size="18" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">ORANGE</text>

        <!-- Keyboard grid -->
        <rect x="100" y="630" width="260" height="130" fill="#22C55E" rx="12" />
        <text x="230" y="690" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial Black, sans-serif">A B C D E F G H</text>
        <text x="230" y="720" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial Black, sans-serif">I J K L M N O P</text>

        <!-- Screen 2 Elephant -->
        <rect x="450" y="400" width="300" height="380" rx="28" fill="#15803D" />
        <rect x="470" y="420" width="260" height="150" fill="#FFFFFF" rx="12" />
        <text x="600" y="500" font-size="70" text-anchor="middle">🐘</text>
        <rect x="530" y="585" width="140" height="30" fill="#FFFFFF" rx="4" />
        <text x="600" y="607" fill="#111827" font-size="18" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">ELEPHANT</text>
        <rect x="470" y="630" width="260" height="130" fill="#22C55E" rx="12" />
        <text x="600" y="690" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial Black, sans-serif">A B C D E F G H</text>
        <text x="600" y="720" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial Black, sans-serif">I J K L M N O P</text>

        <!-- Screen 3 Tomato -->
        <rect x="820" y="400" width="300" height="380" rx="28" fill="#15803D" />
        <rect x="840" y="420" width="260" height="150" fill="#FFFFFF" rx="12" />
        <text x="970" y="500" font-size="70" text-anchor="middle">🍅</text>
        <rect x="900" y="585" width="140" height="30" fill="#FFFFFF" rx="4" />
        <text x="970" y="607" fill="#111827" font-size="18" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">TOMATO</text>
        <rect x="840" y="630" width="260" height="130" fill="#22C55E" rx="12" />
        <text x="970" y="690" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial Black, sans-serif">A B C D E F G H</text>
        <text x="970" y="720" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial Black, sans-serif">I J K L M N O P</text>
      </svg>
    `
  },
  // 2. Photoviewer
  {
    name: 'ux-mobile-photoviewer.png',
    render: () => `
      <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="850" fill="#DCEEFF" />
        <text x="600" y="70" fill="#CC0000" font-size="42" font-weight="900" text-anchor="middle" font-family="Arial Black, sans-serif">Mobile Designing</text>
        <text x="600" y="110" fill="#0B2545" font-size="26" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Photoviewer &amp; Child Lock</text>

        <!-- App Store Link Pill -->
        <circle cx="1020" cy="90" r="55" fill="#38BDF8" />
        <text x="1020" y="82" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">App store</text>
        <text x="1020" y="98" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">link for</text>
        <text x="1020" y="114" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">apps</text>

        <!-- App Icon -->
        <rect x="520" y="180" width="160" height="160" rx="36" fill="#0284C7" />
        <text x="600" y="280" font-size="80" text-anchor="middle">📷🔒</text>

        <!-- 3 Screens -->
        <!-- Child lock screen -->
        <rect x="80" y="400" width="300" height="380" rx="28" fill="#86EFAC" />
        <text x="230" y="440" fill="#DC2626" font-size="24" font-weight="900" text-anchor="middle" font-family="Arial Black, sans-serif">Child Lock</text>
        <text x="230" y="550" font-size="90" text-anchor="middle">👦📱</text>

        <!-- Photo viewer gallery -->
        <rect x="450" y="400" width="300" height="380" rx="28" fill="#38BDF8" />
        <rect x="470" y="430" width="260" height="320" rx="16" fill="#FFFFFF" />
        <text x="600" y="580" font-size="90" text-anchor="middle">🎸🧑‍🤝‍🧑</text>

        <!-- Select Image Grid -->
        <rect x="820" y="400" width="300" height="380" rx="28" fill="#0284C7" />
        <text x="970" y="435" fill="#FFFFFF" font-size="20" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Select Image</text>
        <g transform="translate(840, 450)">
          <rect x="0" y="0" width="70" height="70" rx="8" fill="#E0F2FE" /><text x="35" y="45" font-size="30" text-anchor="middle">🐸</text>
          <rect x="85" y="0" width="70" height="70" rx="8" fill="#E0F2FE" /><text x="120" y="45" font-size="30" text-anchor="middle">👧</text>
          <rect x="170" y="0" width="70" height="70" rx="8" fill="#E0F2FE" /><text x="205" y="45" font-size="30" text-anchor="middle">🍬</text>
          <rect x="0" y="80" width="70" height="70" rx="8" fill="#E0F2FE" /><text x="35" y="125" font-size="30" text-anchor="middle">☕</text>
          <rect x="85" y="80" width="70" height="70" rx="8" fill="#E0F2FE" /><text x="120" y="125" font-size="30" text-anchor="middle">🎈</text>
          <rect x="170" y="80" width="70" height="70" rx="8" fill="#E0F2FE" /><text x="205" y="125" font-size="30" text-anchor="middle">🍪</text>
        </g>
      </svg>
    `
  },
  // 3. Rhymes
  {
    name: 'ux-mobile-rhymes.png',
    render: () => `
      <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="850" fill="#DCEEFF" />
        <text x="600" y="70" fill="#CC0000" font-size="42" font-weight="900" text-anchor="middle" font-family="Arial Black, sans-serif">Mobile Designing</text>
        <text x="600" y="110" fill="#0B2545" font-size="26" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Kiddo Rhymes</text>

        <!-- App Icon -->
        <rect x="520" y="180" width="160" height="160" rx="36" fill="#EF4444" />
        <text x="600" y="280" font-size="80" text-anchor="middle">🎵😄</text>

        <!-- 3 Screens -->
        <!-- Train screen -->
        <rect x="80" y="400" width="300" height="380" rx="28" fill="#0EA5E9" />
        <text x="230" y="445" fill="#FFFFFF" font-size="24" font-weight="900" text-anchor="middle" font-family="Arial Black, sans-serif">Kiddo Rhymes</text>
        <text x="230" y="580" font-size="90" text-anchor="middle">🚂🎶</text>

        <!-- Eensy Weensy Spider -->
        <rect x="450" y="400" width="300" height="380" rx="28" fill="#F97316" />
        <text x="600" y="440" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Eensy Weensy Spider</text>
        <text x="600" y="470" fill="#FFFFFF" font-size="14" text-anchor="middle" font-family="Arial, sans-serif">Climbed up the water spout</text>
        <text x="600" y="600" font-size="90" text-anchor="middle">🕷️🌧️</text>

        <!-- Rock a bye baby -->
        <rect x="820" y="400" width="300" height="380" rx="28" fill="#22C55E" />
        <text x="970" y="440" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Rock a bye baby</text>
        <text x="970" y="600" font-size="90" text-anchor="middle">👶🌳</text>
      </svg>
    `
  },
  // 4. Tesco Valentine Hero
  {
    name: 'ux-tesco-valentines-hero.png',
    render: () => `
      <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="850" fill="#F9FAFB" />
        ${createTescoHeader()}
        ${createSideBasket()}

        <!-- Main Banner -->
        <g transform="translate(40, 120)">
          <rect x="0" y="0" width="880" height="260" fill="#EC4899" rx="12" />
          <text x="440" y="80" fill="#FFFFFF" font-size="22" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="4">CELEBRATING ALL</text>
          <text x="440" y="170" fill="#FFFFFF" font-size="90" font-weight="900" text-anchor="middle" font-family="'Arial Black', sans-serif" letter-spacing="6">LOVE</text>
          <text x="440" y="220" fill="#FFFFFF" font-size="20" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="3">THIS VALENTINE'S DAY</text>

          <!-- Article Text -->
          <text x="0" y="320" fill="#111827" font-size="28" font-weight="bold" font-family="Arial, sans-serif">Celebrating all love this Valentine's Day</text>
          <text x="0" y="360" fill="#4B5563" font-size="16" font-family="Arial, sans-serif">Love is in the air, and it's time to celebrate your way. Planning a snug evening with your other half or a lively</text>
          <text x="0" y="385" fill="#4B5563" font-size="16" font-family="Arial, sans-serif">one with your friends? We've got all you need to have a memorable day.</text>
          <text x="0" y="430" fill="#00539F" font-size="15" font-weight="bold" font-family="Arial, sans-serif">Top picks | Gifting | Cards, flowers and candles | Chocolates and treats | Dining and tableware</text>
        </g>
      </svg>
    `
  },
  // 5. Tesco Fresh Food Catalog
  {
    name: 'ux-tesco-fresh-food.png',
    render: () => `
      <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="850" fill="#F9FAFB" />
        ${createTescoHeader()}
        ${createSideBasket()}

        <g transform="translate(40, 130)">
          <text x="0" y="30" fill="#111827" font-size="28" font-weight="bold" font-family="Arial, sans-serif">Fresh Fruit</text>
          
          <!-- Category Pills -->
          <g transform="translate(0, 50)">
            <rect x="0" y="0" width="110" height="36" rx="4" fill="#00539F" /><text x="15" y="23" fill="#FFFFFF" font-size="13" font-weight="bold">🍊 Fresh Fruit</text>
            <rect x="120" y="0" width="100" height="36" rx="4" fill="#FFFFFF" stroke="#E5E7EB" /><text x="135" y="23" fill="#111827" font-size="13">🍌 Bananas</text>
            <rect x="230" y="0" width="130" height="36" rx="4" fill="#FFFFFF" stroke="#E5E7EB" /><text x="245" y="23" fill="#111827" font-size="13">🍎 Apples &amp; Pears</text>
            <rect x="370" y="0" width="150" height="36" rx="4" fill="#FFFFFF" stroke="#E5E7EB" /><text x="385" y="23" fill="#111827" font-size="13">🍓 Berries &amp; Cherries</text>
          </g>

          <!-- Product Grid -->
          <g transform="translate(0, 130)">
            <!-- Product Card 1 -->
            <rect x="0" y="0" width="190" height="260" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
            <text x="95" y="90" font-size="60" text-anchor="middle">🍊</text>
            <text x="15" y="160" fill="#111827" font-size="14" font-weight="bold" font-family="Arial, sans-serif">Sweet Easy Peelers</text>
            <text x="15" y="180" fill="#6B7280" font-size="12" font-family="Arial, sans-serif">600g</text>
            <text x="15" y="210" fill="#00539F" font-size="18" font-weight="bold" font-family="Arial, sans-serif">£1.50</text>
            <rect x="120" y="195" width="55" height="32" rx="16" fill="#00539F" /><text x="147" y="216" fill="#FFFFFF" font-size="13" font-weight="bold" text-anchor="middle">Add</text>

            <!-- Product Card 2 -->
            <rect x="210" y="0" width="190" height="260" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
            <text x="305" y="90" font-size="60" text-anchor="middle">🍎</text>
            <text x="225" y="160" fill="#111827" font-size="14" font-weight="bold" font-family="Arial, sans-serif">Pink Lady Apples</text>
            <text x="225" y="180" fill="#6B7280" font-size="12" font-family="Arial, sans-serif">5 pack</text>
            <text x="225" y="210" fill="#00539F" font-size="18" font-weight="bold" font-family="Arial, sans-serif">£2.20</text>
            <rect x="330" y="195" width="55" height="32" rx="16" fill="#00539F" /><text x="357" y="216" fill="#FFFFFF" font-size="13" font-weight="bold" text-anchor="middle">Add</text>

            <!-- Product Card 3 -->
            <rect x="420" y="0" width="190" height="260" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
            <text x="515" y="90" font-size="60" text-anchor="middle">🍌</text>
            <text x="435" y="160" fill="#111827" font-size="14" font-weight="bold" font-family="Arial, sans-serif">Ripe Bananas</text>
            <text x="435" y="180" fill="#6B7280" font-size="12" font-family="Arial, sans-serif">5 pack</text>
            <text x="435" y="210" fill="#00539F" font-size="18" font-weight="bold" font-family="Arial, sans-serif">£0.89</text>
            <rect x="540" y="195" width="55" height="32" rx="16" fill="#00539F" /><text x="567" y="216" fill="#FFFFFF" font-size="13" font-weight="bold" text-anchor="middle">Add</text>
          </g>
        </g>
      </svg>
    `
  },
  // 6. Tesco Confectionery Clubcard
  {
    name: 'ux-tesco-confectionery.png',
    render: () => `
      <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="850" fill="#F9FAFB" />
        ${createTescoHeader()}
        ${createSideBasket()}

        <g transform="translate(40, 130)">
          <text x="0" y="30" fill="#111827" font-size="28" font-weight="bold" font-family="Arial, sans-serif">Chocolates &amp; Boxed Gifts</text>

          <g transform="translate(0, 60)">
            <!-- Item 1 Maltesers -->
            <rect x="0" y="0" width="210" height="340" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
            <text x="105" y="80" font-size="60" text-anchor="middle">🍫</text>
            <text x="15" y="140" fill="#111827" font-size="14" font-weight="bold" font-family="Arial, sans-serif">Maltesers Box 310g</text>

            <!-- Clubcard Yellow Badge -->
            <rect x="15" y="170" width="180" height="40" rx="4" fill="#FFE600" />
            <rect x="15" y="170" width="60" height="40" rx="4" fill="#00539F" />
            <text x="22" y="188" fill="#FFFFFF" font-size="9" font-weight="bold" font-family="Arial, sans-serif">Clubcard</text>
            <text x="26" y="200" fill="#FFFFFF" font-size="9" font-weight="bold" font-family="Arial, sans-serif">Price</text>
            <text x="85" y="195" fill="#00539F" font-size="14" font-weight="900" font-family="Arial, sans-serif">£4.50 Save £1.50</text>

            <text x="15" y="245" fill="#111827" font-size="22" font-weight="900" font-family="Arial, sans-serif">£6.00</text>
            <rect x="110" y="280" width="85" height="38" rx="19" fill="#00539F" /><text x="152" y="304" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">Add</text>

            <!-- Item 2 Galaxy -->
            <rect x="230" y="0" width="210" height="340" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
            <text x="335" y="80" font-size="60" text-anchor="middle">🍬</text>
            <text x="245" y="140" fill="#111827" font-size="14" font-weight="bold" font-family="Arial, sans-serif">Galaxy Smooth Milk 360g</text>

            <rect x="245" y="170" width="180" height="40" rx="4" fill="#FFE600" />
            <rect x="245" y="170" width="60" height="40" rx="4" fill="#00539F" />
            <text x="252" y="188" fill="#FFFFFF" font-size="9" font-weight="bold" font-family="Arial, sans-serif">Clubcard</text>
            <text x="256" y="200" fill="#FFFFFF" font-size="9" font-weight="bold" font-family="Arial, sans-serif">Price</text>
            <text x="315" y="195" fill="#00539F" font-size="14" font-weight="900" font-family="Arial, sans-serif">£4.50 Clubcard</text>

            <text x="245" y="245" fill="#111827" font-size="22" font-weight="900" font-family="Arial, sans-serif">£5.00</text>
            <rect x="340" y="280" width="85" height="38" rx="19" fill="#00539F" /><text x="382" y="304" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">Add</text>

            <!-- Item 3 Lindt -->
            <rect x="460" y="0" width="210" height="340" rx="8" fill="#FFFFFF" stroke="#E5E7EB" />
            <text x="565" y="80" font-size="60" text-anchor="middle">🎁</text>
            <text x="475" y="140" fill="#111827" font-size="14" font-weight="bold" font-family="Arial, sans-serif">Lindt Lindor Truffles 200g</text>
            <text x="475" y="245" fill="#111827" font-size="22" font-weight="900" font-family="Arial, sans-serif">£6.00</text>
            <rect x="570" y="280" width="85" height="38" rx="19" fill="#00539F" /><text x="612" y="304" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">Add</text>
          </g>
        </g>
      </svg>
    `
  },
  // 7. Tesco F&F Clothing
  {
    name: 'ux-tesco-fashion-hero.png',
    render: () => `
      <svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="850" fill="#FFFFFF" />
        ${createTescoHeader()}

        <g transform="translate(40, 130)">
          <!-- F&F Logo -->
          <rect x="380" y="0" width="120" height="60" fill="#111827" />
          <text x="440" y="42" fill="#FFFFFF" font-size="32" font-weight="900" text-anchor="middle" font-family="Times New Roman, serif">F&amp;F</text>

          <!-- Banner -->
          <g transform="translate(0, 80)">
            <rect x="0" y="0" width="440" height="300" fill="#F9FAFB" />
            <text x="30" y="80" fill="#111827" font-size="32" font-family="Times New Roman, serif">Makes fashion sense</text>
            <text x="30" y="120" fill="#4B5563" font-size="16" font-family="Arial, sans-serif">Let your wardrobe spring forward with</text>
            <text x="30" y="145" fill="#4B5563" font-size="16" font-family="Arial, sans-serif">lighter layers and tones</text>

            <rect x="450" y="0" width="430" height="300" fill="#E5E7EB" rx="8" />
            <text x="665" y="160" font-size="90" text-anchor="middle">🧥✨</text>
          </g>
        </g>
      </svg>
    `
  }
];

async function generateAllUxGallery() {
  for (const item of uxImages) {
    const svgStr = item.render();
    const buffer = await sharp(Buffer.from(svgStr)).png().toBuffer();
    
    const p1 = path.join(galleryDir, item.name);
    const p2 = path.join(distGalleryDir, item.name);

    fs.writeFileSync(p1, buffer);
    fs.writeFileSync(p2, buffer);
    console.log(`Generated UX Gallery Image: ${p1}`);
  }
}

generateAllUxGallery().catch(console.error);
