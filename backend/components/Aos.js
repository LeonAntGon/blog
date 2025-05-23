import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aos({ children }){

    useEffect(() => {
        AOS.init({
            duration: 1000, //duration of the animation 1 second
            offset: 200, // offset (in px) from the original trigger point
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
        });
      }, []);
    return(
        <div>
            {children}
        </div>
    )
}