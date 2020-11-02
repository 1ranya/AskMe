import React, { useState } from 'react'
import QuestionsSection from "./QuestionsSection" 
import QuestionsSectionWithTimer from "./QuestionsSectionWithTimer"
import TypeQuestions from "./TypeQuestions"
import Chart from "./Chart"
export default function Main(props) {
    const [startWithTimer, setStartWithTimer] = useState(false);
    const [startWithoutTimer, setStartWithoutTimer] = useState(false);

    const handleStartWithTimer = () => {
        setStartWithTimer(value =>  value = true)
        console.log("setStartWithTimer ", startWithTimer)
    }


    const handleStartWithoutTimer = () => {
        setStartWithoutTimer(value =>  value = true)
        console.log("setStartWithTimer ", startWithoutTimer)
    }

    return (
        <section className="hero is-success is-fullheight">
                {!startWithTimer && !startWithoutTimer ?
                    <></>: 
                    startWithTimer ?
                    <QuestionsSectionWithTimer/>:
                    <QuestionsSection/>
                } 
                <div className="container has-text-centered hero-body ">
                <TypeQuestions 
                        handleStartWithTimer={handleStartWithTimer} 
                        handleStartWithoutTimer={handleStartWithoutTimer} 
                        startWithTimer={startWithTimer}
                        startWithoutTimer={startWithoutTimer}
                    /> 
                </div>
                   
        </section>
    )
}
