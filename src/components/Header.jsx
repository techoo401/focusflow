import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Header() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [prevTime, setPrevTime] = useState("");

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

    const charRefs = useRef([]);

    // Set interval for updating time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Animate only changed characters
    useEffect(() => {
        const timeChars = time.split("");
        const prevChars = prevTime.split("");

        timeChars.forEach((char, index) => {
            if (char !== prevChars[index] && charRefs.current[index]) {
                gsap.fromTo(
                    charRefs.current[index],
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.3,
                        ease: "power1.out",
                    }
                );
            }
        });

        setPrevTime(time);
    }, [time]);

    return (
        <header className="flex items-center justify-between px-5 mt-5">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-blue-400">{greeting}</h1>
                <h1 className="text-5xl font-bold text-blue-400">Alex</h1>
            </div>
            <div className="text-3xl mr-10 font-semibold text-blue-400 font-bold flex">
                {time.split("").map((char, index) => (
                    <span
                        key={index}
                        ref={(el) => (charRefs.current[index] = el)}
                        className="inline-block w-[1ch]"
                    >
                        {char}
                    </span>
                ))}
            </div>
        </header>
    );
}

export default Header;
