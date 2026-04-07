// Perfiles basados en puntuación total (12–48)
// Módulos urgentes basados en el eje con menor puntuación

export const MODULES = {
  energia: {
    name: "Claridad & Energía Mental",
    description:
      "Aprenderás a recuperar el foco, reducir el ruido mental y sostener tu energía de forma sostenible.",
  },
  nervioso: {
    name: "Regulación & Calma Interior",
    description:
      "Trabajarás directamente con tu sistema nervioso para salir del modo alerta y volver a tu centro.",
  },
  emocional: {
    name: "Inteligencia Emocional Encarnada",
    description:
      "Aprenderás a procesar tus emociones sin suprimirlas ni dejarte arrastrar por ellas.",
  },
  identidad: {
    name: "Identidad en Expansión",
    description:
      "Reconectarás con quién eres realmente y con lo que quieres construir en esta etapa de tu vida.",
  },
};

export const PROFILES = [
  {
    minScore: 12,
    maxScore: 24,
    name: "Sistema en alerta constante",
    emoji: "🔴",
    description:
      "Tu sistema nervioso lleva tiempo en modo supervivencia. La energía, las emociones y el sentido de identidad están bajo presión. No es un defecto tuyo — es la respuesta natural de un cuerpo que ha cargado demasiado. El primer paso es salir del piloto automático y comenzar a escucharte.",
    cta: "Lo que más te urge ahora mismo es aprender a regular tu sistema nervioso desde adentro.",
  },
  {
    minScore: 25,
    maxScore: 33,
    name: "En transición activa",
    emoji: "🟡",
    description:
      "Estás en medio de un cambio real — lo sientes, aunque a veces no sabes cómo nombrarlo. Hay áreas que funcionan y otras que piden atención. Esta etapa puede ser incómoda, pero también es señal de que algo en ti quiere moverse hacia adelante. Tienes más recursos de los que crees.",
    cta: "Tu sistema necesita acompañamiento específico para atravesar esta transición con más claridad y menos desgaste.",
  },
  {
    minScore: 34,
    maxScore: 40,
    name: "Reorganizándote con consciencia",
    emoji: "🟢",
    description:
      "Has empezado a escucharte y se nota. Hay mayor estabilidad en tu base, aunque algunos ejes todavía piden integración. Estás en un momento fértil: tienes la consciencia para ver dónde crecer y la energía para hacerlo. Lo que necesitas ahora es profundizar en las áreas que aún no han florecido del todo.",
    cta: "Tienes una base sólida. Ahora es momento de afinar y expandirte con intención.",
  },
  {
    minScore: 41,
    maxScore: 48,
    name: "Expansión en marcha",
    emoji: "✨",
    description:
      "Tu sistema está en un buen momento de equilibrio y claridad. Vives con mayor alineación entre lo que sientes, lo que piensas y lo que haces. Esto no significa que no haya retos — significa que tienes las herramientas para atravesarlos. El siguiente nivel es expansión consciente e intencional.",
    cta: "Estás lista para ir más profundo y construir desde la abundancia, no desde la carencia.",
  },
];

export function getProfile(totalScore) {
  return PROFILES.find((p) => totalScore >= p.minScore && totalScore <= p.maxScore);
}

export function getUrgentAxis(axisScores) {
  // axisScores: { energia: N, nervioso: N, emocional: N, identidad: N }
  return Object.entries(axisScores).reduce((min, [axis, score]) =>
    score < min[1] ? [axis, score] : min
  )[0];
}
