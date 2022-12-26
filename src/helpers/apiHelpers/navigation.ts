export const loadNavigation = async () => {
  const resp = await fetch(
    "https://api.jewelcloud.com/api/RingBuilder/GetNavigation?DealerId=1089",
    {
      method: "GET",
    }
  );

  const parsedRes = await resp.json();

  if (parsedRes.length) {
    const navigation = parsedRes[0];

    delete navigation["$id"];
    return navigation;
  }

  return null;
};
