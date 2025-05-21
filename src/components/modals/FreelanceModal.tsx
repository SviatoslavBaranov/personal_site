import React, { useState } from "react";
import { useModalStore } from "@/store/modalStore";
import { PopupButton } from 'react-calendly';


interface FormData {
  name: string;
  email: string;
  message: string;
}

const FreelanceModal: React.FC = () => {
    const { modal, openModal } = useModalStore();

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: ''
    });
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccessMessage("Заявка успешно отправлена!");
          setFormData({ name: '', email: '', message: '' });
          setShowForm(false);
        } else {
          alert("Произошла ошибка при отправке. Попробуйте позже.");
        }
      } catch (error) {
        console.error("Ошибка отправки формы:", error);
        alert("Ошибка подключения к серверу.");
      }
    };

    if (modal !== 'freelance') return null;

    return (
        <div 
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
            onClick={() => openModal(null)}
        >
            <div 
                className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
              <div className="max-h-[90vh] overflow-y-auto">
                <button
                    onClick={() => openModal(null)}
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ×
                </button>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Создание сайта под ключ</h2>
                
                <p className="text-gray-700 mb-4">
                    Подготовлю и задеплою современный сайт на React под любые задачи — от лендинга до корпоративного портала. 
                    Минимальные сроки — от 2 недель.
                </p>

                <p className="text-gray-700 mb-4">
                    Привлеку и организую работу необходимых специалистов: UI/UX-дизайнер, backend-разработчик, копирайтер, QA-инженер, 
                    фотограф, SEO-оптимизатор, проект-менеджер и другие при необходимости.
                </p>

                <p className="text-gray-700 mb-4">
                    Для каждого специалиста провожу отбор, тестирование и предоставляю полную информацию о причинах выбора.
                </p>

                <p className="text-gray-700 mb-4">
                    После релиза — 1 месяц технической поддержки включён.
                </p>

                <p className="text-xs text-gray-500 mb-6">
                    * Сторонние специалисты привлекаются по согласованию с заказчиком и оплачиваются отдельно на основании сметы.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-start sm:gap-4 mt-6">
                  <div className="w-full sm:w-auto mb-2 sm:mb-0">
                    <button
                      onClick={() => setShowForm(!showForm)}
                      className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full shadow hover:bg-gray-200 transition w-full sm:w-auto"
                    >
                      {showForm ? 'Скрыть форму' : 'Оставить заявку'}
                    </button>
                  </div>
                  <div className="w-full sm:w-auto flex items-center">
                    <PopupButton
                      url="https://calendly.com/baranov_si/30min"
                      rootElement={document.getElementById('root')!}
                      text="Назначить созвон"
                      className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition w-full sm:w-auto"
                    />
                  </div>
                </div>
                {successMessage && (
                  <div className="p-3 mb-2 mt-5 rounded bg-green-100 text-green-800 text-sm">
                    {successMessage}
                  </div>
                )}
                {showForm && (
                  <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                    <form onSubmit={handleSubmit} className="space-y-4 w-full md:flex-1 max-h-[50vh] overflow-y-auto">
                        <input
                        type="text"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <textarea
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
                        >
                        Отправить
                        </button>
                        
                    </form>
                  </div>
                )}
              </div>
            </div>
        </div>
    );
};

export default FreelanceModal;