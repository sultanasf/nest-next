import React, { useEffect, useState } from 'react'

const DistrictDropdown = ({ selectedDistrictId, setSelectedDistrictId, districts }) => {

    return (
        <>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="province">
                    District
                </label>
                <div className="relative">
                    <select
                        value={selectedDistrictId || ''}
                        onChange={(e) => setSelectedDistrictId(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="province"
                    >
                        <option value="">Select District</option>
                        {districts.map((district, index) => (
                            <option key={index} value={district.district_id}>{district.name}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path fill="#000000" d="M12.95 8.95l-4.242 4.243-4.243-4.243-1.414 1.415 5.657 5.657 5.657-5.657z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DistrictDropdown