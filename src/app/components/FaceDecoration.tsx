interface FaceDecorationProps {
  style?: React.CSSProperties;
  className?: string;
}

/**
 * SVG única que contiene ojos (azul) + U (naranja) en el mismo sistema de coordenadas.
 * Los ojos están exactamente sobre los strokes de la U → alineación garantizada.
 *
 * ViewBox 600 × 900:
 *  - Ojos:   y = 0   → 200  (22% superior)
 *  - Gap:    y = 200 → 225
 *  - U body: y = 225 → 900  (78% inferior)
 *
 * Stroke width: 140 px (de 600 total)
 * Left stroke:  x = 0   → 140
 * Interior gap: x = 140 → 460
 * Right stroke: x = 460 → 600
 */
export function FaceDecoration({ style, className }: FaceDecorationProps) {
  return (
    <svg
      viewBox="0 0 600 900"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      preserveAspectRatio="xMaxYMin meet"
      aria-hidden="true"
    >
      {/* Ojo izquierdo — mismo x/width que el stroke izquierdo de la U */}
      <rect x="0" y="0" width="140" height="100" fill="#006DFD" />

      {/* Ojo derecho — mismo x/width que el stroke derecho de la U */}
      <rect x="460" y="0" width="140" height="100" fill="#006DFD" />

      {/* Separación blanca — rellena el gap entre ojos (y=100) y U (y=150) */}
      <rect x="0" y="100" width="140" height="50" fill="white" />
      <rect x="460" y="100" width="140" height="50" fill="white" />

      {/* U — strokes izq (0-140) y der (460-600) con curva inferior */}
      <path
        d="
          M 0 150
          L 0 750
          Q 0 900 300 900
          Q 600 900 600 750
          L 600 150
          L 460 150
          L 460 730
          Q 460 800 300 800
          Q 140 800 140 730
          L 140 150
          Z
        "
        fill="#FF6D2C"
      />
    </svg>
  );
}
