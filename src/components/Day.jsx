import React, { useState, useEffect } from "react"

function Day () {

    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
            const interval = setInterval(() => {
                setCurrentDate(new Date());
            }, 1000);
    
            return () => clearInterval(interval);
        }, [])

        const weekday = currentDate.toLocaleDateString("en-US", {weekday: "short"})

    return (
        <div className="flex items-center mt-10 justify-evenly">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((day, index) => {
                return (
                    <div 
                    className={`w-20 h-30 px-20 py-20 flex items-center justify-center text-4xl rounded font-semibold ${day == weekday ? "text-white bg-blue-500" : "text-black bg-blue-100"}`}
                    key={index}>
                        {day}
                    </div>
                )
            })}
        </div>
    )
}

export default Day