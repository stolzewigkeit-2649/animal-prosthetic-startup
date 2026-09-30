import Icon from "@/components/ui/icon";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { EMAIL, NAV, PHONE, PHONE_HREF } from "./data";

const Contacts = () => (
  <>
    <section id="contacts" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-[36px]">
      <Reveal className="grid gap-[14px] md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-tile bg-secondary p-7 md:col-span-2">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-primary">Контакты</p>
          <h2 className="mt-3 font-head text-[34px] font-medium leading-[1.05] tracking-[-0.045em] sm:text-[46px]">
            Приезжайте знакомиться
          </h2>
          <p className="mt-4 max-w-[440px] text-[16px] text-muted-foreground">
            Центр протезирования «Опора». Есть отдельный вход и тихая комната ожидания для кошек.
          </p>
        </div>
        <a href={PHONE_HREF} className="group flex flex-col justify-between rounded-tile bg-ink p-7 text-ink-foreground">
          <Icon name="Phone" size={26} className="text-mint-bright" />
          <div className="mt-10">
            <p className="font-head text-[22px] font-medium tracking-[-0.03em]">{PHONE}</p>
            <p className="mt-1 text-sm text-ink-foreground/70">бесплатно по России</p>
          </div>
        </a>
        <a href={`mailto:${EMAIL}`} className="flex flex-col justify-between rounded-tile bg-muted p-7">
          <Icon name="Mail" size={26} className="text-primary" />
          <div className="mt-10">
            <p className="font-head text-[20px] font-medium tracking-[-0.03em]">{EMAIL}</p>
            <p className="mt-1 text-sm text-muted-foreground">снимки и документы</p>
          </div>
        </a>
        <div className="flex flex-col justify-between rounded-tile bg-muted p-7 md:col-span-1">
          <Icon name="MapPin" size={26} className="text-primary" />
          <div className="mt-10">
            <p className="font-head text-[20px] font-medium tracking-[-0.03em]">Москва, ул. Садовая, 14</p>
            <p className="mt-1 text-sm text-muted-foreground">5 минут от м. Маяковская</p>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-tile bg-muted p-7">
          <Icon name="Clock" size={26} className="text-primary" />
          <div className="mt-10">
            <p className="font-head text-[20px] font-medium tracking-[-0.03em]">Пн–Сб, 9:00–20:00</p>
            <p className="mt-1 text-sm text-muted-foreground">консультации онлайн — ежедневно</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-tile bg-primary p-7 text-primary-foreground md:col-span-2">
          <p className="font-head text-[22px] font-medium leading-tight tracking-[-0.03em]">
            Первый шаг — бесплатный.
            <br />
            Запишитесь на скан.
          </p>
          <a href="#request" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-background px-5 text-[15px] font-medium text-foreground transition-transform hover:-translate-y-0.5">
            Заявка <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </Reveal>
    </section>

    <footer className="mx-auto mt-24 max-w-[1280px] px-4 pb-10 sm:px-[36px]">
      <div className="flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">© 2026 Опора</p>
      </div>
    </footer>
  </>
);

export default Contacts;
