import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'photography', name: 'Photography' },
    { id: 'design', name: 'Design' },
    { id: 'creative', name: 'Creative' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Urban Landscape',
      category: 'photography',
      description: 'Cityscape photography capturing the essence of urban life.',
      imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      tags: ['urban', 'landscape', 'city']
    },
    {
      id: 2,
      title: 'Minimalist Design',
      category: 'design',
      description: 'Clean and modern design principles in action.',
      imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      tags: ['minimal', 'design', 'modern']
    },
    {
      id: 3,
      title: 'Creative Concept',
      category: 'creative',
      description: 'Experimental creative work pushing boundaries.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      tags: ['creative', 'experimental', 'art']
    },
    {
      id: 4,
      title: 'Portrait Series',
      category: 'photography',
      description: 'Intimate portrait photography revealing human stories.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      tags: ['portrait', 'human', 'story']
    },
    {
      id: 5,
      title: 'Brand Identity',
      category: 'design',
      description: 'Complete brand identity design and visual systems.',
      imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      tags: ['brand', 'identity', 'logo']
    },
    {
      id: 6,
      title: 'Abstract Art',
      category: 'creative',
      description: 'Abstract artistic expressions and creative explorations.',
      imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
      tags: ['abstract', 'art', 'creative']
    },
    {
      id: 7,
      title: 'Nature Photography',
      category: 'photography',
      description: 'Capturing the beauty and serenity of natural landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      tags: ['nature', 'landscape', 'serenity']
    },
    {
      id: 8,
      title: 'UI/UX Design',
      category: 'design',
      description: 'User interface and experience design for digital products.',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['ui', 'ux', 'digital']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="gallery">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Gallery</h1>
        <p>Explore my creative work and photography portfolio</p>
      </motion.div>

      <motion.div
        className="gallery-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="filter-buttons">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={16} />
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="gallery-grid"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              onClick={() => openLightbox(item, index)}
            >
              <div className="gallery-item-image">
                <img src={item.imageUrl} alt={item.title} />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="gallery-item-tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={24} />
              </button>
              
              <div className="lightbox-image">
                <img src={selectedImage.imageUrl} alt={selectedImage.title} />
              </div>
              
              <div className="lightbox-info">
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
                <div className="lightbox-tags">
                  {selectedImage.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <button className="lightbox-nav prev" onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>
              <button className="lightbox-nav next" onClick={nextImage}>
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 