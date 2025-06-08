import { useTranslation } from 'react-i18next'
import max from '../assets/max.jpg'
import React from 'react';


const PopupButton = React.lazy(() =>
  import('react-calendly').then((mod) => ({ default: mod.PopupButton }))
);

const Hero: React.FC = () => {
  const { t } = useTranslation();

    return (
    <section className="flex-col md:flex-row items-center justify-center px-6 md:px-0 py-0 pt-24 md:pt-0 flex bg-white md:h-screen">
    
    <div className="w-40 h-40 md:w-1/2 md:h-full flex items-center justify-center mb-6 md:mb-0 overflow-hidden">
      <img
        src={max}
        alt="Max photo"
        className="w-40 h-40 md:w-full md:h-full rounded-full md:rounded-none object-cover"
      />
    </div>

    <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:items-start md:text-left md:pl-10 h-full md:h-[80vh] py-10 space-y-8">
      <h1 className="text-4xl font-bold">{t('hero.title')}</h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-700 mt-2">{t('hero.descr')}</p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <PopupButton
      
          url="https://calendly.com/baranov_si/30min"
          rootElement={document.getElementById('root')!}
          text={t('interviewModal.interview_btn')}
          className="self-center bg-blue-600 text-base md:text-xl text-white font-bold px-6 md:px-10 py-4 md:py-6 rounded-full shadow hover:bg-blue-700 transition"
        />
    </React.Suspense>
    </div>
    
      
    
    
    </section>
    
    )
}

export default Hero