"use strict";
//ESTA NO FUNCIONA BIEN
import { fetchAirportInfo } from "../api/call-to-api-list.js";
import { fetchAirportDetail } from "../api/call-to-api-detail.js";
import { displayAirportDetail } from "../views/view-detaill";
import { backToAirportList } from "../utils/back_to_main.js";

const displaySearchOutput = async (airportData, inputVal, current_page) => {
  //BORRAR CONTAINER
  const infoContainer = document.getElementById("infoContainer");
  infoContainer.innerHTML = "";
  const buttonContainer = document.getElementById("buttonContainer");
  buttonContainer.innerHTML = "";
  const allAirports = document.getElementById("allAirports");
  allAirports.removeAttribute("class", "is-hidden");

  backToAirportList(current_page);
 
  let isVisible = "";
  let input = inputVal.toLowerCase();
  airportData.forEach((airport) => {
    if (isVisible ==
        airport.icao_ident.toLowerCase().includes(input) ||
        airport.city.toLowerCase().includes(input) ||
        airport.facility_name.toLowerCase().includes(input)) {
    

      const li = document.createElement("li");
      li.classList.add("flex-item");
      const innerDiv1 = document.createElement("div");
      innerDiv1.setAttribute("id", "div1");
      const innerDiv2 = document.createElement("div");
      innerDiv2.setAttribute("id", "div2");

      const h2 = document.createElement("h2");
      h2.classList.add("flex-item-title");
      h2.innerText = airport.icao_ident;
      innerDiv1.appendChild(h2);

      const h3 = document.createElement("h3");
      h3.classList.add("flex-item-subtitle");
      h3.innerText = airport.city;
      innerDiv1.appendChild(h3);

      const h4 = document.createElement("h4");
      h4.classList.add("flex-item-subtitle");
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
    //   li.classList.toggle("is-hidden", !isVisible);
      li.appendChild(innerDiv1);
      li.appendChild(innerDiv2);
      li.setAttribute("code", airport.icao_ident);
      
      //   li.addEventListener("click", () => {
      //     displayAirportDetail(airport , current_page);
      //   });

      infoContainer.appendChild(li);
    }
  });
}
export { displaySearchOutput };
