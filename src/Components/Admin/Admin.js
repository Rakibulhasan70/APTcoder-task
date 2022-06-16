import React from 'react';
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.png'
import BarCharts from '../BarCharts/BarCharts';
import PieCharts from '../PieChart/PieCharts';
const Admin = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="card lg:w-72 w-84 mt-5 h-52 mx-3 " style={{ backgroundImage: `url(${img2})` }}>
                    <div class="card-body text-white">
                        <h2 class="card-title">Weekly Sales!</h2>
                        <p className='text-xl text-start font-semibold'>$ 15,0000 </p>

                        <p><small>Increased by 60%</small></p>

                    </div>
                </div>
                <div class="card lg:w-72 w-84 mt-5 h-52 mx-3 " style={{ backgroundImage: `url(${img3})` }}>
                    <div class="card-body text-white">
                        <h2 class="card-title">Weekly Orders!</h2>
                        <p className='text-xl text-start font-semibold'>45,3664 </p>
                        <p><small>Decreased by 60%</small></p>
                    </div>
                </div>
                <div class="card lg:w-72 w-84 mt-5 h-52 mx-3 " style={{ backgroundImage: `url(${img1})` }}>
                    <div class="card-body text-white">
                        <h2 class="card-title">Visitors Online</h2>
                        <p className='text-xl text-start font-semibold'>95,4596</p>
                        <p><small>Increased by 5%</small></p>
                    </div>
                </div>
            </div>
            <div className='lg:flex gap-5 px-5'>
                <div class="card card-side shadow-2xl lg:w-3/5 w-84 mt-20 mb-10 px-5">
                    <figure></figure>
                    <div class="card-body ">
                        <h2 class="card-title">Visit And Sales Statistics</h2>
                        <BarCharts></BarCharts>
                    </div>
                </div>
                <div class="card card-side shadow-2xl lg:w-2/5 w-84  mt-20 mb-10 px-5">
                    <figure></figure>
                    <div class="card-body ">
                        <h2 class="card-title">Traffic Sources</h2>
                        <PieCharts></PieCharts>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;