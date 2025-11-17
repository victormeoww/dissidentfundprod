"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function HowWeWorkSection() {
  return (
    <section className="bg-[#fefefe] py-[clamp(3.75rem,8vw,6.25rem)] text-black" id="how-we-work">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <h2 className="section-heading dark">How we work</h2>
          <div className="space-y-6 text-base text-black/75">
            <div>
              <p className="text-xl font-semibold text-black">Speed over process</p>
              <p>
                When someone&apos;s life depends on it, bureaucracy kills. We operate lean, verify quickly, and fund
                immediately.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-black">Encrypted everything</p>
              <p>
                Initial contact happens through ProtonMail with PGP encryption (use an incognito browser). Signal or
                WhatsApp numbers are only shared after we verify your identity through trusted sources.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-black">Transparency after safety</p>
              <p>
                Once someone is secure, we share anonymized updates with donors so they know exactly what their money
                funded.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-black">Private funding only</p>
              <p>
                Zero government money, zero institutional grants. That freedom lets us move without political
                constraints or paperwork delays.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

