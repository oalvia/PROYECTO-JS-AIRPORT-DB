"use strict";
import { fetchAirportInfo } from "../api/call-to-api-list.js";
import { fetchAirportDetail } from "../api/call-to-api-detail.js";
import { displayAirportDetail } from "./view-detaill.js";
import {displaySearchOutput} from "../utils/search_function.js"

const displayAirportList = (init_page) => {
  const airportListPromise = fetchAirportInfo();
  airportListPromise.then((airportData) => {
    let infoContainer = document.getElementById("infoContainer");
    let buttonContainer = document.getElementById("buttonContainer");
    let current_page = init_page;
    let rows_per_page = 6;
    
    const allAirports = document.getElementById('allAirports');
    allAirports.setAttribute('class' , 'is-hidden');


    function paginatedItemsDisplay(data, wrapper, rows_per_page, page) {
      wrapper.innerHTML = "";
      page--;

      let loop_start = rows_per_page * page;
      let loop_end = loop_start + rows_per_page;
      let paginatedItems = data.slice(loop_start, loop_end);
      for (let k = 0; k < paginatedItems.length; k++) {
        let airport = paginatedItems[k];

        const li = document.createElement("li");
        li.classList.add("flex-item");
        const innerDiv1 = document.createElement("div");
        innerDiv1.setAttribute("id", "div1");
        const innerDiv2 = document.createElement("div");
        innerDiv2.setAttribute("id", "div2");

        const h2 = document.createElement("h2");
        h2.setAttribute("class", "flex-item-title");
        h2.innerText = airport.icao_ident;
        innerDiv1.appendChild(h2);

        const h3 = document.createElement("h3");
        h3.setAttribute("class", "flex-item-subtitle");
        h3.innerText = airport.city;
        innerDiv1.appendChild(h3);

        const h4 = document.createElement("h4");
        h4.setAttribute("class", "flex-item-subtitle");
        h4.innerText = airport.facility_name;
        innerDiv1.appendChild(h4);

        const img1 = document.createElement("img");
        img1.setAttribute("class", "img1");
        img1.setAttribute(
          "src",
          "http://t1.skyvector.net/e1097d3824e/114/2211/3/14/5.jpg"
        );
        innerDiv2.appendChild(img1);

        const img2 = document.createElement("img");
        img2.setAttribute("class", "img2");
        img2.setAttribute(
          "src",
          "http://t0.skyvector.net/e1097d3824e/114/2211/3/15/5.jpg"
        );
        innerDiv2.appendChild(img2);

        const img3 = document.createElement("img");
        img3.setAttribute("class", "img3");
        img3.setAttribute(
          "src",
          "http://t0.skyvector.net/e1097d3824e/114/2211/3/14/6.jpg"
        );
        innerDiv2.appendChild(img3);

        const img4 = document.createElement("img");
        img4.setAttribute("class", "img4");
        img4.setAttribute(
          "src",
          "http://t1.skyvector.net/e1097d3824e/114/2211/3/15/6.jpg"
        );
        innerDiv2.appendChild(img4);

        li.appendChild(innerDiv1);
        li.appendChild(innerDiv2);
        li.setAttribute("code", airport.icao_ident);
        li.addEventListener("click", () => {
          displayAirportDetail(airport , current_page);
        });

        wrapper.appendChild(li);
      }
    }
    //PAGINATION BUTTON

    function setPagination(items, wrapper, rows_per_page) {
      wrapper.innerHTML = "";
      let page_count = Math.ceil(items.length / rows_per_page);
      for (let i = 1; i < page_count + 1; i++) {
        let btn = paginationButton(wrapper, i, items);
      }
    }
    function paginationButton(wrapper, page, items) {
      let button = document.createElement('button');
      button.innerText = page;
      wrapper.appendChild(button);
      if (current_page == page) {
        button.classList.add('active');
      }
      button.addEventListener('click', () => {
        current_page = page;
        paginatedItemsDisplay(
          items,
          infoContainer,
          rows_per_page,
          current_page
        );
        let current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');
        button.classList.add('active');
      });
    }
    paginatedItemsDisplay(
      airportData,
      infoContainer,
      rows_per_page,
      current_page
    );
    setPagination(airportData, buttonContainer, rows_per_page);



// SEARCH FUNCTION + EVENT LISTENER
const searchInput = document.getElementById('inputFinder');
searchInput.addEventListener('input', (inputVal) => {
  const value = inputVal.target.value.toLowerCase();
displaySearchOutput(airportData, value, current_page);
});
});
};
export { displayAirportList };

