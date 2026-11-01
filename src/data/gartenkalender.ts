// Gartenkalender: Monat für Monat, was im Garten dran ist.
// Bitte fachlich prüfen und an die eigene Arbeitsweise anpassen.
import type { LeistungId } from './firma';

export interface Arbeit {
  titel: string;
  text: string;
  leistung?: LeistungId; // verknüpft die Arbeit mit einer Leistung
}

export interface Monat {
  nr: number; // 1 = Januar
  name: string;
  arbeiten: Arbeit[];
}

export const gartenkalender: Monat[] = [
  {
    nr: 1,
    name: 'Januar',
    arbeiten: [
      { titel: 'Gehölze kontrollieren', text: 'Nach Sturm oder Schnee abgebrochene Äste entfernen, damit keine Wunden einreißen.', leistung: 'beete' },
      { titel: 'Starken Rückschnitt planen', text: 'Hecken und Sträucher, die deutlich kürzer werden sollen, bis Ende Februar schneiden.', leistung: 'hecke' },
    ],
  },
  {
    nr: 2,
    name: 'Februar',
    arbeiten: [
      { titel: 'Letzte Chance für den starken Rückschnitt', text: 'Ab dem 1. März sind nur noch schonende Form- und Pflegeschnitte erlaubt (§ 39 Bundesnaturschutzgesetz).', leistung: 'hecke' },
      { titel: 'Sträucher auslichten', text: 'Alte und kreuzende Triebe herausnehmen, damit wieder Licht in den Strauch kommt.', leistung: 'beete' },
    ],
  },
  {
    nr: 3,
    name: 'März',
    arbeiten: [
      { titel: 'Beete aufräumen', text: 'Winterlaub und abgestorbene Pflanzenteile entfernen, damit der Boden sich erwärmt.', leistung: 'beete' },
      { titel: 'Ziergräser zurückschneiden', text: 'Bevor der neue Austrieb kommt, die alten Halme bodennah abschneiden.', leistung: 'beete' },
      { titel: 'Hecken: nur noch Formschnitt', text: 'Bis Ende September ist ein starker Rückschnitt verboten. Vorher immer auf Vogelnester achten.', leistung: 'hecke' },
    ],
  },
  {
    nr: 4,
    name: 'April',
    arbeiten: [
      { titel: 'Rasensaison beginnt', text: 'Sobald der Rasen wächst, regelmäßig mähen. Der erste Schnitt nicht zu kurz.', leistung: 'rasen' },
      { titel: 'Beete jäten', text: 'Unkraut entfernen, solange es noch klein ist. Das spart später viel Arbeit.', leistung: 'beete' },
    ],
  },
  {
    nr: 5,
    name: 'Mai',
    arbeiten: [
      { titel: 'Rasen regelmäßig mähen', text: 'In der Hauptwachstumszeit am besten wöchentlich.', leistung: 'rasen' },
      { titel: 'Frühblüher schneiden', text: 'Sträucher wie Forsythie direkt nach der Blüte zurückschneiden.', leistung: 'beete' },
    ],
  },
  {
    nr: 6,
    name: 'Juni',
    arbeiten: [
      { titel: 'Formschnitt der Hecke', text: 'Traditionell um den Johannistag (24. Juni), wenn der erste Austrieb fertig ist. Vorher auf Nester prüfen.', leistung: 'hecke' },
      { titel: 'Rasen bei Hitze höher lassen', text: 'Ein etwas längerer Rasen verträgt Trockenheit besser.', leistung: 'rasen' },
    ],
  },
  {
    nr: 7,
    name: 'Juli',
    arbeiten: [
      { titel: 'Verblühtes entfernen', text: 'Regt viele Stauden zu einer zweiten Blüte an.', leistung: 'beete' },
      { titel: 'Rasen mähen', text: 'Weiter regelmäßig, aber nicht zu kurz.', leistung: 'rasen' },
    ],
  },
  {
    nr: 8,
    name: 'August',
    arbeiten: [
      { titel: 'Zweiter Formschnitt', text: 'Schnell wachsende Hecken bekommen gegen Ende des Monats noch einen Schnitt.', leistung: 'hecke' },
      { titel: 'Beete pflegen', text: 'Jäten und Wege freihalten, bevor es in den Herbst geht.', leistung: 'beete' },
    ],
  },
  {
    nr: 9,
    name: 'September',
    arbeiten: [
      { titel: 'Rasen fit für den Winter', text: 'Gute Zeit, um kahle Stellen nachzusäen.', leistung: 'rasen' },
      { titel: 'Letzter Formschnitt', text: 'Damit die Hecke ordentlich in den Winter geht.', leistung: 'hecke' },
    ],
  },
  {
    nr: 10,
    name: 'Oktober',
    arbeiten: [
      { titel: 'Laub vom Rasen', text: 'Liegt Laub zu lange auf dem Rasen, bekommt er kein Licht und fault.', leistung: 'laub' },
      { titel: 'Starker Rückschnitt wieder erlaubt', text: 'Ab dem 1. Oktober dürfen Hecken und Sträucher wieder kräftig zurückgeschnitten werden.', leistung: 'hecke' },
      { titel: 'Letzter Rasenschnitt', text: 'Je nach Wetter ist im Oktober oder November Schluss.', leistung: 'rasen' },
    ],
  },
  {
    nr: 11,
    name: 'November',
    arbeiten: [
      { titel: 'Laub und Grünschnitt wegbringen', text: 'Gehäckseltes Material und Laub, das nicht als Winterschutz bleibt, fachgerecht entsorgen.', leistung: 'gruenschnitt' },
      { titel: 'Beete winterfest machen', text: 'Empfindliche Pflanzen mit Laub oder Reisig abdecken.', leistung: 'beete' },
    ],
  },
  {
    nr: 12,
    name: 'Dezember',
    arbeiten: [
      { titel: 'Schneelast abschütteln', text: 'Schwerer Schnee kann Äste von Hecken und Formgehölzen brechen.', leistung: 'hecke' },
      { titel: 'Das neue Gartenjahr planen', text: 'Was soll im Frühjahr passieren? Jetzt ist Zeit für eine Anfrage.' },
    ],
  },
];
