import React from 'react';
import FindUs from './FindUs';
import SocialLogin from './SocialLogin';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;