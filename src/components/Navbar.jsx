import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let scrollActive = scroll ? "py-4 bg-white shadow" : "py-6";

  return (
    <div className={`navbar fixed w-full z-[9999] transition-all mt-0 bg-white shadow-md ${scrollActive}`}>
      <div className="container mx-auto px-8 md:px-8 lg:px-24 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold">Sekolah Sungai Code</h1>
        </div>
        <div className="hamburger md:hidden" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: '#000' }} /> : <FaBars size={20} style={{ color: '#000' }} />}
        </div>
        <ul className={click ? "flex flex-col items-center gap-6 fixed left-0 top-16 w-full py-8 z-[9999] font-bold transition-all rounded shadow-lg bg-white shadow-slate-300" : "hidden md:flex md:gap-12 lg:gap-16"}>
          <li>
            <a href="#home" className="font-medium opacity-75">Home</a>
          </li>
          <li>
            <a href="#about" className="font-medium opacity-75">Tentang Kami</a>
          </li>
          <li>
            <a href="#aktivitas" className="font-medium opacity-75">Aktivitas</a>
          </li>
          <li>
            <a href="#portofolio" className="font-medium opacity-75">Portofolio</a>
          </li>
          <li>
            <a href="#galeri" className="font-medium opacity-75">Galeri</a>
          </li>
          <li>
            <a href="#kontak" className="font-medium opacity-75">Kontak</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
