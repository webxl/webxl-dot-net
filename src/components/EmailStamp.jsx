import { SITE } from "../site";

export default function EmailStamp() {
  return (
    <a
      href={SITE.mailto}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone no-underline sm:bottom-6 sm:right-6"
    >
      <span className="inline-block h-2.5 w-2.5 bg-blaze" aria-hidden="true" />
      {SITE.email}
    </a>
  );
}
