import { RiBarChartHorizontalLine } from "react-icons/ri";
import { GoScreenFull } from "react-icons/go";
import { MdFullscreenExit } from "react-icons/md";
import { useState } from "react";
import { useSession } from "next-auth/react"

export default function Header(){

    const { data: session } = useSession()
     

    const [isFullScreen, setisFullScreen ] = useState(false);

    const toggleFullscreen = () =>{
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                setisFullScreen(true);
            });
        } else {
            if(document.exitFullscreen){
                document.exitFullscreen().then(() =>{
                    setisFullScreen(false);
                } )
            }
        }
    }

    return <>
    <header className="header flex flex-sb">
        <div className="logo flex gap-2">
            <h1>ADMIN</h1>
            <div className="headerham flex flex-center">
                <RiBarChartHorizontalLine/>
            </div>
        </div>
        <div className="rightnav flex gap-2">
            <div onClick={toggleFullscreen}>
                {isFullScreen ?  <GoScreenFull/> : <MdFullscreenExit/>}                                
            </div>
            <div className="notification">
                <svg width="25px" height="25px" viewBox="0 0 24 24" stroke-width="2.1" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.752 1.91434C14.1218 2.7805 13.75 3.84683 13.75 5C13.75 7.83971 16.0046 10.1528 18.8214 10.247C18.8216 10.2508 18.8219 10.2546 18.8222 10.2583C18.8369 10.4557 18.852 10.6591 18.8726 10.855C19.1087 13.1025 19.6495 14.6443 20.1679 15.6582C20.5132 16.3334 20.8519 16.781 21.0922 17.0516C21.2125 17.1871 21.3088 17.2788 21.3696 17.3328C21.4 17.3599 21.4216 17.3775 21.4329 17.3865L21.4416 17.3933C21.7027 17.5833 21.8131 17.9196 21.7147 18.2278C21.6154 18.5386 21.3265 18.7496 21.0002 18.7496L3.00005 18.75C2.67373 18.75 2.38485 18.539 2.28559 18.2281C2.18718 17.9199 2.29755 17.5837 2.55863 17.3937L2.56735 17.3869C2.57869 17.3779 2.60028 17.3602 2.63069 17.3332C2.69148 17.2792 2.7877 17.1875 2.90804 17.052C3.14835 16.7814 3.48701 16.3338 3.8323 15.6585C4.52142 14.3109 5.25005 12.0306 5.25005 8.4C5.25005 6.51876 5.95021 4.70561 7.21026 3.36156C8.47184 2.01587 10.1937 1.25 12.0001 1.25C12.3823 1.25 12.7613 1.28434 13.1331 1.35139C13.3707 1.39421 14.1514 1.63742 14.752 1.91434Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 5C15.25 2.92893 16.9289 1.25 19 1.25C21.0711 1.25 22.75 2.92893 22.75 5C22.75 7.07107 21.0711 8.75 19 8.75C16.9289 8.75 15.25 7.07107 15.25 5Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.89369 20.3514C10.252 20.1435 10.7109 20.2655 10.9188 20.6238C11.0287 20.8132 11.1864 20.9705 11.3761 21.0798C11.5659 21.1891 11.781 21.2466 12 21.2466C12.219 21.2466 12.4342 21.1891 12.6239 21.0798C12.8137 20.9705 12.9714 20.8132 13.0813 20.6238C13.2891 20.2655 13.7481 20.1435 14.1063 20.3514C14.4646 20.5592 14.5866 21.0182 14.3788 21.3765C14.137 21.7932 13.7901 22.1391 13.3726 22.3796C12.9551 22.62 12.4818 22.7466 12 22.7466C11.5183 22.7466 11.0449 22.62 10.6275 22.3796C10.21 22.1391 9.86301 21.7932 9.62127 21.3765C9.41343 21.0182 9.5354 20.5592 9.89369 20.3514Z" fill="#000000"></path></svg>
            </div>
            <div className="profilenav">
                {session ? (
                    <img 
                        className="rounded-lg object-cover"
                        width={100}
                        height={100}
                        src={session.user.image} 
                        alt="user"
                    />
                ) : (
                    <svg width="25px" height="25px" stroke-width="2.1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#000000" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="#000000" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#000000" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                )}
            </div>
        </div>
    </header>
    </>
}