# Målrettet crawler- og sitemap-gjennomgang

## Ny medieomtale: Ringerikes Blad
- [x] Legg inn ordrett tekst, faktisk publiseringsdato og original-PDF i eksisterende oppsett.
- [x] Kontroller lenker, sortering, automatisk sitemap og visning på desktop, nettbrett og mobil.
- [x] Kjør relevante tester og kontroller tilgjengelig byggresultat uten manuell publisering.

Resultat: publisert 22.10.2026 kl. 00:00 ifølge original-PDF (oppdatert 23.10 er ikke brukt). Ordrett ingress og tre nøkkelpunkter, eksisterende sammendragsfallback og knapper beholdt. Original-PDF optimalisert til 3,1 MB uten å fjerne sider eller tekst (alle åtte sider kontrollert); lokal adresse gir HTTP 200 og byte-identisk fil. Desktop, nettbrett og mobil kontrollert visuelt og med lenke-/SEO-kontroller. Omtalen sorteres mellom NRK og Tvedestrandsposten. Generatoren gir 199 adresser og tar med ny URL; 17 tester består og automatisk byggkontroll er grønn. Faktiske Netlify-publiserte filer og produksjonsrespons etter automatisk deploy er ikke tilgjengelige før deploy; ingen manuell publisering utført.

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
- [x] Dokumenter hvorfor sitemap-pluginen avviser eksisterende offentlig filkopiering.
- [x] Rett kun pluginens kompatibilitet uten å endre SSR eller deploy-regler.
- [x] Test 198 URL-er, automatisk inkludering og uendret levering av statiske filer.
- [x] Kontroller tilgjengelig byggresultat og rapporter begrensninger; ikke publiser manuelt.

Resultat: Nitro setter klientens copyPublicDir=false med vilje og utfører copyPublicAssets selv. Pluginens gamle guard avviste dette. Guard er fjernet for copyPublicDir, og pluginen er post-enforced slik at kontrollen kjører etter Nitros post-build-kopiering og bruker builderens faktiske klientmappe. 16 tester består, inkludert simulert Nitro-kopiering med copyPublicDir=false samt avvisning av manglende/gammel output. Automatisk byggkontroll rapporterer build OK (01.11.2026 12:27:33 UTC). Lokal sitemap har 198 URL-er og HTTP 200, byte-identisk med kildefilen; to PDF-er, __forms.html og robots.txt gir også HTTP 200 og identisk innhold. Sandboxen eksponerer ingen dist/client-, .output/public- eller .netlify-mappe. Netlifys eksakte produksjonskommando, publiseringsmappe og faktiske serverpakke kan derfor ikke bekreftes her; manuelt produksjonsbygg er ikke kjørt, og ingen publisering er utført.