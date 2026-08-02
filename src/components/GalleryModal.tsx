import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Video, Play } from 'lucide-react';
import { GalleryItem } from '../data/uxGalleryData';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryItem[];
  initialIndex?: number;
  galleryTitle?: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  galleryTitle
}) => {
  const [activeTab] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  // Sync index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Filtered images list
  const filteredImages = React.useMemo(() => {
    if (activeTab === 'all') return images;
    return images.filter(img => img.category === activeTab);
  }, [images, activeTab]);

  const currentImage = filteredImages[currentIndex] || filteredImages[0] || images[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentImage) return null;

  const displayTitle = galleryTitle || currentImage?.categoryLabel || 'Gallery';
  const isVideo = Boolean(currentImage.youtubeId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-6xl h-[92vh] flex flex-col rounded-3xl bg-[#0d0f17] border border-emerald-500/30 overflow-hidden shadow-[0_0_80px_rgba(40,233,140,0.15)]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121522]/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              {isVideo ? <Video className="w-5 h-5" /> : <ImageIcon className="w-5 h-5" />}
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 truncate">
                <span>{displayTitle}</span>
              </h3>
              {currentImage.title && currentImage.title !== displayTitle && (
                <p className="text-xs text-slate-400 truncate">{currentImage.title}</p>
              )}
            </div>
          </div>

          {/* Close Control */}
          <button
            onClick={onClose}
            title="Close Gallery (Esc)"
            className="p-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-white border border-emerald-500/30 transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Stage */}
        <div className="relative flex-1 bg-black/80 flex items-center justify-center p-4 overflow-hidden group min-h-0">
          
          {/* Main Display: YouTube Video or Image */}
          {currentImage.youtubeId ? (
            <div className="w-full h-full max-w-5xl max-h-[75vh] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <iframe
                key={currentImage.youtubeId}
                src={`https://www.youtube.com/embed/${currentImage.youtubeId}?autoplay=1&rel=0`}
                title={currentImage.title || displayTitle}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={currentImage.url}
              alt={displayTitle}
              className="max-h-full max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          )}

          {/* Previous Arrow */}
          {filteredImages.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-black/70 hover:bg-emerald-500 text-white hover:text-black border border-white/20 hover:border-emerald-400 transition-all cursor-pointer shadow-lg opacity-80 hover:opacity-100 z-10"
              title="Previous Item (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Arrow */}
          {filteredImages.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-black/70 hover:bg-emerald-500 text-white hover:text-black border border-white/20 hover:border-emerald-400 transition-all cursor-pointer shadow-lg opacity-80 hover:opacity-100 z-10"
              title="Next Item (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Counter Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-xs font-mono text-emerald-400 z-10">
            {currentIndex + 1} / {filteredImages.length}
          </div>
        </div>

        {/* Small Thumbnails at Bottom */}
        <div className="p-3 bg-[#111422] border-t border-white/10 shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar py-1">
            {filteredImages.map((img, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={img.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-400 ring-2 ring-emerald-400/40 scale-105 opacity-100'
                      : 'border-white/10 opacity-50 hover:opacity-90'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                  {img.youtubeId && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="p-1 rounded-full bg-emerald-500 text-black shadow-md">
                        <Play className="w-3 h-3 fill-black ml-0.5" />
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

