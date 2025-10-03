import { FaInstagram, FaEnvelope, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-white shadow mt-20 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-sky-500">Beranda</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-sky-500">Tentang Kami</a></li>
            <li><a href="#aktivitas" className="text-gray-600 hover:text-sky-500">Aktivitas</a></li>
            <li><a href="#portofolio" className="text-gray-600 hover:text-sky-500">Portofolio</a></li>
            <li><a href="#galeri" className="text-gray-600 hover:text-sky-500">Gallery</a></li>
            <li><a href="#kontak" className="text-gray-600 hover:text-sky-500">Kontak Kami</a></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center flex-wrap gap-6 mb-6">
          <a href="https://wa.me/6287872710838" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600">
            <FaWhatsapp size={24} />
          </a>
          <a href="mailto:info@sekolahsungaicode.com" className="text-sky-500 hover:text-sky-600">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.instagram.com/sekolahsungaicode" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/totokpratopo" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600">
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Copyright by <span className="font-bold">PKM PM DigiCODE UNY</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
