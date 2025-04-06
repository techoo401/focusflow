import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Header() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const timeRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = currentDate.getHours();

    const getGreeting = () => {
        if (hour < 12) return "Good Morning";
        else if (hour < 18) return "Good Afternoon";
        else return "Good Evening";
    };

    const greeting = getGreeting();

    const time = currentDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    // Animate time on update
    useEffect(() => {
        if (timeRef.current) {
            gsap.fromTo(
                timeRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" }
            );
        }
    }, [time]);

    return (
        <header className="flex items-center justify-between px-5 mt-5">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-blue-400">{greeting}</h1>
                <h1 className="text-5xl font-bold text-blue-400">Alex</h1>
            </div>
            <div>
                <span
                    ref={timeRef}
                    className="text-3xl mr-10 font-semibold text-blue-400 font-bold"
                >
                    {time}
                </span>
            </div>
        </header>
    );
}

export default Header;
