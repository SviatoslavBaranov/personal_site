import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';


type NavbarProps = {
  onCategorySelect: (category: string) => void;
  onSearch: (query: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onCategorySelect, onSearch }) => {
  const { t } = useTranslation();
  const categories = [`${t('navbar.news')}`, `${t('navbar.guides')}`, `${t('navbar.analysis')}`, `${t('navbar.projects')}`, `${t('navbar.opinions')}`];
  //const categories = ["Новости", "Гайды", "Аналитика", "Проекты", "Мнения"];

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {({ open }) => (
        <>
          <div className="px-4 py-3 flex justify-between items-center md:justify-start md:gap-6">
            {/* Мобильная кнопка меню */}
            <DisclosureButton className="md:hidden inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-800 focus:outline-none">
              {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </DisclosureButton>

            {/* Логотип или домашняя ссылка */}
            <Link to="/" className="text-sm text-gray-700 hover:underline">
              {t('navbar.to_main_btn')}
            </Link>

            {/* Категории — только для больших экранов */}
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => onCategorySelect('')}
                className="text-sm text-gray-700 hover:underline"
              >
                {t('navbar.fresh')}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategorySelect(cat)}
                  className="text-sm text-gray-700 hover:underline"
                >
                  {cat}
                </button>
                
              ))}
              
            </div>

            {/* Поиск — только для больших экранов */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl ml-auto">
              <button
              onClick={() => i18n.changeLanguage('ru')}
              className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-300 transition"
            >
              RU
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-300 transition"
            >
              EN
            </button>
              <input
                type="text"
                placeholder={t('navbar.search_plhldr')}
                onChange={(e) => onSearch(e.target.value)}
                className="w-48 sm:w-64 px-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Выпадающее меню на мобильных */}
          <DisclosurePanel className="md:hidden px-4 pb-4 space-y-2">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onCategorySelect('')}
                className="text-sm text-gray-700 hover:underline"
              >
                {t('navbar.fresh')}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategorySelect(cat)}
                  className="text-sm text-gray-700 hover:underline"
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="mt-4 bg-gray-100 p-2 rounded-xl">
              <input
                type="text"
                placeholder={t('navbar.search_plhldr')}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
