import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 text-sm text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center">
        <div className="relative size-24 rounded-2xl overflow-hidden bg-white">
          <Image
            src="/logo.png"
            alt="Dissident Fund"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        <Button
          asChild
          className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80 bg-transparent border-none p-0 h-auto font-normal text-sm"
        >
          <a href="mailto:victor@meowmemes.org">Contact us</a>
        </Button>
        <p>© 2025 Dissident Fund · Know No Borders</p>
      </div>
    </footer>
  );
}
