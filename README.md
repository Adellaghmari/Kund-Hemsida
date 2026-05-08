# Dynamisk Tidslinje Webbplats

Interaktiv tidslinjewebbplats där innehåll laddas in stegvis när användaren scrollar. Projektet är byggt som en statisk webbplats med HTML, CSS och JavaScript, med fokus på tydlig struktur, smooth navigation, varierad media och responsiv design.

## Tech Stack

- HTML
- CSS
- JavaScript
- Lazy loading av media
- Responsiv design
- Enkel lokal Node.js-server

## Syfte

Projektet byggdes för att skapa en mer interaktiv och engagerande webbupplevelse där användaren enkelt kan navigera genom innehåll i en tydlig tidslinje. Det visar hur statisk frontend-kod kan kombineras med scrollbaserad interaktion, dynamisk visning av sektioner och media som laddas först när det behövs.

Innehållet är uppbyggt som en sammanhängande demo från 2012 till 2026. Varje år har en egen kontext, egna innehållskort och varierad media för att visa hur strukturen kan användas i ett riktigt projekt.

## Funktioner

- Dynamisk tidslinje med scrollbaserat innehåll
- Navigation mellan olika år och delar av sidan
- Utfällbara innehållskort med årsspecifik text
- Varierade inbäddade YouTube-videos, clips och bilder per år
- Lazy loading av videos, clips och bilder
- Responsiv layout för desktop och mobil
- Strukturerad uppdelning mellan HTML, CSS och JavaScript

## Så Kör Du Projektet

Projektet kräver bara Node.js för den lokala servern.

```bash
node server.js
```

Öppna sedan:

```text
http://localhost:8000
```

Det går även att öppna `index.html` direkt i webbläsaren, men den lokala servern rekommenderas eftersom inbäddad media fungerar mer förutsägbart.

## Demo / Vad Rekryteraren Kan Testa

- Scrolla genom tidslinjen och se hur nya år låses upp stegvis.
- Använd navigationen på desktop för att hoppa mellan olika delar av sidan.
- Klicka på korten i varje år för att öppna och stänga mer innehåll.
- Lägg märke till den röda tråden: start, community, tävling, reflektion, comeback, programmering och framtida mål.
- Se hur varje år har olika video, bild och clip istället för upprepat innehåll.
- Lägg märke till att varje underkategori matchar mediakortet på samma position.
- Testa sidan på både desktop och mobil för att se hur layouten anpassas.

Projektet visar dynamiskt innehåll, scrollbaserad navigation och en tydlig filstruktur med separerad markup, styling och interaktion.

## Media

Media i projektet är exempelmedia från publika källor. Videor och clips är inbäddade direkt i tidslinjen, medan bilder visas direkt i respektive mediakort. Länkarna kan enkelt bytas ut mot egna YouTube-klipp, Twitch-klipp eller egna bilder.

## Projektstruktur

```text
.
├── index.html
├── styles.css
├── script.js
├── server.js
└── README.md
```

## Framtida Förbättringar

- Byta demo-media mot egna klipp och bilder
- Lägga till screenshots i README
- Förbättra tillgänglighet och tangentbordsnavigation
- Publicera projektet med live-demo