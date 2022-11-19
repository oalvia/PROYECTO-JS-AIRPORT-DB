"use strict";
import { displayAirportList } from "../views/view-list.js";

const backToAirportList = async (current_page) => {
  const trigger = document.getElementById("allAirports");
  trigger.addEventListener("click", () => {
    // allAirports.removeAttribute("class");
    let init_page = current_page;
    displayAirportList(init_page);
    const searchFind = document
      .getElementById("search-wrapper")
      .removeAttribute("class", "is-hidden");
  });
};
export { backToAirportList };
