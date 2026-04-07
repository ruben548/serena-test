import { AXES } from "../data/questions";

// axisScores: { energia: N, nervioso: N, emocional: N, identidad: N }
// Max per axis = 12 (3 questions × 4 points)
export default function AxisChart({ axisScores }) {
  const MAX = 12;

  return (
    <div className="chart-wrapper">
      {AXES.map((axis) => {
        const score = axisScores[axis.id] || 0;
        const pct = Math.round((score / MAX) * 100);
        return (
          <div key={axis.id} className="chart-row">
            <span className="chart-label">{axis.label}</span>
            <div className="chart-track">
              <div
                className="chart-fill"
                style={{ width: `${pct}%`, backgroundColor: axis.color }}
              />
            </div>
            <span className="chart-score">
              {score}/{MAX}
            </span>
          </div>
        );
      })}
    </div>
  );
}
