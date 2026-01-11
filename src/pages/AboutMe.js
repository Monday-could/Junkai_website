import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './AboutMe.css';


const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about-me">
      <h1 className="page-title">{t.aboutMe.title}</h1>
      
      <div className="about-content">
        <div className="profile-layout">
          <div className="profile-image-section">
            <img 
              src={process.env.PUBLIC_URL + "/image/9.jpg"}
              alt="Laboratory Photo"
              className="lab-photo"
            />
          </div>
          <div className="profile-info-section">
            <h2 className="profile-name">{t.aboutMe.name}</h2>
            <p className="profile-department">{t.aboutMe.department}</p>
            <div className="contact-info">
              <p className="contact-item">
                <strong>{t.aboutMe.contact.email}:</strong>{' '}
                <a href={`mailto:kjy10312k@gmail.com`} className="email-link">
                  kjy10312k@gmail.com
                </a>
              </p>
              <p className="contact-item">
                <strong>{t.aboutMe.contact.phone}:</strong> 9209394121
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <p className="copyright-text">{t.aboutMe.copyright}</p>
      </div>
    </div>
  );
};

export default AboutMe;

