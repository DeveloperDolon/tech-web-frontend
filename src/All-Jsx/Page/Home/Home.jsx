
import { useEffect } from "react";
import Banner from "../../Component/Banner/Banner";
import ParticleBackground from "../../ParticleJs/ParticleBackground";
import AOS from "aos";
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    });

    return (
        <div className="">
            <ParticleBackground></ParticleBackground>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;