/** Soiled Society storefront content — extend here for new products and categories. */

export const SHOPIFY_STORE = "https://daxgdi-pk.myshopify.com";

export type ProductType = "Coloring Book" | "Workbook" | "Card Deck";

export interface PrintableProduct {
  id: string;
  handle: string;
  title: string;
  type: ProductType;
  description: string;
  priceUsd: number;
  imageUrl: string;
  imageAlt: string;
}

export interface ComingSoonCategory {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const brand = {
  name: "Soiled Society",
  tagline: "Good things grow from good ground.",
  heroLead:
    "Simple, thoughtful digital resources for the grown-ups raising and teaching the next generation. Instant downloads you can use tonight — printables available now, with audio, templates, and guides coming soon.",
  pill: "Instant digital downloads",
} as const;

export const printablesSection = {
  id: "printables",
  title: "Printables",
  subtitle:
    "Coloring books, early-learning workbooks and visual card decks for ages roughly 3–7. PDF, print at home or school.",
} as const;

export const printables: PrintableProduct[] = [
  {
    id: "abc-coloring-book",
    handle: "abc-coloring-book",
    title: "ABC Coloring Book",
    type: "Coloring Book",
    description: "26 alphabet pages, one letter and picture each.",
    priceUsd: 12,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1022/7885/7003/files/0001-5938513434720874299.png?v=1790617848&width=600",
    imageAlt:
      "ABC Coloring Book cover, printable alphabet coloring pages for kids",
  },
  {
    id: "hopes-garden-coloring-book",
    handle: "hopes-garden-coloring-book",
    title: "Hope's Garden Coloring Book",
    type: "Coloring Book",
    description: "20 pages of gardens, community and animal adventures.",
    priceUsd: 12,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1022/7885/7003/files/0001-2570946814784944868.png?v=1790617892&width=600",
    imageAlt:
      "Hope's Garden Coloring Book cover, printable garden and animal coloring pages",
  },
  {
    id: "phonics-and-beginning-sounds-workbook",
    handle: "phonics-and-beginning-sounds-workbook",
    title: "Phonics and Beginning Sounds Workbook",
    type: "Workbook",
    description: "11 pages: letter sounds, sorting, CVC words.",
    priceUsd: 10,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1022/7885/7003/files/0001-5601869362865726346.png?v=1790617879&width=600",
    imageAlt:
      "Phonics and Beginning Sounds Workbook cover, printable early reading activities",
  },
  {
    id: "preschool-shapes-and-colors-workbook",
    handle: "preschool-shapes-and-colors-workbook",
    title: "Preschool Shapes and Colors Workbook",
    type: "Workbook",
    description: "12 pages of shapes, colors, counting + certificate.",
    priceUsd: 10,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1022/7885/7003/files/0001-7273830724773884906.png?v=1790617876&width=600",
    imageAlt:
      "Preschool Shapes and Colors Workbook cover, printable tracing and sorting pages",
  },
  {
    id: "inclusive-school-morning-routine-card-deck",
    handle: "inclusive-school-morning-routine-card-deck",
    title: "Inclusive School-Morning Routine Card Deck",
    type: "Card Deck",
    description: "Visual step-by-step cards from wake-up to out the door.",
    priceUsd: 8,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1022/7885/7003/files/0001-3989580696614054065.png?v=1790617887&width=600",
    imageAlt:
      "Inclusive School-Morning Routine Card Deck, printable visual morning routine cards",
  },
  {
    id: "calm-down-choice-card-deck",
    handle: "calm-down-choice-card-deck",
    title: "Calm-Down Choice Card Deck",
    type: "Card Deck",
    description: "Five concrete calm-down strategies kids can choose.",
    priceUsd: 8,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1022/7885/7003/files/0001-5462257775190980273.png?v=1790617883&width=600",
    imageAlt:
      "Calm-Down Choice Card Deck, five printable calm-down strategy cards for kids",
  },
];

export function productUrl(handle: string): string {
  return `${SHOPIFY_STORE}/products/${handle}`;
}

export const bundleProposal = {
  title: "The Whole Garden Bundle",
  tag: "Proposal, not yet available",
  body: "All 6 printables in one download. Bought separately they total $60. Proposed bundle price: $39 (placeholder, pending approval). Bundle product does not exist in the store yet.",
  separateTotalUsd: 60,
  proposedPriceUsd: 39,
} as const;

export const comingSoonSection = {
  title: "More on the way",
  subtitle: "Future categories. Nothing here is for sale yet.",
} as const;

export const comingSoonCategories: ComingSoonCategory[] = [
  {
    id: "audio",
    title: "Audio",
    description: "Stories, songs, and listen-along resources for home and classroom.",
  },
  {
    id: "templates",
    title: "Templates",
    description: "Editable files you can customize for your family or teaching setup.",
  },
  {
    id: "guides",
    title: "Guides",
    description: "Short how-to guides for grown-ups supporting kids day to day.",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "delivery",
    question: "How do I get my files?",
    answer:
      "Everything is an instant digital download. Your download link appears right after checkout and is also emailed to you. Nothing ships.",
    defaultOpen: true,
  },
  {
    id: "print",
    question: "What do I need to print?",
    answer:
      "Any home or school printer. Files are PDFs. Standard letter paper works; cardstock is a nice option for card decks.",
  },
  {
    id: "copies",
    question: "Can I print more than once?",
    answer:
      "Yes. Print as many copies as you need for your own family or a single classroom.",
  },
  {
    id: "license",
    question: "Can I share or resell the files?",
    answer:
      "Please don't. The license covers personal and single-classroom use.",
  },
  {
    id: "refunds",
    question: "Refunds?",
    answer:
      "Final refund policy is pending approval. Typical for digital goods: replacement or help if a file is damaged or doesn't arrive.",
  },
  {
    id: "help",
    question: "How do I get help?",
    answer:
      "Support email for Soiled Society is being finalized. Until then, use the contact options on your order confirmation from checkout.",
  },
];

export const emailSignup = {
  id: "join",
  title: "Be first to hear about new releases",
  subtitle:
    "New categories are coming. Join the list (placeholder: not connected to any email service yet).",
} as const;

export const finalCta = {
  title: "Start with one. Print it tonight.",
  subtitle: "Six printables from $8, delivered instantly.",
  buttonLabel: "Browse printables",
  href: `#${printablesSection.id}`,
} as const;
