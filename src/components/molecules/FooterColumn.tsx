type FooterColumnProps = {
  title: string;
  items: { label: string; href?: string }[];
};

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-muted">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-foam/80 transition-colors hover:text-volt-dim"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm text-foam/80">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
