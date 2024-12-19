import { useEffect } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); 
  };

 
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'; 
    i18n.changeLanguage(savedLanguage); 
  }, [i18n]);

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage('az')}>Az</button>
        <button onClick={() => changeLanguage('en')}>En</button>
      </div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}

export default App
