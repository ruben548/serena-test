import { AXES } from "../data/questions";

export default function QuizQuestion({ question, questionIndex, total, onAnswer, selected }) {
  const axis = AXES.find((a) => a.id === question.axis);

  return (
    <div className="question-wrapper">
      <div className="question-axis-label" style={{ color: axis.color }}>
        {axis.label}
      </div>
      <h2 className="question-text">{question.text}</h2>

      <div className="options-list">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={`option-btn ${selected === opt.score ? "option-btn--selected" : ""}`}
            onClick={() => onAnswer(opt.score)}
          >
            <span className="option-letter">{String.fromCharCode(65 + i)}</span>
            <span className="option-text">{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
