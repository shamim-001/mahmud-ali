import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 space-y-3", centered && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">{title}</h2>
      {subtitle && <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">{subtitle}</p>}
    </div>
  )
}
