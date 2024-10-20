import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(2); // Start with the third slide (index 2)
    const totalSlides = 5; // Total number of slides

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [totalSlides]);

    return (
        <section id="slider">
            <input 
                type="radio" 
                name="slider" 
                id="s1" 
                checked={currentSlide === 0} 
                onChange={() => handleSlideChange(0)} 
            />
            <input 
                type="radio" 
                name="slider" 
                id="s2" 
                checked={currentSlide === 1} 
                onChange={() => handleSlideChange(1)} 
            />
            <input 
                type="radio" 
                name="slider" 
                id="s3" 
                checked={currentSlide === 2} 
                onChange={() => handleSlideChange(2)} 
            />
            <input 
                type="radio" 
                name="slider" 
                id="s4" 
                checked={currentSlide === 3} 
                onChange={() => handleSlideChange(3)} 
            />
            <input 
                type="radio" 
                name="slider" 
                id="s5" 
                checked={currentSlide === 4} 
                onChange={() => handleSlideChange(4)} 
            />

             <label htmlFor="s1" id="slide1"> < img src='https://cdn.pixabay.com/photo/2021/11/05/19/53/fruits-6771933_1280.jpg'height={100}/></label>
           
            <label htmlFor="s2" id="slide2"> < img src='https://static.blog.bolt.eu/LIVE/wp-content/uploads/2022/04/30135418/grocery-list-768x402.jpg' height={190} width={700}/></label>
            <label htmlFor="s3" id="slide3"> < img src='https://cdn.pixabay.com/photo/2016/11/18/13/16/boxes-1834416_1280.jpg'/></label>
            <label htmlFor="s4" id="slide4"> < img src='https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg'/></label>
            <label htmlFor="s5" id="slide5"> < img src='https://cdn.pixabay.com/photo/2019/12/20/18/47/grill-4709068_1280.jpg'/></label>

        </section>
    );
};                                                                  

export default Carousel;
