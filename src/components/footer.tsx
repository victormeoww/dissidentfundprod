"use client";

import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const copyEmail = () => {
    navigator.clipboard.writeText("victor@meowmemes.org");
  };

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-sm text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 text-center">
        <Button
          onClick={copyEmail}
          className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80 bg-transparent border-none p-0 h-auto font-normal text-sm"
        >
          contact@dissidentfund.org
        </Button>
        <p>© 2025 Dissident Fund · No governments. No institutions. Just speed and intent.</p>
      </div>
    </footer>
  );
}

