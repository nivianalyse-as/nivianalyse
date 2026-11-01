# Målrettet crawler- og sitemap-gjennomgang

- [x] Undersøk crawlerregler og sitemap på nivianalyse.no og i prosjektet.
- [x] Kontroller offentlige innholdssider, kanoniske adresser og deploy-oppsett.
- [x] Rett bare dokumenterte feil og verifiser eventuelle endringer.
- [x] Rapporter funn og status for begge advarsler; ikke publiser.

Resultat: robots.txt er korrekt og uendret. Begge Lovable-advarslene gjelder avvik mot lovable.app, mens nivianalyse.no er tilsiktet domene. Den dokumenterte mangelen på 180 innholdsadresser i statisk sitemap er rettet lokalt. Produksjon har fortsatt 18 adresser frem til bruker publiserer.

## Oppfølging etter Netlify-deploy
- [x] Sammenlign produksjonsrespons uten query med kildefilen og tilgjengelige byggfiler.
- [ ] Finn og rett dokumentert deploy-årsak. Blokkert: Netlify-deployens logg og publiserte filer er ikke tilgjengelige, og ingen produksjonsbyggfiler finnes i sandkassen.
- [x] Verifiser innhold og rapporter eventuelle tilgangsbegrensninger uten publisering.

Kontroll 01.11.2026: produksjonsadressen uten query gir HTTP 200 og 18 URL-er, også med Cache-Control: no-cache og Pragma: no-cache. Netlify svarer med cache miss og max-age=0,must-revalidate. Lokal respons er byte-identisk med public/sitemap.xml og har 198 URL-er; syv tester består. Ingen alternativ sitemap-generering eller sitemap-rewrite funnet i prosjektet. Ingen funksjonelle endringer utført uten dokumentert deploy-årsak.