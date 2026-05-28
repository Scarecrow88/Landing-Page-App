import { useState, useEffect } from "react";
import "../css/sliderContent.css";
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
const images = [
    image1,
    image2,
    image3
];
export default function Slider () {
    const [index, setIndex] = useState (0);
    useEffect (() => {
        const interval = setInterval (() => {
            setIndex ((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval (interval);
    }, []);
    const prevSlide = () => {
        setIndex ((prev) => (prev - 1 + images.length) % images.length);
    };
    const nextSlide = () => {
        setIndex ((prev) => (prev + 1) % images.length);
    };
    const goToSlide = (i) => {
        setIndex (i);
    };
    return (
        <section className="slidersection">
            <div className="sliderbox">
                <h2>Explora nuestra colección</h2>
                <div className="slidercontainer">
                    <div
                        className="slidertrack"
                        style={{
                            transform: `translateX(-${index * 100}%)`,
                            display: "flex",
                            transition: "transform 0.5s ease"
                        }}
                    >
                        {images.map ((img, i) => (
                            <div className="slide" key={i}>
                                <img src={img} alt={`Slide ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                    <button className="sliderbutton prev" onClick={prevSlide}>
                        <svg className="slideicon" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">
                            <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path>
                        </svg>
                    </button>
                    <button className="sliderbutton next" onClick={nextSlide}>
                        <svg className="slideicon" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">
                            <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
                        </svg>
                    </button>
                    <div className="sliderdots">
                        {images.map ((_, i) => (
                            <span
                                key={i}
                                className={`dot ${index === i ? "active" : ""}`}
                                onClick={() => goToSlide (i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}