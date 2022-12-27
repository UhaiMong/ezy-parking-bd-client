import { Calendar } from 'antd';
import React from 'react';


const Calender = ({ value, setValue, selectedValue, setSelectedValue }) => {
    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div className='site-calendar-customize-header-wrapper'>
            <Calendar
                fullscreen={false}
                value={value} onSelect={onSelect} onPanelChange={onPanelChange}
            >

            </Calendar>
        </div>
    );
};

export default Calender;