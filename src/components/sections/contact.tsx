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
          <p className="section-label text-white/60">Need help</p>
          <h2 className="section-heading light">Get in touch</h2>
          <p>
            If you need assistance, reach out to us. All communications are kept confidential.
          </p>
          <div className="space-y-3 rounded-2xl border border-white/15 bg-black/40 p-6 text-white/80">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Email</p>
            <a
              href="mailto:victor@meowmemes.org"
              className="text-lg font-semibold text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
            >
              victor@meowmemes.org
            </a>
            <p>For extra security, use ProtonMail with PGP encryption and an incognito browser.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-black/40 p-6 text-white/80">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">What to include</p>
            <ol className="mt-4 space-y-3 text-sm">
              <li>1. A brief summary of your situation and any immediate risks.</li>
              <li>2. Your location and how we can verify who you are.</li>
              <li>3. If you can&apos;t email directly, have someone you trust reach out for you.</li>
            </ol>
            <p className="mt-4 text-sm text-white/70">We can share Signal or WhatsApp contact info after we verify your identity.</p>
          </div>
          <Button
            asChild
            className="h-12 w-full rounded-full bg-white text-xs font-semibold uppercase tracking-[0.4em] text-black hover:bg-white/90"
          >
            <a href="mailto:victor@meowmemes.org">Send us an email</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
