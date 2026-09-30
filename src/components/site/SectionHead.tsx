import type { ReactNode } from "react";

const SectionHead = ({
  kicker,
  title,
  text,
  aside,
}: {
  kicker: string;
  title: ReactNode;
  text?: ReactNode;
  aside?: ReactNode;
}) => (
  <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
    <div className="max-w-[640px]">
      <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.12em] text-primary">{kicker}</p>
      <h2 className="font-head text-[34px] font-medium leading-[1.05] tracking-[-0.045em] sm:text-[46px]">
        {title}
      </h2>
      {text && <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">{text}</p>}
    </div>
    {aside}
  </div>
);

export default SectionHead;
