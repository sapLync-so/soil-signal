import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  brand,
  bundleProposal,
  comingSoonCategories,
  comingSoonSection,
  emailSignup,
  faqItems,
  finalCta,
  printables,
  printablesSection,
  productUrl,
} from "@/data/soiled-society";

function formatPrice(usd: number): string {
  return `$${usd}`;
}

function EmailSignupForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-base text-[var(--ss-text)]/90" role="status">
        Thanks! (Demo only: not saved.)
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="email-signup" className="sr-only">
        Email address
      </label>
      <input
        id="email-signup"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="you@example.com"
        className="min-h-11 min-w-0 flex-1 rounded-full border border-[var(--ss-green)]/25 bg-white px-4 text-base text-[var(--ss-text)] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--ss-accent)] focus-visible:ring-offset-2"
      />
      <Button
        type="submit"
        className="shrink-0 bg-[var(--ss-accent)] text-white hover:bg-[var(--ss-accent)]/90"
      >
        Notify me
      </Button>
    </form>
  );
}

export default function SoiledSocietyLanding() {
  return (
    <div className="soiled-society min-h-screen bg-[var(--ss-cream)] text-[var(--ss-text)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <header className="bg-[var(--ss-green)] text-white">
        <div className="mx-auto max-w-[1080px] px-[18px] py-14 sm:py-16">
          <p className="text-sm font-extrabold uppercase tracking-[0.06em]">
            {brand.name.toUpperCase()}
          </p>
          <Badge className="mt-4 rounded-full border-0 bg-white px-3 py-1 text-xs font-bold uppercase tracking-normal text-[var(--ss-green)] hover:bg-white">
            {brand.pill}
          </Badge>
          <h1 className="ss-display mt-4 max-w-2xl text-[clamp(1.875rem,7vw,3.25rem)] leading-[1.1] text-white">
            {brand.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/92">
            {brand.heroLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[var(--ss-accent)] font-bold text-white hover:bg-[var(--ss-accent)]/90"
            >
              <a href={`#${printablesSection.id}`}>Shop printables</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`#${emailSignup.id}`}>Get new-release news</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-[1080px] px-[18px]">
        <section
          id={printablesSection.id}
          className="scroll-mt-6 py-11 sm:py-12"
          aria-labelledby="printables-heading"
        >
          <h2
            id="printables-heading"
            className="ss-display text-[1.75rem] text-[var(--ss-green)] sm:text-[1.875rem]"
          >
            {printablesSection.title}
          </h2>
          <p className="mt-1.5 max-w-2xl text-base opacity-80">
            {printablesSection.subtitle}
          </p>
          <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {printables.map((product) => (
              <li key={product.id}>
                <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-0 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                  <div className="aspect-square overflow-hidden bg-neutral-100">
                    <img
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      width={600}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-1 px-3.5 pb-0 pt-3.5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ss-accent)]">
                      {product.type}
                    </p>
                    <CardTitle className="text-[17px] font-bold leading-snug text-[var(--ss-text)]">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 px-3.5 pb-3 pt-1 text-sm leading-relaxed">
                    {product.description}
                  </CardContent>
                  <CardFooter className="flex items-center justify-between gap-3 px-3.5 pb-3.5 pt-0">
                    <span className="text-xl font-bold tabular-nums">
                      {formatPrice(product.priceUsd)}
                    </span>
                    <Button
                      asChild
                      size="sm"
                      className="bg-[var(--ss-accent)] font-bold text-white hover:bg-[var(--ss-accent)]/90"
                    >
                      <a
                        href={productUrl(product.handle)}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Get it
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-6 sm:py-8" aria-labelledby="bundle-heading">
          <div className="rounded-[18px] border-2 border-dashed border-[var(--ss-accent)] bg-white p-5 sm:p-6">
            <Badge
              variant="secondary"
              className="rounded-md bg-[#fff3c4] px-2 py-0.5 text-xs font-semibold uppercase tracking-normal text-[var(--ss-text)] hover:bg-[#fff3c4]"
            >
              {bundleProposal.tag}
            </Badge>
            <h2
              id="bundle-heading"
              className="ss-display mt-2.5 text-[1.75rem] text-[var(--ss-green)]"
            >
              {bundleProposal.title}
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              {bundleProposal.body}
            </p>
          </div>
        </section>

        <section className="py-11 sm:py-12" aria-labelledby="coming-soon-heading">
          <h2
            id="coming-soon-heading"
            className="ss-display text-[1.75rem] text-[var(--ss-green)]"
          >
            {comingSoonSection.title}
          </h2>
          <p className="mt-1.5 opacity-80">{comingSoonSection.subtitle}</p>
          <ul className="mt-5 grid list-none gap-3 p-0 sm:grid-cols-3">
            {comingSoonCategories.map((cat) => (
              <li key={cat.id}>
                <div className="h-full rounded-[14px] border-2 border-dashed border-[var(--ss-green)]/35 bg-white/50 p-4 sm:p-[18px]">
                  <Badge
                    variant="secondary"
                    className="rounded-md bg-[#fff3c4] px-2 py-0.5 text-xs font-semibold uppercase tracking-normal text-[var(--ss-text)] hover:bg-[#fff3c4]"
                  >
                    Coming soon
                  </Badge>
                  <h3 className="mt-2 text-lg font-bold text-[var(--ss-text)]">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed opacity-90">
                    {cat.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-11 sm:py-12" aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="ss-display text-[1.75rem] text-[var(--ss-green)]"
          >
            FAQ
          </h2>
          <div className="mt-5 space-y-2.5">
            {faqItems.map((item) => (
              <details
                key={item.id}
                open={item.defaultOpen}
                className="rounded-xl bg-white px-4 py-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
              >
                <summary className="cursor-pointer list-none font-bold marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id={emailSignup.id}
          className="scroll-mt-6 py-11 sm:py-12"
          aria-labelledby="email-heading"
        >
          <h2
            id="email-heading"
            className="ss-display text-[1.75rem] text-[var(--ss-green)]"
          >
            {emailSignup.title}
          </h2>
          <p className="mt-1.5 max-w-xl opacity-80">{emailSignup.subtitle}</p>
          <div className="mt-5 max-w-lg">
            <EmailSignupForm />
          </div>
        </section>

        <section className="py-8 sm:py-10" aria-labelledby="final-cta-heading">
          <div className="rounded-[20px] bg-[var(--ss-accent)] px-[18px] py-9 text-center text-white">
            <h2
              id="final-cta-heading"
              className="ss-display text-[1.75rem] text-white sm:text-3xl"
            >
              {finalCta.title}
            </h2>
            <p className="mt-2 text-base opacity-95">{finalCta.subtitle}</p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-[var(--ss-green)] font-bold text-white hover:bg-[var(--ss-green)]/90"
            >
              <a href={finalCta.href}>{finalCta.buttonLabel}</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="px-[18px] py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} {brand.name}
      </footer>
    </div>
  );
}
