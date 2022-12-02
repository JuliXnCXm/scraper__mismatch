import React from 'react'
import './index.css'

const SpinnerLoader = () => {
    return (
        <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    );
}

export default SpinnerLoader;