import { useState } from "react";
import Icon from "@/components/ui/icon";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { IMG } from "./data";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: "MessageCircleHeart",
    title: "Консультация",
    time: "бесплатно · 30 минут",
    text: "Ветеринар-ортопед смотрит фото, видео походки и снимки, отвечает, подойдёт ли протез, и какой именно.",
    points: ["Онлайн или в клинике", "Разбор рентгена и анамнеза", "Честно скажем, если протез не нужен"],
  },
  {
    icon: "ScanLine",
    title: "3D-скан",
    time: "бесплатно · 15 минут",
    text: "Сканируем культю и здоровую лапу без гипса и наркоза. Питомец просто стоит — рядом с вами.",
    points: ["Без слепков и стресса", "Точность до 0,1 мм", "Скан хранится — можно заменить протез по росту"],
  },
  {
    icon: "Cog",
    title: "Изготовление",
    time: "7–14 дней",
    text: "Проектируем гильзу и стопу под размер, вес и активность питомца. Печатаем из медицинских полимеров.",
    points: ["Мягкий гипоаллергенный вкладыш", "Прочность под вес питомца", "Цвет — на ваш выбор"],
  },
  {
    icon: "Hand",
    title: "Примерка",
    time: "1–2 визита",
    text: "Надеваем, смотрим походку, подгоняем углы и крепления. Учим вас надевать и снимать протез за минуту.",
    points: ["Корректировка на месте", "Видео-инструкция для дома", "Запасные ремешки в комплекте"],
  },
  {
    icon: "HeartPulse",
    title: "Реабилитация",
    time: "от 4 недель",
    text: "Сопровождаем, пока питомец не начнёт уверенно ходить: упражнения, контроль, ответы в чате.",
    points: ["План упражнений на каждую неделю", "Чат с ортопедом", "Бесплатные подгонки 6 месяцев"],
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section id="how" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-[36px]">
      <SectionHead
        kicker="Как это работает"
        title="Пять шагов до первой прогулки"
        text="Первые два шага бесплатные. Вы платите только тогда, когда понятно, что протез поможет."
      />
      <Reveal className="grid gap-[14px] lg:grid-cols-[380px_1fr]">
        <ol className="flex flex-col gap-2">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <button
                onClick={() => setActive(i)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-tile px-5 py-4 text-left transition-colors",
                  active === i ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-secondary",
                )}
              >
                <span
                  className={cn(
                    "font-head text-[15px] font-semibold tabular-nums",
                    active === i ? "text-primary-foreground/70" : "text-muted-foreground",
                  )}
                >
                  0{i + 1}
                </span>
                <span className="flex-1 font-head text-[19px] font-medium tracking-[-0.02em]">{s.title}</span>
                <Icon name="ArrowRight" size={18} className={cn("transition-opacity", active === i ? "opacity-100" : "opacity-0")} />
              </button>
            </li>
          ))}
        </ol>

        <div className="grid gap-[14px] md:grid-cols-[1fr_0.9fr]">
          <div key={active} className="flex animate-fade-in flex-col rounded-tile bg-secondary p-7">
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-background text-primary">
                <Icon name={step.icon} size={24} />
              </span>
              <span className="rounded-full bg-background px-3 py-1.5 text-[13px] font-medium">{step.time}</span>
            </div>
            <h3 className="mt-8 font-head text-[32px] font-medium tracking-[-0.04em]">{step.title}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-foreground/80">{step.text}</p>
            <ul className="mt-auto space-y-2 pt-8">
              {step.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[15px]">
                  <Icon name="Check" size={18} className="mt-0.5 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-tile bg-photo">
            <img src={IMG.clinic} alt="Ортопед примеряет протез собаке" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-3 left-3 right-3 flex gap-1.5">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={cn("h-1.5 flex-1 rounded-full transition-colors", i <= active ? "bg-background" : "bg-background/40")}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default HowItWorks;
