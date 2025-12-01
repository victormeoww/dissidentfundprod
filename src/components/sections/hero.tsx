"use client";

import { motion } from "framer-motion";
import { Globe2, LockKeyhole, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  return (
    <section
      className="relative isolate min-h-[620px] overflow-hidden bg-black px-6 pt-28 pb-[clamp(3.75rem,8vw,6.25rem)] text-white sm:px-10"
      id="top"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(63,188,255,0.2), transparent 50%), radial-gradient(circle at 80% 65%, rgba(255,90,130,0.18), transparent 45%)",
          filter: "blur(30px)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="show"
      >
        <motion.div className="space-y-6" variants={fadeInUp}>
          <h1 className="text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] sm:max-w-[700px]">
            Direct support for dissidents in Iran, Russia, China, and Latin America.
          </h1>
          <p className="max-w-[720px] text-base text-white/70 sm:text-lg">
            We provide financial aid, help with relocation, and media support for people at risk.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.25em] text-black hover:bg-white/90"
            >
              <a href="mailto:victor@meowmemes.org?subject=Need%20support">Request support</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 rounded-full border border-white/30 px-6 text-sm font-semibold uppercase tracking-[0.25em] text-white hover:bg-white/5"
            >
              <a href="mailto:victor@meowmemes.org?subject=I%20want%20to%20help">Get involved</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex min-h-[320px] flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-base text-white/80 backdrop-blur"
          variants={fadeInUp}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Our founders</p>
          <p>
            Co-founded by University of Washington student Victor Ji and the anonymous female writer/founder of heriran.com.
          </p>
          <div className="h-px bg-white/10"></div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">About us</p>
          <p>
            We&apos;re a small, privately funded organization. We don&apos;t take government or institutional money, which lets us act quickly.
          </p>
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/40 p-5">
            <ShieldCheck className="size-8 text-white/70" />
            <div>
              <p className="text-sm font-semibold text-white">Quick response</p>
              <p className="text-sm text-white/70">
                We try to respond and help as fast as possible.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/40 p-5">
            <Globe2 className="size-8 text-white/70" />
            <div>
              <p className="text-sm font-semibold text-white">Relocation & visibility</p>
              <p className="text-sm text-white/70">
                We help with safe housing, travel, and getting stories out.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/40 p-5">
            <LockKeyhole className="size-8 text-white/70" />
            <div>
              <p className="text-sm font-semibold text-white">Secure communication</p>
              <p className="text-sm text-white/70">
                We use encrypted email and messaging to protect your privacy.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
