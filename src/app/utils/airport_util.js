class AirportUtil {
  static toggle_Loader() {
    document.getElementById("loader").classList.toggle("is-hidden");
  }

  static handleError(error) {
    const icaoHTMLString = `<div class="flex-item">
        <p class="flex-item-error">Error: Hubo un problema con la petición Fetch: ${error.message}</p>
      </div>`;
    document.getElementById("flexInfoContainer").innerHTML = icaoHTMLString;
  }
}

export { AirportUtil };
