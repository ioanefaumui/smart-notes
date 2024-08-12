import Image from "next/image";

const FEATURES = [
  {
    img: { src: "/assets/thumb-up-fill.svg" },
    title: "Cross-Platform Accessibility",
    description:
      "Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.",
  },
  {
    img: { src: "/assets/global-fill.svg" },
    title: "Customizable Templates",
    description:
      "Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.",
  },
  {
    img: { src: "/assets/flag-2-fill.svg" },
    title: "Secure Cloud Storage",
    description:
      "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.",
  },
  {
    img: { src: "/assets/layer-fill.svg" },
    title: "Real-Time Collaboration",
    description:
      "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.",
  },
  {
    img: { src: "/assets/hashtag-fill.svg" },
    title: "AI-Powered Organization",
    description:
      "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.",
  },
  {
    img: { src: "/assets/git-branch-fill.svg" },
    title: "Integrations",
    description:
      "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.c",
  },
];

export function Features() {
  return (
    <section className="py-[70px] overflow-hidden">
      <div className="w-[min(100%-2.5rem,1152px)] sm:w-[min(100%-6rem,1152px)] mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-5xl leading-[120%] font-bold text-accent">
            Discover the Power of{" "}
            <span className="block text-transparent bg-gradient-to-tr bg-clip-text from-teal-dark to-teal-lighter">
              SmartNotes
            </span>
          </h2>
          <p className="text-sm sm:text-base max-w-[410px] mt-6 leading-[150%]">
            SmartNotes is packed with innovative features designed to
            revolutionize the way you take notes, collaborate with others, and
            stay organized.
          </p>
        </div>
        <ul className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-[88px] sm:[&>li:nth-child(3n)]:col-span-2 lg:[&>li:nth-child(3n)]:col-span-1 lg:[&>li:nth-child(-n+2)]:col-span-2 after:absolute after:top-[238px] after:left-[176px] after:w-[195px] after:h-[195px] after:bg-[url('/assets/layer-features.svg')] after:blur-[100px] after:-z-10">
          {FEATURES.map((f, i) => (
            <li
              key={i}
              className="p-6 lg:p-8 rounded-xl ring-[0.5px] ring-teal-light"
            >
              <Image alt="" src={f.img.src} width={32} height={32} />
              <h3 className="flex items-center mt-6 text-base sm:text-lg lg:text-xl font-bold leading-[150%] text-accent">
                {f.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-[150%]">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
