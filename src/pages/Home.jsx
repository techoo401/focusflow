import React from "react"
import Header from "../components/Header"
import Day from "../components/Day"
import StreakCount from "../components/StreakCount"

function Home () {
    return (
    <>
        <Header />
        <StreakCount />
        <Day />
    </>
    )
}

export default Home