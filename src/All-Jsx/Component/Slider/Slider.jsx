
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PropTypes from "prop-types";
import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = ({images}) => {

    return (
        <div className='sm:h-screen h-[200px] bg-slate-300 md:my-16 my-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={images?.one} alt="" /></SwiperSlide>
                <SwiperSlide><img src={images?.tow} alt="" /></SwiperSlide>
                <SwiperSlide><img src={images?.three} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;

Slider.propTypes = {
    images: PropTypes.object
}