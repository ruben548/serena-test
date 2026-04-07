import { useState } from "react";
import Intro from "./components/Intro";
import QuizQuestion from "./components/QuizQuestion";
import ProgressBar from "./components/ProgressBar";
import Results from "./components/Results";
import { QUESTIONS } from "./data/questions";

const STAGES = { INTRO: "intro", QUIZ: "quiz", RESULTS: "results" };

function computeScores(answers) {
  const axisScores = { energia: 0, nervioso: 0, emocional: 0, identidad: 0 };
  answers.forEach(({ axis, score }) => {
    axisScores[axis] += score;
  });
  const totalScore = Object.values(axisScores).reduce((a, b) => a + b, 0);
  return { axisScores, totalScore };
}

export default function App() {
  const [stage, setStage] = useState(STAGES.INTRO);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);

  const question = QUESTIONS[currentIndex];

  function handleStart() {
    setStage(STAGES.QUIZ);
    setCurrentIndex(0);
    setAnswers([]);
    setSelected(null);
  }

  function handleAnswer(score) {
    setSelected(score);
    const newAnswers = [...answers, { axis: question.axis, score }];

    setTimeout(() => {
      if (currentIndex + 1 < QUESTIONS.length) {
        setAnswers(newAnswers);
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
      } else {
        setAnswers(newAnswers);
        setStage(STAGES.RESULTS);
      }
    }, 420);
  }

  function handleRetake() {
    setStage(STAGES.INTRO);
    setCurrentIndex(0);
    setAnswers([]);
    setSelected(null);
  }

  const { axisScores, totalScore } = computeScores(answers);

  return (
    <div className="app">
      <div className="card">
        {stage === STAGES.INTRO && <Intro onStart={handleStart} />}

        {stage === STAGES.QUIZ && (
          <>
            <ProgressBar current={currentIndex + 1} total={QUESTIONS.length} />
            <QuizQuestion
              question={question}
              questionIndex={currentIndex}
              total={QUESTIONS.length}
              onAnswer={handleAnswer}
              selected={selected}
            />
          </>
        )}

        {stage === STAGES.RESULTS && (
          <Results
            axisScores={axisScores}
            totalScore={totalScore}
            onRetake={handleRetake}
          />
        )}
      </div>
    </div>
  );
}
