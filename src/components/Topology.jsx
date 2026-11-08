import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// A small network diagram: Rafael's workstation linked to each part of the portfolio.
// Packets travel each link once on load; hovering or focusing a node sends another.

const CENTER = { x: 280, y: 228 };

export default function Topology({ photo, nodes }) {
  const reduce = useReducedMotion();
  const [up, setUp] = useState(() => (reduce ? nodes.map((n) => n.id) : []));
  const [sends, setSends] = useState({}); // id -> counter, used as a key to replay a packet

  useEffect(() => {
    if (reduce) return;
    const timers = nodes.map((n, i) =>
      setTimeout(() => setSends((s) => ({ ...s, [n.id]: (s[n.id] || 0) + 1 })), 500 + i * 380),
    );
    return () => timers.forEach(clearTimeout);
  }, [nodes, reduce]);

  const send = (id) => {
    if (reduce) return;
    setSends((s) => ({ ...s, [id]: (s[id] || 0) + 1 }));
  };

  const arrive = (id) => setUp((u) => (u.includes(id) ? u : [...u, id]));

  return (
    <svg
      viewBox="0 0 560 456"
      className="w-full h-auto"
      role="group"
      aria-label="Map of this portfolio: competitions, certifications, events and projects"
    >
      <defs>
        <clipPath id="avatar-clip">
          <circle cx={CENTER.x} cy={CENTER.y} r="58" />
        </clipPath>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="var(--line)" strokeWidth="1" opacity="0.45" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="560" height="456" fill="url(#grid)" rx="18" />

      {/* Links */}
      {nodes.map((n) => {
        const isUp = up.includes(n.id);
        return (
          <g key={`link-${n.id}`}>
            <line
              x1={CENTER.x}
              y1={CENTER.y}
              x2={n.x}
              y2={n.y}
              stroke={isUp ? 'var(--steel)' : 'var(--line-strong)'}
              strokeWidth="2"
              strokeDasharray={isUp ? '0' : '5 6'}
              style={{ transition: 'stroke 400ms ease' }}
            />
            <text
              x={CENTER.x + (n.x - CENTER.x) * 0.52 + (n.x < CENTER.x ? -14 : 14)}
              y={CENTER.y + (n.y - CENTER.y) * 0.52}
              className="topo-port"
              textAnchor={n.x < CENTER.x ? 'end' : 'start'}
              dominantBaseline="middle"
            >
              {n.port}
            </text>
          </g>
        );
      })}

      {/* Packets */}
      {!reduce &&
        nodes.map((n) =>
          sends[n.id] ? (
            <motion.rect
              key={`pkt-${n.id}-${sends[n.id]}`}
              width="12"
              height="8"
              rx="2"
              fill="var(--amber)"
              initial={{ x: CENTER.x - 6, y: CENTER.y - 4, opacity: 1 }}
              animate={{ x: n.x - 6, y: n.y - 4, opacity: [1, 1, 0] }}
              transition={{ duration: 0.85, ease: 'easeInOut', opacity: { times: [0, 0.85, 1], duration: 0.85 } }}
              onAnimationComplete={() => arrive(n.id)}
            />
          ) : null,
        )}

      {/* Satellite nodes */}
      {nodes.map((n) => {
        const isUp = up.includes(n.id);
        return (
          <a
            key={n.id}
            href={n.href}
            className="topo-node"
            onMouseEnter={() => send(n.id)}
            onFocus={() => send(n.id)}
            aria-label={`${n.label}: ${n.detail}`}
          >
            <rect
              x={n.x - 80}
              y={n.y - 31}
              width="160"
              height="62"
              rx="10"
              fill="var(--raised)"
              stroke={isUp ? 'var(--steel)' : 'var(--line-strong)'}
              strokeWidth="1.5"
              style={{ transition: 'stroke 400ms ease' }}
            />
            <circle
              cx={n.x + 66}
              cy={n.y - 17}
              r="4"
              fill={isUp ? 'var(--amber)' : 'var(--line-strong)'}
              style={{ transition: 'fill 300ms ease' }}
            />
            <text x={n.x - 66} y={n.y - 4} className="topo-label">
              {n.label}
            </text>
            <text x={n.x - 66} y={n.y + 17} className="topo-detail">
              {n.detail}
            </text>
          </a>
        );
      })}

      {/* Workstation */}
      <circle cx={CENTER.x} cy={CENTER.y} r="66" fill="var(--ink)" stroke="var(--amber)" strokeWidth="2" />
      <image
        href={photo}
        x={CENTER.x - 58}
        y={CENTER.y - 58}
        width="116"
        height="116"
        clipPath="url(#avatar-clip)"
        preserveAspectRatio="xMidYMid slice"
      />
      <text x={CENTER.x} y={CENTER.y + 92} className="topo-port" textAnchor="middle">
        rafael@umak
      </text>
    </svg>
  );
}
