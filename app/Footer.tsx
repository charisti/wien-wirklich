import Link from "next/link";
import { HAUPTNAVIGATION } from "@/lib/navigation";
import { InstagramIcon, FacebookIcon, TiktokIcon } from "./SocialIcons";

// TODO: echte Ziel-URLs eintragen, sobald vorhanden.
const SHOP_URL = "#";
const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "TikTok", href: "#", Icon: TiktokIcon },
];

const HALBE = Math.ceil(HAUPTNAVIGATION.length / 2);
const SITEMAP_SPALTE_1 = HAUPTNAVIGATION.slice(0, HALBE);
const SITEMAP_SPALTE_2 = HAUPTNAVIGATION.slice(HALBE);

function SitemapSpalte({
  eintraege,
  beschriftet = true,
}: {
  eintraege: (typeof HAUPTNAVIGATION)[number][];
  beschriftet?: boolean;
}) {
  return (
    <div>
      <p
        className={`font-mono text-xs uppercase tracking-wide text-ink/40 mb-3 ${
          beschriftet ? "" : "hidden sm:block sm:invisible"
        }`}
        aria-hidden={beschriftet ? undefined : true}
      >
        Sitemap
      </p>
      <ul className="flex flex-col gap-2">
        {eintraege.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-ink/60 hover:text-brick transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a
              href="/"
              className="font-serif text-2xl tracking-tight text-ink uppercase"
            >
              Wien Wirklich
            </a>
            <p className="mt-3 text-sm text-ink/60 leading-relaxed max-w-xs">
              Ein Wörterbuch mit Übungs-Quiz zum Wortschatz lernen – von Papa
              Kapazunda mit Schmäh zusammengetragen.
            </p>
          </div>

          <SitemapSpalte eintraege={SITEMAP_SPALTE_1} />
          <SitemapSpalte eintraege={SITEMAP_SPALTE_2} beschriftet={false} />

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink/40 mb-3">
              Kontakt
            </p>
            <Link
              href="/kontakt"
              className="text-sm text-ink/60 hover:text-brick transition-colors"
            >
              Schreib uns
            </Link>
            <div className="flex gap-3 mt-4">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-rule text-ink/50 hover:text-brick hover:border-brick transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-rule mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/50">
          <span>
            © {new Date().getFullYear()} Wien Wirklich — ein kleines
            Wörterbuch-Projekt.
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brick transition-colors"
            >
              Shop
            </a>
            <Link href="/kontakt" className="hover:text-brick transition-colors">
              Kontakt
            </Link>
            <Link
              href="/impressum"
              className="hover:text-brick transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-brick transition-colors"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
