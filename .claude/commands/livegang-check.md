---
description: Prüfen, ob die Website bereit zur Veröffentlichung ist
---

Prüfe, ob die Website veröffentlicht werden kann. Ändere dabei nichts, sondern erstelle nur einen Bericht.

1. **Platzhalter:** Suche in `src/` und `public/` nach `[` mit Großbuchstaben oder Text in eckigen Klammern (z. B. `[NAME INHABER]`, `[ORT]`, `[Straße`) und liste jeden Fund mit Datei und Zeile.
2. **Beispielinhalte:** Gibt es noch das Beispielprojekt (`2026-10-beispielprojekt.md`) oder Platzhalterbilder?
3. **Rechtliches:** Sind Impressum (`src/pages/impressum.astro`) und Datenschutz (`src/pages/datenschutz.astro`) vollständig, also Name, Anschrift und Hoster eingetragen und der Vorlage-Hinweis entfernt?
4. **Domain:** Steht die echte Domain in `astro.config.mjs` und `public/robots.txt`?
5. **Fotos:** Wie groß (in Pixeln) sind die Fotos in `src/assets/fotos/`? Unter 1600 px Breite als zu klein melden.
6. **Externe Einbindungen:** Suche nach `http`-Links in `<script>`, `<link>`, `<iframe>` und `@import`. Alles außer der eigenen Domain melden (wegen DSGVO).
7. **Build:** `npm run build` ausführen. Fehler oder Warnungen melden.

Gib am Ende eine Liste aus: ✓ erledigt / ✗ offen, jeweils mit einem Satz, was zu tun ist.
