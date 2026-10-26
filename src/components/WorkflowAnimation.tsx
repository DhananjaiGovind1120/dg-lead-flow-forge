import { Button } from "@/components/ui/button";

const nodes = [
  { title: "New lead captured", detail: "Trigger · Website form" },
  { title: "AI qualifies lead", detail: "Score and classify automatically" },
  { title: "Send follow-up email", detail: "Personalised reply in minutes" },
  { title: "Update CRM and book demo", detail: "Synced across your tools" },
];

const SPACING = 110;
const FIRST_Y = 50;
const NODE_X = 60;
const NODE_R = 30;

const WorkflowAnimation = () => {
  const lastY = FIRST_Y + (nodes.length - 1) * SPACING;

  return (
    <div className="mx-auto w-full max-w-md">
      <p className="mb-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Grace automations Workflow Builder
      </p>

      <svg
        viewBox={`0 0 440 ${lastY + NODE_R + 20}`}
        className="h-auto w-full text-foreground"
        role="img"
        aria-label="Automated workflow: capture a lead, qualify it, send a follow-up email, and update the CRM"
      >
        <defs>
          <linearGradient id="wf-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {nodes.map((node, i) => {
          const y = FIRST_Y + i * SPACING;
          const delay = `${i * 0.6}s`;
          const isLast = i === nodes.length - 1;

          return (
            <g key={node.title}>
              {!isLast && (
                <>
                  {/* Dashed connector that flows downward */}
                  <line
                    x1={NODE_X}
                    y1={y + NODE_R}
                    x2={NODE_X}
                    y2={y + SPACING - NODE_R}
                    stroke="#a78bfa"
                    strokeWidth={2}
                    strokeDasharray="6 6"
                  >
                    <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" />
                  </line>
                  {/* Dot travelling along the connector */}
                  <circle r={4.5} fill="#7c3aed">
                    <animateMotion
                      dur="2.4s"
                      begin={delay}
                      repeatCount="indefinite"
                      path={`M${NODE_X} ${y + NODE_R} L${NODE_X} ${y + SPACING - NODE_R}`}
                    />
                  </circle>
                </>
              )}

              {/* Halo pulse, staggered so the steps light up in order */}
              <circle cx={NODE_X} cy={y} r={NODE_R} fill="none" stroke="#7c3aed" strokeWidth={2} opacity={0}>
                <animate attributeName="r" values={`${NODE_R};${NODE_R + 16}`} dur="2.4s" begin={delay} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0" dur="2.4s" begin={delay} repeatCount="indefinite" />
              </circle>

              <circle cx={NODE_X} cy={y} r={NODE_R} fill="url(#wf-grad)" />
              <text x={NODE_X} y={y + 6} textAnchor="middle" fill="white" fontSize={18} fontWeight={700}>
                {i + 1}
              </text>

              <text x={110} y={y - 2} fontSize={18} fontWeight={600} fill="currentColor">
                {node.title}
              </text>
              <text x={110} y={y + 20} fontSize={14} fill="currentColor" opacity={0.6}>
                {node.detail}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex items-center justify-center text-xs text-muted-foreground">
        <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
        Workflow running
      </div>

      <div className="mt-6 flex gap-4">
        <Button size="sm" className="bg-gradient flex-1 hover:opacity-90">
          Edit Workflow
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          View Runs
        </Button>
      </div>
    </div>
  );
};

export default WorkflowAnimation;
