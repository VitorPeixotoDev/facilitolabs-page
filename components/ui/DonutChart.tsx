import { SECTOR_DATA } from "@/components/landing/constants";

const SIZE = 280;
const STROKE = 36;
const RADIUS = (SIZE - STROKE) / 2;
const CENTER = SIZE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function DonutChart() {
  const total = SECTOR_DATA.reduce((sum, item) => sum + item.value, 0);
  let offset = 0;

  const segments = SECTOR_DATA.map((sector) => {
    const length = (sector.value / total) * CIRCUMFERENCE;
    const segment = {
      ...sector,
      dashArray: `${length} ${CIRCUMFERENCE - length}`,
      dashOffset: -offset,
    };
    offset += length;
    return segment;
  });

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
      <div className="relative shrink-0">
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="-rotate-90 drop-shadow-lg"
          role="img"
          aria-label="Gráfico de rosca com visão setorial da percepção por departamento"
        >
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={STROKE}
          />
          {segments.map((segment) => (
            <circle
              key={segment.label}
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke={segment.color}
              strokeWidth={STROKE}
              strokeDasharray={segment.dashArray}
              strokeDashoffset={segment.dashOffset}
            />
          ))}
        </svg>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
            Visão
          </span>
          <span className="font-label-sm text-label-sm font-semibold text-primary">
            Setorial
          </span>
        </div>

        <div className="absolute -top-2 -right-2 rounded-full bg-primary-container px-3 py-1 font-label-sm text-label-sm font-bold text-on-primary-container">
          100% resposta
        </div>
      </div>

      <ul className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
        {SECTOR_DATA.map((sector) => (
          <li
            key={sector.label}
            className="flex items-center gap-3 rounded-lg bg-surface-container/60 px-3 py-2"
          >
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: sector.color }}
            />
            <span className="flex-1 font-body-md text-[13px] text-on-surface-variant">
              {sector.label}
            </span>
            <span className="font-label-md text-label-md font-bold text-primary">
              {sector.value}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
