import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { PHONE, PHONE_HREF } from "./data";

const FAQ = [
  {
    q: "Привыкнет ли питомец к протезу?",
    a: "Да, в большинстве случаев — за 2–4 недели. Собаки обычно начинают опираться на протез уже на первой примерке, кошкам нужно чуть больше времени. Мы ведём вас по плану реабилитации и на связи в чате.",
  },
  {
    q: "Нужен ли наркоз для 3D-скана?",
    a: "Нет. Скан занимает около 15 минут, питомец стоит или лежит рядом с вами. Никаких гипсовых слепков и седации.",
  },
  {
    q: "Можно ли сделать протез, если ампутация была давно?",
    a: "Чаще всего да. Главное — достаточная длина культи и отсутствие воспаления. Это мы оценим на бесплатной консультации по фото и снимкам.",
  },
  {
    q: "Сколько служит протез?",
    a: "В среднем 1,5–3 года при активном использовании. Мягкий вкладыш и ремешки меняются чаще — это недорого. Для щенков и котят делаем замену по мере роста по сохранённому скану.",
  },
  {
    q: "Вы работаете только в своём городе?",
    a: "Консультация — онлайн по всей России. Скан проводим в нашем центре или у клиник-партнёров, изготовленный протез можем отправить курьером и провести примерку по видеосвязи.",
  },
  {
    q: "Что если протез не подойдёт?",
    a: "Все подгонки в течение 6 месяцев бесплатны. Если по медицинским причинам протез не удаётся использовать, вернём стоимость изготовления.",
  },
];

const Faq = () => (
  <section id="faq" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-[36px]">
    <div className="grid gap-[14px] lg:grid-cols-[1fr_1.4fr]">
      <div>
        <SectionHead kicker="Вопросы и ответы" title="Что обычно спрашивают" />
        <div className="rounded-tile bg-secondary p-7">
          <Icon name="MessagesSquare" size={28} className="text-primary" />
          <p className="mt-4 font-head text-[22px] font-medium tracking-[-0.03em]">Не нашли свой вопрос?</p>
          <p className="mt-2 text-[15px] text-muted-foreground">Позвоните — ортопед ответит сам, без колл-центра.</p>
          <a href={PHONE_HREF} className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[15px] font-medium text-ink-foreground">
            <Icon name="Phone" size={16} /> {PHONE}
          </a>
        </div>
      </div>
      <Reveal>
        <Accordion type="single" collapsible defaultValue="i0" className="space-y-2">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`i${i}`} className="rounded-tile border-0 bg-muted px-6">
              <AccordionTrigger className="py-5 text-left font-head text-[18px] font-medium tracking-[-0.02em] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

export default Faq;
