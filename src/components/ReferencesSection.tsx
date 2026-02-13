import SectionHeader from "@/components/SectionHeader";

const groups = [
  {
    label: "Kommuner og fylkeskommuner",
    items: [
      "Asker kommune", "Bergen kommune", "Bodø kommune", "Bærum kommune",
      "Drammen kommune", "Fredrikstad kommune", "Kristiansand kommune",
      "Moskenes kommune", "Oslo kommune", "Porsanger kommune",
      "Sandefjord kommune", "Sarpsborg kommune", "Stavanger kommune",
      "Tana kommune", "Trondheim kommune", "Tromsø kommune", "Vestvågøy kommune",
      "Nordland fylkeskommune", "Vestland fylkeskommune", "Viken fylkeskommune",
    ],
  },
  {
    label: "Regionale samarbeid og organisasjoner",
    items: [
      "KS", "Listersamarbeidet", "Lofotrådet", "Østre Agder-samarbeidet",
    ],
  },
  {
    label: "Statlige aktører",
    items: [
      "Statsforvalteren i Trøndelag",
      "Statsforvalteren i Troms og Finnmark",
      "Statsforvalteren i Østfold, Buskerud, Oslo og Akershus",
      "Kommunaldepartementet",
      "Kommunal- og moderniseringsdepartementet",
      "Nærings- og fiskeridepartementet",
      "Direktoratet for strålevern og atomsikkerhet",
      "Direktoratet for forvaltningsutvikling og IKT",
    ],
  },
];

const ReferencesSection = () => {
  return (
    <section id="referanser" className="py-16 md:py-24 bg-[#F7F7F5]">
      <div className="container-narrow">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            title="Våre oppdragsgivere"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-sm text-muted-foreground font-medium text-center mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((ref, i) => (
                  <span
                    key={i}
                    className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-primary/80 text-sm font-medium select-none"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          (Se CV for mange flere oppdrag og oppdragsgivere.)
        </p>
      </div>
    </section>
  );
};

export default ReferencesSection;
