"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function PortfolioSection() {
  return (
    <section className="bg-[#0a0a0a] py-[clamp(3.75rem,8vw,6.25rem)] text-white" id="portfolio">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <p className="section-label text-white/70">Our work</p>
          <h2 className="section-heading light">Public portfolio</h2>
          <p className="text-base text-white/70">
            Projects we&apos;ve helped build and support. More are currently in progress.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.25em] text-black hover:bg-white/90"
            >
              <a href="https://www.heriran.com" target="_blank" rel="noopener noreferrer">
                heriran.com
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/50">
            More projects coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

