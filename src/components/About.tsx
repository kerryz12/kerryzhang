import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const blocks = [
  { cmd: "echo Hello World!", out: "Hello World!" },
  { cmd: "whoami", out: "kerry-zhang, software developer" },
  { cmd: "cat education.txt", out: "Electrical Engineering, UBC" },
  { cmd: "ls ~/interests", out: "powerlifting  bouldering  music  fashion" },
];

const TYPING_MS = 55;
const OUTPUT_DELAY_MS = 250;
const NEXT_COMMAND_DELAY_MS = 500;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Prompt: React.FC = () => (
  <span>
    <span className="text-purple-400">kerry@website</span>
    <span className="text-gray-400">:</span>
    <span className="text-blue-400">~</span>
    <span className="text-gray-400">$ </span>
  </span>
);

const Cursor: React.FC = () => (
  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-gray-700" />
);

const Terminal: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [block, setBlock] = useState(() =>
    prefersReducedMotion() ? blocks.length : 0
  );
  const [chars, setChars] = useState(0);
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || block >= blocks.length) return;
    const { cmd } = blocks[block];
    let timeout: ReturnType<typeof setTimeout>;

    if (chars < cmd.length) {
      timeout = setTimeout(() => setChars((c) => c + 1), TYPING_MS);
    } else if (!showOut) {
      timeout = setTimeout(() => setShowOut(true), OUTPUT_DELAY_MS);
    } else {
      timeout = setTimeout(() => {
        setBlock((b) => b + 1);
        setChars(0);
        setShowOut(false);
      }, NEXT_COMMAND_DELAY_MS);
    }

    return () => clearTimeout(timeout);
  }, [started, block, chars, showOut]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="rounded-xl bg-gradient-to-br from-blue-300 via-indigo-200 to-purple-300 p-px"
    >
      <div className="overflow-hidden rounded-[11px] bg-white">
        <div className="relative flex h-11 items-center border-b border-gray-100 bg-gray-50 px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          </div>
          <span className="pointer-events-none absolute inset-x-0 text-center text-xs text-gray-400">
            kerry@website: ~/portfolio
          </span>
        </div>

        <div className="min-h-[320px] p-6 text-sm leading-7 text-gray-800">
          {blocks.map((b, i) => {
            if (i > block) return null;
            const isCurrent = i === block;
            const typed = isCurrent ? b.cmd.slice(0, chars) : b.cmd;
            const outputVisible = !isCurrent || showOut;

            return (
              <div key={b.cmd}>
                <div>
                  <Prompt />
                  {typed}
                  {isCurrent && !showOut && <Cursor />}
                </div>
                {outputVisible && (
                  <div className="whitespace-pre-wrap break-words text-gray-500">
                    {b.out}
                  </div>
                )}
              </div>
            );
          })}

          {block >= blocks.length && (
            <div>
              <Prompt />
              <Cursor />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-24">
            <Terminal />
          </div>

          <div className="space-y-6 leading-relaxed text-gray-700">
            <p>
              I'm an electrical engineering graduate from UBC with a passion for
              all kinds of software development! While my background was
              originally in low-level development, writing embedded code using
              languages like C and C++, I've gone on to build all different
              kinds of software, including web applications and more!
            </p>

            <p>
              I work with a wide variety of languages and technologies ranging
              from TypeScript to Python to React. I always focus on writing
              functional, robust, and maintainable code.
            </p>

            <p>
              My background allows me to utilize my knowledge of computers and
              software to solve interesting problems and create real-world
              applications! I'm always learning and exploring new technologies
              to stay at the forefront of software engineering.
            </p>

            <p>
              In my free time, I enjoy powerlifting, bouldering, creating music,
              and coming up with fashionable new outfits.
            </p>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <a
                href="#projects"
                className={`inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 ${focusRing}`}
              >
                View Projects
              </a>
              <a
                href="/Kerry_Zhang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-blue-500 hover:text-blue-500 ${focusRing}`}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;