# Website Gartenpflege SR

Statische Website für Gartenpflege SR (Gartenpflege in Soltau & Umgebung), gebaut mit Astro 7. Seiten: Start, Leistungen, Referenzen, Gartenkalender, Über mich, Impressum, Datenschutz. Sprache der Website und der Kommunikation: Deutsch.

## Umgebung

- Windows, Terminal ist meist PowerShell. Falls `npm` mit „Ausführung von Skripts ist deaktiviert" scheitert: `npm.cmd` statt `npm` verwenden (z. B. `npm.cmd run build`).
- Node.js ≥ 22.12.

## Befehle

- `npm install` – Abhängigkeiten installieren (nach dem Klonen oder wenn `node_modules` fehlt)
- `npm run dev` – lokaler Server auf http://localhost:4321 (läuft dauerhaft, im Hintergrund starten)
- `npm run build` – baut nach `dist/`. **Nach jeder Änderung ausführen; muss fehlerfrei durchlaufen.**
- `npm run preview` – gebaute Version ansehen

## Aufbau

- `src/data/firma.ts` – Name, Telefon, E-Mail, Inhaber, Orte, Liste der Leistungen. Einzige Quelle für diese Daten; nie Telefonnummer o. Ä. in Seiten hart eintippen.
- `src/data/gartenkalender.ts` – Monate und Arbeiten des Gartenkalenders
- `src/content/projekte/*.md` – Referenzprojekte (Schema in `src/content.config.ts`), Fotos in `src/content/projekte/bilder/`
- `src/pages/` – eine Datei pro Seite; `src/layouts/Base.astro` – Grundgerüst, SEO, strukturierte Daten
- `src/components/` – Header, Kontaktband, Vorher/Nachher-Regler (`BeforeAfter.astro`), Icons
- `src/styles/tokens.css` – Design-Tokens (Farben, Schriften, Abstände, Radien); `src/styles/site.css` – alle Stile
- `.pages.yml` – Pages CMS (Referenzen im Browser pflegen); `.github/workflows/deploy.yml` – Veröffentlichen per FTPS

## Design-Regeln

- Nur Tokens aus `tokens.css` verwenden (`var(--forest)`, `var(--space-6)` …). Keine neuen Farben, Schriften oder festen Hex-Werte in Komponenten.
- Farben: Creme (`--surface`) als Grund, Waldgrün (`--forest`) für Kontaktband, Hauptbutton und höchstens einen grünen Abschnitt pro Seite (`.section--forest`: Startseite Versprechen, Leistungen Ablauf), `--moss` als einzige grüne Textfarbe auf hellem Grund, `--leaf` nur für Icons auf hellem Grund, auf Grün `--sprout`. Text immer `--ink` / `--ink-muted`, auf Grün `--on-forest`.
- Schriften: Fraunces 600 für Überschriften, DM Sans für Text. Beide liegen lokal in `public/fonts/`.
- Formen: Pillen-Buttons (`.btn`), Fotos im Hero mit Bogen oben (`.arch`), Karten `--radius-md`. Keine Verläufe, keine Wellen, keine Emojis, keine Karten mit farbigem Rand links.
- Layout: Inhalte in `.container`; Startseiten-Hero füllt den ersten Bildschirm (`.hero`, nichts darüber hinzufügen).
- Jede Änderung muss auf dem Handy (390 px) und am Desktop (1280–1920 px) funktionieren, ohne seitliches Scrollen.
- Barrierefreiheit: echte `<a>`/`<button>`, sichtbarer Fokus (`--focus-ring`), Klickflächen ≥ 44 px, `alt`-Texte bei Fotos, dekorative SVGs mit `aria-hidden="true"`.

## Texte

- Ich-Form, Sie-Ansprache. Kurze Sätze, Überschriften enden mit Punkt („Gepflegt bis ins Detail."). Keine Ausrufezeichen, keine Superlative.
- Leistungen immer in dieser Reihenfolge: Rasenmähen · Hecken- und Formschnitt · Laubentfernung · Entsorgung von Grünschnitt · Pflege von Sträuchern und Beeten · Weitere Gartenarbeiten auf Anfrage.
- Versprechen: Zuverlässig (Termine wie vereinbart) · Fair (Preis vorab transparent) · Gründlich (Garten sauber hinterlassen).
- **Nichts erfinden:** keine Kundenstimmen, Preise, Zahlen, Jahre Erfahrung, Qualifikationen oder Siegel. Fehlt eine Angabe, sichtbaren Platzhalter in `[eckigen Klammern]` setzen und mich darauf hinweisen.

## Datenschutz (DSGVO)

- Keine externen Skripte, CDNs, Google Fonts, Google Maps, YouTube-Einbettungen, Tracking oder Cookies einbauen. Alles wird selbst gehostet, damit kein Cookie-Banner nötig ist.
- Will ich so etwas trotzdem, erst nachfragen und darauf hinweisen, dass die Datenschutzerklärung angepasst werden muss.
- Referenzen: nur grober Ort („Soltau"), nie Adresse; keine Hausnummern, Kennzeichen oder Personen auf Fotos.

## Arbeitsweise

- Nach jeder Änderung `npm run build` ausführen und Fehler selbst beheben.
- Keine neuen npm-Pakete ohne Rückfrage.
- Git: Änderungen mit kurzer deutscher Commit-Nachricht committen, wenn ich darum bitte. **Nie ohne Nachfrage pushen** – ein Push auf `main` veröffentlicht die Website automatisch.
- Am Ende kurz sagen, was geändert wurde und welche Platzhalter noch offen sind.

## Eigene Befehle

- `/neue-referenz` – legt aus Fotos und einer Beschreibung ein neues Referenzprojekt an
- `/livegang-check` – prüft, ob die Website bereit zur Veröffentlichung ist
