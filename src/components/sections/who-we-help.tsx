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
          <h2 className="section-heading light">
            Journalists, activists, artists, and ordinary people in Iran, Russia, China, and Latin America who face
            imprisonment, torture, or death for speaking out.
          </h2>
          <p className="text-base text-white/70">
            We focus on cases where immediate support, financial aid, and global visibility can prevent the worst
            outcomes.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-sm text-white/80">
            <p className="text-base font-semibold text-white">Priority cases</p>
            <ul className="mt-4 space-y-3">
              <li>• Investigative journalists facing arrest after exposing corruption or violence</li>
              <li>• Student organizers and protest leaders coordinating demonstrations</li>
              <li>• Artists and filmmakers documenting regime abuses</li>
              <li>• Anyone with imminent risk and no institutional support</li>
            </ul>
          </div>
          <p className="text-base text-white/70">
            We prioritize cases with imminent risk, verified need, and where immediate support can change outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

