import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { NAV, PHONE, PHONE_HREF } from "./data";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-background/90 backdrop-blur transition-shadow",
        scrolled && "shadow-[0_1px_0_hsl(var(--border))]",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center px-[22px]">
        <Logo className="mr-[34px]" />
        <nav className="hidden gap-[26px] lg:flex">
          {NAV.slice(0, 5).map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[15px] tracking-[-0.01em] text-foreground/85 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-[10px]">
          <a
            href={PHONE_HREF}
            className="hidden h-10 items-center gap-[7px] rounded-full px-[14px] text-[14px] shadow-[inset_0_0_0_1px_hsl(var(--border))] transition-colors hover:bg-secondary xl:flex"
          >
            <Icon name="Phone" size={15} />
            {PHONE}
          </a>
          <a
            href="#request"
            className="hidden h-10 items-center rounded-full bg-primary px-[18px] text-[14px] font-medium tracking-[-0.02em] text-primary-foreground transition-transform hover:-translate-y-px sm:inline-flex"
          >
            Оставить заявку
          </a>
          <a
            href="#contacts"
            className="hidden h-10 items-center rounded-full bg-ink px-[18px] text-[14px] font-medium tracking-[-0.02em] text-ink-foreground transition-transform hover:-translate-y-px md:inline-flex"
          >
            Связаться
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="grid h-10 w-10 place-items-center rounded-full bg-secondary lg:hidden"
                aria-label="Открыть меню"
              >
                <Icon name="Menu" size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <SheetTitle className="sr-only">Меню</SheetTitle>
              <Logo className="mb-8" />
              <nav className="flex flex-col gap-1">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 font-head text-lg font-medium hover:bg-secondary"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
              <a
                href="#request"
                onClick={() => setOpen(false)}
                className="mt-6 flex h-12 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground"
              >
                Оставить заявку
              </a>
              <a href={PHONE_HREF} className="mt-4 block text-center text-sm text-muted-foreground">
                {PHONE}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
