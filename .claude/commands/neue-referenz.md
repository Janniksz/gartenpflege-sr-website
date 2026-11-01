---
description: Neues Referenzprojekt mit Vorher/Nachher-Fotos anlegen
argument-hint: "[Ordner mit Fotos] [kurze Beschreibung des Auftrags]"
---

Lege ein neues Referenzprojekt an. Angaben vom Nutzer: $ARGUMENTS

1. Finde die Fotos (Ordner oder Dateien aus den Angaben). Ordne sie zu Paaren aus Vorher und Nachher. Ist die Zuordnung aus den Dateinamen nicht eindeutig, schau dir die Bilder an und frag nach, wenn du unsicher bist.
2. Prüfe jedes Foto: keine erkennbaren Personen, Hausnummern oder Autokennzeichen. Findest du etwas, sag mir Bescheid, bevor du weitermachst.
3. Frag in einer Nachricht nach allem, was fehlt: Titel, Ort (nur grob, z. B. „Soltau"), Monat/Jahr, Leistungen, zwei bis drei Sätze zum Auftrag. Erfinde nichts davon.
4. Kopiere die Fotos nach `src/content/projekte/bilder/` mit Namen nach dem Muster `<projekt-slug>-vorher-1.jpg`, `<projekt-slug>-nachher-1.jpg` usw. (klein, ohne Umlaute und Leerzeichen).
5. Lege `src/content/projekte/<JJJJ-MM>-<projekt-slug>.md` an. Nimm `src/content/projekte/2026-10-beispielprojekt.md` als Vorlage und halte dich an das Schema in `src/content.config.ts`. Bildpfade beginnen mit `./bilder/`. Das erste Bildpaar ist das aussagekräftigste.
6. Ist es das erste echte Projekt, frag, ob das Beispielprojekt samt Beispielbildern gelöscht werden soll.
7. Führe `npm run build` aus und behebe Fehler.
8. Sag mir, unter welchem Link das Projekt erscheint (`/referenzen#<dateiname-ohne-.md>`), und frag, ob du committen sollst.
