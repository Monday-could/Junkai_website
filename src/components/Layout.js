import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Layout.css';

const Layout = ({ children }) => {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const t = translations[language];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="layout">
      <div className="layout-container">
        {/* Left Sidebar */}
        <aside className="sidebar" role="navigation" aria-label="Main navigation">
          <div className="profile-section">
            <div className="profile-photo">
              <img 
                src="https://via.placeholder.com/200x200?text=Profile+Photo" 
                alt={t.aboutMe.name}
                className="photo"
              />
            </div>
            <nav className="nav-menu">
              <Link 
                to="/about-me" 
                className={`nav-item ${isActive('/about-me') ? 'active' : ''}`}
                aria-current={isActive('/about-me') ? 'page' : undefined}
              >
                {t.nav.aboutMe}
              </Link>
              <Link 
                to="/research1" 
                className={`nav-item ${isActive('/research1') ? 'active' : ''}`}
                aria-current={isActive('/research1') ? 'page' : undefined}
              >
                {t.nav.research1}
              </Link>
              <Link 
                to="/research2" 
                className={`nav-item ${isActive('/research2') ? 'active' : ''}`}
                aria-current={isActive('/research2') ? 'page' : undefined}
              >
                {t.nav.research2}
              </Link>
              <Link 
                to="/research3" 
                className={`nav-item ${isActive('/research3') ? 'active' : ''}`}
                aria-current={isActive('/research3') ? 'page' : undefined}
              >
                {t.nav.research3}
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="main-content" role="main">
          <div className="language-toggle">
            <span className="language-label">language/语言</span>
            <button 
              onClick={toggleLanguage}
              className="lang-btn"
              aria-label={`Switch to ${language === 'zh' ? 'English' : '中文'}`}
            >
              {language === 'zh' ? '中文' : 'EN'}
            </button>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

