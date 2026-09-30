import { cn } from "@/lib/utils";

const Logo = ({ className, light = false }: { className?: string; light?: boolean }) => (
  <a href="#top" className={cn("flex items-center gap-[9px]", className)} aria-label="Опора">
    <span className="grid grid-cols-[14px_14px] grid-rows-[14px_14px] gap-[2px]" aria-hidden="true">
      <i
        className="block h-0 w-0 border-x-[7px] border-b-[13px] border-x-transparent"
        style={{ borderBottomColor: "hsl(var(--mint-bright))" }}
      />
      <i className="relative block">
        <b className={cn("absolute left-[6px] top-0 h-[14px] w-[3px] rounded-sm", light ? "bg-white" : "bg-ink")} />
        <b className={cn("absolute left-[6px] top-0 h-[14px] w-[3px] rotate-[60deg] rounded-sm", light ? "bg-white" : "bg-ink")} />
        <b className={cn("absolute left-[6px] top-0 h-[14px] w-[3px] -rotate-[60deg] rounded-sm", light ? "bg-white" : "bg-ink")} />
      </i>
      <i className="block rounded-full bg-accent" />
      <i className="block bg-primary" />
    </span>
    <span className="font-head text-[1.8em] font-medium leading-none tracking-[-0.03em]">Опора</span>
  </a>
);

export default Logo;
