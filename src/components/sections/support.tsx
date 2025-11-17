"use client";

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
          <h2 className="section-heading dark">Fund the next case</h2>
          <p className="text-base text-black/70">
            Every dollar goes directly to protecting dissidents—relocation costs, emergency funds, web hosting, and
            secure communications. We&apos;re privately funded with zero institutional backing. That&apos;s why we can
            move fast.
          </p>
          <p className="text-base text-black/70">
            We operate lean and move fast. Your support helps us scale to more regions and protect more people.
          </p>
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-black px-10 text-xs font-semibold uppercase tracking-[0.4em] text-white hover:bg-black/90"
          >
            <a href="mailto:contact@dissidentfund.org?subject=Donation%20Inquiry">Donate</a>
          </Button>
          <p className="text-sm text-black/60">
            Have legal, technical, or media skills? Email us:{" "}
            <a
              href="mailto:contact@dissidentfund.org"
              className="font-semibold text-black underline decoration-dotted underline-offset-4"
            >
              contact@dissidentfund.org
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


