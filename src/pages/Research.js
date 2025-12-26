import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import ImageModal from '../components/ImageModal';
import './Research.css';

const Research = ({ researchId }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [selectedResearch, setSelectedResearch] = useState(researchId);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSelectedResearch(researchId);
  }, [researchId]);

  const currentResearch = t[selectedResearch] || t.research.placeholder;

  const handleImageClick = (imageSrc, alt) => {
    setModalImage({ src: imageSrc, alt });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="research-page">
      <div className="research-content">
        <h1 className="research-title">{currentResearch.title}</h1>

        <div className="research-synopsis-section">
          <h2 className="section-heading">{t.research.synopsis}</h2>
          <p className="research-synopsis">{currentResearch.synopsis}</p>
        </div>

        <div className="research-summary-section">
          <h2 className="section-heading">{t.research.summary}</h2>
          <p className="research-summary">{currentResearch.summary}</p>
        </div>

        <div className="research-activities-section">
          <h2 className="section-heading">{t.research.activities}</h2>
          {currentResearch.activities && currentResearch.activities.length > 0 ? (
            <div className="activities-list">
              {currentResearch.activities.map((activity, index) => {
                // 对于 research1，使用 image 文件夹中的图片，按序号 1, 2, 3 从上到下
                const imageSrc = researchId === 'research1' 
                  ? `${process.env.PUBLIC_URL || ''}/image/${index + 1}.jpg`
                  : `https://via.placeholder.com/300x200?text=Research+Image+${index + 1}`;
                
                return (
                  <div 
                    key={index} 
                    className={`activity-item ${index % 2 === 1 ? 'activity-item-reverse' : ''}`}
                  >
                    <div className="activity-image">
                      <img 
                        src={imageSrc}
                        alt={activity.title}
                        className="activity-img"
                        onClick={() => handleImageClick(imageSrc, activity.title)}
                        style={{ cursor: 'pointer' }}
                        onError={(e) => {
                          // 如果图片加载失败，使用占位图
                          if (researchId === 'research1') {
                            e.target.src = `https://via.placeholder.com/300x200?text=Image+${index + 1}+Not+Found`;
                          }
                        }}
                      />
                    </div>
                    <div className="activity-content">
                      <h3 className="activity-title">{activity.title}</h3>
                      <p className="activity-text">{activity.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="activity-item">
              <div className="activity-image">
                <img 
                  src="https://via.placeholder.com/300x200?text=Placeholder+Image"
                  alt="Placeholder"
                  className="activity-img"
                />
              </div>
              <div className="activity-content">
                <p className="activity-text">{t.research.placeholder.activities}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {modalImage && (
        <ImageModal
          imageSrc={modalImage.src}
          alt={modalImage.alt}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Research;

