import Icon from "@/components/ui/icon";
import { IMG } from "./data";

const Hero = () => (
  <section id="top" className="mx-auto max-w-[1280px] px-4 pt-3 sm:px-[36px]">
    <div className="grid gap-[14px] lg:h-[562px] lg:grid-cols-[524px_1fr_205px]">
      <div className="flex animate-rise flex-col rounded-tile bg-secondary px-6 pb-7 pt-8 sm:px-[30px] sm:pb-[30px] sm:pt-[38px]">
        <h1 className="font-head text-[44px] font-medium leading-[1.02] tracking-[-0.05em] sm:text-[60px] xl:text-[74px]">
          Снова на&nbsp;четырёх лапах.
        </h1>
        <p className="mt-10 font-head text-[20px] leading-[1.3] tracking-[-0.035em] sm:text-[24.8px] lg:mt-auto">
          Протезы для собак и кошек.
          <br />
          По 3D-скану, с реабилитацией.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 lg:mt-[82px]">
          <a
            href="#request"
            className="inline-flex h-[46px] items-center rounded-full bg-primary px-[19px] text-[15px] font-medium tracking-[-0.02em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Оставить заявку
          </a>
          <a
            href="#how"
            className="inline-flex h-[46px] items-center gap-[10px] rounded-full bg-background px-[19px] text-[15px] font-medium tracking-[-0.02em] text-foreground transition-transform hover:-translate-y-0.5"
          >
            <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-primary/15 text-primary">
              <Icon name="Play" size={11} />
            </span>
            Как это работает
          </a>
        </div>
      </div>

      <figure className="h-[380px] animate-rise overflow-hidden rounded-tile bg-photo [animation-delay:.08s] lg:h-auto">
        <img
          src={IMG.heroDog}
          alt="Собака с протезом передней лапы обнимается с хозяйкой"
          className="h-full w-full object-cover object-[45%_50%]"
        />
      </figure>

      <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-1 lg:grid-rows-[182px_1fr]">
        <figure className="h-[200px] animate-rise overflow-hidden rounded-tile bg-photo [animation-delay:.16s] lg:h-auto">
          <img
            src={IMG.heroCat}
            alt="Кошка с протезом задней лапы"
            className="h-full w-full object-cover object-[50%_40%]"
          />
        </figure>
        <figure className="h-[200px] animate-rise overflow-hidden rounded-tile bg-photo [animation-delay:.22s] lg:h-auto">
          <img
            src={IMG.heroCollie}
            alt="Бордер-колли с протезом на прогулке"
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
    </div>
  </section>
);

export default Hero;
