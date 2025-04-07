import React, { useState, useEffect, useRef } from "react"
import gsap from "gsap"

function Day () {
    const [currentDate, setCurrentDate] = useState(new Date())
    const dayRefs = useRef([])

    // Update date every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    const weekday = currentDate.toLocaleDateString("en-US", { weekday: "short" });

    // Animate only current day
    useEffect(() => {
        const index = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(weekday)
        const ref = dayRefs.current[index]
        if (ref) {
            gsap.fromTo(ref, 
                { scale: 0.8, opacity: 0.5 }, 
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            )
        }
    }, [weekday])

    return (
        <div className="flex items-center mt-5 justify-evenly">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((day, index) => (
                <div
                    ref={el => dayRefs.current[index] = el}
                    className={`w-20 h-30 px-20 py-20 flex items-center justify-center text-4xl rounded font-semibold ${
                        day === weekday ? "text-white bg-blue-500" : "text-black bg-blue-100"
                    }`}
                    key={index}
                >
                    {day}
                </div>
            ))}
        </div>
    )
}

export default Day
