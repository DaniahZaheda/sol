import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './GallerySlider.css';

export default function GallerySlider() {
  let swiperRef = null;
 


  const projects = [
    { title: "Tecton",desc:"AI data engineering",video: "https://framerusercontent.com/assets/2oWkJc1pCUOzvBUUkdx8Laiuxd0.mp4" },
    { title: "Wealth Tracker",desc:"Track your net worth", img: "https://framerusercontent.com/images/2kKkeQG9vYgEvmryl8h8sqz454.jpg" },
    { title: "Playmind",desc:"Your gaming AI companion", video: "https://framerusercontent.com/assets/bIbItBk7SEkLpuR2Yev99YSRXg.mp4" },
    { title: " Propeller",desc:"Launching revolutionary ideas", video: "https://framerusercontent.com/assets/zOUq2FSvLWRxQVC4aZIyzZ6I.mp4"},
    { title: "Norby",desc:"  Your AI data analyst", video: "  https://framerusercontent.com/assets/aoofKYrlWkJ4mNep1SL1VxZuYIw.mp4" },
    { title: "Spark",desc:"Trading platform", img: "https://framerusercontent.com/images/KscD9KHjVpS92B2LuAqfpGJCSY.jpg" },
  ];

  return (
    <div className="gallery-container" >  
   
     <Swiper
     modules={[Autoplay]}
     spaceBetween={24} 
     loop={true}
     autoplay={{
       delay: 0,
       disableOnInteraction: false,
       pauseOnMouseEnter: false,
     }}
     speed={3000}
     onSwiper={(swiper) => {
       swiperRef = swiper;
     }}
     breakpoints={{
       320: { slidesPerView: 1 },
       640: { slidesPerView: 2 },
       1024: { slidesPerView: 3 },
       1280: { slidesPerView: 4 },
     }}
   >
   
        {projects.map((project, index) => (
          <SwiperSlide
          
            key={index}
            className="gallery-container"
            onMouseEnter={() => swiperRef?.autoplay.stop()}
            onMouseLeave={() => swiperRef?.autoplay.start()}
          >
            <div className="card" >
              <div>
            <h3>{project.title}</h3>
            <h3 style={{color:'gray'}}>{project.desc}</h3>
            </div>

              {project.img && (
                <img src={project.img} alt={project.title}  width="400px"  height="400px" />
              )}
              {project.video && (
                <video
                  src={project.video}
                  width="400px"
                  height="400px"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-slide"
                  
                />
              )}
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}  