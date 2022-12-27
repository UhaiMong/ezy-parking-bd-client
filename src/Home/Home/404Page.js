import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/images/404page.png'

const Page404 = () => {
    return (
        <div className="w-96 mx-auto mt-12 text-center">
            <div>
                <img src={img} alt="404 page" />
            </div>
            <p>The page is not found!!</p>
            <span className="text-2xl text-cyan-500 hover:underline"><Link to='/'>Go to home</Link></span>
        </div>
    );
};

export default Page404;