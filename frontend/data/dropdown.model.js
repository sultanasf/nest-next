export default class DropdownModel {
    static provinces = require("./provinces.json");
    static regencies = require("./regencies.json");
    static districts = require("./districts.json");
    static villages = require("./villages.json");

    static getProvinces() {
        return this.provinces;
    }

    static getRegencies() {
        return this.regencies;
    }

    static getRegenciesByProvinceId(provinceId) {
        return this.regencies.filter(regency => regency.province_id == provinceId);
    }

    static getDistricts() {
        return this.districts;
    }

    static getDistrictsByRegencyId(regencyId) {
        return this.districts.filter(district => district.regency_id == regencyId);
    }

    static getVillages() {
        return this.villages;
    }

    static getVillagesByDistrictId(districtId) {
        return this.villages.filter(village => village.district_id == districtId);
    }
}