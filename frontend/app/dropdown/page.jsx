"use client"
import React, { useEffect, useState } from 'react'
import ProvinceDropdown from '../components/dropdown/ProvinceDropdown'
import RegencyDropdown from '../components/dropdown/RegencyDropdown';
import DropdownModel from '@/data/dropdown.model';
import DistrictDropdown from '../components/dropdown/DistrictDropdown';
import VillageDropdown from '../components/dropdown/VillageDropdown';

const Dropdown = () => {
    const [provinces, setProvinces] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState();

    const [cities, setCities] = useState([]);
    const [selectedCityId, setSelectedCityId] = useState();

    const [districts, setDistricts] = useState([]);
    const [selectedDistrictId, setSelectedDistrictId] = useState();

    const [villages, setVillages] = useState([]);
    const [selectedVillageId, setSelectedVillageId] = useState();

    useEffect(() => {
        setProvinces(DropdownModel.getProvinces());
    }, [])

    useEffect(() => {
        if (selectedProvinceId) setCities(DropdownModel.getRegenciesByProvinceId(selectedProvinceId));
        else setCities([]);
    }, [selectedProvinceId])

    useEffect(() => {
        if (selectedCityId) setDistricts(DropdownModel.getDistrictsByRegencyId(selectedCityId));
        else setDistricts([]);
    }, [selectedCityId])

    useEffect(() => {
        if (selectedDistrictId) setVillages(DropdownModel.getVillagesByDistrictId(selectedDistrictId));
        else setVillages([]);
    }, [selectedDistrictId])

    return (
        <div className='flex'>
            <ProvinceDropdown selectedProvinceId={selectedProvinceId} setSelectedProvinceId={setSelectedProvinceId} provinces={provinces} />
            {(selectedProvinceId && cities.length > 0) && <RegencyDropdown selectedCityId={selectedCityId} setSelectedCityId={setSelectedCityId} cities={cities} />}
            {(selectedCityId && districts.length > 0) && <DistrictDropdown selectedDistrictId={selectedDistrictId} setSelectedDistrictId={setSelectedDistrictId} districts={districts} />}
            {(selectedDistrictId && villages.length > 0) && <VillageDropdown selectedVillageId={selectedVillageId} setSelectedVillageId={setSelectedVillageId} villages={villages} />}
        </div>
    )
}

export default Dropdown