"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "HerIran",
    url: "https://www.heriran.com",
    description: "Documenting the stories and struggles of women in Iran.",
  },
];

export function PortfolioSection() {
  return (
    <section className="bg-[#f7f3ec] py-[clamp(3.75rem,8vw,6.25rem)] text-black" id="portfolio">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer(0.12)}
        >
          <motion.div className="text-center" variants={fadeInUp}>
            <p className="section-label text-black/60">Our work</p>
            <h2 className="section-heading dark">Projects we&apos;ve supported</h2>
          </motion.div>
          
          <motion.div className="grid gap-5" variants={staggerContainer(0.1)}>
            {projects.map((project) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-black/20"
              >
                <div>
                  <h3 className="text-xl font-semibold text-black group-hover:underline decoration-2 underline-offset-4">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-black/60">{project.description}</p>
                </div>
                <ExternalLink className="size-5 text-black/40 group-hover:text-black transition-colors" />
              </motion.a>
            ))}
            
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-between rounded-2xl border border-dashed border-black/20 bg-black/[0.02] p-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-black/40">More coming soon</h3>
                <p className="mt-1 text-sm text-black/40">Additional projects currently in progress.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
