export default function Results({ showResult, quizzes, marks, startOver }) {
    return(
        <section style={{display: `${showResult ?  'block' : 'none'}`}}>
            <div>
                <h1>{marks > (quizzes.length * 5/2) ? 'Good Job' : 'Try harder next time'}</h1>
                <h3>Your score is {marks} out of {quizzes.length * 5}</h3>

                <button onClick={startOver}>Start Over</button>
            </div>
        </section>
    )
}