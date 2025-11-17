"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";

export function ContactSection() {
  return (
    <section className="bg-black py-[clamp(3.75rem,8vw,6.25rem)] text-white" id="contact">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-base text-white/80 backdrop-blur"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <h2 className="section-heading light">Need Help?</h2>
          <p>
            If you&apos;re a dissident requiring urgent assistance, contact us securely. All communications are
            confidential.
          </p>
          <div className="space-y-3 rounded-2xl border border-white/15 bg-black/40 p-6 text-white/80">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Email</p>
            <a
              className="text-lg font-semibold text-white underline decoration-dotted underline-offset-4"
              href="mailto:contact@dissidentfund.org"
            >
              contact@dissidentfund.org
            </a>
            <p>Use ProtonMail with PGP encryption. Access via an incognito browser.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-black/40 p-6 text-white/80">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Protocol</p>
            <ol className="mt-4 space-y-3 text-sm">
              <li>1. Brief summary of the situation and immediate risk.</li>
              <li>2. Your location and how we can verify your identity.</li>
              <li>3. If you can&apos;t email directly, ask a trusted person abroad to contact us.</li>
            </ol>
            <p className="mt-4 text-sm text-white/70">Signal and WhatsApp numbers are provided after verification.</p>
          </div>
          <Button
            asChild
            className="h-12 w-full rounded-full bg-white text-xs font-semibold uppercase tracking-[0.4em] text-black hover:bg-white/90"
          >
            <a href="mailto:contact@dissidentfund.org?subject=Signal%20request">Send encrypted email</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

