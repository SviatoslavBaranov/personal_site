import React from "react";
import { useModalStore } from "@/store/modalStore";
import { PopupButton } from 'react-calendly';


const InterviewModal: React.FC = () => {
    const { modal, openModal } = useModalStore();

    if (modal !== 'interview') return null;

    return (
        <div 
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
            onClick={() => openModal(null)}
        
        >
            <div 
                className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-h-[90vh] overflow-y-auto">
                  <button
                      onClick={() => openModal(null)}
                      className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-xl"
                  >
                      ×
                  </button>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Готов к интервью</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Умею быстро включаться в процессы, брать на себя ответственность и доводить задачи до результата. В команде стараюсь не просто закрывать тикеты, а быть партнером: инициировать улучшения, предлагать решения, видеть и понимать бизнес-цели.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Чётко понимаю, зачем нужен фронтенд и как сделать его ценным</li>
                    <li>Хорошо владею React, TypeScript, TailwindCSS и Supabase</li>
                    <li>Не боюсь сложностей и умею работать с неопределённостью</li>
                    <li>Знаю, когда предложить помощь, а когда лучше не мешать</li>
                  </ul>
                  <p className="text-gray-600 text-sm mb-6">
                    P.S. Больше обо мне — на сайте. Если вы ищете разработчика, которому можно доверить интерфейс и не держать его за руку — возможно, мы подходим друг другу.
                  </p>
                  <div className="flex justify-end gap-4">
                      <PopupButton
                          url="https://calendly.com/baranov_si/30min"
                          rootElement={document.getElementById('root')!}
                          text="Пригласить на интервью"
                          className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
                      />
                    <a
                      href="/CV_R_Baranov_SI_2025.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
                    >
                      Открыть CV
                    </a>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewModal;