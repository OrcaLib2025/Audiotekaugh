import React, {useEffect, useRef, useState} from 'react';
import { gsap } from 'gsap';
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const logoRef = useRef<HTMLImageElement | null>(null);
    const navigationRef = useRef<HTMLUListElement | null>(null);
    const mobNavRef = useRef<HTMLUListElement | null>(null);
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const shouldShrink = window.scrollY > 50;
                if (shouldShrink !== isShrunk) {
                    setIsShrunk(shouldShrink);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isShrunk]);

    useEffect(() => {
        if (headerRef.current) {
            gsap.to(headerRef.current, {
                height: isShrunk ? '75px' : '120px',
                duration: 0.5,
                ease: 'power2.out',
                transformOrigin: 'top center',
            });
        }
    }, [isShrunk]);

    const handleMenuToggle = (isAnimating: boolean, menu: HTMLElement, nav: HTMLElement, burger: HTMLElement): void => {
        if (isAnimating) return;
        isAnimating = true;
        const isHidden = menu.classList.contains('hidden');

        burger.classList.toggle('active');
        if (isHidden) {
            menu.classList.remove('hidden');
            nav.classList.add('flex');
            gsap.fromTo(menu, { x: '200%' }, {
                x: '0%',
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => { isAnimating = false; },
            });
        } else {
            gsap.to(menu, {
                x: '200%',
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    menu.classList.add('hidden');
                    nav.classList.remove('flex');
                    isAnimating = false;
                },
            });
        }
    };

    useEffect(() => {
        const menu = document.querySelector<HTMLElement>('#menu');
        const nav = document.querySelector<HTMLElement>('#nav');
        const burger = document.querySelector<HTMLElement>('.burger-container');

        if (!menu || !nav || !burger) return;

        let isAnimating = false;

        const handleClick: () => void = () => handleMenuToggle(isAnimating, menu, nav, burger);
        burger.addEventListener('click', handleClick);

        return () => {
            burger.removeEventListener('click', handleClick);
        };
    }, []);


    return (
        <header
            className="w-full h-[100%] max-h-[120px] top-0 bg-black bg-opacity-40 hover:bg-opacity-70 fixed z-50 duration-1000"
            ref={headerRef}
        >
            <div className="container flex flex-row justify-between items-center mt-2">
                <Link
                    to="/"
                    className="flex flex-row items-center">
                    <img
                        src="/disc.png"
                        className="logo"
                        width="100px"
                        height="100px"
                        ref={logoRef}
                    />
                    <span className="text-white font-bold pl-[10px] text-[32px] cursor-pointer underline underline-offset-[-20px]">
                        AudiotekAUGH
                    </span>
                </Link>

                {/* Навигационная панель для десктоп версий */}
                <nav ref={navigationRef}>
                    <ul className="flex gap-12 md:hidden lg:visible">
                        {["Albums", "Genres", "Artists", "Musics", "Profile"].map((item: string) => (
                            <li key={item}>
                                <Link to={`/${item.toLowerCase()}`} className="font-bold text-[24px] lg:text-[12px] text-lightblack hover:text-white transition-colors duration-300">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav id="menu" className="hidden w-full absolute top-[0] left-0" ref={mobNavRef}>
                    <ul id="nav" className="w-[100%] absolute top-[0] bg-black flex-col items-center">
                        {["Albums", "Genres", "Artists", "Musics", "Profile"].map((item: string) => (
                            <li key={item} className="text-white py-3 w-[100%] text-center transition-all hover:bg-footerblack">
                                <Link to={`/${item.toLowerCase()}`} className="font-bold text-[24px] text-lightblack hover:text-white transition-colors duration-300 lg:text-base">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className="burger-container hidden md:block content-center relative z-10">
                    <div className="burger-item top-line"></div>
                    <div className="burger-item mid-line"></div>
                    <div className="burger-item bot-line"></div>
                </button>
            </div>
        </header>
    );
};
