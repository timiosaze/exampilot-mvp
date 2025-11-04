import React, { useEffect, useState } from "react";

/**
 * Minimal country list (extend as needed).
 * flag: emoji (simple / crisp); dial: international prefix.
 */
const COUNTRIES = [
  {
    code: "US",
    name: "United States",
    dial: "+1",
    flag: "🇺🇸",
    placeholder: "201 555 0123",
  },
  {
    code: "GB",
    name: "United Kingdom",
    dial: "+44",
    flag: "🇬🇧",
    placeholder: "020 7946 0958",
  },
  {
    code: "NG",
    name: "Nigeria",
    dial: "+234",
    flag: "🇳🇬",
    placeholder: "801 234 5678",
  },
  {
    code: "IN",
    name: "India",
    dial: "+91",
    flag: "🇮🇳",
    placeholder: "91234 56789",
  },
  // add more countries as needed...
];

/**
 * Props:
 * - value: current E.164 phone string (e.g. "+2348012345678") or empty
 * - onChange: (newE164String) => void
 * - defaultCountry: country code, e.g. "NG"
 */
export default function PhoneInput({
  value = "",
  onChange,
  defaultCountry = "NG",
  id = "phone",
}) {
  // detect initial country from value or fallback to default
  function detectCountry(e164) {
    if (!e164)
      return COUNTRIES.find((c) => c.code === defaultCountry) || COUNTRIES[0];
    // find the longest matching dial code in our list
    const match = COUNTRIES.reduce((best, c) => {
      if (
        e164.startsWith(c.dial) &&
        c.dial.length > (best?.dial?.length ?? 0)
      ) {
        return c;
      }
      return best;
    }, null);
    return (
      match || COUNTRIES.find((c) => c.code === defaultCountry) || COUNTRIES[0]
    );
  }

  const initialCountry = detectCountry(value);
  const [country, setCountry] = useState(initialCountry);
  // local number is the value without the country dial (digits only)
  const digitsFromE164 = (e164, dial) =>
    e164 ? e164.replace(dial, "").replace(/\D/g, "") : "";
  const [localNumber, setLocalNumber] = useState(
    digitsFromE164(value, initialCountry.dial)
  );

  // keep external value and local state in sync when `value` prop changes
  useEffect(() => {
    const c = detectCountry(value);
    setCountry(c);
    setLocalNumber(digitsFromE164(value, c.dial));
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  // produce e164 and call onChange
  const updateValue = (newCountry, newLocalDigits) => {
    const e164 = newLocalDigits
      ? `${newCountry.dial}${newLocalDigits.replace(/\D/g, "")}`
      : "";
    if (onChange) onChange(e164);
  };

  const handleCountryChange = (e) => {
    const newCode = e.target.value;
    const newCountry =
      COUNTRIES.find((c) => c.code === newCode) || COUNTRIES[0];
    setCountry(newCountry);
    // keep local number as-is; recompute E.164
    updateValue(newCountry, localNumber);
  };

  const handleLocalChange = (e) => {
    // allow digits, spaces, parentheses, dashes while typing
    const typed = e.target.value;
    // but store only digits for the normalized local number
    const digits = typed.replace(/\D/g, "");
    setLocalNumber(digits);
    updateValue(country, digits);
  };

  // optional: format UI display number with spacing for readability
  const formattedLocal = localNumber.replace(/(\d{3})(?=\d)/g, "$1 "); // naive grouping

  return (
    <div className="w-full max-w-md">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Phone number
      </label>

      <div className="flex gap-2">
        {/* country select */}
        <label className="sr-only" htmlFor={`${id}-country`}>
          Country
        </label>
        <select
          id={`${id}-country`}
          value={country.code}
          onChange={handleCountryChange}
          className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Choose country"
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name} {c.dial}
            </option>
          ))}
        </select>

        {/* phone input */}
        <div className="flex-1">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-sm text-gray-700">
              <span className="font-medium mr-1">{country.dial}</span>
            </span>

            <input
              id={id}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={country.placeholder}
              value={formattedLocal}
              onChange={handleLocalChange}
              className="w-full pl-20 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-describedby={`${id}-hint`}
            />
          </div>

          <p id={`${id}-hint`} className="mt-1 text-xs text-gray-500">
            Enter local number — it will be sent as{" "}
            <code className="font-mono text-xs">
              {country.dial}
              <span>{localNumber}</span>
            </code>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
