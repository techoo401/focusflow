import React, { useState, useEffect, useRef } from "react"
import gsap from "gsap"

function Day() {
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
    const weekdates = () => {
        const startOfWeek = new Date(currentDate)
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()) //return to sunday

        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(startOfWeek)
            date.setDate(startOfWeek.getDate() + i)
            return {
                date: date.getDate(),
                month: date.toLocaleDateString("en-US", { month: "short" }),
                day: date.toLocaleDateString("en-US", { weekday: "short" })
            }
        })
    }

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
            {weekdates().map((value, index) => {
                return (
                    <div
                        className={`w-20 h-30 px-20 py-20 flex flex-col items-center justify-center rounded font-semibold ${value.day === weekday ? "text-white bg-blue-500" : "text-black bg-blue-100"
                            }`}
                        ref={el => dayRefs.current[index] = el}
                        key={index}>

                        <div
                            className="text-4xl">
                            {value.day}
                        </div>

                        <div className="text-xl mt-5">
                            {value.date}
                        </div>

                        <div>
                            {value.month}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Day
