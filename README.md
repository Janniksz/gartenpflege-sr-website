# Website Gartenpflege SR

Die Website von Gartenpflege SR, gebaut mit [Astro](https://astro.build). Sie hat fünf Seiten (Start, Leistungen, Referenzen, Gartenkalender, Über mich) plus Impressum und Datenschutz und nutzt das Design-System „Gartenpflege SR“ (Farben, Schriften, Formen).

## Was ist Astro?

Astro ist ein Werkzeug, das aus Vorlagen (`.astro`-Dateien) und Inhalten (Markdown-Dateien) eine fertige Website aus reinem HTML und CSS baut. Auf dem Server liegen am Ende nur normale Dateien – keine Datenbank, kein PHP, nichts, das gehackt oder aktualisiert werden muss.

Eine `.astro`-Datei besteht aus zwei Teilen:

```astro
---
// Oben, zwischen den Strichen: JavaScript, läuft nur beim Bauen
const name = 'Gartenpflege SR';
---
<!-- Darunter: HTML mit {Platzhaltern} -->
<h1>{name}</h1>
```

## Einmalig einrichten

1. **Node.js installieren**, Version 22 oder neuer: https://nodejs.org (die „LTS“-Version).
2. Diesen Ordner entpacken und im Terminal öffnen.
3. `npm install` ausführen. Das lädt Astro und alles Nötige (einmalig, ca. 1 Minute).

Ein Code-Editor hilft sehr, z. B. [VS Code](https://code.visualstudio.com) mit der Erweiterung „Astro“.

## Die wichtigsten Befehle

| Befehl | Was passiert |
| --- | --- |
| `npm run dev` | Startet die Website lokal unter http://localhost:4321. Jede gespeicherte Änderung ist sofort im Browser sichtbar. |
| `npm run build` | Baut die fertige Website in den Ordner `dist/`. Den Inhalt von `dist/` lädt man auf den Webspace. |
| `npm run preview` | Zeigt die gebaute Version aus `dist/` zur Kontrolle an. |

Beenden mit `Strg + C` im Terminal.

## Wo was liegt

```
src/
  data/firma.ts            Telefon, E-Mail, Name, Orte – zentral, wirkt überall
  data/gartenkalender.ts   Alle Monate und Arbeiten des Gartenkalenders
  content/projekte/        Referenzen: eine .md-Datei pro Projekt
  content/projekte/bilder/ Die Vorher/Nachher-Fotos der Referenzen
  pages/                   Eine Datei = eine Seite (index = Start)
  components/              Wiederverwendbare Teile (Header, Kontaktband, Regler …)
  layouts/Base.astro       Grundgerüst jeder Seite (Kopf, Fuß, SEO)
  styles/tokens.css        Design-System: Farben, Schriften, Abstände
  styles/site.css          Aussehen aller Bausteine
  assets/fotos/            Fotos für Start- und andere Seiten
public/                    Dateien, die unverändert übernommen werden (Schriften, Favicon)
.pages.yml                 Einstellungen für Pages CMS (Referenzen im Browser pflegen)
.github/workflows/         Automatisches Veröffentlichen per GitHub
```

## Ein neues Referenzprojekt anlegen

**Variante A – im Browser mit Pages CMS (ohne Code):**
1. Das Projekt muss auf GitHub liegen (siehe „Veröffentlichen“).
2. Auf https://app.pagescms.org mit GitHub anmelden und das Repository öffnen.
3. „Referenzen“ → „Neu“, Felder ausfüllen, Fotos hochladen, speichern.
4. Pages CMS speichert direkt ins Repository. Die GitHub Action baut und veröffentlicht die Seite dann automatisch.

Hinweis: Die Pages-CMS-Einstellungen sind vorbereitet, aber noch nicht live getestet. Falls Bilder nach dem Speichern nicht gefunden werden, in `.pages.yml` den Wert `media.output` prüfen – die Bildpfade in der .md-Datei müssen mit `./bilder/` beginnen.

**Variante B – von Hand:**
1. Fotos nach `src/content/projekte/bilder/` kopieren, z. B. `heckenschnitt-soltau-vorher-1.jpg` und `...-nachher-1.jpg`.
2. Eine Datei `src/content/projekte/2026-11-heckenschnitt-soltau.md` anlegen (ein vorhandenes Projekt kopieren und anpassen).
3. Der Dateiname wird zum Sprunglink: `/referenzen#2026-11-heckenschnitt-soltau`.

Jedes Projekt erscheint automatisch auf der Referenzen-Seite und – wenn es zu den drei neuesten gehört – auf der Startseite. Mit `entwurf: true` bleibt es unsichtbar.

**Fotos:** Vorher und Nachher aus derselben Position aufnehmen. Querformat 4:3 passt am besten. Große Handyfotos sind kein Problem, Astro verkleinert sie beim Bauen automatisch. Keine Hausnummern, Kennzeichen oder Personen, und vorher die Zustimmung der Kunden einholen.

## Texte und Daten ändern

- **Telefon, E-Mail, Name, Orte:** `src/data/firma.ts`
- **Gartenkalender:** `src/data/gartenkalender.ts`
- **Leistungstexte und Richtpreise:** oben in `src/pages/leistungen.astro` (Feld `preis` füllen, dann erscheint der Richtpreis)
- **Startseite:** `src/pages/index.astro`
- **Über mich:** `src/pages/ueber-mich.astro` (Kurzfassung zusätzlich auf der Startseite)

## Veröffentlichen

1. Auf GitHub ein **privates** Repository anlegen und diesen Ordner hochladen (z. B. mit GitHub Desktop).
2. Hosting wählen:
   - **Deutscher Webspace** (z. B. all-inkl, netcup, Hetzner): In GitHub unter *Settings → Secrets and variables → Actions* die drei Werte `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` anlegen. Ab dann wird bei jeder Änderung automatisch gebaut und hochgeladen (`.github/workflows/deploy.yml`).
   - **Cloudflare Pages oder Netlify:** Repository verbinden, Build-Befehl `npm run build`, Ausgabeordner `dist`. Die Datei `deploy.yml` kann dann gelöscht werden.
3. In `astro.config.mjs` und `public/robots.txt` die echte Domain eintragen.

## Vor dem Livegang

- [ ] Alle Platzhalter in `[eckigen Klammern]` ersetzen (Suche nach `[` im Ordner `src/`)
- [ ] Name und Foto für „Über mich“, Orte im Einsatzgebiet
- [ ] Impressum und Datenschutz vervollständigen und prüfen lassen (Hoster eintragen!)
- [x] Beispielprojekt und Beispielbilder löschen, echte Projekte anlegen
- [ ] Fotos durch hochauflösende Originale ersetzen (`src/assets/fotos/`)
- [ ] Gartenkalender fachlich prüfen
- [ ] Domain in `astro.config.mjs` und `public/robots.txt`
- [ ] Google-Unternehmensprofil anlegen und auf die Website verlinken
