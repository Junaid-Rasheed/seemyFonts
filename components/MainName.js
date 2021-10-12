import React from 'react'
import Image from 'next/image'
const Logo = require("../assest/logo@2x.png");
function MainName() {
    return (
        <div className='text-center pt-12 pb-7'>
            <a href='/'>

            <Image 
            src={Logo}
            layout="intrinsic"
            alt="universe"
            width={250}
            height={110}
            />
            
            </a>
        </div>
    )
}

export default MainName
