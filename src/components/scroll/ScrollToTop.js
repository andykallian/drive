import { useEffect, useState } from "react";
import { BiArrowFromBottom } from 'react-icons/bi'

import './ScrollToTop.css'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 567){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () =>{
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return(
        <div className='button_container'>
            <button
            className={isVisible ? 'show' : 'show hidden'}
            type="button" onClick={ScrollToTop}>
                <BiArrowFromBottom />
            </button>
        </div>
    )
}

export default ScrollToTop