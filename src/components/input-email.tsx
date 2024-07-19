import { Arrow } from "@/icons/arrow";

export function InputEmail() {
  return (
    <div className="flex rounded-lg overflow-hidden bg-accent ring-1 ring-inset ring-teal-light outline-offset-2 outline-2 focus-within:outline outline-teal-lighter">
      <input
        type="email"
        autoComplete="email webauthn"
        className="w-full px-6 py-[18px] sm:py-[22px] leading-[1.5] text-carbon placeholder:text-carbon outline-none bg-transparent"
        placeholder="Enter your email"
      />
      <button
        type="button"
        className="flex items-center justify-center gap-x-2 w-fit m-[6px] px-6 whitespace-nowrap rounded-lg font-bold sm:font-normal text-jetblack bg-gradient-to-bl from-teal-lighter to-teal-dark"
      >
        Sign up
        <Arrow />
      </button>
    </div>
  );
}
