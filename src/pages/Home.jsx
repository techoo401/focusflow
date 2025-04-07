import React from "react"
import Header from "../components/Header"
import Day from "../components/Day"
import StreakCount from "../components/StreakCount"
import MainContent from "../components/MainContent"

function Home () {
    return (
    <>
        <Header />
        <StreakCount />
        <Day />
        <MainContent />
    </>
    )
}

export default Home