# Målrettet crawler- og sitemap-gjennomgang

- [x] Undersøk crawlerregler og sitemap på nivianalyse.no og i prosjektet.
- [x] Kontroller offentlige innholdssider, kanoniske adresser og deploy-oppsett.
- [x] Rett bare dokumenterte feil og verifiser eventuelle endringer.
- [x] Rapporter funn og status for begge advarsler; ikke publiser.

Resultat: robots.txt er korrekt og uendret. Begge Lovable-advarslene gjelder avvik mot lovable.app, mens nivianalyse.no er tilsiktet domene. Den dokumenterte mangelen på 180 innholdsadresser i statisk sitemap er rettet lokalt. Produksjon har fortsatt 18 adresser frem til bruker publiserer.

## Oppfølging etter Netlify-deploy
- [x] Sammenlign produksjonsrespons uten query med kildefilen og tilgjengelige byggfiler.
- [x] Avslutt tidligere deploy-undersøkelse: bruker opplyser i nytt vedlegg at sitemap med 198 URL-er nå fungerer; den historiske deploy-årsaken er ikke dokumentert.
- [x] Verifiser innhold og rapporter eventuelle tilgangsbegrensninger uten publisering.

Kontroll 01.11.2026: produksjonsadressen uten query gir HTTP 200 og 18 URL-er, også med Cache-Control: no-cache og Pragma: no-cache. Netlify svarer med cache miss og max-age=0,must-revalidate. Lokal respons er byte-identisk med public/sitemap.xml og har 198 URL-er; syv tester består. Ingen alternativ sitemap-generering eller sitemap-rewrite funnet i prosjektet. Ingen funksjonelle endringer utført uten dokumentert deploy-årsak.

## Automatisk generering (godkjent i vedlegg)
- [x] Generer fra eksisterende ruter og publiserte datasett ved hver build.
- [x] Behold 198 eksisterende adresser og kontroller at filen kopieres til klientens byggmappe.
- [x] Test nye poster, eksklusjoner og feil; ikke publiser.

Verifisert: 198-adressers referanse identisk som mengde, 15 tester består, lokal XML gir HTTP 200, begge byggkroker testet med kopiert klientfil, automatisk kontroll grønn. Netlify-deploy og dens faktiske publiseringsmappe er ikke tilgjengelig; ingen publisering utført.

## Rett feilet Netlify-build
- [ ] Dokumenter hvorfor sitemap-pluginen avviser eksisterende offentlig filkopiering.
- [ ] Rett kun pluginens kompatibilitet uten å endre SSR eller deploy-regler.
- [ ] Test 198 URL-er, automatisk inkludering og uendret levering av statiske filer.
- [ ] Kontroller tilgjengelig byggresultat og rapporter begrensninger; ikke publiser manuelt.