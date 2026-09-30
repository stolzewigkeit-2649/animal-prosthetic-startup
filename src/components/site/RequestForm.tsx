import { useRef, useState, type FormEvent } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type Form = {
  name: string;
  phone: string;
  pet: "dog" | "cat";
  weight: string;
  leg: string;
  story: string;
  agree: boolean;
};

const LEGS = ["Передняя левая", "Передняя правая", "Задняя левая", "Задняя правая", "Несколько лап / не знаю"];

const empty: Form = { name: "", phone: "", pet: "dog", weight: "", leg: "", story: "", agree: true };

const formatPhone = (v: string) => {
  let d = v.replace(/\D/g, "");
  if (d.startsWith("8")) d = "7" + d.slice(1);
  if (!d.startsWith("7")) d = "7" + d;
  d = d.slice(0, 11);
  const p = d.slice(1);
  let out = "+7";
  if (p.length) out += " (" + p.slice(0, 3);
  if (p.length >= 3) out += ")";
  if (p.length > 3) out += " " + p.slice(3, 6);
  if (p.length > 6) out += "-" + p.slice(6, 8);
  if (p.length > 8) out += "-" + p.slice(8, 10);
  return out;
};

const RequestForm = () => {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [photos, setPhotos] = useState<{ name: string; url: string }[]>([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (form.name.trim().length < 2) e.name = "Как к вам обращаться?";
    if (form.phone.replace(/\D/g, "").length !== 11) e.phone = "Введите номер полностью";
    const w = parseFloat(form.weight.replace(",", "."));
    if (!w || w <= 0 || w > 100) e.weight = "Укажите вес от 0,5 до 100 кг";
    if (!form.leg) e.leg = "Выберите лапу";
    if (form.story.trim().length < 10) e.story = "Расскажите пару предложений";
    if (!form.agree) e.agree = "Нужно согласие";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    const next = Array.from(files)
      .filter((f) => f.type.startsWith("image/") && f.size < 10 * 1024 * 1024)
      .slice(0, 4 - photos.length)
      .map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    setPhotos((p) => [...p, ...next].slice(0, 4));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({ title: "Проверьте поля формы", description: "Некоторые данные заполнены не полностью." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  const reset = () => {
    setForm(empty);
    setPhotos([]);
    setSent(false);
  };

  const field = "h-12 rounded-xl border-0 bg-background text-[15px] shadow-[inset_0_0_0_1px_hsl(var(--border))] focus-visible:ring-2 focus-visible:ring-primary";

  return (
    <section id="request" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-[36px]">
      <Reveal className="grid gap-[14px] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col rounded-tile bg-ink p-8 text-ink-foreground">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-mint-bright">Заявка</p>
          <h2 className="mt-3 font-head text-[38px] font-medium leading-[1.05] tracking-[-0.045em] sm:text-[46px]">
            Расскажите о питомце
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-foreground/70">
            Ортопед изучит заявку и перезвонит в течение рабочего дня, чтобы записать на бесплатную консультацию или 3D-скан.
          </p>
          <ul className="mt-auto space-y-4 pt-10">
            {[
              ["Clock", "Ответ в течение рабочего дня"],
              ["BadgeCheck", "Консультация и скан — бесплатно"],
              ["ShieldCheck", "Данные не передаём третьим лицам"],
            ].map(([ic, t]) => (
              <li key={t} className="flex items-center gap-3 text-[15px]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-foreground/10 text-mint-bright">
                  <Icon name={ic} size={18} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-tile bg-secondary p-6 sm:p-8">
          {sent ? (
            <div className="flex h-full min-h-[480px] animate-scale-in flex-col items-center justify-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon name="Check" size={32} />
              </span>
              <h3 className="mt-6 font-head text-[30px] font-medium tracking-[-0.04em]">Заявка принята</h3>
              <p className="mt-3 max-w-[380px] text-[16px] text-muted-foreground">
                Спасибо, {form.name.split(" ")[0]}! Мы свяжемся с вами по номеру {form.phone} в течение рабочего дня.
              </p>
              <button onClick={reset} className="mt-8 h-11 rounded-full bg-background px-6 text-[15px] font-medium">
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" placeholder="Анна" value={form.name} onChange={(e) => set("name", e.target.value)} className={cn(field, errors.name && "shadow-[inset_0_0_0_1px_hsl(var(--destructive))]")} />
                {errors.name && <p className="text-[13px] text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" inputMode="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={(e) => set("phone", e.target.value ? formatPhone(e.target.value) : "")} className={cn(field, errors.phone && "shadow-[inset_0_0_0_1px_hsl(var(--destructive))]")} />
                {errors.phone && <p className="text-[13px] text-destructive">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label>Вид животного</Label>
                <div className="grid grid-cols-2 gap-2 rounded-xl bg-background p-1">
                  {([
                    ["dog", "Собака", "Dog"],
                    ["cat", "Кошка", "Cat"],
                  ] as const).map(([k, l, ic]) => (
                    <button
                      type="button"
                      key={k}
                      onClick={() => set("pet", k)}
                      className={cn(
                        "inline-flex h-10 items-center justify-center gap-2 rounded-lg text-[15px] font-medium transition-colors",
                        form.pet === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <Icon name={ic} size={17} /> {l}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Вес, кг</Label>
                <Input id="weight" inputMode="decimal" placeholder={form.pet === "dog" ? "например, 24" : "например, 4,2"} value={form.weight} onChange={(e) => set("weight", e.target.value.replace(/[^\d.,]/g, ""))} className={cn(field, errors.weight && "shadow-[inset_0_0_0_1px_hsl(var(--destructive))]")} />
                {errors.weight && <p className="text-[13px] text-destructive">{errors.weight}</p>}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label>Какая лапа</Label>
                <Select value={form.leg} onValueChange={(v) => set("leg", v)}>
                  <SelectTrigger className={cn(field, errors.leg && "shadow-[inset_0_0_0_1px_hsl(var(--destructive))]")}>
                    <SelectValue placeholder="Выберите лапу" />
                  </SelectTrigger>
                  <SelectContent>
                    {LEGS.map((l) => (
                      <SelectItem key={l} value={l}>
                        {l}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.leg && <p className="text-[13px] text-destructive">{errors.leg}</p>}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="story">Опишите ситуацию</Label>
                <Textarea id="story" rows={4} placeholder="Что случилось, когда, была ли ампутация, как питомец ходит сейчас" value={form.story} onChange={(e) => set("story", e.target.value)} className={cn("rounded-xl border-0 bg-background text-[15px] shadow-[inset_0_0_0_1px_hsl(var(--border))] focus-visible:ring-2 focus-visible:ring-primary", errors.story && "shadow-[inset_0_0_0_1px_hsl(var(--destructive))]")} />
                {errors.story && <p className="text-[13px] text-destructive">{errors.story}</p>}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label>Фото или снимки <span className="font-normal text-muted-foreground">— по желанию, до 4 файлов</span></Label>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    onFiles(e.dataTransfer.files);
                  }}
                  className="flex flex-wrap items-center gap-3 rounded-xl border-2 border-dashed border-primary/25 bg-background p-3"
                >
                  {photos.map((p, i) => (
                    <div key={p.url} className="group relative h-16 w-16 overflow-hidden rounded-lg bg-photo">
                      <img src={p.url} alt={p.name} className="h-full w-full object-cover" />
                      <button
                        type="button"
                        aria-label="Удалить фото"
                        onClick={() => setPhotos((ph) => ph.filter((_, j) => j !== i))}
                        className="absolute right-1 top-1 grid h-5 w-5 place-items-center rounded-full bg-ink text-ink-foreground"
                      >
                        <Icon name="X" size={12} />
                      </button>
                    </div>
                  ))}
                  {photos.length < 4 && (
                    <button type="button" onClick={() => fileRef.current?.click()} className="flex items-center gap-2 rounded-lg px-3 py-4 text-[15px] text-primary">
                      <Icon name="ImagePlus" size={20} /> Добавить фото
                    </button>
                  )}
                  <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={(e) => { onFiles(e.target.files); e.target.value = ""; }} />
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <Checkbox id="agree" checked={form.agree} onCheckedChange={(v) => set("agree", v === true)} className="mt-0.5" />
                <label htmlFor="agree" className={cn("text-[13px] text-muted-foreground", errors.agree && "text-destructive")}>
                  Согласен на обработку персональных данных
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-primary text-[16px] font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:col-span-2"
              >
                {loading ? <Icon name="Loader2" size={20} className="animate-spin" /> : <Icon name="Send" size={18} />}
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
};

export default RequestForm;
