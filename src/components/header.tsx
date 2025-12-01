"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Dissident Fund"
            width={80}
            height={80}
            style={{ filter: "invert(1)" }}
          />
        </a>
        <Button
          asChild
          size="sm"
          className="h-9 rounded-full bg-white px-5 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-white/90"
        >
          <a href="mailto:victor@meowmemes.org">Contact</a>
        </Button>
      </div>
    </header>
  );
}
