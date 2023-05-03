import './App.css';
import { useEffect, useState } from 'react';
import StartPage from './components/StartPage';
import Results from './components/Results';
import QuizPage from './components/QuizPage';

function App() {

  // 
  const [quizzes, setQuizzes] = useState([])
  const [question, setQuestion] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [marks, setMarks] = useState(0)

  // display control states
  const [showStart, setShowStart] = useState(true)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showResult, setShowResult] = useState(false)


  // fetching the questions
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
      .then(res => res.json())
      .then(data => setQuizzes(data.results))
  }, [])


  // setting a question
  useEffect(() => {
    if(quizzes.length > questionIndex) {
      setQuestion(quizzes[questionIndex])
    }
  }, [quizzes, questionIndex])

  // starting the quiz
  const startQuiz = () => {
    setShowStart(false)
    setShowQuiz(true)
  }

  // Check the Answer
  const checkAnswer = (event, selected) => {
    if(!selectedAnswer) {
      setCorrectAnswer(question.correct_answer)
      setSelectedAnswer(selected)

      if(selected === question.correct_answer) {
        setMarks(marks + 5)
      } else {
        setMarks(marks - 5)
      }
    }
  }


  // showing the next question
  const nextQuestion = () => {
    setCorrectAnswer('')
    setSelectedAnswer('')

    setQuestionIndex(questionIndex + 1)
  }



  // Shows the results of the quiz
  const showEndResults = () => {
    setShowResult(true)
    setShowStart(false)
    setShowQuiz(false)
  }

  
  // restart quiz
  const startOver = () => {
    setShowStart(false)
    setShowResult(false)
    setShowQuiz(true)
    setCorrectAnswer('')
    setSelectedAnswer('')
    setQuestionIndex(0)
    setMarks(0)
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
      .then(res => res.json())
      .then(data => setQuizzes(data.results))

  }




  return (
    <div className="App">
      <><StartPage startQuiz={startQuiz} showStart={showStart} /></>


      <><QuizPage 
          showQuiz={showQuiz}
          question={question}
          quizzes={quizzes}
          checkAnswer={checkAnswer}
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          questionIndex={questionIndex}
          nextQuestion={nextQuestion}
          showEndResults={showEndResults}
      /></>


      <><Results showResult={showResult} quizzes={quizzes} marks={marks} startOver={startOver} /></>

    </div>
  );
}

export default App;
