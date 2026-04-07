export const AXES = [
  { id: "energia", label: "Energía Mental", color: "#B8976A" },
  { id: "nervioso", label: "Sistema Nervioso", color: "#4A5240" },
  { id: "emocional", label: "Gestión Emocional", color: "#8B7355" },
  { id: "identidad", label: "Identidad & Cambio", color: "#6B7A5A" },
];

export const QUESTIONS = [
  // --- Energía Mental ---
  {
    id: 1,
    axis: "energia",
    text: "¿Cómo describirías tu nivel de concentración durante el día?",
    options: [
      { text: "No puedo concentrarme, mi mente va de un lado a otro", score: 1 },
      { text: "Me cuesta arrancar pero a veces logro enfocarme", score: 2 },
      { text: "Me concentro bien cuando el entorno me acompaña", score: 3 },
      { text: "Mi mente está clara y puedo sostener el foco con facilidad", score: 4 },
    ],
  },
  {
    id: 2,
    axis: "energia",
    text: "¿Cómo es tu energía mental al final del día?",
    options: [
      { text: "Agotada, con la cabeza llena de ruido y sin poder parar", score: 1 },
      { text: "Cansada y con la sensación de haber corrido sin avanzar", score: 2 },
      { text: "Algo cansada pero con cierta satisfacción", score: 3 },
      { text: "Con energía para seguir o para cerrar el día conscientemente", score: 4 },
    ],
  },
  {
    id: 3,
    axis: "energia",
    text: "¿Cómo describes tu memoria y claridad mental últimamente?",
    options: [
      { text: "Me olvido de cosas importantes y me preocupa bastante", score: 1 },
      { text: "Noto lagunas frecuentes pero intento manejarlo", score: 2 },
      { text: "Funciono bien aunque a veces me disperso", score: 3 },
      { text: "Mi claridad mental está bien o la gestiono sin ansiedad", score: 4 },
    ],
  },

  // --- Sistema Nervioso / Estrés ---
  {
    id: 4,
    axis: "nervioso",
    text: "Cuando algo inesperado sucede, ¿cómo reacciona tu cuerpo?",
    options: [
      { text: "Me disparo: corazón acelerado, tensión, ansiedad inmediata", score: 1 },
      { text: "Me altero bastante aunque luego logro calmarme", score: 2 },
      { text: "Me afecta pero sé volver a la calma con tiempo", score: 3 },
      { text: "Lo proceso con relativa tranquilidad desde el principio", score: 4 },
    ],
  },
  {
    id: 5,
    axis: "nervioso",
    text: "¿Con qué frecuencia sientes tensión física (mandíbula, cuello, hombros)?",
    options: [
      { text: "Casi siempre, es mi estado habitual de base", score: 1 },
      { text: "Varias veces a la semana", score: 2 },
      { text: "Ocasionalmente, sobre todo en épocas de más estrés", score: 3 },
      { text: "Rara vez, o lo noto y lo gestiono rápido", score: 4 },
    ],
  },
  {
    id: 6,
    axis: "nervioso",
    text: "¿Cómo es tu sueño actualmente?",
    options: [
      { text: "Duermo mal: me despierto, tengo insomnio o sueño muy ligero", score: 1 },
      { text: "Irregular — hay noches buenas y muchas malas", score: 2 },
      { text: "Generalmente bien aunque algo me altera a veces", score: 3 },
      { text: "Duermo bien y descanso de verdad la mayoría de noches", score: 4 },
    ],
  },

  // --- Gestión Emocional ---
  {
    id: 7,
    axis: "emocional",
    text: "Cuando sientes una emoción intensa (rabia, tristeza, miedo), ¿qué haces?",
    options: [
      { text: "Me desborda o la ignoro por completo para seguir funcionando", score: 1 },
      { text: "La siento pero no sé bien qué hacer con ella", score: 2 },
      { text: "Intento gestionarla aunque no siempre lo consigo", score: 3 },
      { text: "La reconozco, la proceso y sigo adelante sin quedarme atascada", score: 4 },
    ],
  },
  {
    id: 8,
    axis: "emocional",
    text: "¿Cómo describes tu estado emocional general en este momento?",
    options: [
      { text: "Inestable, con altibajos fuertes o con aplanamiento emocional", score: 1 },
      { text: "Con más emociones difíciles que cómodas en el día a día", score: 2 },
      { text: "En equilibrio la mayor parte del tiempo", score: 3 },
      { text: "Estable, con capacidad real de sentir y fluir", score: 4 },
    ],
  },
  {
    id: 9,
    axis: "emocional",
    text: "¿Tienes espacios donde expresarte emocionalmente sin censura?",
    options: [
      { text: "No, guardo casi todo para mí y se me acumula", score: 1 },
      { text: "Muy poco — con muy pocas personas y de forma superficial", score: 2 },
      { text: "Sí, aunque podría profundizar y abrir más espacio", score: 3 },
      { text: "Sí, tengo espacios y personas de confianza donde ser yo", score: 4 },
    ],
  },

  // --- Identidad / Cambio Interior ---
  {
    id: 10,
    axis: "identidad",
    text: "¿Sientes que sabes quién eres y qué quieres en esta etapa de tu vida?",
    options: [
      { text: "Me siento perdida, sin un rumbo claro", score: 1 },
      { text: "Tengo dudas importantes sobre mi identidad y dirección", score: 2 },
      { text: "Empiezo a clarificar aunque quedan preguntas abiertas", score: 3 },
      { text: "Tengo claridad sobre quién soy y hacia dónde voy", score: 4 },
    ],
  },
  {
    id: 11,
    axis: "identidad",
    text: "¿Cómo estás viviendo los cambios de esta etapa (físicos, relacionales, vitales)?",
    options: [
      { text: "Con resistencia o mucho miedo — me cuesta aceptarlos", score: 1 },
      { text: "Con dificultad — me cuesta adaptarme y a veces me paralizo", score: 2 },
      { text: "Con ambivalencia — hay días mejores que otros", score: 3 },
      { text: "Con apertura, viviéndolos como una oportunidad real de transformación", score: 4 },
    ],
  },
  {
    id: 12,
    axis: "identidad",
    text: "¿Sientes que vives desde lo que tú quieres o desde lo que se espera de ti?",
    options: [
      { text: "Casi siempre desde las expectativas de los demás", score: 1 },
      { text: "Más desde afuera que desde mí misma", score: 2 },
      { text: "Voy encontrando mi camino propio aunque cedo a veces", score: 3 },
      { text: "Vivo principalmente desde mis propios valores y deseos", score: 4 },
    ],
  },
];
