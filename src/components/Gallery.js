import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter, Building2, Home, Hammer } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'renovation', name: 'Renovation' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Luxury Villa',
      category: 'residential',
      description: 'A modern luxury villa with elegant interiors and lush landscaping.',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
      tags: ['villa', 'residential', 'luxury']
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'commercial',
      description: 'A state-of-the-art office building in the heart of the city.',
      imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop',
      tags: ['office', 'commercial', 'modern']
    },
    {
      id: 3,
      title: 'Retail Mall Renovation',
      category: 'renovation',
      description: 'Complete renovation of a retail mall, blending classic and contemporary design.',
      imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop',
      tags: ['mall', 'renovation', 'retail']
    },
    {
      id: 4,
      title: 'Elegant Apartment Complex',
      category: 'residential',
      description: 'Premium apartments with world-class amenities and architecture.',
      imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop',
      tags: ['apartment', 'residential', 'premium']
    },
    {
      id: 5,
      title: 'Corporate Headquarters',
      category: 'commercial',
      description: 'A landmark corporate headquarters with sustainable design.',
      imageUrl: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=800&h=600&fit=crop',
      tags: ['corporate', 'commercial', 'sustainable']
    },
    {
      id: 6,
      title: 'Heritage Home Restoration',
      category: 'renovation',
      description: 'Restoration of a heritage home, preserving its original charm.',
      imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop',
      tags: ['heritage', 'renovation', 'restoration']
    },
    {
      id: 7,
      title: 'Modern Family Home',
      category: 'residential',
      description: 'A spacious family home with open-plan living and garden views.',
      imageUrl: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=800&h=600&fit=crop',
      tags: ['family', 'residential', 'modern']
    },
    {
      id: 8,
      title: 'Boutique Hotel',
      category: 'commercial',
      description: 'A boutique hotel project with luxury finishes and unique design.',
      imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
      tags: ['hotel', 'commercial', 'boutique']
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
        <h1>Our Projects</h1>
        <p>Explore our portfolio of residential, commercial, and renovation projects.</p>
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
                boxShadow: "0 20px 40px rgba(191,161,74,0.15)"
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