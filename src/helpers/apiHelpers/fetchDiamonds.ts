export const loadDiamonds = async () => {
  const resp = await fetch(
    "http://api.jewelcloud.com/api/RingBuilder/GetDiamond?DealerId=1089",
    {
      method: "GET",
    }
  );

  const parsedRes = await resp.json();

  if (parsedRes) {
    return parsedRes.diamondList;
  }

  return null;
};
