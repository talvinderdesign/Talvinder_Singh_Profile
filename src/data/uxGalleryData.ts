export interface GalleryItem {
  id: string;
  url: string;
  youtubeId?: string;
  title: string;
  category: 'ux-design' | 'marketing-collateral' | 'graphic-design' | 'motion-graphics' | 'document-design' | '3d-game-design';
  categoryLabel: string;
  client: string;
  caption: string;
}

export const UX_GALLERY_IMAGES: GalleryItem[] = [
  {
    "id": "motion-video-1",
    "url": "https://img.youtube.com/vi/_7JVY9FZqtI/hqdefault.jpg",
    "youtubeId": "_7JVY9FZqtI",
    "title": "Motion Graphics - 3D & Brand Animation Reel 01",
    "category": "motion-graphics",
    "categoryLabel": "Motion Graphics",
    "client": "After Effects / Motion Studio",
    "caption": "Motion Graphics - 3D & Brand Animation Reel 01"
  },
  {
    "id": "motion-video-2",
    "url": "https://img.youtube.com/vi/r2TzYPMPMR0/hqdefault.jpg",
    "youtubeId": "r2TzYPMPMR0",
    "title": "Motion Graphics - Kinetic Typography & VFX Reel 02",
    "category": "motion-graphics",
    "categoryLabel": "Motion Graphics",
    "client": "After Effects / Motion Studio",
    "caption": "Motion Graphics - Kinetic Typography & VFX Reel 02"
  },
  {
    "id": "motion-video-3",
    "url": "https://img.youtube.com/vi/40ZGHTEn1BY/hqdefault.jpg",
    "youtubeId": "40ZGHTEn1BY",
    "title": "Motion Graphics - UI Micro Interactions Reel 03",
    "category": "motion-graphics",
    "categoryLabel": "Motion Graphics",
    "client": "After Effects / Motion Studio",
    "caption": "Motion Graphics - UI Micro Interactions Reel 03"
  },
  {
    "id": "motion-video-4",
    "url": "https://img.youtube.com/vi/5vAn6HfxjaA/hqdefault.jpg",
    "youtubeId": "5vAn6HfxjaA",
    "title": "Motion Graphics - Commercial & Promo Motion 04",
    "category": "motion-graphics",
    "categoryLabel": "Motion Graphics",
    "client": "After Effects / Motion Studio",
    "caption": "Motion Graphics - Commercial & Promo Motion 04"
  },
  {
    "id": "motion-video-5",
    "url": "https://img.youtube.com/vi/TQPkt3o1FYc/hqdefault.jpg",
    "youtubeId": "TQPkt3o1FYc",
    "title": "Motion Graphics - Brand Identity Motion Showcase 05",
    "category": "motion-graphics",
    "categoryLabel": "Motion Graphics",
    "client": "After Effects / Motion Studio",
    "caption": "Motion Graphics - Brand Identity Motion Showcase 05"
  },
  {
    "id": "motion-video-6",
    "url": "https://img.youtube.com/vi/PA5w2sqszms/hqdefault.jpg",
    "youtubeId": "PA5w2sqszms",
    "title": "Motion Graphics - Title Sequences & Visual Effects 06",
    "category": "motion-graphics",
    "categoryLabel": "Motion Graphics",
    "client": "After Effects / Motion Studio",
    "caption": "Motion Graphics - Title Sequences & Visual Effects 06"
  },
  {
    "id": "motion-video-7",
    "url": "https://img.youtube.com/vi/e-jZDFJZJEE/hqdefault.jpg",
    "youtubeId": "e-jZDFJZJEE",
    "title": "Motion Graphics - Broadcast & Character Motion 07",
    "category": "motion-graphics",
    "categoryLabel": "Motion Graphics",
    "client": "After Effects / Motion Studio",
    "caption": "Motion Graphics - Broadcast & Character Motion 07"
  },
  {
    "id": "motion-video-8",
    "url": "https://img.youtube.com/vi/xi1lahjDF4U/hqdefault.jpg",
    "youtubeId": "xi1lahjDF4U",
    "title": "Motion Graphics - Product Showcase & 3D Motion 08",
    "category": "motion-graphics",
    "categoryLabel": "Motion Graphics",
    "client": "After Effects / Motion Studio",
    "caption": "Motion Graphics - Product Showcase & 3D Motion 08"
  },
  {
    "id": "ux-design-1",
    "url": "/ux-design/11-%20Menu.png",
    "title": "Mobile Banking & Fintech - Navigation Menu UX",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile Banking & Fintech - Navigation Menu UX"
  },
  {
    "id": "ux-design-2",
    "url": "/ux-design/12-%20Send%20money%20(Amount).png",
    "title": "Mobile Banking - Send Money Amount Selection",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile Banking - Send Money Amount Selection"
  },
  {
    "id": "ux-design-3",
    "url": "/ux-design/13-%20Send%20money.png",
    "title": "Fintech App - Money Transfer & Recipient Selection",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Fintech App - Money Transfer & Recipient Selection"
  },
  {
    "id": "ux-design-4",
    "url": "/ux-design/14-%20Verification.png",
    "title": "Security & 2FA Identity Verification Screen",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Security & 2FA Identity Verification Screen"
  },
  {
    "id": "ux-design-5",
    "url": "/ux-design/15-%20Code.png",
    "title": "Mobile Banking - OTP Code Verification Interface",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile Banking - OTP Code Verification Interface"
  },
  {
    "id": "ux-design-6",
    "url": "/ux-design/16-%20Receit.png",
    "title": "Digital Wallet - Transaction Receipt & Confirmation",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Digital Wallet - Transaction Receipt & Confirmation"
  },
  {
    "id": "ux-design-7",
    "url": "/ux-design/17-%20Cards.png",
    "title": "Card Management & Wallet - Debit/Credit Cards",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Card Management & Wallet - Debit/Credit Cards"
  },
  {
    "id": "ux-design-8",
    "url": "/ux-design/18-%20Add%20new%20card.png",
    "title": "Payment Gateway - Add New Card & Onboarding",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Payment Gateway - Add New Card & Onboarding"
  },
  {
    "id": "ux-design-9",
    "url": "/ux-design/19-%20Transactions.png",
    "title": "Financial Dashboard - Transaction History Analytics",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Financial Dashboard - Transaction History Analytics"
  },
  {
    "id": "ux-design-10",
    "url": "/ux-design/20-%20Top%20up.png",
    "title": "Digital Wallet - Balance Top-Up & Quick Refill",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Digital Wallet - Balance Top-Up & Quick Refill"
  },
  {
    "id": "ux-design-11",
    "url": "/ux-design/23-%20Bill%20payment.png",
    "title": "Utilities & Recurring Bill Payment Hub",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Utilities & Recurring Bill Payment Hub"
  },
  {
    "id": "ux-design-12",
    "url": "/ux-design/24-%20Loans.png",
    "title": "Personal Loans & Credit Rating Interface",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Personal Loans & Credit Rating Interface"
  },
  {
    "id": "ux-design-13",
    "url": "/ux-design/25-%20Budget.png",
    "title": "Financial Planning & Personal Budget Tracker",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Financial Planning & Personal Budget Tracker"
  },
  {
    "id": "ux-design-14",
    "url": "/ux-design/Frame%2053.png",
    "title": "Interactive App Architecture - Mobile Flow Showcase",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Interactive App Architecture - Mobile Flow Showcase"
  },
  {
    "id": "ux-design-15",
    "url": "/ux-design/Frame%2054.png",
    "title": "Interactive App Architecture - Feature Highlights Dashboard",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Interactive App Architecture - Feature Highlights Dashboard"
  },
  {
    "id": "ux-design-16",
    "url": "/ux-design/iPhone%2016%20Pro%20Max%20-%208-1.png",
    "title": "Mobile App Experience - Onboarding & Welcome Flow",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile App Experience - Onboarding & Welcome Flow"
  },
  {
    "id": "ux-design-17",
    "url": "/ux-design/iPhone%2016%20Pro%20Max%20-%2018-1.png",
    "title": "Mobile App Experience - Profile & Account Settings",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile App Experience - Profile & Account Settings"
  },
  {
    "id": "ux-design-18",
    "url": "/ux-design/iPhone%2016%20Pro%20Max%20-%2019.png",
    "title": "Mobile App Experience - Premium Membership & Subscription",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile App Experience - Premium Membership & Subscription"
  },
  {
    "id": "ux-design-19",
    "url": "/ux-design/Screen%2025-1.png",
    "title": "Mobile UI Design - Splash Screen & Onboarding",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile UI Design - Splash Screen & Onboarding"
  },
  {
    "id": "ux-design-20",
    "url": "/ux-design/Screen%20111-1.png",
    "title": "Mobile App Suite - Main Dashboard & Quick Actions",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile App Suite - Main Dashboard & Quick Actions"
  },
  {
    "id": "ux-design-21",
    "url": "/ux-design/Screen%20112-1.png",
    "title": "Mobile App Suite - Content Feed & Search Filters",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile App Suite - Content Feed & Search Filters"
  },
  {
    "id": "ux-design-22",
    "url": "/ux-design/Screen%20113-1.png",
    "title": "Mobile App Suite - Item Details & Navigation",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile App Suite - Item Details & Navigation"
  },
  {
    "id": "ux-design-23",
    "url": "/ux-design/Screen%20114-1.png",
    "title": "Mobile App Suite - User Activity & Notifications",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile App Suite - User Activity & Notifications"
  },
  {
    "id": "ux-design-24",
    "url": "/ux-design/Screen%20116-1.png",
    "title": "Mobile App Suite - App Settings & Preferences",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Mobile App Suite - App Settings & Preferences"
  },
  {
    "id": "ux-design-25",
    "url": "/ux-design/Screen%20142.png",
    "title": "Enterprise Mobile UI - Performance Analytics 01",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Performance Analytics 01"
  },
  {
    "id": "ux-design-26",
    "url": "/ux-design/Screen%20143.png",
    "title": "Enterprise Mobile UI - Task Manager & Status 02",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Task Manager & Status 02"
  },
  {
    "id": "ux-design-27",
    "url": "/ux-design/Screen%20144.png",
    "title": "Enterprise Mobile UI - Calendar & Schedule Planner 03",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Calendar & Schedule Planner 03"
  },
  {
    "id": "ux-design-28",
    "url": "/ux-design/Screen%20145.png",
    "title": "Enterprise Mobile UI - User Management & Roles 04",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - User Management & Roles 04"
  },
  {
    "id": "ux-design-29",
    "url": "/ux-design/Screen%20146.png",
    "title": "Enterprise Mobile UI - Metrics & Data Charts 05",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Metrics & Data Charts 05"
  },
  {
    "id": "ux-design-30",
    "url": "/ux-design/Screen%20147.png",
    "title": "Enterprise Mobile UI - Media & Resource Library 06",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Media & Resource Library 06"
  },
  {
    "id": "ux-design-31",
    "url": "/ux-design/Screen%20148.png",
    "title": "Enterprise Mobile UI - System Settings & Config 07",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - System Settings & Config 07"
  },
  {
    "id": "ux-design-32",
    "url": "/ux-design/Screen%20149.png",
    "title": "Enterprise Mobile UI - Custom Workflow Builder 08",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Custom Workflow Builder 08"
  },
  {
    "id": "ux-design-33",
    "url": "/ux-design/Screen%20150.png",
    "title": "Enterprise Mobile UI - Alert & Notification Center 09",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Alert & Notification Center 09"
  },
  {
    "id": "ux-design-34",
    "url": "/ux-design/Screen%20151.png",
    "title": "Enterprise Mobile UI - Interactive Report Screen 10",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Interactive Report Screen 10"
  },
  {
    "id": "ux-design-35",
    "url": "/ux-design/Screen%20152.png",
    "title": "Enterprise Mobile UI - Account Overview & Security 11",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Enterprise Mobile UI - Account Overview & Security 11"
  },
  {
    "id": "ux-design-36",
    "url": "/ux-design/Telegram%20Authorization.png",
    "title": "Telegram App Redesign - Phone Login & Security Verification",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Telegram App Redesign - Phone Login & Security Verification"
  },
  {
    "id": "ux-design-37",
    "url": "/ux-design/Telegram%20Calls.png",
    "title": "Telegram App Redesign - Voice & Video Call Log UX",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Telegram App Redesign - Voice & Video Call Log UX"
  },
  {
    "id": "ux-design-38",
    "url": "/ux-design/Telegram%20Chat%20Modal.png",
    "title": "Telegram App Redesign - Instant Message Actions & Modal UI",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Telegram App Redesign - Instant Message Actions & Modal UI"
  },
  {
    "id": "ux-design-39",
    "url": "/ux-design/Telegram%20Chat.png",
    "title": "Telegram App Redesign - Active Chat Screen & Media Sharing",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Telegram App Redesign - Active Chat Screen & Media Sharing"
  },
  {
    "id": "ux-design-40",
    "url": "/ux-design/Telegram%20Contacts.png",
    "title": "Telegram App Redesign - Contacts & Status View",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Telegram App Redesign - Contacts & Status View"
  },
  {
    "id": "ux-design-41",
    "url": "/ux-design/Telegram%20Data%20and%20Storage.png",
    "title": "Telegram App Redesign - Storage Usage & Network Settings",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Telegram App Redesign - Storage Usage & Network Settings"
  },
  {
    "id": "ux-design-42",
    "url": "/ux-design/Telegram%20Edit%20Profile.png",
    "title": "Telegram App Redesign - Profile Customization & User Info",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Telegram App Redesign - Profile Customization & User Info"
  },
  {
    "id": "ux-design-43",
    "url": "/ux-design/Tesco%201.jpg",
    "title": "Tesco E-Commerce - Homepage & Promotional Offers",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco E-Commerce - Homepage & Promotional Offers"
  },
  {
    "id": "ux-design-44",
    "url": "/ux-design/Tesco%202.jpg",
    "title": "Tesco Grocery - Category Browsing & Clubcard Deals",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco Grocery - Category Browsing & Clubcard Deals"
  },
  {
    "id": "ux-design-45",
    "url": "/ux-design/Tesco%203.jpg",
    "title": "Tesco Shopping - Product Listing & Quick Cart",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco Shopping - Product Listing & Quick Cart"
  },
  {
    "id": "ux-design-46",
    "url": "/ux-design/Tesco%204.jpg",
    "title": "Tesco Grocery - Product Details & Nutritional Info",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco Grocery - Product Details & Nutritional Info"
  },
  {
    "id": "ux-design-47",
    "url": "/ux-design/Tesco%205.jpg",
    "title": "Tesco Mobile - Delivery Slot Selection & Booking",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco Mobile - Delivery Slot Selection & Booking"
  },
  {
    "id": "ux-design-48",
    "url": "/ux-design/Tesco%206.jpg",
    "title": "Tesco Shopping Basket & Order Summary Interface",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco Shopping Basket & Order Summary Interface"
  },
  {
    "id": "ux-design-49",
    "url": "/ux-design/Tesco%207.jpg",
    "title": "Tesco Checkout - Payment & Address Confirmation",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco Checkout - Payment & Address Confirmation"
  },
  {
    "id": "ux-design-50",
    "url": "/ux-design/Tesco%208.jpg",
    "title": "Tesco Clubcard & Rewards Points Portal",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco Clubcard & Rewards Points Portal"
  },
  {
    "id": "ux-design-51",
    "url": "/ux-design/Tesco%209.jpg",
    "title": "Tesco Order Tracking & Delivery Status UX",
    "category": "ux-design",
    "categoryLabel": "Graphic Design",
    "client": "Tesco PLC / Mobile App Studio",
    "caption": "Tesco Order Tracking & Delivery Status UX"
  },
  {
    "id": "marketing-collateral-1",
    "url": "/marketing-collateral/722357__705uf8c_ycbl4_jhkoxb02vy.jpg",
    "title": "Marketing Collateral Asset -  705uf8c ycbl4 jhkoxb02vy",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset -  705uf8c ycbl4 jhkoxb02vy"
  },
  {
    "id": "marketing-collateral-2",
    "url": "/marketing-collateral/722357_2ylrizhl54xaw3y5xn8pkgdsi.jpg",
    "title": "Marketing Collateral Asset - 2ylrizhl54xaw3y5xn8pkgdsi",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 2ylrizhl54xaw3y5xn8pkgdsi"
  },
  {
    "id": "marketing-collateral-3",
    "url": "/marketing-collateral/722357_3o4nnnua4mevud3vpciddtllk.jpg",
    "title": "Marketing Collateral Asset - 3o4nnnua4mevud3vpciddtllk",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 3o4nnnua4mevud3vpciddtllk"
  },
  {
    "id": "marketing-collateral-4",
    "url": "/marketing-collateral/722357_4hmjlfjswmweizixui8wxhqcd.jpg",
    "title": "Marketing Collateral Asset - 4hmjlfjswmweizixui8wxhqcd",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 4hmjlfjswmweizixui8wxhqcd"
  },
  {
    "id": "marketing-collateral-5",
    "url": "/marketing-collateral/722357_4nvrrfmr4bkaizwivu0fqqpuq.jpg",
    "title": "Marketing Collateral Asset - 4nvrrfmr4bkaizwivu0fqqpuq",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 4nvrrfmr4bkaizwivu0fqqpuq"
  },
  {
    "id": "marketing-collateral-6",
    "url": "/marketing-collateral/722357_5ibllhogpvu2gynhgq9b7x8qz.jpg",
    "title": "Marketing Collateral Asset - 5ibllhogpvu2gynhgq9b7x8qz",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 5ibllhogpvu2gynhgq9b7x8qz"
  },
  {
    "id": "marketing-collateral-7",
    "url": "/marketing-collateral/722357_5njtsh2fwaingxrchc0vyxf0n.jpg",
    "title": "Marketing Collateral Asset - 5njtsh2fwaingxrchc0vyxf0n",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 5njtsh2fwaingxrchc0vyxf0n"
  },
  {
    "id": "marketing-collateral-8",
    "url": "/marketing-collateral/722357_6jt7to09f23e0czmuy9vx84uz.jpg",
    "title": "Marketing Collateral Asset - 6jt7to09f23e0czmuy9vx84uz",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 6jt7to09f23e0czmuy9vx84uz"
  },
  {
    "id": "marketing-collateral-9",
    "url": "/marketing-collateral/722357_6mpa2aylbycg3wasp5fpbaccw.jpg",
    "title": "Marketing Collateral Asset - 6mpa2aylbycg3wasp5fpbaccw",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 6mpa2aylbycg3wasp5fpbaccw"
  },
  {
    "id": "marketing-collateral-10",
    "url": "/marketing-collateral/722357_7t0x5ntlu7gyaqtftpgrik557.jpg",
    "title": "Marketing Collateral Asset - 7t0x5ntlu7gyaqtftpgrik557",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 7t0x5ntlu7gyaqtftpgrik557"
  },
  {
    "id": "marketing-collateral-11",
    "url": "/marketing-collateral/722357_8abmfw2x0lzraqjqqwb39rtdi.jpg",
    "title": "Marketing Collateral Asset - 8abmfw2x0lzraqjqqwb39rtdi",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 8abmfw2x0lzraqjqqwb39rtdi"
  },
  {
    "id": "marketing-collateral-12",
    "url": "/marketing-collateral/722357_8kmnnx5ly_8b0clcpkrnveubn.jpg",
    "title": "Marketing Collateral Asset - 8kmnnx5ly 8b0clcpkrnveubn",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 8kmnnx5ly 8b0clcpkrnveubn"
  },
  {
    "id": "marketing-collateral-13",
    "url": "/marketing-collateral/722357_9vtzpzr86jjtikb2_txdaour8.jpg",
    "title": "Marketing Collateral Asset - 9vtzpzr86jjtikb2 txdaour8",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 9vtzpzr86jjtikb2 txdaour8"
  },
  {
    "id": "marketing-collateral-14",
    "url": "/marketing-collateral/722357_9wzyie3i3bsgndomdofjqyoo3.jpg",
    "title": "Marketing Collateral Asset - 9wzyie3i3bsgndomdofjqyoo3",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 9wzyie3i3bsgndomdofjqyoo3"
  },
  {
    "id": "marketing-collateral-15",
    "url": "/marketing-collateral/722357_048rxyuhtrxtqgik0k0nr6exm.jpg",
    "title": "Marketing Collateral Asset - 048rxyuhtrxtqgik0k0nr6exm",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 048rxyuhtrxtqgik0k0nr6exm"
  },
  {
    "id": "marketing-collateral-16",
    "url": "/marketing-collateral/722357_a4ch2fbgjse4t9aq9xrzqwo0e.jpg",
    "title": "Marketing Collateral Asset - A4ch2fbgjse4t9aq9xrzqwo0e",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - A4ch2fbgjse4t9aq9xrzqwo0e"
  },
  {
    "id": "marketing-collateral-17",
    "url": "/marketing-collateral/722357_adyihzx3rzba74czze6y_w0zh.jpg",
    "title": "Marketing Collateral Asset - Adyihzx3rzba74czze6y w0zh",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Adyihzx3rzba74czze6y w0zh"
  },
  {
    "id": "marketing-collateral-18",
    "url": "/marketing-collateral/722357_akfcj8j0oqjrigmxuxgfgj40o.jpg",
    "title": "Marketing Collateral Asset - Akfcj8j0oqjrigmxuxgfgj40o",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Akfcj8j0oqjrigmxuxgfgj40o"
  },
  {
    "id": "marketing-collateral-19",
    "url": "/marketing-collateral/722357_atskciobfwplak5z9eogp0jbk.jpg",
    "title": "Marketing Collateral Asset - Atskciobfwplak5z9eogp0jbk",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Atskciobfwplak5z9eogp0jbk"
  },
  {
    "id": "marketing-collateral-20",
    "url": "/marketing-collateral/722357_ay4ynygkezgon4f0tuqlmie3p.jpg",
    "title": "Marketing Collateral Asset - Ay4ynygkezgon4f0tuqlmie3p",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Ay4ynygkezgon4f0tuqlmie3p"
  },
  {
    "id": "marketing-collateral-21",
    "url": "/marketing-collateral/722357_aygeyf3knigajlrul69nqfciz.jpg",
    "title": "Marketing Collateral Asset - Aygeyf3knigajlrul69nqfciz",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Aygeyf3knigajlrul69nqfciz"
  },
  {
    "id": "marketing-collateral-22",
    "url": "/marketing-collateral/722357_bhueajpdm3r_8ag4vi8ouzzxx.jpg",
    "title": "Marketing Collateral Asset - Bhueajpdm3r 8ag4vi8ouzzxx",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Bhueajpdm3r 8ag4vi8ouzzxx"
  },
  {
    "id": "marketing-collateral-23",
    "url": "/marketing-collateral/722357_c0zobigoevreg7k24xhesgalz.jpg",
    "title": "Marketing Collateral Asset - C0zobigoevreg7k24xhesgalz",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - C0zobigoevreg7k24xhesgalz"
  },
  {
    "id": "marketing-collateral-24",
    "url": "/marketing-collateral/722357_efhhx5rvpovfxhemqmzxr_um7.jpg",
    "title": "Marketing Collateral Asset - Efhhx5rvpovfxhemqmzxr um7",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Efhhx5rvpovfxhemqmzxr um7"
  },
  {
    "id": "marketing-collateral-25",
    "url": "/marketing-collateral/722357_efnmjhtkjdcxwgffvgppxudyr.jpg",
    "title": "Marketing Collateral Asset - Efnmjhtkjdcxwgffvgppxudyr",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Efnmjhtkjdcxwgffvgppxudyr"
  },
  {
    "id": "marketing-collateral-26",
    "url": "/marketing-collateral/722357_egikw58ahoomoeqrhu4wetc6u.jpg",
    "title": "Marketing Collateral Asset - Egikw58ahoomoeqrhu4wetc6u",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Egikw58ahoomoeqrhu4wetc6u"
  },
  {
    "id": "marketing-collateral-27",
    "url": "/marketing-collateral/722357_egwiqeccyut6hh0tvbcxctryg.jpg",
    "title": "Marketing Collateral Asset - Egwiqeccyut6hh0tvbcxctryg",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Egwiqeccyut6hh0tvbcxctryg"
  },
  {
    "id": "marketing-collateral-28",
    "url": "/marketing-collateral/722357_ep8j9ffqnz2qfubfuz3hzgi7v.jpg",
    "title": "Marketing Collateral Asset - Ep8j9ffqnz2qfubfuz3hzgi7v",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Ep8j9ffqnz2qfubfuz3hzgi7v"
  },
  {
    "id": "marketing-collateral-29",
    "url": "/marketing-collateral/722357_eqnibkrbkr0cknyrxukepqb4q.jpg",
    "title": "Marketing Collateral Asset - Eqnibkrbkr0cknyrxukepqb4q",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Eqnibkrbkr0cknyrxukepqb4q"
  },
  {
    "id": "marketing-collateral-30",
    "url": "/marketing-collateral/722357_ezwq_nfdlx9lazpnmxa4zqhul%20(1).jpg",
    "title": "Marketing Collateral Asset - Ezwq nfdlx9lazpnmxa4zqhul (1)",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Ezwq nfdlx9lazpnmxa4zqhul (1)"
  },
  {
    "id": "marketing-collateral-31",
    "url": "/marketing-collateral/722357_ezwq_nfdlx9lazpnmxa4zqhul.jpg",
    "title": "Marketing Collateral Asset - Ezwq nfdlx9lazpnmxa4zqhul",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Ezwq nfdlx9lazpnmxa4zqhul"
  },
  {
    "id": "marketing-collateral-32",
    "url": "/marketing-collateral/722357_fxt5cn2utsfeihc7gpif2xgah.jpg",
    "title": "Marketing Collateral Asset - Fxt5cn2utsfeihc7gpif2xgah",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Fxt5cn2utsfeihc7gpif2xgah"
  },
  {
    "id": "marketing-collateral-33",
    "url": "/marketing-collateral/722357_gguaz9anbvrgtod_9n_i0o26z.jpg",
    "title": "Marketing Collateral Asset - Gguaz9anbvrgtod 9n i0o26z",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Gguaz9anbvrgtod 9n i0o26z"
  },
  {
    "id": "marketing-collateral-34",
    "url": "/marketing-collateral/722357_guu5sxskxwqpad3hlr0j7gmku.jpg",
    "title": "Marketing Collateral Asset - Guu5sxskxwqpad3hlr0j7gmku",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Guu5sxskxwqpad3hlr0j7gmku"
  },
  {
    "id": "marketing-collateral-35",
    "url": "/marketing-collateral/722357_gvgyhg7upefeeuqwtgr83kn4k.jpg",
    "title": "Marketing Collateral Asset - Gvgyhg7upefeeuqwtgr83kn4k",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Gvgyhg7upefeeuqwtgr83kn4k"
  },
  {
    "id": "marketing-collateral-36",
    "url": "/marketing-collateral/722357_h5iybspz0jjkuw5i4f_okrjb3.jpg",
    "title": "Marketing Collateral Asset - H5iybspz0jjkuw5i4f okrjb3",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - H5iybspz0jjkuw5i4f okrjb3"
  },
  {
    "id": "marketing-collateral-37",
    "url": "/marketing-collateral/722357_hgp_tfrm_myqvqv79riuxebhr.jpg",
    "title": "Marketing Collateral Asset - Hgp tfrm myqvqv79riuxebhr",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Hgp tfrm myqvqv79riuxebhr"
  },
  {
    "id": "marketing-collateral-38",
    "url": "/marketing-collateral/722357_hmzo4wjvppp4iz7fs7jz6nx9w.jpg",
    "title": "Marketing Collateral Asset - Hmzo4wjvppp4iz7fs7jz6nx9w",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Hmzo4wjvppp4iz7fs7jz6nx9w"
  },
  {
    "id": "marketing-collateral-39",
    "url": "/marketing-collateral/722357_huk_m3ogbewfo04yhenganyzb.jpg",
    "title": "Marketing Collateral Asset - Huk m3ogbewfo04yhenganyzb",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Huk m3ogbewfo04yhenganyzb"
  },
  {
    "id": "marketing-collateral-40",
    "url": "/marketing-collateral/722357_hx_rrejxlalne_aruwkic2vhp.jpg",
    "title": "Marketing Collateral Asset - Hx rrejxlalne aruwkic2vhp",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Hx rrejxlalne aruwkic2vhp"
  },
  {
    "id": "marketing-collateral-41",
    "url": "/marketing-collateral/722357_icejgabee3yzxj60p7hmchifo.jpg",
    "title": "Marketing Collateral Asset - Icejgabee3yzxj60p7hmchifo",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Icejgabee3yzxj60p7hmchifo"
  },
  {
    "id": "marketing-collateral-42",
    "url": "/marketing-collateral/722357_icqkxehldcqsd5k9hcm7velvx.jpg",
    "title": "Marketing Collateral Asset - Icqkxehldcqsd5k9hcm7velvx",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Icqkxehldcqsd5k9hcm7velvx"
  },
  {
    "id": "marketing-collateral-43",
    "url": "/marketing-collateral/722357_je7suxcpkvm7op60ltrto2h2a.jpg",
    "title": "Marketing Collateral Asset - Je7suxcpkvm7op60ltrto2h2a",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Je7suxcpkvm7op60ltrto2h2a"
  },
  {
    "id": "marketing-collateral-44",
    "url": "/marketing-collateral/722357_jjsaxz5ockmy6fmsyxtw5osle.jpg",
    "title": "Marketing Collateral Asset - Jjsaxz5ockmy6fmsyxtw5osle",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Jjsaxz5ockmy6fmsyxtw5osle"
  },
  {
    "id": "marketing-collateral-45",
    "url": "/marketing-collateral/722357_jyvswzk6qhp0ffqozoqfjeo3c.jpg",
    "title": "Marketing Collateral Asset - Jyvswzk6qhp0ffqozoqfjeo3c",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Jyvswzk6qhp0ffqozoqfjeo3c"
  },
  {
    "id": "marketing-collateral-46",
    "url": "/marketing-collateral/722357_kaf6l6ki4mwmruejyfqumbgnn.jpg",
    "title": "Marketing Collateral Asset - Kaf6l6ki4mwmruejyfqumbgnn",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Kaf6l6ki4mwmruejyfqumbgnn"
  },
  {
    "id": "marketing-collateral-47",
    "url": "/marketing-collateral/722357_kzb5tvzbtgyw85jmtqdt2ij2d.jpg",
    "title": "Marketing Collateral Asset - Kzb5tvzbtgyw85jmtqdt2ij2d",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Kzb5tvzbtgyw85jmtqdt2ij2d"
  },
  {
    "id": "marketing-collateral-48",
    "url": "/marketing-collateral/722357_nkbnkrzawrfqh7dwuqiscfsat.jpg",
    "title": "Marketing Collateral Asset - Nkbnkrzawrfqh7dwuqiscfsat",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Nkbnkrzawrfqh7dwuqiscfsat"
  },
  {
    "id": "marketing-collateral-49",
    "url": "/marketing-collateral/722357_nzartx2kvdhmtpukhmn4kj5gu.jpg",
    "title": "Marketing Collateral Asset - Nzartx2kvdhmtpukhmn4kj5gu",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Nzartx2kvdhmtpukhmn4kj5gu"
  },
  {
    "id": "marketing-collateral-50",
    "url": "/marketing-collateral/722357_oivh6am98leks7pbbf55emdqs.jpg",
    "title": "Marketing Collateral Asset - Oivh6am98leks7pbbf55emdqs",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Oivh6am98leks7pbbf55emdqs"
  },
  {
    "id": "marketing-collateral-51",
    "url": "/marketing-collateral/722357_orgilt0tfsbs62rb4whuowxhk.jpg",
    "title": "Marketing Collateral Asset - Orgilt0tfsbs62rb4whuowxhk",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Orgilt0tfsbs62rb4whuowxhk"
  },
  {
    "id": "marketing-collateral-52",
    "url": "/marketing-collateral/722357_pfhjbdajkwlexmhmiy9xt7drx.jpg",
    "title": "Marketing Collateral Asset - Pfhjbdajkwlexmhmiy9xt7drx",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Pfhjbdajkwlexmhmiy9xt7drx"
  },
  {
    "id": "marketing-collateral-53",
    "url": "/marketing-collateral/722357_pj5rygpz2frznhxeuue2enkin.jpg",
    "title": "Marketing Collateral Asset - Pj5rygpz2frznhxeuue2enkin",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Pj5rygpz2frznhxeuue2enkin"
  },
  {
    "id": "marketing-collateral-54",
    "url": "/marketing-collateral/722357_rgvwkzuyy70jyy3tyq2wkklw_.jpg",
    "title": "Marketing Collateral Asset - Rgvwkzuyy70jyy3tyq2wkklw ",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Rgvwkzuyy70jyy3tyq2wkklw "
  },
  {
    "id": "marketing-collateral-55",
    "url": "/marketing-collateral/722357_rn3oofbokqqjtcz_y9hp5utlq.jpg",
    "title": "Marketing Collateral Asset - Rn3oofbokqqjtcz y9hp5utlq",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Rn3oofbokqqjtcz y9hp5utlq"
  },
  {
    "id": "marketing-collateral-56",
    "url": "/marketing-collateral/722357_s8uqssjythz_22j74atgthdmx.jpg",
    "title": "Marketing Collateral Asset - S8uqssjythz 22j74atgthdmx",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - S8uqssjythz 22j74atgthdmx"
  },
  {
    "id": "marketing-collateral-57",
    "url": "/marketing-collateral/722357_sdjvj6fgeasbazd6llmg8wnqe.jpg",
    "title": "Marketing Collateral Asset - Sdjvj6fgeasbazd6llmg8wnqe",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Sdjvj6fgeasbazd6llmg8wnqe"
  },
  {
    "id": "marketing-collateral-58",
    "url": "/marketing-collateral/722357_sf53bzejfwhc7bgohiwxyhedd.jpg",
    "title": "Marketing Collateral Asset - Sf53bzejfwhc7bgohiwxyhedd",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Sf53bzejfwhc7bgohiwxyhedd"
  },
  {
    "id": "marketing-collateral-59",
    "url": "/marketing-collateral/722357_sfxveledibdpoaff0padsrh4j.jpg",
    "title": "Marketing Collateral Asset - Sfxveledibdpoaff0padsrh4j",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Sfxveledibdpoaff0padsrh4j"
  },
  {
    "id": "marketing-collateral-60",
    "url": "/marketing-collateral/722357_tmzjmdjea7dykqlt4eqd68hhn.jpg",
    "title": "Marketing Collateral Asset - Tmzjmdjea7dykqlt4eqd68hhn",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Tmzjmdjea7dykqlt4eqd68hhn"
  },
  {
    "id": "marketing-collateral-61",
    "url": "/marketing-collateral/722357_tprs22uq7zsvlwlt_sbbhrgta.jpg",
    "title": "Marketing Collateral Asset - Tprs22uq7zsvlwlt sbbhrgta",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Tprs22uq7zsvlwlt sbbhrgta"
  },
  {
    "id": "marketing-collateral-62",
    "url": "/marketing-collateral/722357_u7awxmpdm6etnmidvllyel8aa.jpg",
    "title": "Marketing Collateral Asset - U7awxmpdm6etnmidvllyel8aa",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - U7awxmpdm6etnmidvllyel8aa"
  },
  {
    "id": "marketing-collateral-63",
    "url": "/marketing-collateral/722357_ubi77ncaonx3c9g5thdalhc_h.jpg",
    "title": "Marketing Collateral Asset - Ubi77ncaonx3c9g5thdalhc h",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Ubi77ncaonx3c9g5thdalhc h"
  },
  {
    "id": "marketing-collateral-64",
    "url": "/marketing-collateral/722357_unfrzxfzm5kxx8w6mnwvdeind.jpg",
    "title": "Marketing Collateral Asset - Unfrzxfzm5kxx8w6mnwvdeind",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Unfrzxfzm5kxx8w6mnwvdeind"
  },
  {
    "id": "marketing-collateral-65",
    "url": "/marketing-collateral/722357_unmgtchajwtj2_jrpiertocl9%20(1).jpg",
    "title": "Marketing Collateral Asset - Unmgtchajwtj2 jrpiertocl9 (1)",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Unmgtchajwtj2 jrpiertocl9 (1)"
  },
  {
    "id": "marketing-collateral-66",
    "url": "/marketing-collateral/722357_unmgtchajwtj2_jrpiertocl9.jpg",
    "title": "Marketing Collateral Asset - Unmgtchajwtj2 jrpiertocl9",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Unmgtchajwtj2 jrpiertocl9"
  },
  {
    "id": "marketing-collateral-67",
    "url": "/marketing-collateral/722357_vbpekhzvale2fprhdqjrtedh8.jpg",
    "title": "Marketing Collateral Asset - Vbpekhzvale2fprhdqjrtedh8",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Vbpekhzvale2fprhdqjrtedh8"
  },
  {
    "id": "marketing-collateral-68",
    "url": "/marketing-collateral/722357_vcmsgrcrtuwkobsnsgjupxqcx.jpg",
    "title": "Marketing Collateral Asset - Vcmsgrcrtuwkobsnsgjupxqcx",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Vcmsgrcrtuwkobsnsgjupxqcx"
  },
  {
    "id": "marketing-collateral-69",
    "url": "/marketing-collateral/722357_wkkyit5sq77go6qxqcdgyifkb.jpg",
    "title": "Marketing Collateral Asset - Wkkyit5sq77go6qxqcdgyifkb",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Wkkyit5sq77go6qxqcdgyifkb"
  },
  {
    "id": "marketing-collateral-70",
    "url": "/marketing-collateral/722357_wlw_pjzqza_nw2ivbv6fzsarp.jpg",
    "title": "Marketing Collateral Asset - Wlw pjzqza nw2ivbv6fzsarp",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Wlw pjzqza nw2ivbv6fzsarp"
  },
  {
    "id": "marketing-collateral-71",
    "url": "/marketing-collateral/722357_xltunihhpqncmfuohro426ndn.jpg",
    "title": "Marketing Collateral Asset - Xltunihhpqncmfuohro426ndn",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Xltunihhpqncmfuohro426ndn"
  },
  {
    "id": "marketing-collateral-72",
    "url": "/marketing-collateral/722357_y3zlgoqqz6hiyqrf3a9uujhod.jpg",
    "title": "Marketing Collateral Asset - Y3zlgoqqz6hiyqrf3a9uujhod",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Y3zlgoqqz6hiyqrf3a9uujhod"
  },
  {
    "id": "marketing-collateral-73",
    "url": "/marketing-collateral/Brand.jpg",
    "title": "Marketing Collateral Asset - Brand",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Brand"
  },
  {
    "id": "marketing-collateral-74",
    "url": "/marketing-collateral/large_722357_4fmhj9pnjhqtw3ypkvs_bncrk.jpg",
    "title": "Marketing Collateral Asset - 4fmhj9pnjhqtw3ypkvs bncrk",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - 4fmhj9pnjhqtw3ypkvs bncrk"
  },
  {
    "id": "marketing-collateral-75",
    "url": "/marketing-collateral/large_722357_ewkpzjrm22rnmaazzsvnldjoy.jpg",
    "title": "Marketing Collateral Asset - Ewkpzjrm22rnmaazzsvnldjoy",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Ewkpzjrm22rnmaazzsvnldjoy"
  },
  {
    "id": "marketing-collateral-76",
    "url": "/marketing-collateral/large_722357_rgbude7jvyi64rpfbljt_tetv.jpg",
    "title": "Marketing Collateral Asset - Rgbude7jvyi64rpfbljt tetv",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Rgbude7jvyi64rpfbljt tetv"
  },
  {
    "id": "marketing-collateral-77",
    "url": "/marketing-collateral/large_722357_rt6ryrcymgoduobsu_jggajss.jpg",
    "title": "Marketing Collateral Asset - Rt6ryrcymgoduobsu jggajss",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Rt6ryrcymgoduobsu jggajss"
  },
  {
    "id": "marketing-collateral-78",
    "url": "/marketing-collateral/large_722357_ulmzhrgtg8b_itiik3hac5gy3.jpg",
    "title": "Marketing Collateral Asset - Ulmzhrgtg8b itiik3hac5gy3",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Ulmzhrgtg8b itiik3hac5gy3"
  },
  {
    "id": "marketing-collateral-79",
    "url": "/marketing-collateral/markekting%20collaterals.jpg",
    "title": "Marketing Collateral Asset - Markekting collaterals",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Markekting collaterals"
  },
  {
    "id": "marketing-collateral-80",
    "url": "/marketing-collateral/Marketing%20collaterals%20(2).jpg",
    "title": "Marketing Collateral Asset - Marketing collaterals (2)",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Marketing collaterals (2)"
  },
  {
    "id": "marketing-collateral-81",
    "url": "/marketing-collateral/Marketing%20collaterals.jpg",
    "title": "Marketing Collateral Asset - Marketing collaterals",
    "category": "marketing-collateral",
    "categoryLabel": "Marketing Collateral",
    "client": "WNS Global / Havells / Orient",
    "caption": "Marketing Collateral Asset - Marketing collaterals"
  },
  {
    "id": "graphic-design-1",
    "url": "/graphic-design/722357__wcm3x7bfiyg5mrcn0mnsevmr.jpg",
    "title": "Graphic Design Asset -  wcm3x7bfiyg5mrcn0mnsevmr",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset -  wcm3x7bfiyg5mrcn0mnsevmr"
  },
  {
    "id": "graphic-design-2",
    "url": "/graphic-design/722357_0fbloqv4ji98qykjqvpychk7m.jpg",
    "title": "Graphic Design Asset - 0fbloqv4ji98qykjqvpychk7m",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - 0fbloqv4ji98qykjqvpychk7m"
  },
  {
    "id": "graphic-design-3",
    "url": "/graphic-design/722357_0hssl9lkxd8xela_yuu8wnqy4.jpg",
    "title": "Graphic Design Asset - 0hssl9lkxd8xela yuu8wnqy4",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - 0hssl9lkxd8xela yuu8wnqy4"
  },
  {
    "id": "graphic-design-4",
    "url": "/graphic-design/722357_3vc_ygkji68eoi7fbdiptsrqr.jpg",
    "title": "Graphic Design Asset - 3vc ygkji68eoi7fbdiptsrqr",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - 3vc ygkji68eoi7fbdiptsrqr"
  },
  {
    "id": "graphic-design-5",
    "url": "/graphic-design/722357_5kvxlkrpfnba9oxl29u42pbkb.jpg",
    "title": "Graphic Design Asset - 5kvxlkrpfnba9oxl29u42pbkb",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - 5kvxlkrpfnba9oxl29u42pbkb"
  },
  {
    "id": "graphic-design-6",
    "url": "/graphic-design/722357_7h2xj3nerxd0lgg3tks7wjc2d.jpg",
    "title": "Graphic Design Asset - 7h2xj3nerxd0lgg3tks7wjc2d",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - 7h2xj3nerxd0lgg3tks7wjc2d"
  },
  {
    "id": "graphic-design-7",
    "url": "/graphic-design/722357_9xbzr9oj4svtekomzfwqpxzhq.jpg",
    "title": "Graphic Design Asset - 9xbzr9oj4svtekomzfwqpxzhq",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - 9xbzr9oj4svtekomzfwqpxzhq"
  },
  {
    "id": "graphic-design-8",
    "url": "/graphic-design/722357_aijgm6h3dxfhxmxz3izi_ldpl.jpg",
    "title": "Graphic Design Asset - Aijgm6h3dxfhxmxz3izi ldpl",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Aijgm6h3dxfhxmxz3izi ldpl"
  },
  {
    "id": "graphic-design-9",
    "url": "/graphic-design/722357_aw5tfoohyhhrjvxua0szr5gok.jpg",
    "title": "Graphic Design Asset - Aw5tfoohyhhrjvxua0szr5gok",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Aw5tfoohyhhrjvxua0szr5gok"
  },
  {
    "id": "graphic-design-10",
    "url": "/graphic-design/722357_d7dzxo4w__v_piza47jdd20fl.jpg",
    "title": "Graphic Design Asset - D7dzxo4w  v piza47jdd20fl",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - D7dzxo4w  v piza47jdd20fl"
  },
  {
    "id": "graphic-design-11",
    "url": "/graphic-design/722357_ej5tx3rokbgqcntjziuuucdlh.jpg",
    "title": "Graphic Design Asset - Ej5tx3rokbgqcntjziuuucdlh",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Ej5tx3rokbgqcntjziuuucdlh"
  },
  {
    "id": "graphic-design-12",
    "url": "/graphic-design/722357_emuw2g2lddwokcd4hcmatsxdn.jpg",
    "title": "Graphic Design Asset - Emuw2g2lddwokcd4hcmatsxdn",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Emuw2g2lddwokcd4hcmatsxdn"
  },
  {
    "id": "graphic-design-13",
    "url": "/graphic-design/722357_ewotnwiy2bauh0jh0ochisw45.jpg",
    "title": "Graphic Design Asset - Ewotnwiy2bauh0jh0ochisw45",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Ewotnwiy2bauh0jh0ochisw45"
  },
  {
    "id": "graphic-design-14",
    "url": "/graphic-design/722357_fkxm_eringc5tmtarq9zylgbn.jpg",
    "title": "Graphic Design Asset - Fkxm eringc5tmtarq9zylgbn",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Fkxm eringc5tmtarq9zylgbn"
  },
  {
    "id": "graphic-design-15",
    "url": "/graphic-design/722357_fmkrvmmirvc5xjekezzhxzziu.jpg",
    "title": "Graphic Design Asset - Fmkrvmmirvc5xjekezzhxzziu",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Fmkrvmmirvc5xjekezzhxzziu"
  },
  {
    "id": "graphic-design-16",
    "url": "/graphic-design/722357_gtyjclqsfdq56fw4mqbrofjoa.jpg",
    "title": "Graphic Design Asset - Gtyjclqsfdq56fw4mqbrofjoa",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Gtyjclqsfdq56fw4mqbrofjoa"
  },
  {
    "id": "graphic-design-17",
    "url": "/graphic-design/722357_hiizunkk6xcctrd7lvq2e7pte.jpg",
    "title": "Graphic Design Asset - Hiizunkk6xcctrd7lvq2e7pte",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Hiizunkk6xcctrd7lvq2e7pte"
  },
  {
    "id": "graphic-design-18",
    "url": "/graphic-design/722357_iynxqf4htflr8mmw5qwypp_3o.jpg",
    "title": "Graphic Design Asset - Iynxqf4htflr8mmw5qwypp 3o",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Iynxqf4htflr8mmw5qwypp 3o"
  },
  {
    "id": "graphic-design-19",
    "url": "/graphic-design/722357_jplicos0nexpzmqkqe4retqeq.jpg",
    "title": "Graphic Design Asset - Jplicos0nexpzmqkqe4retqeq",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Jplicos0nexpzmqkqe4retqeq"
  },
  {
    "id": "graphic-design-20",
    "url": "/graphic-design/722357_l3bmahqautfiulsbug5ttxnha.jpg",
    "title": "Graphic Design Asset - L3bmahqautfiulsbug5ttxnha",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - L3bmahqautfiulsbug5ttxnha"
  },
  {
    "id": "graphic-design-21",
    "url": "/graphic-design/722357_m0hhbk_tdvljif6qdbtvfeso2.jpg",
    "title": "Graphic Design Asset - M0hhbk tdvljif6qdbtvfeso2",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - M0hhbk tdvljif6qdbtvfeso2"
  },
  {
    "id": "graphic-design-22",
    "url": "/graphic-design/722357_oohwhfg7fcehj0y7uzew42aal.jpg",
    "title": "Graphic Design Asset - Oohwhfg7fcehj0y7uzew42aal",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Oohwhfg7fcehj0y7uzew42aal"
  },
  {
    "id": "graphic-design-23",
    "url": "/graphic-design/722357_oqpwfzahp2npo9jnde6cmvbuy.jpg",
    "title": "Graphic Design Asset - Oqpwfzahp2npo9jnde6cmvbuy",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Oqpwfzahp2npo9jnde6cmvbuy"
  },
  {
    "id": "graphic-design-24",
    "url": "/graphic-design/722357_pleod85hiolaopqrrhipilza_.jpg",
    "title": "Graphic Design Asset - Pleod85hiolaopqrrhipilza ",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Pleod85hiolaopqrrhipilza "
  },
  {
    "id": "graphic-design-25",
    "url": "/graphic-design/722357_szl8s0dipie0uchqtkbttq3vy.jpg",
    "title": "Graphic Design Asset - Szl8s0dipie0uchqtkbttq3vy",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Szl8s0dipie0uchqtkbttq3vy"
  },
  {
    "id": "graphic-design-26",
    "url": "/graphic-design/722357_t8xug6_kthjhmasnc7abqwq2c.jpg",
    "title": "Graphic Design Asset - T8xug6 kthjhmasnc7abqwq2c",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - T8xug6 kthjhmasnc7abqwq2c"
  },
  {
    "id": "graphic-design-27",
    "url": "/graphic-design/722357_tbpp7fwfnds8eh2u4vp_yftdj.jpg",
    "title": "Graphic Design Asset - Tbpp7fwfnds8eh2u4vp yftdj",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Tbpp7fwfnds8eh2u4vp yftdj"
  },
  {
    "id": "graphic-design-28",
    "url": "/graphic-design/722357_ulvnbwggqhdxa_auulgik4jbg.jpg",
    "title": "Graphic Design Asset - Ulvnbwggqhdxa auulgik4jbg",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Ulvnbwggqhdxa auulgik4jbg"
  },
  {
    "id": "graphic-design-29",
    "url": "/graphic-design/722357_xzd2u_yxqzvm5pzcyzh0w8pst.jpg",
    "title": "Graphic Design Asset - Xzd2u yxqzvm5pzcyzh0w8pst",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Xzd2u yxqzvm5pzcyzh0w8pst"
  },
  {
    "id": "graphic-design-30",
    "url": "/graphic-design/722357_ygdn2i6i6pi_hcvaofahjraio.jpg",
    "title": "Graphic Design Asset - Ygdn2i6i6pi hcvaofahjraio",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - Ygdn2i6i6pi hcvaofahjraio"
  },
  {
    "id": "graphic-design-31",
    "url": "/graphic-design/original_722357_DWfWj9603sTZizGqH_cupfOBS.jpg",
    "title": "Graphic Design Asset - DWfWj9603sTZizGqH cupfOBS",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - DWfWj9603sTZizGqH cupfOBS"
  },
  {
    "id": "graphic-design-32",
    "url": "/graphic-design/original_722357_nWPbo3jDPanJVSF0vDONMymWK.jpg",
    "title": "Graphic Design Asset - NWPbo3jDPanJVSF0vDONMymWK",
    "category": "graphic-design",
    "categoryLabel": "Graphic Design",
    "client": "Havells India / Orient / Spice Labs",
    "caption": "Graphic Design Asset - NWPbo3jDPanJVSF0vDONMymWK"
  },
  {
    "id": "document-design-1",
    "url": "/document-design/1.jpg",
    "title": "Document Design - Sheet 1",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 1"
  },
  {
    "id": "document-design-2",
    "url": "/document-design/2.jpg",
    "title": "Document Design - Sheet 2",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 2"
  },
  {
    "id": "document-design-3",
    "url": "/document-design/3.jpg",
    "title": "Document Design - Sheet 3",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 3"
  },
  {
    "id": "document-design-4",
    "url": "/document-design/4.jpg",
    "title": "Document Design - Sheet 4",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 4"
  },
  {
    "id": "document-design-5",
    "url": "/document-design/5.jpg",
    "title": "Document Design - Sheet 5",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 5"
  },
  {
    "id": "document-design-6",
    "url": "/document-design/6.jpg",
    "title": "Document Design - Sheet 6",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 6"
  },
  {
    "id": "document-design-7",
    "url": "/document-design/7.jpg",
    "title": "Document Design - Sheet 7",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 7"
  },
  {
    "id": "document-design-8",
    "url": "/document-design/8.jpg",
    "title": "Document Design - Sheet 8",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 8"
  },
  {
    "id": "document-design-9",
    "url": "/document-design/9.jpg",
    "title": "Document Design - Sheet 9",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 9"
  },
  {
    "id": "document-design-10",
    "url": "/document-design/10.jpg",
    "title": "Document Design - Sheet 10",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 10"
  },
  {
    "id": "document-design-11",
    "url": "/document-design/11.jpg",
    "title": "Document Design - Sheet 11",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 11"
  },
  {
    "id": "document-design-12",
    "url": "/document-design/12.jpg",
    "title": "Document Design - Sheet 12",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 12"
  },
  {
    "id": "document-design-13",
    "url": "/document-design/13.jpg",
    "title": "Document Design - Sheet 13",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 13"
  },
  {
    "id": "document-design-14",
    "url": "/document-design/14.jpg",
    "title": "Document Design - Sheet 14",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 14"
  },
  {
    "id": "document-design-15",
    "url": "/document-design/15.jpg",
    "title": "Document Design - Sheet 15",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 15"
  },
  {
    "id": "document-design-16",
    "url": "/document-design/16.jpg",
    "title": "Document Design - Sheet 16",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 16"
  },
  {
    "id": "document-design-17",
    "url": "/document-design/17.jpg",
    "title": "Document Design - Sheet 17",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 17"
  },
  {
    "id": "document-design-18",
    "url": "/document-design/18.jpg",
    "title": "Document Design - Sheet 18",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 18"
  },
  {
    "id": "document-design-19",
    "url": "/document-design/19.jpg",
    "title": "Document Design - Sheet 19",
    "category": "document-design",
    "categoryLabel": "Document Design",
    "client": "Ernst & Young Global Limited",
    "caption": "Document Design - Sheet 19"
  },
  {
    "id": "3d-game-design-1",
    "url": "/3d-game-design/722357_0h_ujfje5pz0spmrm8fk5itft.jpg",
    "title": "3D Game design Asset - 0h ujfje5pz0spmrm8fk5itft",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - 0h ujfje5pz0spmrm8fk5itft"
  },
  {
    "id": "3d-game-design-2",
    "url": "/3d-game-design/722357_0w4z2btjxreplhclmzilihmgq.jpg",
    "title": "3D Game design Asset - 0w4z2btjxreplhclmzilihmgq",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - 0w4z2btjxreplhclmzilihmgq"
  },
  {
    "id": "3d-game-design-3",
    "url": "/3d-game-design/722357_2ccoqu3abhwpeb0zvysvxvjul.jpg",
    "title": "3D Game design Asset - 2ccoqu3abhwpeb0zvysvxvjul",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - 2ccoqu3abhwpeb0zvysvxvjul"
  },
  {
    "id": "3d-game-design-4",
    "url": "/3d-game-design/722357_2jiksftvag4toxnrma5hwpu9z.jpg",
    "title": "3D Game design Asset - 2jiksftvag4toxnrma5hwpu9z",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - 2jiksftvag4toxnrma5hwpu9z"
  },
  {
    "id": "3d-game-design-5",
    "url": "/3d-game-design/722357_3fmrr_wfomck_9th5l8rjzxfe.jpg",
    "title": "3D Game design Asset - 3fmrr wfomck 9th5l8rjzxfe",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - 3fmrr wfomck 9th5l8rjzxfe"
  },
  {
    "id": "3d-game-design-6",
    "url": "/3d-game-design/722357_7b4n0cnwacny6qdqr8pfsy8di.jpg",
    "title": "3D Game design Asset - 7b4n0cnwacny6qdqr8pfsy8di",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - 7b4n0cnwacny6qdqr8pfsy8di"
  },
  {
    "id": "3d-game-design-7",
    "url": "/3d-game-design/722357_9dybwujsvotzpxdlvar48kwiu.jpg",
    "title": "3D Game design Asset - 9dybwujsvotzpxdlvar48kwiu",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - 9dybwujsvotzpxdlvar48kwiu"
  },
  {
    "id": "3d-game-design-8",
    "url": "/3d-game-design/722357_99spoycqgramlex06jdyveo5y.jpg",
    "title": "3D Game design Asset - 99spoycqgramlex06jdyveo5y",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - 99spoycqgramlex06jdyveo5y"
  },
  {
    "id": "3d-game-design-9",
    "url": "/3d-game-design/722357_ajsoyzxzxomebqmlqnqksiitr.jpg",
    "title": "3D Game design Asset - Ajsoyzxzxomebqmlqnqksiitr",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ajsoyzxzxomebqmlqnqksiitr"
  },
  {
    "id": "3d-game-design-10",
    "url": "/3d-game-design/722357_ang_jm5jbl6sktej9usg6bcnh.jpg",
    "title": "3D Game design Asset - Ang jm5jbl6sktej9usg6bcnh",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ang jm5jbl6sktej9usg6bcnh"
  },
  {
    "id": "3d-game-design-11",
    "url": "/3d-game-design/722357_apzttik2ttcaxn8tru2bnjt9i.jpg",
    "title": "3D Game design Asset - Apzttik2ttcaxn8tru2bnjt9i",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Apzttik2ttcaxn8tru2bnjt9i"
  },
  {
    "id": "3d-game-design-12",
    "url": "/3d-game-design/722357_bcrqseoglnvpybe7_ngvsp7gu.jpg",
    "title": "3D Game design Asset - Bcrqseoglnvpybe7 ngvsp7gu",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Bcrqseoglnvpybe7 ngvsp7gu"
  },
  {
    "id": "3d-game-design-13",
    "url": "/3d-game-design/722357_cmbzn3soqzs5grfvvnergsvka.jpg",
    "title": "3D Game design Asset - Cmbzn3soqzs5grfvvnergsvka",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Cmbzn3soqzs5grfvvnergsvka"
  },
  {
    "id": "3d-game-design-14",
    "url": "/3d-game-design/722357_dcozgcuoutj9fdh3hiom3mlrr.jpg",
    "title": "3D Game design Asset - Dcozgcuoutj9fdh3hiom3mlrr",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Dcozgcuoutj9fdh3hiom3mlrr"
  },
  {
    "id": "3d-game-design-15",
    "url": "/3d-game-design/722357_e4jnrg3c36ukmjs2vqqzwjeq8.jpg",
    "title": "3D Game design Asset - E4jnrg3c36ukmjs2vqqzwjeq8",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - E4jnrg3c36ukmjs2vqqzwjeq8"
  },
  {
    "id": "3d-game-design-16",
    "url": "/3d-game-design/722357_er36vryq7xnkddw095e35z8lb.jpg",
    "title": "3D Game design Asset - Er36vryq7xnkddw095e35z8lb",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Er36vryq7xnkddw095e35z8lb"
  },
  {
    "id": "3d-game-design-17",
    "url": "/3d-game-design/722357_ht2bfzemdqzqwaqa_hfhl2wgs.jpg",
    "title": "3D Game design Asset - Ht2bfzemdqzqwaqa hfhl2wgs",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ht2bfzemdqzqwaqa hfhl2wgs"
  },
  {
    "id": "3d-game-design-18",
    "url": "/3d-game-design/722357_hxkwggfgjjomixpe5obn78aoj.jpg",
    "title": "3D Game design Asset - Hxkwggfgjjomixpe5obn78aoj",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Hxkwggfgjjomixpe5obn78aoj"
  },
  {
    "id": "3d-game-design-19",
    "url": "/3d-game-design/722357_i3tsg2e9trdg3dxfzjwsz8cv4.jpg",
    "title": "3D Game design Asset - I3tsg2e9trdg3dxfzjwsz8cv4",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - I3tsg2e9trdg3dxfzjwsz8cv4"
  },
  {
    "id": "3d-game-design-20",
    "url": "/3d-game-design/722357_ibt5p9sdbelgowcqdxerxb49r.jpg",
    "title": "3D Game design Asset - Ibt5p9sdbelgowcqdxerxb49r",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ibt5p9sdbelgowcqdxerxb49r"
  },
  {
    "id": "3d-game-design-21",
    "url": "/3d-game-design/722357_ksqdgm6zrqvrbq0hm6tc7vmvu.jpg",
    "title": "3D Game design Asset - Ksqdgm6zrqvrbq0hm6tc7vmvu",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ksqdgm6zrqvrbq0hm6tc7vmvu"
  },
  {
    "id": "3d-game-design-22",
    "url": "/3d-game-design/722357_kzkagbjiwtrj0lh756txdic8z.jpg",
    "title": "3D Game design Asset - Kzkagbjiwtrj0lh756txdic8z",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Kzkagbjiwtrj0lh756txdic8z"
  },
  {
    "id": "3d-game-design-23",
    "url": "/3d-game-design/722357_lovkf80jfvu9d3fxegxbuvp3z.jpg",
    "title": "3D Game design Asset - Lovkf80jfvu9d3fxegxbuvp3z",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Lovkf80jfvu9d3fxegxbuvp3z"
  },
  {
    "id": "3d-game-design-24",
    "url": "/3d-game-design/722357_mhszkqtw9atofeuc59vfjyve7.jpg",
    "title": "3D Game design Asset - Mhszkqtw9atofeuc59vfjyve7",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Mhszkqtw9atofeuc59vfjyve7"
  },
  {
    "id": "3d-game-design-25",
    "url": "/3d-game-design/722357_mxhy3opijvwegrsq6lfuxbu7q.jpg",
    "title": "3D Game design Asset - Mxhy3opijvwegrsq6lfuxbu7q",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Mxhy3opijvwegrsq6lfuxbu7q"
  },
  {
    "id": "3d-game-design-26",
    "url": "/3d-game-design/722357_ogr3srfmsoz0couvmyryowvpe.jpg",
    "title": "3D Game design Asset - Ogr3srfmsoz0couvmyryowvpe",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ogr3srfmsoz0couvmyryowvpe"
  },
  {
    "id": "3d-game-design-27",
    "url": "/3d-game-design/722357_ov_dv3rgpqlgvuk9rujqif7cw.jpg",
    "title": "3D Game design Asset - Ov dv3rgpqlgvuk9rujqif7cw",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ov dv3rgpqlgvuk9rujqif7cw"
  },
  {
    "id": "3d-game-design-28",
    "url": "/3d-game-design/722357_qemmuc6457mc4w0imj24nqsnk.jpg",
    "title": "3D Game design Asset - Qemmuc6457mc4w0imj24nqsnk",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Qemmuc6457mc4w0imj24nqsnk"
  },
  {
    "id": "3d-game-design-29",
    "url": "/3d-game-design/722357_r5kyyowll87xjatqdoubppjfy.jpg",
    "title": "3D Game design Asset - R5kyyowll87xjatqdoubppjfy",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - R5kyyowll87xjatqdoubppjfy"
  },
  {
    "id": "3d-game-design-30",
    "url": "/3d-game-design/722357_s4uafo5nlmeujczo0vofchel0.jpg",
    "title": "3D Game design Asset - S4uafo5nlmeujczo0vofchel0",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - S4uafo5nlmeujczo0vofchel0"
  },
  {
    "id": "3d-game-design-31",
    "url": "/3d-game-design/722357_sg42ad6vpnawz4b_6_thnwghq.jpg",
    "title": "3D Game design Asset - Sg42ad6vpnawz4b 6 thnwghq",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Sg42ad6vpnawz4b 6 thnwghq"
  },
  {
    "id": "3d-game-design-32",
    "url": "/3d-game-design/722357_ttdwkchck6lphm3f_jp3eucel.jpg",
    "title": "3D Game design Asset - Ttdwkchck6lphm3f jp3eucel",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ttdwkchck6lphm3f jp3eucel"
  },
  {
    "id": "3d-game-design-33",
    "url": "/3d-game-design/722357_ty9dc0pnfddyuhroeke5iqjui.jpg",
    "title": "3D Game design Asset - Ty9dc0pnfddyuhroeke5iqjui",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ty9dc0pnfddyuhroeke5iqjui"
  },
  {
    "id": "3d-game-design-34",
    "url": "/3d-game-design/722357_v8kv9zrponzopiixhr6gx4ypt.jpeg",
    "title": "3D Game design Asset - V8kv9zrponzopiixhr6gx4ypt",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - V8kv9zrponzopiixhr6gx4ypt"
  },
  {
    "id": "3d-game-design-35",
    "url": "/3d-game-design/722357_vejbqr5avspk7wskqh3grroqp.jpg",
    "title": "3D Game design Asset - Vejbqr5avspk7wskqh3grroqp",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Vejbqr5avspk7wskqh3grroqp"
  },
  {
    "id": "3d-game-design-36",
    "url": "/3d-game-design/722357_vmgsxlo8xtvq0xhkq73g8gus9.jpg",
    "title": "3D Game design Asset - Vmgsxlo8xtvq0xhkq73g8gus9",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Vmgsxlo8xtvq0xhkq73g8gus9"
  },
  {
    "id": "3d-game-design-37",
    "url": "/3d-game-design/722357_vqp_6o2upotkfw56zpukyancf.jpeg",
    "title": "3D Game design Asset - Vqp 6o2upotkfw56zpukyancf",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Vqp 6o2upotkfw56zpukyancf"
  },
  {
    "id": "3d-game-design-38",
    "url": "/3d-game-design/722357_xz7wu777nbdgjfjyw2ryjylyf.jpg",
    "title": "3D Game design Asset - Xz7wu777nbdgjfjyw2ryjylyf",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Xz7wu777nbdgjfjyw2ryjylyf"
  },
  {
    "id": "3d-game-design-39",
    "url": "/3d-game-design/722357_zkdc93h0flpajioeqnbbvpon8.jpg",
    "title": "3D Game design Asset - Zkdc93h0flpajioeqnbbvpon8",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Zkdc93h0flpajioeqnbbvpon8"
  },
  {
    "id": "3d-game-design-40",
    "url": "/3d-game-design/722357_zvd7sbc5ercitkpgvrdmwefod.jpg",
    "title": "3D Game design Asset - Zvd7sbc5ercitkpgvrdmwefod",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Zvd7sbc5ercitkpgvrdmwefod"
  },
  {
    "id": "3d-game-design-41",
    "url": "/3d-game-design/722357_zxvgjx04dwsax7mjduumbvggv.jpg",
    "title": "3D Game design Asset - Zxvgjx04dwsax7mjduumbvggv",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Zxvgjx04dwsax7mjduumbvggv"
  },
  {
    "id": "3d-game-design-42",
    "url": "/3d-game-design/large_722357_oma5gjsy_ggziit9wlkwgmft3.jpg",
    "title": "3D Game design Asset - Oma5gjsy ggziit9wlkwgmft3",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Oma5gjsy ggziit9wlkwgmft3"
  },
  {
    "id": "3d-game-design-43",
    "url": "/3d-game-design/large_722357_ortuomnjmqn4ogmqao5agsx_9.jpg",
    "title": "3D Game design Asset - Ortuomnjmqn4ogmqao5agsx 9",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Ortuomnjmqn4ogmqao5agsx 9"
  },
  {
    "id": "3d-game-design-44",
    "url": "/3d-game-design/large_722357_qudnok_wixsmom7l2uxlgafee.jpg",
    "title": "3D Game design Asset - Qudnok wixsmom7l2uxlgafee",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Qudnok wixsmom7l2uxlgafee"
  },
  {
    "id": "3d-game-design-45",
    "url": "/3d-game-design/large_722357_sibb0xzgzdked3whnglwfqrc4.jpg",
    "title": "3D Game design Asset - Sibb0xzgzdked3whnglwfqrc4",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Sibb0xzgzdked3whnglwfqrc4"
  },
  {
    "id": "3d-game-design-46",
    "url": "/3d-game-design/large_722357_tyzkbjg2pekwd5rvugjxb_jnj.png",
    "title": "3D Game design Asset - Tyzkbjg2pekwd5rvugjxb jnj",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Tyzkbjg2pekwd5rvugjxb jnj"
  },
  {
    "id": "3d-game-design-47",
    "url": "/3d-game-design/large_722357_v7lpnlh6qyfcjv0zariplozhc.jpg",
    "title": "3D Game design Asset - V7lpnlh6qyfcjv0zariplozhc",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - V7lpnlh6qyfcjv0zariplozhc"
  },
  {
    "id": "3d-game-design-48",
    "url": "/3d-game-design/large_722357_zowxtealomeskumksvvrjtfxb.jpg",
    "title": "3D Game design Asset - Zowxtealomeskumksvvrjtfxb",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - Zowxtealomeskumksvvrjtfxb"
  },
  {
    "id": "3d-game-design-49",
    "url": "/3d-game-design/original_722357_fYLSzeT_PVscKxFMmPG5b0ZdC.jpg",
    "title": "3D Game design Asset - FYLSzeT PVscKxFMmPG5b0ZdC",
    "category": "3d-game-design",
    "categoryLabel": "3D Game design",
    "client": "Spice Labs & Mobile Gaming Studio",
    "caption": "3D Game design Asset - FYLSzeT PVscKxFMmPG5b0ZdC"
  }
];
