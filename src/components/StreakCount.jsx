import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

function StreakCount() {
    const [streak, setStreak] = useState(0);
    const streakRef = useRef()

    useEffect(() => {
        const today = new Date().toDateString();
        const lastDate = localStorage.getItem("lastDate");
        const currentStreak = Number(localStorage.getItem("streak")) || 0;

        if (lastDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (new Date(lastDate).toDateString() === yesterday.toDateString()) {
                // +1 to streak
                const newStreak = currentStreak + 1;
                setStreak(newStreak);
                localStorage.setItem("streak", newStreak);
            } else if (new Date(lastDate).toDateString() === today) {
                // Already updated today
                setStreak(currentStreak);
            } else {
                // Streak broken
                setStreak(1);
                localStorage.setItem("streak", 1);
            }
        } else {
            // First time
            setStreak(1);
            localStorage.setItem("streak", 1);
        }

        const ref = streakRef.current
        if(ref) {
            gsap.fromTo(ref,
                { opacity: 0.5, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
            )
        }

        // Always update lastDate to today
        localStorage.setItem("lastDate", today);
    }, []);

    return (
        <div className="flex px-10 py-2 mt-10">
            <div className="text-7xl rounded font-bold text-orange-500" ref={streakRef}>
                {streak}🔥
            </div>
        </div>
    );
}

export default StreakCount;
