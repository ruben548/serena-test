export default function Intro({ onStart }) {
  return (
    <div className="intro-wrapper">
      <div className="intro-badge">Test diagnóstico gratuito</div>
      <h1 className="intro-title">
        ¿Cómo está tu sistema nervioso <em>ahora mismo</em>?
      </h1>
      <p className="intro-subtitle">
        12 preguntas · 4 minutos · Resultado personalizado
      </p>
      <p className="intro-desc">
        Diseñado para mujeres de 40+ años que sienten que algo ha cambiado —
        en su energía, en sus emociones, en su manera de verse a sí mismas —
        y quieren entender qué está pasando realmente.
      </p>

      <div className="intro-axes">
        <div className="intro-axis">
          <span className="axis-icon">🧠</span>
          <span>Energía mental</span>
        </div>
        <div className="intro-axis">
          <span className="axis-icon">🌿</span>
          <span>Sistema nervioso</span>
        </div>
        <div className="intro-axis">
          <span className="axis-icon">💛</span>
          <span>Gestión emocional</span>
        </div>
        <div className="intro-axis">
          <span className="axis-icon">🌙</span>
          <span>Identidad & cambio</span>
        </div>
      </div>

      <button className="btn-primary" onClick={onStart}>
        Comenzar el test
      </button>

      <p className="intro-note">Sin registro · 100% gratuito · Resultado inmediato</p>
    </div>
  );
}
