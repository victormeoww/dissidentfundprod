export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-sm text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 text-center">
        <a
          href="mailto:contact@dissidentfund.org"
          className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
        >
          contact@dissidentfund.org
        </a>
        <p>© 2025 Dissident Fund · No governments. No institutions. Just speed and intent.</p>
      </div>
    </footer>
  );
}

