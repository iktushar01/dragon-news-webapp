import React from 'react';
import swimingImg from "../../assets/swimming.png"
import playImg from "../../assets/playground.png"
import classImg from "../../assets/class.png"
const Qzone = () => {
    return (
        <div className='p-3 mt-4 bg-base-200 rounded-xl shadow-md space-y-2'>
            <h1 className='font-bold'>Qzone</h1>
            <div>
                <img className='w-full' src={swimingImg}/>
                <img className='w-full' src={playImg}/>
                <img className='w-full' src={classImg}/>
               
            </div>
        </div>
    );
};

export default Qzone;