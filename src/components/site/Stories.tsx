import { useState } from "react";
import Icon from "@/components/ui/icon";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { IMG } from "./data";
import { cn } from "@/lib/utils";

const STORIES = [
  {
    name: "Бакс",
    meta: "лабрадор, 32 кг · передняя лапа",
    img: IMG.heroDog,
    owner: "Марина, Казань",
    before: "После ДТП лапу ампутировали ниже локтя. Бакс перестал гулять дольше 10 минут, начались боли в спине.",
    after: "Через 5 недель — прогулки по часу и снова плавает в Волге. Нагрузка на здоровую лапу выровнялась.",
    stats: [
      { b: "10 мин", a: "60 мин", l: "прогулка" },
      { b: "3 лапы", a: "4 лапы", l: "опора" },
    ],
  },
  {
    name: "Муся",
    meta: "кошка, 3,8 кг · задняя лапа",
    img: IMG.heroCat,
    owner: "Алексей, Москва",
    before: "Врождённая недоразвитость лапы. Муся не запрыгивала даже на диван и много лежала.",
    after: "Протез весом 42 грамма. Через месяц снова на подоконнике — и на шкафу, к сожалению хозяина.",
    stats: [
      { b: "0 см", a: "90 см", l: "прыжок" },
      { b: "—", a: "42 г", l: "вес протеза" },
    ],
  },
  {
    name: "Рекс",
    meta: "бордер-колли, 19 кг · задняя лапа",
    img: IMG.heroCollie,
    owner: "Ольга, Санкт-Петербург",
    before: "Травма на выгуле, частичная ампутация. Рекс хромал и быстро уставал, забросил аджилити.",
    after: "Вернулся к тренировкам через 2 месяца. Протез с амортизирующей стопой выдерживает бег.",
    stats: [
      { b: "1 км", a: "6 км", l: "пробежка" },
      { b: "нет", a: "да", l: "аджилити" },
    ],
  },
  {
    name: "Фрося",
    meta: "такса, 8 кг · задняя лапа",
    img: IMG.dachshund,
    owner: "Ирина, Екатеринбург",
    before: "Фрося из приюта: без задней лапы, с перекосом таза. Боялась лестниц.",
    after: "Со второго протеза ходит ровно, спина разгружена. Приют нашёл ей семью через неделю.",
    stats: [
      { b: "страх", a: "лестница", l: "ступеньки" },
      { b: "приют", a: "дом", l: "итог" },
    ],
  },
];

const Stories = () => {
  const [idx, setIdx] = useState(0);
  const [mode, setMode] = useState<"before" | "after">("after");
  const s = STORIES[idx];

  const go = (d: number) => {
    setIdx((i) => (i + d + STORIES.length) % STORIES.length);
    setMode("after");
  };

  return (
    <section id="stories" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-[36px]">
      <SectionHead
        kicker="Истории питомцев"
        title="Было — стало"
        text="Реальные истории наших подопечных. Переключайте «до» и «после», чтобы увидеть разницу."
        aside={
          <div className="flex gap-2">
            <button onClick={() => go(-1)} aria-label="Предыдущая история" className="grid h-12 w-12 place-items-center rounded-full bg-muted transition-colors hover:bg-secondary">
              <Icon name="ArrowLeft" size={20} />
            </button>
            <button onClick={() => go(1)} aria-label="Следующая история" className="grid h-12 w-12 place-items-center rounded-full bg-ink text-ink-foreground transition-transform hover:-translate-y-0.5">
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        }
      />

      <Reveal>
        <div key={idx} className="grid animate-fade-in gap-[14px] lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-tile bg-photo lg:min-h-[480px]">
            <img
              src={s.img}
              alt={`${s.name} с протезом`}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-500",
                mode === "before" && "scale-105 grayscale",
              )}
            />
            <div className="absolute left-3 top-3 flex rounded-full bg-background p-1">
              {(["before", "after"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {m === "before" ? "До" : "После"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-[14px]">
            <div className="flex flex-col rounded-tile bg-secondary p-7">
              <p className="font-head text-[40px] font-medium leading-none tracking-[-0.05em]">{s.name}</p>
              <p className="mt-2 text-[15px] text-muted-foreground">{s.meta}</p>
              <p key={mode} className="mt-6 animate-fade-in text-[17px] leading-relaxed">
                {mode === "before" ? s.before : s.after}
              </p>
              <p className="mt-auto pt-6 text-sm text-muted-foreground">— {s.owner}</p>
            </div>
            <div className="grid grid-cols-2 gap-[14px]">
              {s.stats.map((st) => (
                <div key={st.l} className={cn("rounded-tile p-6 transition-colors", mode === "after" ? "bg-ink text-ink-foreground" : "bg-muted")}>
                  <p className="font-head text-[30px] font-medium leading-none tracking-[-0.04em]">
                    {mode === "before" ? st.b : st.a}
                  </p>
                  <p className={cn("mt-3 text-sm", mode === "after" ? "text-ink-foreground/70" : "text-muted-foreground")}>{st.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-5 flex justify-center gap-2">
        {STORIES.map((st, i) => (
          <button
            key={st.name}
            onClick={() => {
              setIdx(i);
              setMode("after");
            }}
            aria-label={`История: ${st.name}`}
            className={cn("h-2 rounded-full transition-all", i === idx ? "w-8 bg-primary" : "w-2 bg-border")}
          />
        ))}
      </div>
    </section>
  );
};

export default Stories;
