import React from "react";
import { useModalStore } from "@/store/modalStore";

export interface SidebarProps {
  onCategorySelect?: (category: string) => void;
  onSearch?: (query: string) => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const { openModal } = useModalStore();

  return (
    <div className="space-y-6 sticky top-20">
      <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Нужен сайт?</h3>
        <p className="text-sm text-gray-700 mb-3">Я создаю сайты под ключ — от идеи до запуска.</p>
        <button
          onClick={() => openModal("freelance")}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Заказать сайт
        </button>
      </div>

      <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">Нужен сотрудник?</h3>
        <p className="text-sm text-gray-700 mb-3">Я открыт к предложениям о сотрудничестве и интервью.</p>
        <button
          onClick={() => openModal("interview")}
          className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Назначить интервью
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
