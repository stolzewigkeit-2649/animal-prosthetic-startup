import Icon from "@/components/ui/icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { IMG } from "./data";

const ROW = [
  { icon: "Dog", label: "Владельцы собак" },
  { icon: "Cat", label: "Владельцы кошек" },
  { icon: "Stethoscope", label: "Ветклиники" },
  { icon: "HeartHandshake", label: "Приюты и фонды" },
];

const Audience = () => (
  <>
    {/* audience row — as in the selected hero */}
    <div className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-[36px] lg:pl-[22px]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <p className="w-[210px] font-head text-[23px] font-medium tracking-[-0.04em]">Для кого</p>
        <ul className="grid flex-1 grid-cols-2 gap-4 sm:flex sm:justify-between lg:pl-10">
          {ROW.map((r) => (
            <li
              key={r.label}
              className="flex items-center gap-[9px] font-head text-[17px] font-semibold tracking-[-0.02em] text-muted-foreground"
            >
              <Icon name={r.icon} size={22} />
              {r.label}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <section id="for" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-[36px]">
      <SectionHead
        kicker="Для кого"
        title={<>Собакам и кошкам любого размера</>}
        text="Делаем протез под конкретного питомца: учитываем вес, возраст, характер движения и то, какая лапа пострадала."
      />
      <div className="grid gap-[14px] md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr]">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded-tile bg-photo md:row-span-2">
          <img src={IMG.dachshund} alt="Такса с протезом задней лапы" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-3 bottom-3 rounded-[12px] bg-background/95 p-5 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Icon name="Dog" size={20} />
              <span className="font-head text-lg font-semibold tracking-[-0.02em] text-foreground">Собаки</span>
            </div>
            <p className="text-[15px] text-muted-foreground">
              От той-терьеров от 1,5 кг до крупных пород до 70 кг. Передние и задние лапы, частичные и полные протезы.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80} className="flex flex-col justify-between rounded-tile bg-secondary p-6">
          <p className="font-head text-[56px] font-medium leading-none tracking-[-0.05em]">1,5–70 кг</p>
          <p className="mt-6 text-[15px] text-muted-foreground">вес питомцев, для которых мы уже делали протезы</p>
        </Reveal>
        <Reveal delay={140} className="relative min-h-[260px] overflow-hidden rounded-tile bg-photo">
          <img src={IMG.gingerCat} alt="Рыжий кот с протезом передней лапы" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm font-medium">
            <Icon name="Cat" size={16} className="text-primary" /> Кошки
          </span>
        </Reveal>
        <Reveal delay={200} className="rounded-tile bg-muted p-6">
          <Icon name="Feather" size={26} className="text-primary" />
          <p className="mt-4 font-head text-[22px] font-medium leading-tight tracking-[-0.03em]">
            Для кошек — облегчённые протезы от 40 грамм
          </p>
          <p className="mt-2 text-[15px] text-muted-foreground">Не мешают прыгать и умываться.</p>
        </Reveal>
        <Reveal delay={260} className="rounded-tile bg-ink p-6 text-ink-foreground">
          <Icon name="Stethoscope" size={26} className="text-mint-bright" />
          <p className="mt-4 font-head text-[22px] font-medium leading-tight tracking-[-0.03em]">
            Клиникам и приютам
          </p>
          <p className="mt-2 text-[15px] text-ink-foreground/70">
            Партнёрские условия и выезд на скан к вам.
          </p>
        </Reveal>
      </div>
    </section>
  </>
);

export default Audience;
