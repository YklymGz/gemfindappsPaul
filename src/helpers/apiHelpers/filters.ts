export const loadFilters = async () => {
  const resp = await fetch(
    "https://api.jewelcloud.com/api/RingBuilder/GetDiamondFilter?DealerId=1089",
    {
      method: "GET",
    }
  );

  const parsedRes = await resp.json();

  if (parsedRes.length >= 2) {
    const statusField = parsedRes[0];

    if (statusField.status === "1") {
      return parsedRes[1][0];
    }
    return null;
  }

  return null;
};
