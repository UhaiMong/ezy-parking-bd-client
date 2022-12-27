import React, { useState, useEffect } from 'react';
import AvailableSlotOption from '../AvailableSlotOption/AvailableSlotOption';

const AvailableSlot = ({ selectedValue }) => {
    const [availableParking, setAvailableParking] = useState([]);

    useEffect(() => {
        fetch("Company.json")
            .then(res => res.json())
            .then(data => {
                setAvailableParking(data);
            })
    }, [])
    return (
        <>
            <div className='text-center my-4'>
                <h1 className='text-cyan-500 font-semibold text-xl'>{`Available slots Today: ${selectedValue?.format('YYYY-MM-DD')}`}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    availableParking?.map(parkingCompany => 
                        <AvailableSlotOption
                            key={parkingCompany._id}
                            parkingCompany={parkingCompany}
                            selectedValue={selectedValue}
                        />
                    )
                }
            </div>
        </>
    );
};

export default AvailableSlot;