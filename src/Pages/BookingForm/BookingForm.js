import { Form, Input, Modal } from 'antd';
import React from 'react';

const BookingForm = ({ isModalOpen, handleCancel, handleOk, companyInfo, selectedValue }) => {
    const { name, description, slots, mapURL, price, phone } = companyInfo;
    return (
        <div>
            <Modal
                okType='success'
                okText='Confirm'
            title={`${name}`} 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}>

                <Form name="form_item_path" layout="vertical">
                    <Input readOnly value={ `${selectedValue?.format('YYYY-MM-DD')}`} />
                    <Input readOnly value={`Available slots ${slots}`}/>
                    <Input readOnly value={`Price Per hour ${price} Taka`}/>
                </Form>
            </Modal>
        </div>
    );
};

export default BookingForm;