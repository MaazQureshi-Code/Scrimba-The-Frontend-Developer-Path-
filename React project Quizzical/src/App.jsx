import { useState, useRef, useEffect } from "react"
import "./App.css"
import clsx from "clsx"

export default function App() {

    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [startQ, setStartQ] = useState(false)
    const [checked, setChecked] = useState(false)
    const [questions, setQuestions] = useState([])

    const hasFetched = useRef(false)


    // Check if every question has an answer
    const allAnswered =
        questions.length > 0 &&
        questions.every((item, index) => {
            return selectedAnswers[index] !== undefined
        })


    function handleHome() {
        setStartQ(true)
    }


    function handleSelect(index, answer) {
        setSelectedAnswers(prev => {
            const newAnswers = [...prev]

            newAnswers[index] = answer

            return newAnswers
        })
    }


    // GET QUESTIONS FROM API
    async function getData() {
        try {
            const res = await fetch(
                "https://opentdb.com/api.php?amount=5"
            )

            if (!res.ok) {
                throw new Error(`HTTP error: ${res.status}`)
            }

            const data = await res.json()

            setQuestions(data.results)

        } catch (error) {
            console.error("Could not get questions:", error)
        }
    }
    console.log(questions)
    useEffect(() => {

        // prevents React StrictMode from fetching twice in development
        if (hasFetched.current) {
            return
        }

        hasFetched.current = true

        getData()

    }, [checked])


    function handleAnswer() {

        const correctAnswers = questions.filter((item, index) => {
            return selectedAnswers[index] === item.correct_answer
        })

        setScore(correctAnswers.length)
        setChecked(true)
    }


    function reset() {
        setSelectedAnswers([])
        setScore(0)
        setChecked(false)

        // get 5 new questions
        getData()
    }


    const information = questions.map((item, index) => {

        const answers = [
            item.correct_answer,
            ...item.incorrect_answers
        ]

        return (
            <div key={index}>

                <p>{item.question}</p>

                <div className="answerbtn">

                    {answers.map((answer, answerIndex) => {

                        const isSelected =
                            selectedAnswers[index] === answer

                        const isCorrectAnswer =
                            answer === item.correct_answer

                        const isCorrect =
                            checked && isCorrectAnswer

                        const isWrong =
                            checked &&
                            isSelected &&
                            !isCorrectAnswer

                        const isFaded =
                            checked &&
                            !isCorrectAnswer &&
                            !isWrong

                        return (
                            <button
                                key={answerIndex}
                                onClick={() =>
                                    handleSelect(index, answer)
                                }
                                className={clsx("btn", {
                                    selected: isSelected && !checked,
                                    correct: isCorrect,
                                    wrong: isWrong,
                                    faded: isFaded
                                })}
                                disabled={checked}
                            >
                                {answer}
                            </button>
                        )
                    })}

                </div>

            </div>
        )
    })


    return (
        <div className="app">

            {!startQ ? (

                <div id="Homepage">

                    <h1>Quizzical</h1>

                    <p>Some description if needed</p>

                    <button onClick={handleHome}>
                        Start quiz
                    </button>

                </div>

            ) : (

                <main>

                    <div className="check-answer">

                        {information}


                        {checked && (
                            <p>
                                You scored {score}/{questions.length} correct answers
                            </p>
                        )}


                        {!checked && (
                            <button
                                className="btn"
                                onClick={handleAnswer}
                                disabled={!allAnswered}
                            >
                                Check answer
                            </button>
                        )}


                        {checked && (
                            <button
                                className="btn"
                                onClick={reset}
                            >
                                Play again
                            </button>
                        )}

                    </div>

                </main>
            )}

        </div>
    )
}