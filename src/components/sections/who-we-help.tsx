"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function WhoWeHelpSection() {
  return (
    <section className="bg-[#050505] py-[clamp(3.75rem,8vw,6.25rem)] text-white" id="who-we-help">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <p className="section-label text-white/70">Who we help</p>
          <h2 className="section-heading light">
            People at risk for speaking out
          </h2>
          <p className="text-base text-white/70">
            Journalists, activists, artists, and everyday people in Iran, Russia, China, and Latin America who face danger for what they say or do.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-sm text-white/80">
            <p className="text-base font-semibold text-white">Who we prioritize</p>
            <ul className="mt-4 space-y-3">
              <li>• Journalists facing arrest for their reporting</li>
              <li>• Student organizers and protest leaders</li>
              <li>• Artists and filmmakers documenting abuses</li>
              <li>• Anyone in immediate danger with nowhere else to turn</li>
            </ul>
          </div>
          <p className="text-base text-white/70">
            We focus on urgent cases where we can actually make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
