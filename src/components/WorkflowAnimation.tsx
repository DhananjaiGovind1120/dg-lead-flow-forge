import { useState } from "react";
import { Button } from "@/components/ui/button";
import { workflows } from "@/data/workflows";

const SPACING = 110;
const FIRST_Y = 50;
const NODE_X = 60;
const NODE_R = 30;

interface WorkflowAnimationProps {
  onBookDemo?: () => void;
}

const WorkflowAnimation = ({ onBookDemo }: WorkflowAnimationProps) => {
  const [selectedId, setSelectedId] = useState(workflows[0].id);
  const workflow = workflows.find((w) => w.id === selectedId) ?? workflows[0];
  const steps = workflow.steps;
  const lastY = FIRST_Y + (steps.length - 1) * SPACING;

  return (
    <div className="mx-auto w-full max-w-md">
      <p className="mb-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Choose a solution to see its workflow
      </p>

      <div role="group" aria-label="AI solutions" className="mb-6 flex flex-wrap justify-center gap-2">
        {workflows.map((item) => {
          const Icon = item.icon;
          const active = item.id === selectedId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              aria-pressed={active}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "border-transparent bg-gradient text-white shadow"
                  : "border-slate-200 bg-background text-muted-foreground hover:text-foreground dark:border-slate-700"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Keyed on the solution so the animation restarts for each one */}
      <svg
        key={workflow.id}
        viewBox={`0 0 440 ${lastY + NODE_R + 20}`}
        className="h-auto w-full text-foreground"
        role="img"
        aria-label={`${workflow.title} workflow`}
      >
        <defs>
          <linearGradient id="wf-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {steps.map((step, i) => {
          const y = FIRST_Y + i * SPACING;
          const delay = `${i * 0.6}s`;
          const isLast = i === steps.length - 1;

          return (
            <g key={step.title}>
              {!isLast && (
                <>
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

              <circle cx={NODE_X} cy={y} r={NODE_R} fill="none" stroke="#7c3aed" strokeWidth={2} opacity={0}>
                <animate attributeName="r" values={`${NODE_R};${NODE_R + 16}`} dur="2.4s" begin={delay} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0" dur="2.4s" begin={delay} repeatCount="indefinite" />
              </circle>

              <circle cx={NODE_X} cy={y} r={NODE_R} fill="url(#wf-grad)" />
              <text x={NODE_X} y={y + 6} textAnchor="middle" fill="white" fontSize={18} fontWeight={700}>
                {i + 1}
              </text>

              <text x={110} y={y - 2} fontSize={18} fontWeight={600} fill="currentColor">
                {step.title}
              </text>
              <text x={110} y={y + 20} fontSize={14} fill="currentColor" opacity={0.6}>
                {step.detail}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex items-center justify-center text-xs text-muted-foreground">
        <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
        {workflow.title} · running
      </div>

      {onBookDemo && (
        <div className="mt-6 flex justify-center">
          <Button size="lg" className="bg-gradient hover:opacity-90" onClick={onBookDemo}>
            Book a demo for this workflow
          </Button>
        </div>
      )}
    </div>
  );
};

export default WorkflowAnimation;
