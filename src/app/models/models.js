class AirportClass {
  constructor(icao_ident,city,facility_name){
  this.icao_ident = icao_ident;
  this.facility_name = facility_name;
  this.city = city;
  };

getIcao_code (){return `${this.icao_ident}`};
getName (){return `${this.facility_name}`};
getCity (){return `${this.city}`};

}

class AirportDetailClass extends AirportClass {
  constructor(airportDet) {
    super(airportDet.icao_ident,airportDet.city,airportDet.facility_name);

      this.state = airportDet.state;
      this.ownership = airportDet.ownership;
      this.latitude = airportDet.latitude;
      this.longitude = airportDet.longitude;
      this.elevation = airportDet.elevation;
      this.magnetic_variation = airportDet.magnetic_variation;
      this.tpa = airportDet.tpa;
      this.vfr_sectional = airportDet.vfr_sectional;
      this.responsible_artcc = airportDet.responsible_artcc;
      this.responsible_artcc_name = airportDet.responsible_artcc_name;
      this.airport_status = airportDet.airport_status;
      this.customs_airport_of_entry = airportDet.customs_airport_of_entry;
      this.control_tower = airportDet.control_tower;
      this.unicom = airportDet.unicom;
      this.ctaf = airportDet.ctaf;
      this.lighting_schedule = airportDet.lighting_schedule;
      this.beacon_schedule = airportDet.beacon_schedule;
      this.military_joint_use = airportDet.military_joint_use;
      this.military_landing = airportDet.military_landing;
      this.fss_phone_number = airportDet.fss_phone_number;
      this.area_map = airportDet.area_map;
    };
  

    getState (){return `${this.state}`};
    getOwnership (){return `${this.ownership}`};
    getLatitude (){return `${this.latitude}`};
    getLongitude (){return `${this.longitude}`};
    getElevation (){return `${this.elevation}`};
    getMagnetic_variation (){return `${this.magnetic_variation}`};
    getTpa (){return `${this.tpa}`};
    getVfr_sectional (){return `${this.vfr_sectional}`};
    getArtcc_code (){return `${this.responsible_artcc}`};
    getArtcc_name (){return `${this.responsible_artcc_name}`};
    getAirport_status (){return `${this.airport_status}`};
    getCustoms_airport_of_entry (){return `${this.customs_airport_of_entry}`};
    getControl_tower (){return `${this.control_tower}`};
    getUnicom (){return `${this.unicom}`};
    getCtaf (){return `${this.ctaf}`};
    getLighting_schedule (){return `${this.lighting_schedule}`};
    getBeacon_schedule (){return `${this.beacon_schedule}`};
    getMilitary_joint_use (){return `${this.military_joint_use}`};
    getMilitary_landing (){return `${this.military_landing}`};
    getFss_phone_number (){return `${this.fss_phone_number}`};
    getFss_area_map (){return `${this.fss_area_map}`};
  }

export { AirportClass, AirportDetailClass };
