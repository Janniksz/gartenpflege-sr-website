// Zentrale Firmendaten. Hier ändern, dann stimmt es überall auf der Website.
export const firma = {
  name: 'Gartenpflege SR',
  claim: 'Natürlich. Zuverlässig. Regional.',
  gebiet: 'Soltau & Umgebung',
  telefonAnzeige: '0151 70022945',
  telefonLink: 'tel:+4915170022945',
  // WhatsApp und E-Mail öffnen mit vorausgefülltem Text bzw. Betreff (Text hier anpassen).
  whatsappLink: `https://wa.me/4915170022945?text=${encodeURIComponent('Hallo, ich habe eine Anfrage zur Gartenpflege: ')}`,
  email: 'gartenpflegesr@gmail.com',
  emailLink: `mailto:gartenpflegesr@gmail.com?subject=${encodeURIComponent('Anfrage Gartenpflege')}`,
  inhaber: 'Robin Stocker',
  anschrift: { strasse: 'Nickelstraße 22', plz: '29614', ort: 'Soltau' },
  // Einsatzgebiet: Soltau und die direkte Umgebung.
  orte: ['Soltau', 'Munster', 'Bispingen', 'Wietzendorf', 'Neuenkirchen', 'Schneverdingen'],
  // Social-Media-Profile. Vollständige Adresse eintragen (beginnt mit https://),
  // dann erscheint im Footer automatisch das Icon als Link. Solange [eckige Klammern] drinstehen, ein Platzhalter.
  social: [
    // Geplant: https://www.instagram.com/gartenpflege.sr – erst eintragen, wenn es das Konto gibt.
    { id: 'instagram', name: 'Instagram', url: '[INSTAGRAM-LINK]' },
    { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@gartenpflege.sr' },
    // Geplant: https://www.facebook.com/gartenpflege.sr – erst eintragen, wenn es das Konto gibt.
    { id: 'facebook', name: 'Facebook', url: '[FACEBOOK-LINK]' },
  ] as const,
};

export const leistungen = [
  { id: 'rasen', titel: 'Rasenmähen', kurz: 'Rasen' },
  { id: 'hecke', titel: 'Hecken- und Formschnitt', kurz: 'Hecken' },
  { id: 'laub', titel: 'Laubentfernung', kurz: 'Laub' },
  { id: 'gruenschnitt', titel: 'Entsorgung von Grünschnitt', kurz: 'Grünschnitt' },
  { id: 'beete', titel: 'Pflege von Sträuchern und Beeten', kurz: 'Beete' },
  { id: 'weitere', titel: 'Weitere Gartenarbeiten auf Anfrage', kurz: 'Weiteres' },
] as const;

export type LeistungId = (typeof leistungen)[number]['id'];
