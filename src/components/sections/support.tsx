"use client";

// lil jit was here
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";

export function SupportSection() {
  return (
    <section className="bg-[#f4f4f0] py-[clamp(3.75rem,8vw,6.25rem)] text-black" id="support">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="section-label text-black/50">Support us</p>
          <h2 className="section-heading dark">Help us help others</h2>
          <p className="text-base text-black/70">
            Your donations go directly to helping people—covering relocation costs, emergency funds, web hosting, and secure communications.
          </p>
          <p className="text-base text-black/70">
            We&apos;re a small team and every contribution helps us reach more people.
          </p>
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-black px-10 text-xs font-semibold uppercase tracking-[0.4em] text-white hover:bg-black/90"
          >
            <a href="mailto:victor@meowmemes.org?subject=Donation%20Inquiry">Donate</a>
          </Button>
          <p className="text-sm text-black/60">
            Have legal, technical, or media skills? We&apos;d love to hear from you:{" "}
            <a
              href="mailto:victor@meowmemes.org"
              className="font-semibold text-black underline decoration-dotted underline-offset-4"
            >
              victor@meowmemes.org
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
