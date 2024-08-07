import Image from "next/image";

import logo1 from "@/assets/logo1.svg";
import logo2 from "@/assets/logo2.svg";
import logo3 from "@/assets/logo3.svg";
import logo4 from "@/assets/logo4.svg";

const logos = [logo1, logo2, logo1, logo3, logo4, logo2, logo4, logo3];

export function Logos() {
  return (
    <section className="sm:py-6">
      <div
        style={
          {
            "--width": "100px",
            "--height": "48px",
            "--quantity": 8,
          } as React.CSSProperties
        }
        className="group flex w-full max-w-[1248px] mx-auto overflow-hidden h-[var(--height)] [mask-image:linear-gradient(to_right,transparent,#080808,transparent)]"
      >
        <ul className="relative flex motion-reduce:justify-between w-full min-w-[calc(var(--width)*var(--quantity))]">
          {logos.map((src, i) => (
            <li
              key={i}
              style={{ "--position": i + 1 } as React.CSSProperties}
              className="absolute motion-reduce:static grid place-items-center motion-reduce:left-full w-[var(--width)] h-[var(--height)] animate-auto-slide motion-reduce:animate-none [animation-delay:_calc((50s/var(--quantity))*(var(--position)*-1))] group-hover:[animation-play-state:paused]"
            >
              <Image src={src} alt="" className="max-h-4 w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
