"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";

const pillars = [
  {
    title: "Financial Support",
    description:
      "Emergency funds for relocation, safe housing, secure communications, and immediate needs. No grants, no waiting.",
  },
  {
    title: "Media & Web Creation",
    description:
      "We build websites, documentation, and media campaigns to amplify suppressed voices and force global attention.",
  },
  {
    title: "Secure Operations",
    description:
      "Encrypted communications, operational coordination, and network connections. ProtonMail + PGP required, Signal/WhatsApp after verification.",
  },
  {
    title: "Direct Action",
    description:
      "No approval chains, no waiting periods. Encrypted verification, immediate funding, rapid deployment. We operate outside traditional NGO structures.",
  },
];

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="bg-[#f7f3ec] py-[clamp(3.75rem,8vw,6.25rem)] text-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="space-y-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer(0.12)}
        >
          <motion.h2 className="section-heading dark" variants={fadeInUp}>
            What we do
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer(0.16)}>
            {pillars.map((item, index) => (
              <motion.article
                key={item.title}
                variants={index % 2 === 0 ? slideInRight : slideInLeft}
                className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-7 shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
                <p className="mt-3 text-base text-black/70">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

