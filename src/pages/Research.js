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



        <div className="research-summary-section">
          <h2 className="section-heading">{t.research.summary}</h2>
          <p className="research-summary">{currentResearch.summary}</p>
        </div>

        <div className="research-activities-section">
          <h2 className="section-heading">{t.research.activities}</h2>
          {currentResearch.activities && currentResearch.activities.length > 0 ? (
            <div className="activities-list">
              {currentResearch.activities.map((activity, index) => {
                // 图片路径配置：
                // research1: 图片 1, 2, 3
                // research2: 第一部分（index 0）没有图片，第二部分（index 1）图片4，第三部分（index 2）图片5
                // research3: 图片 6, 7, 8
                let imageSrc = null;
                if (researchId === 'research1') {
                  imageSrc = `${process.env.PUBLIC_URL || ''}/image/${index + 1}.jpg`;
                } else if (researchId === 'research2') {
                  // 第一部分（index 0）没有图片
                  if (index === 0) {
                    imageSrc = null;
                  } else {
                    // 第二部分（index 1）图片4，第三部分（index 2）图片5
                    imageSrc = `${process.env.PUBLIC_URL || ''}/image/${index + 3}.jpg`;
                  }
                } else if (researchId === 'research3') {
                  // 图片 6, 7, 8
                  imageSrc = `${process.env.PUBLIC_URL || ''}/image/${index + 6}.jpg`;
                } else {
                  imageSrc = `https://via.placeholder.com/300x200?text=Research+Image+${index + 1}`;
                }
                
                // 对于科研2的第一部分，没有图片，需要调整布局
                const hasImage = imageSrc !== null;
                const shouldReverse = hasImage && index % 2 === 1;
                
                return (
                  <div 
                    key={index} 
                    className={`activity-item ${shouldReverse ? 'activity-item-reverse' : ''} ${!hasImage ? 'activity-item-no-image' : ''}`}
                  >
                    {hasImage && (
                      <div className="activity-image">
                        <img 
                          src={imageSrc}
                          alt={activity.title}
                          className="activity-img"
                          onClick={() => handleImageClick(imageSrc, activity.title)}
                          style={{ cursor: 'pointer' }}
                        />
                      </div>
                    )}
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

