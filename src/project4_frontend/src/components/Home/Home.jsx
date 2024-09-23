import React from 'react'
import './Home.css'
import CardStats from './CardStats'
import RevenueCard from '../RevenueCard/RevenueCard'
import RevenueChart from '../Revenue/RevenueChart'
import Table from '../Table/Table1'

const Home = () => {
  return (
    <div className='home'>
         <CardStats/>

         <div className="chart">
                 <RevenueCard/>
                 <RevenueChart/>
         </div>

         <Table/>
    </div>
  )
}

export default Home
