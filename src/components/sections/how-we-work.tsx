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
          <p className="section-label text-black/50">How we work</p>
          <h2 className="section-heading dark">Simple and secure</h2>
          <div className="space-y-6 text-base text-black/75">
            <div>
              <p className="text-xl font-semibold text-black">We move quickly</p>
              <p>
                When someone needs help urgently, we don&apos;t make them wait. We verify the situation and provide support as fast as we can.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-black">We keep things private</p>
              <p>
                We use encrypted email (ProtonMail with PGP) and secure messaging apps. We recommend using an incognito browser when contacting us.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-black">We&apos;re transparent with donors</p>
              <p>
                Once someone is safe, we share anonymized updates so donors know how their money was used.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-black">We&apos;re independently funded</p>
              <p>
                We don&apos;t take government or institutional money. This keeps us flexible and free from outside influence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
