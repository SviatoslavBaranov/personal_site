import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModalStore } from '@/store/modalStore';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const openModal = useModalStore((state) => state.openModal);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-white/40">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">
          <a href="#home">Max | React Web Developer</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <button onClick={() => openModal('freelance')} className="text-gray-600 hover:text-blue-600">
              Заказать Сайт
            </button>
          </li>
          <li>
            <button onClick={() => openModal('interview')} className="text-gray-600 hover:text-blue-600">
              Интервью
            </button>
          </li>
          <li><a href="#about" className="text-gray-600 hover:text-blue-600">Навыки</a></li>
          <li><a href="#portfolio" className="text-gray-600 hover:text-blue-600">Портфолио</a></li>
          <li>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">
              Блог
            </Link>
          </li>
        </ul>
      </nav>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <button onClick={() => { openModal('freelance'); setMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 w-full text-left">
                Заказать Сайт
              </button>
            </li>
            <li>
              <button onClick={() => { openModal('interview'); setMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 w-full text-left">
                Интервью
              </button>
            </li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600">Навыки</a></li>
            <li><a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600">Портфолио</a></li>
            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600">
                Блог
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;