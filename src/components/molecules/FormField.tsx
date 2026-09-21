type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  required?: boolean;
};

export function FormField({ label, name, type = "text", options, required }: FormFieldProps) {
  const baseClasses =
    "w-full border-b border-line bg-transparent py-3 text-sm text-foam placeholder:text-muted/60 focus:border-volt outline-none transition-colors";

  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {label}
        {required && <span className="text-volt-dim"> *</span>}
      </span>
      {type === "textarea" ? (
        <textarea name={name} required={required} rows={4} className={baseClasses} />
      ) : type === "select" ? (
        <select name={name} required={required} className={`${baseClasses} bg-graphite-950`}>
          <option value="">Selecione...</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} name={name} required={required} className={baseClasses} />
      )}
    </label>
  );
}
