# Målrettet crawler- og sitemap-gjennomgang

- [x] Undersøk crawlerregler og sitemap på nivianalyse.no og i prosjektet.
- [x] Kontroller offentlige innholdssider, kanoniske adresser og deploy-oppsett.
- [x] Rett bare dokumenterte feil og verifiser eventuelle endringer.
- [x] Rapporter funn og status for begge advarsler; ikke publiser.

Resultat: robots.txt er korrekt og uendret. Begge Lovable-advarslene gjelder avvik mot lovable.app, mens nivianalyse.no er tilsiktet domene. Den dokumenterte mangelen på 180 innholdsadresser i statisk sitemap er rettet lokalt. Produksjon har fortsatt 18 adresser frem til bruker publiserer.

## Oppfølging etter Netlify-deploy
- [ ] Sammenlign produksjonsrespons uten query med kildefilen og tilgjengelige byggfiler.
- [ ] Undersøk eventuell overskriving og caching; rett bare dokumentert årsak.
- [ ] Verifiser innhold og rapporter eventuelle tilgangsbegrensninger uten publisering.