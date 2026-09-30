import { useState } from "react";
import Icon from "@/components/ui/icon";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type Pet = "cat" | "dog";

const PLANS = [
  {
    name: "Консультация и 3D-скан",
    price: { cat: "0 ₽", dog: "0 ₽" },
    note: "бесплатно",
    features: ["Осмотр ортопеда", "3D-скан обеих лап", "План лечения и смета"],
    featured: false,
  },
  {
    name: "Протез под ключ",
    price: { cat: "от 24 000 ₽", dog: "от 32 000 ₽" },
    note: "самый частый выбор",
    features: [
      "Изготовление по скану",
      "2 примерки и подгонка",
      "Реабилитация 4 недели",
      "Бесплатные подгонки 6 месяцев",
    ],
    featured: true,
  },
  {
    name: "Активный",
    price: { cat: "от 34 000 ₽", dog: "от 48 000 ₽" },
    note: "для бега и спорта",
    features: ["Амортизирующая стопа", "Усиленная гильза", "Реабилитация 8 недель", "Запасной вкладыш"],
    featured: false,
  },
];

const Prices = () => {
  const [pet, setPet] = useState<Pet>("dog");

  return (
    <section id="prices" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-[36px]">
      <SectionHead
        kicker="Цены"
        title="Прозрачно и без сюрпризов"
        text="Точную стоимость назовём после бесплатного скана — она зависит от веса питомца и типа протеза."
        aside={
          <div className="inline-flex rounded-full bg-muted p-1">
            {([
              ["dog", "Собака", "Dog"],
              ["cat", "Кошка", "Cat"],
            ] as const).map(([k, l, ic]) => (
              <button
                key={k}
                onClick={() => setPet(k)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors",
                  pet === k ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon name={ic} size={17} /> {l}
              </button>
            ))}
          </div>
        }
      />
      <div className="grid gap-[14px] md:grid-cols-3">
        {PLANS.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 80}
            className={cn(
              "flex flex-col rounded-tile p-7",
              p.featured ? "bg-primary text-primary-foreground" : i === 0 ? "bg-secondary" : "bg-muted",
            )}
          >
            <span
              className={cn(
                "w-fit rounded-full px-3 py-1 text-[13px] font-medium",
                p.featured ? "bg-primary-foreground/15" : "bg-background",
              )}
            >
              {p.note}
            </span>
            <h3 className="mt-6 font-head text-[22px] font-medium tracking-[-0.03em]">{p.name}</h3>
            <p key={pet} className="mt-2 animate-fade-in font-head text-[42px] font-medium tracking-[-0.05em]">
              {p.price[pet]}
            </p>
            <ul className="mt-6 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[15px]">
                  <Icon
                    name="Check"
                    size={18}
                    className={cn("mt-0.5 shrink-0", p.featured ? "text-mint-bright" : "text-primary")}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <a
                href="#request"
                className={cn(
                  "flex h-12 items-center justify-center rounded-full text-[15px] font-medium transition-transform hover:-translate-y-0.5",
                  p.featured ? "bg-background text-foreground" : "bg-ink text-ink-foreground",
                )}
              >
                {i === 0 ? "Записаться бесплатно" : "Оставить заявку"}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Icon name="Info" size={16} /> Для приютов и благотворительных фондов — скидка 30%.
      </p>
    </section>
  );
};

export default Prices;