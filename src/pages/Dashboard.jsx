import React from 'react';
import '../styles/dashboard.css';
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/mileChart";
import CarStatsChart from "../charts/CarStatsChart";
import miniCar from "../assets/images/mini-car-01.png"

const carObj = {
  title: 'Total Cars',
  totalNumber: 750,
  icon: 'ri-police-car-line'
};

const tripObj = {
  title: 'Daily Trips',
  totalNumber: 1697,
  icon: 'ri-steering-2-line'
};

const clientObj = {
  title: 'Clients Annually',
  totalNumber: '85k',
  icon: 'ri-user-line'
};

const distanceObj = {
  title: 'Kilometers Daily',
  totalNumber: 2167,
  icon: 'ri-timer-flash-line'
};

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className='stats__title'>Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className='stats__title'>Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard