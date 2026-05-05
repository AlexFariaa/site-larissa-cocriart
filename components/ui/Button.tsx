import { cn } from "@/lib/utils";

/* ── Types ────────────────────────────────────────────────── */

type ButtonVariant = "primary" | "ghost" | "whatsapp" | "link";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseProps {
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonAsAnchor extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/* ── Variant styles ───────────────────────────────────────── */

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-body transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lilac focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  /* Laranja terracota — ação principal */
  primary:
    "bg-brand-orange text-white border border-brand-orange hover:shadow-glow-orange hover:brightness-110 active:scale-95",

  /* Outline roxo — ação secundária */
  ghost:
    "bg-transparent text-brand-lilac border border-brand-purple hover:bg-brand-purple/20 hover:shadow-glow-purple active:scale-95",

  /* Verde WhatsApp — conversão direta */
  whatsapp:
    "bg-[#25D366] text-white border border-[#25D366] hover:shadow-[0_0_20px_4px_#25D36680] hover:brightness-110 active:scale-95",

  /* Link sutil — ação terciária */
  link:
    "bg-transparent text-brand-lilac underline-offset-4 hover:underline hover:text-white px-0 py-0 rounded-none",
};

/* ── Component ────────────────────────────────────────────── */

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ((props as ButtonAsAnchor).href !== undefined) {
    const { href, target, rel } = props as ButtonAsAnchor;
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const { type = "button", disabled, onClick } = props as ButtonAsButton;
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
