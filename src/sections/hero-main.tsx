import { AbstractShapes } from "@/components/abstract-shapes";
import { InputEmail } from "@/components/input-email";

export function HeroMain() {
  return (
    <section>
      <div className="relative w-[min(100svw-2.5rem,1152px)] sm:w-[min(100svw-6rem,1152px)] mx-auto my-16 sm:my-24 lg:my-32">
        <div className="max-w-[636px]">
          <h1 className="text-3xl sm:text-[59px] font-bold tracking-[-0.04rem] leading-[130%] sm:leading-[1.06] text-accent">
            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-teal-dark to-teal-lighter">
              Intelligent
            </span>{" "}
            cloud-based{" "}
            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-teal-dark to-teal-lighter">
              note-taking
            </span>{" "}
            and collaboration tool
          </h1>
          <p className="relative sm:max-w-[400px] lg:max-w-full sm:text-lg lg:text-base mt-4 leading-[150%]">
            Experience the power of smart note-taking and transform the way you
            work today.
          </p>
        </div>
        <form className="sm:max-w-[434px] mt-[50px]">
          <InputEmail />
        </form>

        <div className="absolute hidden lg:block -z-10 top-[50%] right-0 -translate-y-1/2 after:absolute after:inset-0 after:bg-gradient-to-b from-jetblack via-transparent to-jetblack">
          <AbstractShapes />
        </div>
      </div>
    </section>
  );
}
