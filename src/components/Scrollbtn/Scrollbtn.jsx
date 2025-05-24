
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';



const Scrollbtn =() => {

    const [isVisible, setIsVisible] = useState(false);

    // Visa knappen när man scrollar ner
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // visa efter 300px scroll
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    };

  return (
        isVisible && (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-green-700 text-white p-3 rounded-full shadow-md hover:bg-green-800 transition"
            aria-label="Scroll to top"
        >
            <FaArrowUp size={20} />
        </button>
        
        )
    );

};

export default Scrollbtn;