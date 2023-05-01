export default function StartPage({ startQuiz, showStart }) {
    return (
        <section style={{display: `${showStart ? 'block' : 'none'}`}}>
            <div className="container">
                <div>
                    <div className="column">
                        <h1>basic comp sci quiz</h1>
                        <button onClick={startQuiz}>start quiz</button>
                    </div>
                </div>
            </div>
        </section>
    )
}