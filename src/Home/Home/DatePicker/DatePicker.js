import React, { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Space, TimePicker } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment/moment';
import Calender from '../Calender/Calender';
import AvailableSlot from '../AvailableSlot/AvailableSlot';
const { RangePicker } = DatePicker;

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${year}-${month}-${day}`;

dayjs.extend(customParseFormat)

const DatePickerAndTimePicker = () => {
    const [Date, setDate] = useState([])

    const [value, setValue] = useState(() => dayjs(currentDate))
    const [selectedValue, setSelectedValue] = useState(() => dayjs(currentDate));
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center' style={{ margin: 20 }}>
                <div>
                    <h1 className='text-2xl font-semibold my-3'>Pick the arrival and departure time</h1>
                    <Space>
                        <TimePicker.RangePicker
                            status='warning'
                            use12Hours={true}
                        />
                    </Space>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-3'>Pick the arrival and departure time</h1>
                    <RangePicker
                        onChange={(values) => {
                            setDate(values.map(value => {
                                return moment(value).format('MM-DD-YYYY')
                            }))
                        }}
                    ></RangePicker>
                    <div>
                        <h1>Your selected date</h1>
                        <p>{Date}</p>
                    </div>
                </div>
            </div>
            <Calender
                value={value}
                setValue={setValue}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
            <AvailableSlot
                value={value}
                selectedValue={selectedValue}
            />
        </>
    );
};

export default DatePickerAndTimePicker;