import { useModalStore } from '@/store/modalStore';
import { useTranslation } from 'react-i18next';

const FreelanceSection: React.FC = () => {
    const openModal = useModalStore((state) => state.openModal);
    const { t } = useTranslation();

    return (

        <section className='relative h-screen snap-start bg-gray-300 overflow-hidden'>
            {/* Blrd bg */}
            <div className='absolute inset-0 flex justify-center items-stretch blur-lg opacity-40 pointer-events-none'>
                <div className='w-1/3 mx-4 p-10 bg-white rounded-2xl shadow-xl'>
                <br/>
                <br/><br/><br/>
                Project: Corporate Landing Page  
                Client: Horizon Tech, Inc.  
                Duration: 14 days  
                <br/>
                <br/><br/>
                Tools: React, Tailwind CSS, Figma, Vercel  
                <br/>
                Key Features:  
                • Responsive UI across devices  
                • Animated scroll transitions  
                • SEO optimization  
                • Backend-free contact form integration  
                <br/><br/><br/>

                ---------------------------
                <br/>
                Design Approval: ✓  
                <br/>
                Deployment Status: Live  
                <br/>
                Performance Score: 96/100  
                <br/>
                Client Feedback:  
                “Excellent work! Clean code and stylish UI. Will hire again.”
                <br/>
                Next Availability: 3 slots open  
                
                </div>
                <div className='w-1/3 mx-4 p-10 bg-white rounded-2xl shadow-xl'>
                <br/>
                <br/>
                <br/>
                <br/><br/>

                Name: Baranov Sviatoslav
                Position: React Frontend Developer  
                Experience: few years  
                Location: Shanghai, China (UTC+8)  
                <br/>
                <br/>
                Core Skills:  
                • React, TypeScript, Tailwind CSS  
                • REST API integration  
                • Component architecture  
                • UX/UI collaboration  
                <br/>
                <br/>
                Languages:  
                • English  – Fluent  
                • Russian  – Native  
                • Chinese  – Daly conversation 
                • Japanese – Daly conversation 

                <br/>
                <br/>
                Contact:  
                📧 maxfray94@gmail.com  
                📞 WeChat: NoSuch_Person

                Available for:  
                • Tech Interview  
                • Freelance Proposal Discussion
                </div>
            </div>

            {/* Glss btns */}
            <div className='relative z-10 h-full flex justify-around items-center gap-16'>
                <button
                    onClick={() => openModal('freelance')}
                    className='w-42 h-42 bg-white/20 backdrop-blur-md rounded-full shadow-lg justify-center text-xl font-semibold hover:scale-150 transition text-blue-900'    
                >
                    {t('freelance.btn_order')}
                </button>
                <button
                    onClick={() => openModal('interview')}
                    className='w-42 h-42 bg-white/20 backdrop-blur-md rounded-full shadow-lg justify-center text-xl font-semibold hover:scale-150 transition text-blue-900'
                >
                    {t('freelance.btn_interview')}
                </button>
            </div>

        </section>
    );
};

export default FreelanceSection