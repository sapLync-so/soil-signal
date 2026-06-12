import {
  ArrowUpRight,
  BadgeCheck,
  Box,
  Leaf,
  Ruler,
  Shirt,
  Sparkles,
  SunMedium,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particle-typography";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    title: "Sweaters",
    note: "Heavyweight layers with a quiet mark and a refined shoulder line.",
    image: "/images/soil-signal-sweater.png",
  },
  {
    title: "Tee shirts",
    note: "Clean everyday staples built for a soft handfeel and precise fit.",
    image: "/images/soil-signal-tee.png",
  },
  {
    title: "Socks",
    note: "Small-format essentials that carry the signature S/S detail with restraint.",
    image: "/images/soil-signal-socks.png",
  },
  {
    title: "Jeans",
    note: "Structured denim with a grounded silhouette and durable finish.",
    image: "/images/soil-signal-jeans.png",
  },
  {
    title: "Sweats",
    note: "Relaxed cuts made for movement, travel, and everyday rotation.",
    image: "/images/soil-signal-sweats.png",
  },
];

const principles = [
  {
    icon: Leaf,
    title: "Rooted",
    text: "Natural tones, tactile materials, and references that keep the collection connected to land and place.",
  },
  {
    icon: Sparkles,
    title: "Distinct",
    text: "A small, recognizable S/S mark used consistently across garments, labels, and supporting graphics.",
  },
  {
    icon: Shirt,
    title: "Wearable",
    text: "Product language stays focused on fit, fabric, and utility so the pieces feel real, not overdesigned.",
  },
];

const details = [
  "Private build surface for a clothing line in progress",
  "Placeholder product imagery and lookbook references",
  "Ready for shadcn/ui components, product pages, and campaign sections",
];

export default function BlankDemo() {
  return (
    <main className="min-h-screen bg-[#090a08] text-[#f4efe5]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(165,122,65,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(84,118,101,0.18),_transparent_32%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_30%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-5 border-b border-white/10 py-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/80 hover:bg-white/10">
                  private
                </Badge>
                <Badge className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-emerald-100 hover:bg-emerald-300/15">
                  clothing line
                </Badge>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.38em] text-[#c8bbab]">
                  Soil &amp; Signal
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                  A private working site for a streetwear label rooted in land,
                  technology, and culture.
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-white/60">
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/20 hover:text-white" href="#collection">
                Collection
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/20 hover:text-white" href="#lookbook">
                Lookbook
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/20 hover:text-white" href="#details">
                Details
              </a>
            </nav>
          </header>

          <section className="grid flex-1 gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/80 hover:bg-white/10">
                  S/S archive
                </Badge>
                <Badge className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/75 hover:bg-white/10">
                  product development
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="max-w-4xl">
                  <h1 className="sr-only">Soil &amp; Signal</h1>
                  <CursorDrivenParticleTypography
                    text="SOIL &amp; SIGNAL"
                    fontSize={126}
                    particleSize={1.6}
                    particleDensity={6}
                    dispersionStrength={16}
                    returnSpeed={0.08}
                    color="#f4efe5"
                    className="min-h-[180px] md:min-h-[220px]"
                  />
                </div>
                <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  Soil &amp; Signal is being shaped as a clothing line with a
                  clear visual system: sweaters, tee shirts, socks, jeans, and
                  sweats, all carrying a subtle S/S logo language.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-[#f4efe5] text-[#0b0d0a] hover:bg-white">
                  <a href="#collection">
                    View collection
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 text-[#f4efe5] hover:bg-white/10 hover:text-[#f4efe5]">
                  <a href="#details">Explore details</a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {principles.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="border-white/10 bg-white/[0.04] text-[#f4efe5] shadow-none backdrop-blur-xl">
                      <CardHeader className="space-y-4 pb-3">
                        <div className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                          <Icon className="size-5 text-[#d8c4a7]" />
                        </div>
                        <CardTitle className="text-lg font-semibold tracking-[-0.03em] text-[#f7f0e4]">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm leading-6 text-white/65">
                        {item.text}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <aside className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_60%)] blur-2xl" />
              <Card className="relative overflow-hidden border-white/10 bg-[#111410]/90 text-[#f4efe5] shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <CardContent className="space-y-5 pt-6">
                  <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
                      <img
                        src="/images/soil-signal-sweats.png"
                        alt="Soil & Signal placeholder sweats with an S/S logo"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-4">
                      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
                        <img
                          src="/images/soil-signal-flatlay-1.png"
                          alt="Soil & Signal flat lay of a sweatshirt, tee shirt, jeans, socks, and sweats"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                          <img
                            src="/images/soil-signal-jeans.png"
                            alt="Folded Soil & Signal jeans with an S/S logo patch"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                          <img
                            src="/images/soil-signal-socks.png"
                            alt="Close-up studio socks placeholder showing S/S logo details"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <BadgeCheck className="size-5 text-[#d8c4a7]" />
                      <p className="mt-3 text-sm font-medium text-[#f7f0e4]">Logo system</p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        Consistent S/S placement across garments and labels.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <SunMedium className="size-5 text-[#d8c4a7]" />
                      <p className="mt-3 text-sm font-medium text-[#f7f0e4]">Palette</p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        Cream, charcoal, indigo, and warm earth tones.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <Box className="size-5 text-[#d8c4a7]" />
                      <p className="mt-3 text-sm font-medium text-[#f7f0e4]">Categories</p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        Built around the core pieces of the line.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </section>

          <section id="collection" className="border-t border-white/10 py-10 lg:py-14">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                  Collection map
                </p>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#f7f0e4] sm:text-4xl">
                  The site now speaks in clothing-language, not generic brand copy.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-white/60">
                Placeholder product imagery is being used for now while the line,
                fit system, and product storytelling are developed.
              </p>
            </div>

            <div className="mt-8">
              <Carousel
                showArrows
                showProgress
                showDots
                showCounter
                keyboardNavigation
                autoplayDelay={0}
                options={{ align: "start", loop: true, dragFree: true }}
                slides={categories.map((item) => (
                  <Card key={item.title} className="overflow-hidden border-white/10 bg-white/[0.03] text-[#f4efe5] shadow-none backdrop-blur-xl">
                    <div className="aspect-[4/5] overflow-hidden border-b border-white/10 bg-black/15">
                      <img
                        src={item.image}
                        alt={`${item.title} placeholder product image for Soil & Signal`}
                        className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                      />
                    </div>
                    <CardHeader className="space-y-3 pb-3">
                      <CardTitle className="text-lg tracking-[-0.03em] text-[#f7f0e4]">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm leading-6 text-white/60">{item.note}</p>
                    </CardHeader>
                  </Card>
                ))}
                thumbnails={categories.map((item) => (
                  <div className="aspect-square overflow-hidden rounded-md border border-white/10 bg-black/15">
                    <img
                      src={item.image}
                      alt={`${item.title} thumbnail for Soil & Signal collection map`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                captions={categories.map((item) => item.note)}
              />
            </div>
          </section>

          <section id="lookbook" className="grid gap-6 border-t border-white/10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Lookbook direction
              </p>
              <h2 className="max-w-lg text-3xl font-semibold tracking-[-0.04em] text-[#f7f0e4] sm:text-4xl">
                Premium enough for campaign work, simple enough to keep extending.
              </h2>
              <p className="max-w-xl text-sm leading-7 text-white/60">
                The shadcn/ui setup gives the site a clean component foundation,
                so future additions can move from this landing page into product
                grids, size charts, order flows, and editorial stories without a
                visual reset.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-white/10 bg-white/[0.04] text-[#f4efe5] shadow-none backdrop-blur-xl sm:row-span-2">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] overflow-hidden rounded-t-xl border-b border-white/10 bg-black/15">
                    <img
                      src="/images/soil-signal-stack-1.png"
                      alt="Stacked Soil & Signal sweats, sweats, denim, and knitwear in a studio setup"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                      Studio placeholder
                    </p>
                    <p className="text-sm leading-7 text-white/62">
                      A quiet, earthy presentation that keeps the focus on the
                      garments and the S/S identity system.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/[0.04] text-[#f4efe5] shadow-none backdrop-blur-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg tracking-[-0.03em] text-[#f7f0e4]">
                    Design principles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-6 text-white/62">
                  <div className="flex items-start gap-3">
                    <Ruler className="mt-0.5 size-4 text-[#d8c4a7]" />
                    <p>Fit and proportion stay front and center.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shirt className="mt-0.5 size-4 text-[#d8c4a7]" />
                    <p>Garments should feel real enough for production and sampling.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="mt-0.5 size-4 text-[#d8c4a7]" />
                    <p>Earthy color and material references keep the brand grounded.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/[0.04] text-[#f4efe5] shadow-none backdrop-blur-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg tracking-[-0.03em] text-[#f7f0e4]">
                    Launch posture
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-6 text-white/62">
                  {details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-[#d8c4a7]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="details" className="border-t border-white/10 py-10 lg:py-14">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                  What changed
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f7f0e4] sm:text-4xl">
                  The site now reads like a clothing brand in progress.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-white/60">
                  The copy is focused on apparel, the layout is built around a
                  product story, and the page uses shadcn/ui components plus
                  generated placeholder photography to establish the visual
                  language.
                </p>
              </div>

              <Button asChild size="lg" className="rounded-full bg-[#f4efe5] text-[#0b0d0a] hover:bg-white">
                <a href="#collection">
                  Review the collection
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
