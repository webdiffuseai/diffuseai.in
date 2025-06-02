import { useEffect, useRef } from 'react';

interface VariableProximityProps {
  label: string;
  className?: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: React.RefObject<HTMLElement>;
  radius?: number;
  falloff?: 'linear' | 'exponential';
}

const parseSettings = (str: string) =>
  str
    .split(',')
    .map(s => s.trim().replace(/'/g, '').split(' '))
    .reduce((acc, [axis, val]) => ({ ...acc, [axis]: parseFloat(val) }), {} as Record<string, number>);

export default function VariableProximity({
  label,
  className,
  fromFontVariationSettings,
  toFontVariationSettings,
  containerRef,
  radius = 120,
  falloff = 'linear',
}: VariableProximityProps) {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const from = parseSettings(fromFontVariationSettings);
    const to = parseSettings(toFontVariationSettings);

    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spansRef.current.forEach(span => {
        if (!span) return;
        const b = span.getBoundingClientRect();
        const cx = b.left + b.width / 2 - rect.left;
        const cy = b.top + b.height / 2 - rect.top;
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        const t = Math.max(0, 1 - dist / radius);
        const falloffT = falloff === 'exponential' ? t ** 2 : t;

        const settings = Object.entries(from)
          .map(([axis, fromVal]) => {
            const toVal = to[axis] ?? fromVal;
            const val = fromVal + (toVal - fromVal) * falloffT;
            return `'${axis}' ${val.toFixed(1)}`;
          })
          .join(', ');

        span.style.fontVariationSettings = settings;
      });
    };

    containerRef.current?.addEventListener('mousemove', handleMove);
    return () => containerRef.current?.removeEventListener('mousemove', handleMove);
  }, [containerRef, fromFontVariationSettings, toFontVariationSettings, radius, falloff]);

  return (
    <span className={className}>
      {label.split('').map((char, i) => (
        <span
          key={i}
          ref={el => (spansRef.current[i] = el)}
          style={{ fontVariationSettings: fromFontVariationSettings, display: 'inline-block' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
