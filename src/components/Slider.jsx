import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const items = [
  { id: 1, title: 'Project 1', image: '/ourteam/jpg/ourstory2.jpg' },
  { id: 2, title: 'Project 2', image: '/ourteam/jpg/ourstory1.jpg' },
  { id: 3, title: 'Project 3', image: '/ourteam/jpg/ourstory0.jpg' },
  { id: 4, title: 'Project 4', image: '/ourteam/jpg/Ourteam1.jpg' },
  { id: 5, title: 'Project 5', image: '/ourteam/jpg/ourstory1.jpg' },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
      slider.classList.add('cursor-grabbing');
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      slider.classList.remove('cursor-grabbing');
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      slider.classList.remove('cursor-grabbing');
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  const handlePrev = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleNext = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <div className="mx-auto relative w-full px-1 py-8 bg-slate-50 h-full">
      <h2 className="text-3xl lora font-bold mb-1 text-center">Our Works</h2>
      <p className="lora text-sm text-center text-gray-600 md:text-lg lg:text-xl px-4 md:px-16 mb-5">
        Explore our featured projects and discover the innovative solutions we've created.
      </p>
      

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide cursor-grab snap-x snap-mandatory snap-start lg:px-20"
      >
        {items.map((item) => (
        <>
          <div
            key={item.id}
            className="min-w-[300px] flex-shrink-0 bg-transparent rounded-xl  p-4 text-center snap-x snap-mandatory snap-start"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-[16/12] h-60 object-cover rounded-lg mb-2 "
            />

            <h3 className="text-lg font-semibold text-left mx-2">{item.title}</h3>
          </div></>
        ))}
      </div><div className="flex justify-between items-center px-[10%] my-10 md:hidden">
        <button onClick={handlePrev} className="text-gray-600 hover:text-black  ">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <button onClick={handleNext} className="text-gray-600 hover:text-black ">
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default Slider;