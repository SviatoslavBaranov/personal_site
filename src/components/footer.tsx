import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

    return (
      <footer className="w-full bg-gray-900 text-gray-300" id='footer'>
        <div className="flex flex-col md:flex-row md:items-start md:justify-center max-w-7xl mx-auto py-8 px-4 gap-8">
          {/* Map */}
          <div className="w-full md:w-1/3 h-64 md:h-48 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.10275760059!2d121.50576!3d31.233501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040c86a69a5%3A0x2d0b6f1f63adba8d!2sShanghai%20Tower!5e0!3m2!1sen!2scn!4v1715180000000!5m2!1sen!2scn"
            ></iframe>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-8 mt-0">
            {/* Contact */}
            <div className="md:w-1/3 text-left md:text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-500">Contact</h3>
              <p className="text-gray-400">📍 Lujiazui, Pudong, 200120</p>
              <p className="text-gray-400">📞 +86-131-466-27154</p>
              <p className="text-gray-400">✉️ baranov.si.work@gmail.com</p>
            </div>
            {/* Quick Links */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold mb-2 text-gray-500">{t('header.footer_nav_title')}</h3>
              <ul className="space-y-2">
                <li><a href="#interview" className="hover:text-white text-gray-400">{t('header.interview')}</a></li>
                <li><a href="#about" className="hover:text-white text-gray-400">{t('header.skills')}</a></li>
                <li><a href="#order" className="hover:text-white text-gray-400">{t('header.freelance')}</a></li>
                <li><a href="#portfolio" className="hover:text-white text-gray-400">{t('header.portfolio')}</a></li>
                <li><a href="#privacy" className="hover:text-white text-gray-400">{t('header.privacy')}</a></li>
              </ul>
            </div>

            {/* Follow Me */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold mb-2 text-gray-500">{t('header.footer_follow')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white text-gray-400">LinkedIn</a></li>
                <li><a href="https://github.com/SviatoslavBaranov" className="hover:text-white text-gray-400">GitHub</a></li>
                <li><a href="#" className="hover:text-white text-gray-400">Twitter</a></li>
                <li><a href="#" className="hover:text-white text-gray-400">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
          © 2025 Max Dev. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;