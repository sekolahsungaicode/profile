import beranda from "../assets/images/mafoto.png";
import aboutme from "../assets/images/abotmi.png"
import akt1 from "../assets/images/outingclass.png"
import akt2 from "../assets/images/explore.png"
import akt3 from "../assets/images/identifikasi.png"
import akt4 from "../assets/images/diskusisungai.png"
import port1 from "../assets/images/totokpratopo.png"
import port2 from "../assets/images/harris.png"
import gal1 from "../assets/images/lebahklanceng.png"
import gal2 from "../assets/images/restorasisungai.png"
import gal3 from "../assets/images/sekolahsungai.png"
import gal4 from "../assets/images/pemertikalicode.png"
import gal5 from "../assets/images/bincangsungai.png"
import gal6 from "../assets/images/reresikcode.png"
import port6 from "../assets/images/intermediate2.png"
import port7 from "../assets/images/pam.png"
import port8 from "../assets/images/personaway.png"
import port9 from "../assets/images/unycraft.png"
import port10 from "../assets/images/unycraftapp.png"
import port11 from "../assets/images/spkweb.png"
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaBars, FaTimes, FaInstagram, FaEnvelope, FaWhatsapp, FaFacebook, FaMapMarkedAlt } from 'react-icons/fa'; 
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Home = () => {
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    like: "",
    improve: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams ={
      name: form.name,
      email: form.email,
      rating: rating,
      like: form.like,        
      improve: form.improve,
      time: new Date().toLocaleString(),
    };
    
    console.log(templateParams);
    emailjs
      .send(
        "service_tu2snmh",       // Service ID dari SMTP Gmail
        "template_kjgyqii",   // Template ID
        templateParams,
        "GsO9dye-JkFY7rwTF"      // Public Key dari EmailJS
      )
      .then(
        (result) => {
          alert("✅ Feedback terkirim!");
        },
        (error) => {
          alert("❌ Gagal mengirim: " + error.text);
        }
      );
  };

  const [text] = useTypewriter({
    words: [
      "Pengelolaan Sungai",
      "Pertanian Kota",
      "Pengelolaan Sampah",
      "Mitigasi Bencana",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  return (
    <div className="home py-12 mb-10">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-screen-xl">
          <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Gambar */}
            <div className="relative">
              <div className="absolute -inset-4 bg-sky-100 rounded-3xl rotate-2"></div>
              <img
                src={beranda}
                alt="Sekolah Sungai Code"
                className="relative rounded-3xl shadow-xl w-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-sky-50 px-4 py-2 rounded-full">
                <i className="ri-leaf-line text-sky-500 text-xl"></i>
                <span className="text-sky-700 font-semibold text-sm">Belajar Lingkungan</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                Selamat Datang di <span className="text-sky-500">Sekolah Sungai Code</span>
              </h1>

              <h2 className="text-xl font-medium text-sky-700">
                {text}
                <Cursor
                  cursorBlinking={false}
                  cursorStyle="|"
                  cursorColor="#0ea5e9"
                />
              </h2>

              <p className="text-gray-600 text-justify">
                Sekolah Sungai Code adalah ruang edukatif non-formal 
                untuk belajar tentang sungai, lingkungan, dan kebencanaan. 
                Berbeda dengan sekolah formal, pembelajaran di sini dilakukan 
                langsung di bantaran Sungai Code.
              </p>

              <div className="pt-4">
                <a
                  href="#about"
                  className="inline-flex items-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium shadow-md transition-all"
                >
                  Tentang Kami <i className="ri-arrow-right-line ms-2"></i>
                </a>
              </div>
            </div>
          </div>


        
        <div id="about" className="max-w-7xl mx-auto grid md:grid-cols-2 pt-32 gap-12 items-center">
            {/* Konten di kiri */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-5x1 md:text-5xl font-extrabold text-gray-900">
              <span className="text-sky-500">Yuk</span> Mengenal Kita
            </h1>

            <p className="text-gray-600 text-justify">
              Didirikan pada tahun <strong>2015</strong>, Sekolah Sungai Code bertujuan menghadirkan <strong>ruang edukatif</strong> mengenai <strong>pelestarian lingkungan 
              dan mitigasi bencana</strong> yang dekat dengan kehidupan sehari-hari masyarakat di sekitar <strong>Sungai Code</strong>.
            </p>

            <p className="text-gray-600 text-justify">
            Sekolah Sungai ini berada di bawah naungan <strong>Pemerti Kali Code</strong>, sebuah komunitas <strong>peduli lingkungan</strong> yang berdiri pada tahun <strong>2008</strong> dan digagas oleh <strong>Totok Pratopo</strong>, pegiat lingkungan sekaligus inisiator pelestarian sungai.
            </p>

            <p className="text-gray-600 text-justify">
            Dalam kegiatannya, Sekolah Sungai Code juga <strong>menjalin mitra</strong> dengan berbagai pihak, antara lain <strong>Kelompok Tani Teras Hijau, Bank Sampah Bumi Lestari, 
            Bank Sampah Bunga Lestari, serta Pengelolaan Air Bersih Tirta Kencana</strong>.
            </p>

            <p className="text-base/loose leading-relaxed mb-6 pt-12 text-justify">
            </p>
            <p className="text-base/loose leading-relaxed mb-6 text-justify">
            </p>

            </div>

            {/* Gambar di kanan */}
            <div className="flex justify-center md:justify-start order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-sky-100 rounded-3xl rotate-2"></div>
                <img
                  src={aboutme}
                  alt="Tentang Kami"
                  className="relative rounded-3xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        
        <div id="aktivitas" className="project py-28">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-bold mb-2">
            Aktivitas
          </h1>
          <p className="text-gray-600 text-center">Yuk mengenal aktivitas kita</p>

          <div className="pt-12 px-4">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={4}          // 3 card sekaligus
              spaceBetween={20}          // jarak antar card
              navigation={{nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}             
              pagination={{ 
                  el: ".swiper-pagination",
                  clickable: true,
                }} // titik navigasi
              loop={true}                // looping
              breakpoints={{
                320: { slidesPerView: 1 }, // hp
                640: { slidesPerView: 2 }, // tablet
                1024: { slidesPerView: 4 } // desktop
              }}
            >
              {/* Slide 1 */}
              <SwiperSlide>               
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={akt1} alt="Identifikasi" className="w-full h-auto" />
                      <h3 className="text-lg font-bold mt-6 mb-2">Identifikasi</h3>
                      <p className="text-gray-600 text-justify">
                        Kualitas air dan keanekaragaman hayati sungai
                      </p>
                    </div>                        
              </SwiperSlide>

              <SwiperSlide>             
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={akt2} alt="Ekspedisi" className="w-full h-auto" />
                      <h3 className="text-lg font-bold mt-6 mb-2">Ekspedisi</h3>
                      <p className="text-gray-600 text-justify">
                        Hulu, tengah, dan hilir Sungai Code
                      </p>
                    </div>                
              </SwiperSlide>

              <SwiperSlide>
                <div className="p-2 bg-white shadow rounded-lg h-full">
                    <img src={akt3} alt="Outing Class" className="w-full h-auto" />
                    <h3 className="text-lg font-bold mt-6 mb-2">Outing Class</h3>
                    <p className="text-gray-600 text-justify">
                      Blusukan kampung pinggir Sungai Code
                    </p>
                  </div>                 
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-2 bg-white shadow rounded-lg h-full">
                    <img src={akt4} alt="" className="w-full h-auto" />
                    <h3 className="text-lg font-bold mt-6 mb-2">Diskusi Sungai</h3>
                    <p className="text-gray-600 text-justify">
                      Diskusi Sungai dengan ahlinya
                    </p>
                  </div>                 
              </SwiperSlide>
                <div className="custom-prev absolute top-1/2 left-4 z-10 
                  bg-white text-blue-600 border-2 border-blue-600 
                  w-14 h-14 text-2xl rounded-full flex items-center 
                  justify-center cursor-pointer shadow-xl 
                  hover:bg-blue-600 hover:text-white transition">
                  ‹
                </div>
                <div className="custom-next absolute top-1/2 right-4 z-10 
                  bg-white text-blue-600 border-2 border-blue-600 
                  w-14 h-14 text-2xl rounded-full flex items-center 
                  justify-center cursor-pointer shadow-xl 
                  hover:bg-blue-600 hover:text-white transition">
                  ›
                </div>

              {/* Tambah slide berikutnya tinggal copy SwiperSlide */}
            </Swiper>
          </div>
        </div>



        <div id="portofolio" className="project py-28">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-bold mb-2">
            Portofolio
          </h1>
          <p className="text-gray-600 text-center">Yuk mengenal fasilitator kita</p>

          <div className="pt-12 px-4">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}          // 3 card sekaligus
              spaceBetween={20}          // jarak antar card
              navigation={true}            
              pagination={{ 
                  el: ".swiper-pagination",
                  clickable: true,
                }} // titik navigasi
              loop={true}                // looping
              breakpoints={{
                320: { slidesPerView: 1 }, // hp
                640: { slidesPerView: 2 }, // tablet
                1024: { slidesPerView: 3 } // desktop
              }}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <a href="https://www.instagram.com/p/DOLgoR9iTNA/?img_index=1" target="_blank">
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={port1} alt="Bapak Totok" className="w-full h-auto" />
                      <h2 className="text-xl font-bold mt-6 mb-2">Totok Pratopo</h2>
                      <p className="text-gray-600 text-justify">
                        Ketua Pemerti Kali Code
                      </p>
                    </div>
                </a>                  
              </SwiperSlide>

               {/* Slide 1 */}
              <SwiperSlide>
                <a href="https://www.instagram.com/p/DOLgoR9iTNA/?img_index=1" target="_blank">
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={port2} alt="Bapak Harris" className="w-full h-auto" />
                      <h2 className="text-xl font-bold mt-6 mb-2">Harris Syarif Usman S.H., M.Kn. </h2>
                      <p className="text-gray-600 text-justify">
                        Sekretaris Pemerti Kali Code
                      </p>
                    </div>
                </a>                  
              </SwiperSlide>



              {/* Tambah slide berikutnya tinggal copy SwiperSlide */}
            </Swiper>
          </div>
        </div>

        <div id="galeri" className="project pt-28">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-bold mb-2">
            Galeri
          </h1>
          <p className="text-center">Galeri Sekolah Sungai Code</p>

          <div className="pt-12 px-4">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}          // 3 card sekaligus
              spaceBetween={20}          // jarak antar card
              navigation={{nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}       
              pagination={{ 
                  el: ".swiper-pagination",
                  clickable: true,
                }} // titik navigasi
              loop={true}                // looping
              breakpoints={{
                320: { slidesPerView: 1 }, // hp
                640: { slidesPerView: 2 }, // tablet
                1024: { slidesPerView: 3 } // desktop
              }}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <a href="https://www.instagram.com/p/DPLX4aiCc8p/?img_index=1" target="_blank">
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={gal1} alt="Lebah Klanceng" className="w-full h-auto" />
                      <h3 className="text-xl font-bold mt-6 mb-2">Lebah Klanceng</h3>
                      <p className="text-gray-600 text-justify">
                        Di Sekolah Sungai Code, lebah klanceng ini rajin mengumpulkan nektar dari tanaman Air Mata Pengantin dan dibudidayakan dalam kotak kayu. Unik banget, kan? 😍✨
                      </p>
                    </div>
                </a>                  
              </SwiperSlide>

               {/* Slide 2 */}
              <SwiperSlide>
                <a href="https://www.instagram.com/p/DO8lRB6iSva/?img_index=1" target="_blank">
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={gal2} alt="Restorasi Sungai" className="w-full h-auto" />
                      <h3 className="text-xl font-bold mt-6 mb-2">Restorasi Sungai</h3>
                      <p className="text-gray-600 text-justify">
                        Restorasi sungai itu apa sih? 🤔 Singkatnya, ini adalah upaya mengembalikan sungai supaya tetap sehat, alami, dan berfungsi untuk kehidupan 🌊
                      </p>
                    </div>
                </a>                  
              </SwiperSlide>

               {/* Slide 3 */}
              <SwiperSlide>
                <a href="https://www.instagram.com/p/DMhXM3nTtpw/?img_index=1" target="_blank">
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={gal3} alt="Sekolah Sungai Code" className="w-full h-auto" />
                      <h3 className="text-xl font-bold mt-6 mb-2">Sekolah Sungai Code</h3>
                      <p className="text-gray-600 text-justify">
                        Di sini, kamu bisa menemukan beragam kegiatan seru mulai dari edukasi lingkungan, pengelolaan sampah, hingga pengelolaan air bersih. 🤩
                      </p>
                    </div>
                </a>                  
              </SwiperSlide>

               {/* Slide 4 */}
              <SwiperSlide>
                <a href="https://www.instagram.com/p/DMaf_uUzcst/?img_index=1" target="_blank">
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={gal4} alt="Pemerti Kali Code" className="w-full h-auto" />
                      <h3 className="text-xl font-bold mt-6 mb-2">Pemerti Kali Code</h3>
                      <p className="text-gray-600 text-justify">
                        📢 Komunitas peduli lingkungan dari bantaran Sungai Code yang telah menginspirasi banyak pihak sejak tahun 2008 🌱 Komunitas ini digagas oleh Totok Pratopo.
                      </p>
                    </div>
                </a>                  
              </SwiperSlide>

               {/* Slide 5 */}
              <SwiperSlide>
                <a href="https://www.instagram.com/p/DOGWyxfiQYu/?img_index=1" target="_blank">
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={gal5} alt="Bincang Sungai" className="w-full h-auto" />
                      <h3 className="text-xl font-bold mt-6 mb-2">Bincang Sungai</h3>
                      <p className="text-gray-600 text-justify">
                        Pada Jumat, 26 Agustus 2025, Sekolah Sungai Code mengadakan kegiatan diskusi bersama Dr. Friederika dari University of Passau, Jerman. Diskusi ini berlangsung hangat dengan topik utama mengenai sungai dan peranannya dalam kehidupan kota🗺
                      </p>
                    </div>
                </a>                  
              </SwiperSlide>
              {/* Slide 6 */}
              <SwiperSlide>
                <a href="https://www.instagram.com/p/DOLgoR9iTNA/?img_index=1" target="_blank">
                  <div className="p-2 bg-white shadow rounded-lg h-full">
                      <img src={gal6} alt="Reresik Sungai" className="w-full h-auto" />
                      <h3 className="text-xl font-bold mt-6 mb-2">Reresik Sungai</h3>
                      <p className="text-gray-600 text-justify">
                        Kegiatan Reresik Sungai Code di Kampung Jetisharjo, Yogyakarta, pada 26 Agustus 2025 menjadi wujud perayaan kemerdekaan melalui aksi peduli lingkungan dan penguatan kerukunan umat beragama. Acara ini digelar Pemerti Kali Code dan Kantor Kementerian Agama Kota Yogyakarta, dan dihadiri Wali Kota Yogyakarta, Dr. Hasto Wardoyo.✨
                      </p>
                    </div>
                </a>                  
              </SwiperSlide>

              {/* Custom Navigation Buttons */}
              <div className="custom-prev absolute top-1/2 left-4 z-10 
                bg-white text-blue-600 border-2 border-blue-600 
                w-14 h-14 text-2xl rounded-full flex items-center 
                justify-center cursor-pointer shadow-xl 
                hover:bg-blue-600 hover:text-white transition">
                ‹
              </div>
              <div className="custom-next absolute top-1/2 right-4 z-10 
                bg-white text-blue-600 border-2 border-blue-600 
                w-14 h-14 text-2xl rounded-full flex items-center 
                justify-center cursor-pointer shadow-xl 
                hover:bg-blue-600 hover:text-white transition">
                ›
              </div>

              {/* Tambah slide berikutnya tinggal copy SwiperSlide */}
            </Swiper>
          </div>
        </div>


   <div id="kontak" className="pt-28">
      {/* Judul */}
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2">Kontak kami</h1>
        <p className="text-gray-600">Tulis komentar anda mengenai sekolah sungai ✨</p>
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* --- Kiri info kontak --- */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>

          <div className="flex items-start space-x-3">
            <a
              href="https://maps.app.goo.gl/PSYKuhPDXJMuuGq59"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold"
            >
              <FaMapMarkedAlt size={40} />
              <span>Jetisharjo RT 31/RW 07, Cokrodiningratan, Jetis, Yogyakarta City,
              Special Region of Yogyakarta 55233</span>
            </a>
          </div>

          <div className="flex items-center space-x-3">
             <a
              href="wa.me/+6287872710838"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold"
            >
              <FaWhatsapp size={20} />
              <span>+62-878-7271-0838 (Totok Pratopo)</span>
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="wa.me/+6285935112189"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold"
            >
              <FaWhatsapp size={20} />
              <span>+62-859-3511-2189 (Renna Code)</span>
            </a>
          </div>
            <a
              href="mailto:sekolahsungaicode@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold"
            >  
              <FaEnvelope size={20} />
              <div> </div>
              <span>sekolahsungaicode@gmail.com</span>
            </a>

          <div className="flex items-center space-x-3">
            <a
            href="https://www.instagram.com/sekolahsungaicode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold"
          >
            <FaInstagram size={20} />
            <span>@sekolahsungaicode</span>
           </a>
          </div>
        <div className="flex items-center space-x-3">
            <a
            href="https://www.facebook.com/totokpratopo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold"
            >
            <FaFacebook size={20} />
            <span>@TotokPratopo</span>
           </a>
          </div>
        </div>

        {/* --- Kanan form --- */}
        <form onSubmit={sendEmail} className="space-y-5">
      <div>
        <label className="block text-sm">Rating (1-5)</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              name="rating"
              className={`cursor-pointer text-3xl ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <input
        type="text"
        name="name"
        placeholder="Nama Lengkap"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <textarea
        name="like"
        placeholder="Apa yang kamu sukai?"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />

      <textarea
        name="improve"
        placeholder="Saran perbaikan"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />

      <button
        type="submit"
        className="w-full px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Kirim
      </button>
    </form>

           
       </div> 
      </div> 
      </div>      
    </div>
  );
};

export default Home;
