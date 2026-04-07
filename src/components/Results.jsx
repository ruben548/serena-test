import AxisChart from "./AxisChart";
import { getProfile, getUrgentAxis, MODULES } from "../data/profiles";
import { CTA_URL, PROGRAM_NAME } from "../config";

export default function Results({ axisScores, totalScore, onRetake }) {
  const profile = getProfile(totalScore);
  const urgentAxisKey = getUrgentAxis(axisScores);
  const urgentModule = MODULES[urgentAxisKey];

  return (
    <div className="results-wrapper">
      {/* Header */}
      <div className="results-header">
        <span className="results-emoji">{profile.emoji}</span>
        <p className="results-eyebrow">Tu perfil</p>
        <h2 className="results-profile-name">{profile.name}</h2>
      </div>

      {/* Gráfico de ejes */}
      <div className="results-section">
        <h3 className="section-title">Tu puntuación por eje</h3>
        <AxisChart axisScores={axisScores} />
      </div>

      {/* Descripción */}
      <div className="results-section results-desc-box">
        <h3 className="section-title">Tu situación ahora mismo</h3>
        <p className="results-desc">{profile.description}</p>
      </div>

      {/* Módulo urgente */}
      <div className="results-section results-module-box">
        <p className="module-eyebrow">El módulo de {PROGRAM_NAME} que más te urge</p>
        <h3 className="module-name">✦ {urgentModule.name}</h3>
        <p className="module-desc">{urgentModule.description}</p>
        <p className="module-cta-text">{profile.cta}</p>
      </div>

      {/* CTA */}
      <div className="results-cta">
        <a href={CTA_URL} className="btn-primary btn-cta" target="_parent" rel="noopener noreferrer">
          Quiero empezar →
        </a>
        <button className="btn-retake" onClick={onRetake}>
          Repetir el test
        </button>
      </div>

      <p className="results-footer">
        {PROGRAM_NAME} · Transformación consciente para mujeres de 40+
      </p>
    </div>
  );
}
