import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ControllerModel from './ControllerModel';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const modelRef = useRef(null);
    const navbarRef = useRef(null);
    const funactRef = useRef(null);

    // Entrance animations on page load
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(modelRef.current, {
                z: 200,
                opacity:0,
                duration: 3,
                delay:2,
                stagger: 0.3,
                ease:"elastic.inOut",

            })
            if (navbarRef.current) {
                gsap.from(navbarRef.current.querySelectorAll('a'), {
                    y: -50,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 1,
                    delay:1,
                    ease: 'power3.out',
                });
            }

            if (funactRef.current) {
                gsap.from(funactRef.current, {
                    y: -50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                });
            }

            if (textRef.current) {
                gsap.from(textRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 2.5,
                    ease: 'bounce.out',
                });
            }
        }, heroRef); // context based on hero section

        return () => ctx.revert(); // cleanup
    }, []);

    // Scroll-triggered timeline
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: '+=900vh',
                scrub: true,
                // markers: true,
            },
        });

        tl.to(textRef.current, {
            y: 100,
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power1.out',
        }).to(
            modelRef.current,
            {
                y: 300,
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power1.out',
            },
            '<'
        );
    }, []);

    return (
        <>
            {/* Header */}
            <header id="head" className="header">
                <h1 className="funact-title" ref={funactRef}>
                    FUNACT
                </h1>
                <div className="navbar" ref={navbarRef}>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">Contact</a>
                </div>
            </header>

            {/* Hero Section */}
            <div className="hero" ref={heroRef}>
                <div className="content">
                    <div className="hero-text-section" ref={textRef}>
                        <h1>
                            Explore Worlds <br /> Beyond Imagination
                        </h1>
                        <p>
                            Discover a deeper gaming experience with the <br /> innovative PS5® controller.
                        </p>
                    </div>
                    <div className="hero-img-section" ref={modelRef}>
                        <ControllerModel />
                    </div>
                </div>
            </div>

            {/* More content to allow scrolling */}
            <section className='slogan' style={{ height: '100vh', background: '#f0f0f0' }}>
                <h2>PLAY HAS <br></br>NO LIMITS</h2>
            </section>
        </>
    );
};

export default Hero;
