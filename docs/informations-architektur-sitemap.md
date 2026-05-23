# Informationsarchitektur & Sitemap

Überblick über die geplante Site-Struktur, Header-Navigation und Footer (Legal). Routen relativ zur Basis-URL (`/`).

## Header-Navigation (Top Level)

| Label | Pfad | Typ |
| ----- | ---- | --- |
| Start | `/` | Einzelseite |
| Für euch | — | Dropdown (siehe unten) |
| Ausstattung & Technik | `/ausstattung/` | Einzelseite |
| Ablauf & Regeln | `/ablauf/` | Einzelseite |
| Preise | `/preise/` | Einzelseite |
| Ratgeber | `/ratgeber/` | Einzelseite |
| Verfügbarkeit prüfen / Buchen (CTA) | `/buchen/` | Einzelseite (Call-to-Action) |

### Dropdown: „Für euch“

| Label | Pfad | Rolle |
| ----- | ---- | ----- |
| Gaming Haus erklärt (Hub) | `/gaming-location/` | Themen-Hub |
| Teams & Bootcamp | `/bootcamp-esport/` | Zielgruppenseite |
| Freunde / Gaming-Wochenende | `/gaming-wochenende-freunde/` | Zielgruppenseite |

## Footer (Legal)

| Label | Pfad | Hinweis |
| ----- | ---- | ------- |
| Impressum | `/impressum/` | Pflichtnavigation |
| Datenschutz | `/datenschutz/` | Pflichtnavigation |
| AGB *(optional)* | `/agb/` | Nur wenn rechtlich/inhaltlich genutzt |

## Flache Sitemap (alle genannten URLs)

```
/
/gaming-location/
/bootcamp-esport/
/gaming-wochenende-freunde/
/ausstattung/
/ablauf/
/preise/
/ratgeber/
/buchen/
/impressum/
/datenschutz/
/agb/   (optional)
```

## Hinweise zur Umsetzung

- **CTA**: Primärer Buchungs-/Verfügbarkeits-Einstieg liegt unter `/buchen/` und sollte in der Kopfzeile prominent sichtbar sein.
- **Hub** `/gaming-location/`: Übergeordnete Erklär-/Einstiegsseite für das „Gaming Haus“; Unterseiten können von „Für euch“ ergänzend verlinkt werden.
- **AGB**: Nur aufnehmen und verlinken, wenn es eine veröffentlichte AGB-Seite gibt — sonst Link weglassen, um keine toten Footer-Links zu erzeugen.
