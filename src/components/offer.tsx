import arrow from '../assets/arrow.png'
import { useTranslation } from 'react-i18next';

const Offer = () => {
  const { t } = useTranslation();

  const journeySteps = [
    {
      icon: '📝',
      title: t('offer.step1_title'),
      text: t('offer.step1_text'),
    },
    {
      icon: '💬',
      title: t('offer.step2_title'),
      text: t('offer.step2_text'),
    },
    {
      icon: '⚙️',
      title: t('offer.step3_title'),
      text: t('offer.step3_text'),
    },
    {
      icon: '🚀',
      title: t('offer.step4_title'),
      text: t('offer.step4_text'),
    },
  ];

  return (
    <section id="offer" className="bg-white py-20 px-4 sm:max-h-screen snap-start">
      <div className="max-w-5xl mx-auto text-center">
        <h4 className="text-xl md:text-4xl font-semibold mb-16 text-gray-900">
          {t('offer.title')}
        </h4>
        <div className="relative hidden sm:block h-[80vh]">
          <>
            <div className="absolute top-0 left-0 w-1/2">
              <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{journeySteps[0].title}</h3>
                <p className="text-gray-600 text-sm">{journeySteps[0].text}</p>
              </div>
            </div>


           <div className='absolute left-[37%] w-[260px] rotate-[20deg] opacity-40 hidden sm:block'>
            <img 
                src={arrow}
                alt='black arrow'
            />
           </div>
           

            <div className="absolute top-[20%] right-0 w-1/2">
              <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{journeySteps[1].title}</h3>
                <p className="text-gray-600 text-sm">{journeySteps[1].text}</p>
              </div>
            </div>


            <div className='absolute top-[35%] left-[37%] w-[260px] rotate-[140deg] opacity-70 hidden sm:block'>
            <img 
                src={arrow}
                alt='black arrow'
            />
           </div>


            <div className="absolute top-[45%] left-0 w-1/2">
              <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{journeySteps[2].title}</h3>
                <p className="text-gray-600 text-sm">{journeySteps[2].text}</p>
              </div>
            </div>


            <div className='absolute scale-y-[-1] top-[65%] left-[35%] w-[260px] rotate-[20deg] hidden sm:block'>
            <img 
                src={arrow}
                alt='black arrow'
            />
           </div>


            <div className="absolute bottom-10 -right-60 w-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{journeySteps[3].title}</h3>
                <p className="text-gray-600 text-sm">{journeySteps[3].text}</p>
              </div>
            </div>
          </>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:hidden">
          {journeySteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-xs w-full mx-auto">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;