import React from "react";
import { useModalStore } from "@/store/modalStore";
import { useTranslation } from "react-i18next";

export interface SidebarProps {
  onCategorySelect?: (category: string) => void;
  onSearch?: (query: string) => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const { openModal } = useModalStore();
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6 sticky top-20 w-full max-w-sm mx-auto md:mx-0 shrink-0 min-h-[300px] px-4 md:px-0">
      <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('sidebar.order_title')}</h3>
        <p className="text-sm text-gray-700 mb-3">{t('sidebar.order_text')}</p>
        <button
          onClick={() => openModal("freelance")}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          {t('sidebar.order_btn')}
        </button>
      </div>

      <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">{t('sidebar.hire_title')}</h3>
        <p className="text-sm text-gray-700 mb-3">{t('sidebar.hire_text')}</p>
        <button
          onClick={() => openModal("interview")}
          className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          {t('sidebar.hire_btn')}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
