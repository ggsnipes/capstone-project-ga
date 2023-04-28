import './App.css';
import { useEffect, useState } from 'react';
import StartPage from './components/StartPage';

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
      .then(data => setQuizzes(data))
  }, [])

  // setting a question
  useEffect(() => {
    if(quizzes.length > questionIndex) {
      setQuestion(quizzes[questionIndex])
    }
  }, [quizzes, questionIndex])

  const startQuiz = () => {
    setShowStart(false)
    setShowQuiz(true)
  }


  return (
    <div className="App">
      <StartPage />
    </div>
  );
}

export default App;
