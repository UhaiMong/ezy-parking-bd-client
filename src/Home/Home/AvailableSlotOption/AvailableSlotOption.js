import { Button, Card } from 'antd';
import React,{useState} from 'react';
import { FaPhoneAlt, FaLocationArrow, FaCarSide, FaDollarSign } from 'react-icons/fa';
import BookingForm from '../../../Pages/BookingForm/BookingForm';

const AvailableSlotOption = ({ parkingCompany, selectedValue }) => {
    const { name, description, slots, mapURL, price, phone } = parkingCompany;

    // Modal

    const [companyInfo, setcompanyInfo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
        setcompanyInfo(parkingCompany);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Card>
            <h2 className='text-2xl font-semibold text-end'>{name}</h2>
            <p className='text-end text-lg text-gray-700'>{description}</p>
            <div className='flex justify-between items-center gap-x-2 gap-y-6 mt-4'>
                <span> <FaPhoneAlt className='inline text-xl text-cyan-500 mr-3' /> <a className='text-lg font-semibold text-stone-600' href={`tel:${phone}`}>{phone}</a></span>
                <span><FaLocationArrow className='inline text-xl text-cyan-500 mr-3' /> <a rel="noopener" className='text-lg font-semibold text-stone-600' target="_blank" href={`${mapURL}`}>Google Map</a></span>
            </div>
            <div className='flex justify-between items-center gap-2 ab'>
                <p><FaCarSide className='inline text-xl text-cyan-500 mr-3' /> <span className='text-lg font-semibold text-stone-600'>{slots}</span></p>
                <p><FaDollarSign className='inline text-xl text-cyan-500 mr-3' /> <span className='text-lg font-semibold text-stone-600'>{price} BDT/Hour</span></p>
            </div>
            <div className='mt-14'>
                <Button
                    onClick={showModal}
                    className='text-gray-50 bg-blue-500 font-semibold text-lg'
                    type="primary" block>
                    Book Now
                </Button>
            </div>
            {
                companyInfo && 
                <BookingForm
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
                companyInfo={companyInfo}
                selectedValue={selectedValue}
                />
            }
        </Card>
    );
};

export default AvailableSlotOption;