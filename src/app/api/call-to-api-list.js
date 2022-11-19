const fetchAirportInfo = async () => {
  const url = "http://localhost:3000/generalInfo";
  const res = await fetch(url);

  let airportData = await res.json();

  return airportData;
};

export { fetchAirportInfo };
