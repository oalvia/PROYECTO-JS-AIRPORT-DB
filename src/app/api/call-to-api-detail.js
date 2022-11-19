import { displayAirportDetail } from "../views/view-detaill.js";

const fetchAirportDetail = async (airport) => {
  let airportDetail = {
    icao_code: airport.icao_ident,
    name: airport.facility_name,
    state: airport.state_full,
    city: airport.city,
    ownership: airport.ownership,
    latitude: airport.latitude,
    longitude: airport.longitude,
    elevation: airport.elevation,
    magnetic_variation: airport.magnetic_variation,
    tpa: airport.tpa,
    vfr_sectional: airport.vfr_sectional,
    artcc_code: airport.responsible_artcc,
    artcc_name: airport.responsible_artcc_name,
    airport_status: airport.status,
    customs_airport_of_entry: airport.customs_airport_of_entry,
    control_tower: airport.control_tower,
    unicom: airport.unicom,
    ctaf: airport.ctaf,
    lighting_schedule: airport.lighting_schedule,
    beacon_schedule: airport.beacon_schedule,
    military_joint_use: airport.military_joint_use,
    military_landing: airport.military_landing,
    fss_phone_number: airport.fss_phone_number,
    area_map_link: airport.area_map,
  };

  displayAirportDetail(airportDetail);
};

export { fetchAirportDetail };
