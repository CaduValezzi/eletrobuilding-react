import type { ProcessStepProps } from "./ProcessStep.types";

export function ProcessStep({ step, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex gap-6 pb-12 md:pb-16">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-volt font-mono text-sm text-volt-dim">
          {step}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-line" />}
      </div>
      <div className="pt-1.5">
        <h3 className="mb-2 font-display text-2xl font-semibold uppercase tracking-tight text-foam">
          {title}
        </h3>
        <p className="max-w-xl text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
