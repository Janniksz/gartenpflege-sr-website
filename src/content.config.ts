import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Ein Referenzprojekt = eine .md-Datei in src/content/projekte/.
// Die Bilder liegen in src/content/projekte/bilder/ und werden relativ verlinkt (./bilder/...).
const projekte = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projekte' }),
  schema: ({ image }) =>
    z.object({
      titel: z.string(),
      ort: z.string(), // nur grob, z. B. „Soltau" – nie die Adresse
      datum: z.coerce.date(),
      leistungen: z.array(z.enum(['rasen', 'hecke', 'laub', 'gruenschnitt', 'beete', 'weitere'])),
      bilder: z
        .array(
          z.object({
            vorher: image(),
            nachher: image(),
            beschreibung: z.string(), // Alternativtext, z. B. „Thujahecke an der Straßenseite"
          }),
        )
        .min(1),
      entwurf: z.boolean().default(false), // true = erscheint nicht auf der Website
    }),
});

export const collections = { projekte };
