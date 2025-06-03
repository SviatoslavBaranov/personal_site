import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

    return (
      <footer className="w-full id='footer'">
        {/* Google Map */}
        <div className="w-full h-[60vh]">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.10275760059!2d121.50576!3d31.233501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040c86a69a5%3A0x2d0b6f1f63adba8d!2sShanghai%20Tower!5e0!3m2!1sen!2scn!4v1715180000000!5m2!1sen!2scn"
          ></iframe>
        </div>
  
        {/* Dark Footer */}
        <div className="bg-gray-900 text-gray-300 py-12 px-6  overflow-y-auto]">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-500">Contact</h3>
              <p className="text-gray-600">📍 Lujiazui, Pudong, 200120</p>
              <p className="text-gray-600">📞 +86-131-466-27154</p>
              <p className="text-gray-600">✉️ baranov.si.work@gmail.com</p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-500">{t('header.footer_nav_title')}</h3>
              <ul className="space-y-2">
                <li><a href="#interview" className="hover:text-white text-gray-600">{t('header.interview')}</a></li>
                <li><a href='#about' className="hover:text-white text-gray-600">{t('header.skills')}</a></li>
                <li><a href="#order" className="hover:text-white text-gray-600">{t('header.freelance')}</a></li>
                <li><a href="#portfolio" className="hover:text-white text-gray-600">{t('header.portfolio')}</a></li>
                <li><a href="#privacy" className="hover:text-white text-gray-600">{t('header.privacy')}</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-500">{t('header.footer_follow')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white text-gray-600">LinkedIn</a></li>
                <li><a href="https://github.com/SviatoslavBaranov" className="hover:text-white text-gray-600">GitHub</a></li>
                <li><a href="#" className="hover:text-white text-gray-600">Twitter</a></li>
                <li><a href="#" className="hover:text-white text-gray-600">Instagram</a></li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 text-center text-sm text-gray-500">
            © 2025 Max Dev. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  