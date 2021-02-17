export const getdbName = (country) => {
  switch (country) {
    case "Australia":
      return { name: "australia_schools" };
    case "Belgium":
      return { name: `belgium_schools` };
    case "Canada":
      return { name: "canada_schools" };
    case "Cyprus":
      return { name: "cyprus_schools" };
    case "Czech Republic":
      return { name: "czech_schools" };
    case "Denmark":
      return { name: "denmark_schools" };
    case "Estonian":
      return { name: "estonia_schools" };
    case "Finland":
      return { name: "finland_schools" };
    case "France":
      return { name: "france_schools" };
    case "Germany":
      return { name: "germany_schools" };
    case "Greece":
      return { name: "greece_schools" };
    case "Hungary":
      return { name: "hungary_schools" };
    case "Ireland":
      return { name: "ireland_schools" };
    case "Italy":
      return { name: "italy_schools" };
    case "Lithuania":
      return { name: "lithuania_schools" };
    case "Netherlands":
      return { name: "netherlands_schools" };
    case "New Zealand":
      return { name: "newzealand_schools" };
    case "Poland":
      return { name: "poland_schools" };
    case "South Africa":
      return { name: "southafrica_schools" };
    case "Spain":
      return { name: "spain_schools" };
    case "Sweden":
      return { name: "sweden_schools" };
    case "Switzerland":
      return { name: "switzerland_schools" };
    case "Turkey":
      return { name: "turkey_school" };
    case "UAE":
      return { name: "uae_schools" };
    case "UK":
      return { name: "uk_schools" };
    case "USA":
      return { name: "usa_schools" };
    default:
      return { name: "not_found" };
  }
};
