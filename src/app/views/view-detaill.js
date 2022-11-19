"use strict";
import { AirportDetailClass } from "../models/models.js";
import { displayAirportList } from "../views/view-list.js";
import { backToAirportList } from "../utils/back_to_main.js";

const displayAirportDetail = async (airportData, current_page) => {
  const infoContainer = document.getElementById("infoContainer");
  infoContainer.innerHTML = "";

  const searchFind = document
    .getElementById("search-wrapper")
    .setAttribute("class", "is-hidden");

  const airportDetail = new AirportDetailClass(airportData);

  const airportHTMLstring = `<li class="dataElement">
    <h3 class="flex-item-subtitle"> icao_code:  ${airportDetail.getIcao_code()}</h3>
    <h3 class="flex-item-subtitle"> name: ${airportDetail.getName()}</h3>
    <h3 class="flex-item-subtitle"> city: ${airportDetail.getCity()}</h3>
    <h3 class="flex-item-subtitle"> state:  ${airportDetail.getState()}</h3>
    <h3 class="flex-item-subtitle"> ownership:  ${airportDetail.getOwnership()}</h3>
    <h3 class="flex-item-subtitle"> latitude: ${airportDetail.getLatitude()}</h3>
    <h3 class="flex-item-subtitle"> longitude:  ${airportDetail.getLongitude()}</h3>
    <h3 class="flex-item-subtitle"> elevation:  ${airportDetail.getElevation()}</h3>
    <h3 class="flex-item-subtitle"> magnetic_variation: ${airportDetail.getMagnetic_variation()}</h3>
    <h3 class="flex-item-subtitle"> tpa:  ${airportDetail.getTpa()}</h3>
    <h3 class="flex-item-subtitle"> vfr_sectional:  ${airportDetail.getVfr_sectional()}</h3>
    <h3 class="flex-item-subtitle"> artcc_code: ${airportDetail.getArtcc_code()}</h3>
    <h3 class="flex-item-subtitle"> artcc_name: ${airportDetail.getArtcc_name()}</h3>
    <h3 class="flex-item-subtitle"> airport_status: ${airportDetail.getAirport_status()}</h3>
    <h3 class="flex-item-subtitle"> customs_airport_of_entry: ${airportDetail.getCustoms_airport_of_entry()}</h3>
    <h3 class="flex-item-subtitle"> control_tower:  ${airportDetail.getControl_tower()}</h3>
    <h3 class="flex-item-subtitle"> unicom: ${airportDetail.getUnicom()}</h3>
    <h3 class="flex-item-subtitle"> ctaf: ${airportDetail.getCtaf()}</h3>
    <h3 class="flex-item-subtitle"> lighting_schedule:  ${airportDetail.getLighting_schedule()}</h3>
    <h3 class="flex-item-subtitle"> beacon_schedule:  ${airportDetail.getBeacon_schedule()}</h3>
    <h3 class="flex-item-subtitle"> military_joint_use: ${airportDetail.getMilitary_joint_use()}</h3>
    <h3 class="flex-item-subtitle"> military_landing: ${airportDetail.getMilitary_landing()}</h3>
    <h3 class="flex-item-subtitle"> fss_phone_number: ${airportDetail.getFss_phone_number()}</h3>
    <h3 class="flex-item-subtitle"> fss_phone_number: ${airportDetail.getFss_area_map()}</h3>
    </li>`;

  infoContainer.innerHTML = airportHTMLstring;
  

  const allAirports = document.getElementById("allAirports");
  allAirports.removeAttribute("class", "is-hidden");

  backToAirportList(current_page);
};
export { displayAirportDetail };
