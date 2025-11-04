// scripts/build-countries.js
import fs from "fs";
import fetch from "node-fetch";
import flags from "country-flag-emoji-json"; // installed package

(async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const rest = await res.json();

  const out = rest
    .map((c) => {
      const code = c.cca2?.toUpperCase();
      const name = c.name?.common || c.name?.official || "";
      // restcountries may have callingCodes in c.idd.root + suffixes
      let dial = "";
      if (c.idd?.root) {
        const suffix =
          c.idd?.suffixes && c.idd.suffixes[0] ? c.idd.suffixes[0] : "";
        dial = `${c.idd.root}${suffix}`; // e.g. +1 or +44 or +234
      }
      const flag = flags[code]?.emoji || ""; // from package
      return { code, name, dial, flag, placeholder: "" };
    })
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(
    "src/data/countries.js",
    "export const COUNTRIES = " + JSON.stringify(out, null, 2) + ";\n"
  );
  console.log("Saved", out.length, "countries");
})();
