import React, { useState } from 'react';
import { Image as ImageIcon, Eye } from 'lucide-react';
import { UX_GALLERY_IMAGES, GalleryItem } from '../data/uxGalleryData';
import { ProjectItem } from '../types';
import { GalleryModal } from './GalleryModal';

interface PortfolioSectionProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState<number>(0);

  const [modalImages, setModalImages] = useState<GalleryItem[]>(UX_GALLERY_IMAGES);
  const [galleryTitle, setGalleryTitle] = useState<string>('Portfolio Showcase');

  const CATEGORY_TILES = [
    { id: 'marketing-collateral', title: 'Marketing Collateral' },
    { id: 'ux-design', title: 'Graphic Design' },
    { id: 'motion-graphics', title: 'Motion Graphics' },
    { id: 'document-design', title: 'Document Design' }
  ];

  const visibleTiles = activeCategory === 'all'
    ? CATEGORY_TILES
    : CATEGORY_TILES.filter(t => t.id === activeCategory);

  const activeCategoryIds = CATEGORY_TILES.map(t => t.id);
  const visibleGalleryImages = UX_GALLERY_IMAGES.filter(img => activeCategoryIds.includes(img.category));

  const handleOpenCategoryGallery = (catId?: string) => {
    if (!catId || catId === 'all') {
      setModalImages(visibleGalleryImages);
      setGalleryTitle('Portfolio Showcase');
    } else {
      const categoryFiltered = visibleGalleryImages.filter(img => img.category === catId);
      setModalImages(categoryFiltered.length > 0 ? categoryFiltered : visibleGalleryImages);
      const tile = CATEGORY_TILES.find(t => t.id === catId);
      setGalleryTitle(tile ? tile.title : 'Gallery');
    }
    setGalleryStartIndex(0);
    setIsGalleryOpen(true);
  };

  return (
    <section id="portfolio" className="pt-6 pb-4 space-y-6 border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            06 // PORTFOLIO
          </span>
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Portfolio
      </h2>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'all', label: 'All Initiatives' },
          { id: 'marketing-collateral', label: 'Marketing Collateral' },
          { id: 'ux-design', label: 'Graphic Design' },
          { id: 'motion-graphics', label: 'Motion Graphics' },
          { id: 'document-design', label: 'Document Design' }
        ].map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(40,233,140,0.3)]'
                  : 'bg-[#181c28] text-slate-300 hover:text-white border border-white/5 hover:border-emerald-500/30'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Category Showcase Tiles - 2 in a Row */}
      {visibleTiles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleTiles.map((tile) => (
            <div
              key={tile.id}
              onClick={() => handleOpenCategoryGallery(tile.id)}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#121522] to-[#181d2f] border border-emerald-500/30 flex items-center justify-between gap-4 shadow-xl hover:border-emerald-500/50 transition-all cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-bold text-white">
                  {tile.title}
                </h3>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenCategoryGallery(tile.id);
                }}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-colors cursor-pointer shadow-md shrink-0"
              >
                <Eye className="w-4 h-4" />
                <span>View</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Gallery Modal Lightbox */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={modalImages}
        initialIndex={galleryStartIndex}
        galleryTitle={galleryTitle}
      />
    </section>
  );
};

