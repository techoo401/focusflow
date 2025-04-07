import React from "react"
import { Check, Star, Timer } from 'lucide-react';
import { Link } from "react-router-dom";

function MainContent () {
    return (
        <div className="flex px-5 py-5 mt-10 items-center">
        <Link to={'/tasks'} >
            <div className="p-5 shadow-lg rounded mx-2">
                <Check className="w-50 h-50 text-blue-500" />
                <h1 className="text-2xl text-center font-semibold py-5">Tasks</h1>
            </div>
        </Link>
        <Link to={'/habits'} >
            <div className="p-5 shadow-lg rounded mx-2">
                <Star className="w-50 h-50 text-blue-500" />
                <h1 className="text-2xl text-center font-semibold py-5">Habits</h1>
            </div>
        </Link>
        <Link to={'/focus-timer'} >
            <div className="p-5 shadow-lg rounded mx-2">
                <Timer className="w-50 h-50 text-blue-500" />
                <h1 className="text-2xl text-center font-semibold py-5">Focus Timer</h1>
            </div>
        </Link>
        </div>
    )
}

export default MainContent