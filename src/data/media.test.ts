// @vitest-environment node
import { describe, expect, it } from "vitest";
import { mediaEntries, getMediaBySlug } from "./media";

describe("Hole media publication date", () => {
  it("uses the original publication date, not the update or upload date", () => {
    const entry = getMediaBySlug("ringerikes-blad-hole-27-arbeidspakker");
    expect(entry?.date).toBe("2026-10-22T00:00:00");
    const sorted = [...mediaEntries].sort((a, b) => new Date(b.date ?? "").getTime() - new Date(a.date ?? "").getTime());
    expect(sorted[0]?.slug).toBe("nrk-orsta-volda-kommunesammenslaing");
    expect(sorted[1]?.slug).toBe("ringerikes-blad-hole-27-arbeidspakker");
    expect(sorted[2]?.slug).toBe("tvedestrandsposten-ga-knallhard-beskjed");
  });
});