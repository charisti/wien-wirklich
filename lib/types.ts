export type Bedeutung = {
  kategorie: string;
  text: string;
};

export type Wort = {
  slug: string;
  wort: string;
  artikel: string;
  ipa: string;
  wortart: string;
  kategorie?: string;
  definition: string;
  bedeutungen?: Bedeutung[];
  audio_url?: string;
  beispiel?: string;
  synonyme?: string[];
};
