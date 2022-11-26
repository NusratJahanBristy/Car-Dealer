import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
           <button 
        className="btn btn-primary bg-gradient-to-r from-emerald-600 to-lime-700 text-white">{children}</button>  
        </div>
    );
};

export default PrimaryButton;

