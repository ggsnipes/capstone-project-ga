export default function QuizPage({ showQuiz, question, quizzes, checkAnswer, correctAnswer, selectedAnswer, questionIndex, nextQuestion, showEndResults}) {
    return (
        <section>
            <div className="container">
                <div>
                    <h5>{question.question}</h5>
                    <h5>{quizzes.indexOf(question) + 1} / {quizzes?.length}</h5>
                </div>

                <div>
                    {
                        question?.incorrect_answers?.map((item, index) => 
                        <button
                            key={index}
                            onClick={(event) => checkAnswer(event, item)}
                        >
                            {item}
                        </button>)
                    }
                    <button onClick={(event) => checkAnswer(event, question.correct_answer)}>{question.correct_answer}</button>
                </div>

                {
                    (questionIndex + 1) !== quizzes.length ?
                    <button onClick={nextQuestion} disabled={!selectedAnswer}>Next question</button>
                    :
                    <button onClick={showEndResults} disabled={!selectedAnswer}>Show Results</button>
                }

            </div>
        </section>
    )
}