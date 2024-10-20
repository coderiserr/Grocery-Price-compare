import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Sign_In from './Sign_In';



const Header = () => {
   
    const [isOpen, setIsOpen] = useState(false);

    const toggleLogin = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="header">
            <div className="location">
                <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="searchBox">


                <FontAwesomeIcon icon={faMagnifyingGlass} />

                <input type="text" className="mySearch" placeholder="Search for Products.." title="Type in a category"></input>
            </div>
          
            <div  onClick={toggleLogin}>
                <butom className="adminLogin" 
                ><FontAwesomeIcon icon={faUser} /></butom>
            </div>
           
            {isOpen && (
              
               <Sign_In />
                
            )}

        </div>
    );
};   

export default Header;
