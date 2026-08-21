import Header from "./Header";
import Footer from "./Footer";
import EmailStamp from "./EmailStamp";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen pb-14">
      <div className="grain" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-blaze focus:px-3 focus:py-2 focus:text-char"
      >
        Skip to content
      </a>
      <Header />
      <EmailStamp />
      <main id="main" className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
