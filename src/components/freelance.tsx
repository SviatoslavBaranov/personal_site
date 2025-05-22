import { useTranslation } from 'react-i18next';

const Freelance: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='interview' className="relative min-h-screen w-full overflow-hidden flex justify-center items-center px-10 py-20 ">
      {/* Top part of bg */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-600 to-blue-300 z-0"/>
      {/* Bottom part of bg */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white z-0"/>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 flex justify-center items-start gap-10 flex-wrap">
        
        {/* Freelance card */}
        <div className="w-1/3 min-w-[300px] bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10 transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold mb-10">Freelance</h2>
          <ul className="space-y-6 text-lg text-gray-700 font-light leading-relaxed list-none">
            <li className="flex items-start"><span className="text-blue-600 mr-4 mt-1">✔</span> {t('freelance.fast')}</li>
            <li className="flex items-start"><span className="text-blue-600 mr-4 mt-1">✔</span> {t('freelance.responsive')}</li>
            <li className="flex items-start"><span className="text-blue-600 mr-4 mt-1">✔</span> {t('freelance.focused')}</li>
            <li className="flex items-start"><span className="text-blue-600 mr-4 mt-1">✔</span> {t('freelance.month')}</li>
          </ul>
          <div className="flex justify-center">
            <button className="mt-10 bg-blue-600 text-white px-10 py-4 rounded hover:bg-blue-500 transition">Place an order</button>
          </div>
        </div>

        {/* Interview card */}
        <div className="w-1/3 min-w-[300px] bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10  transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold mb-10">Interview</h2>
          <ul className="space-y-6 text-lg text-gray-700 font-light leading-relaxed list-none">
            <li className="flex items-start"><span className="text-blue-600 mr-4 mt-1">✔</span> 🌍 Remote-ready – Available for distributed teams and async workflows.</li>
            <li className="flex items-start"><span className="text-blue-600 mr-4 mt-1">✔</span> 🛠️ Problem-solver mindset – I bring clarity, speed, and structure to development.</li>
            <li className="flex items-start"><span className="text-blue-600 mr-4 mt-1">✔</span> 🤝 Team player – Easy to communicate with, focused on shared goals.</li>
            <li className="flex items-start"><span className="text-blue-600 mr-4 mt-1">✔</span> 🚀 Driven by growth – Always improving and aiming for high-impact results.</li>
          </ul>
          <div className="flex justify-center">
            <button className="mt-10 bg-blue-600 text-white px-10 py-4 rounded hover:bg-blue-500 transition">Book a meeting</button>
          </div>
        </div>
      </div>
  </section>
  );
};

export default Freelance;
