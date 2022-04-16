import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner text-center'>
                <h1 className='banner-text'>Best food waiting for your belly</h1>
                <div className="bg-white rounded-pill d-flex w-50 mx-auto my-4">
                    <input className='d-block border-0 w-100 rounded-pill py-2 px-4' type="search" placeholder='Search food item' />
                    <input className='ms-auto d-block rounded-pill py-2 px-4 bg-primary text-white border-0' type="submit" value="Search" />
                </div>
            </div>
        </div >
    );
};

export default Home;