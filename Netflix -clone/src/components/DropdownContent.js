import React from 'react';
const dropdowncontent = () => (
    <div className="dropdownContainer">
        <div className="navigation_container--userLogo">
            <div className="dropdownContent">
                <div>
                    <div className="dropdownContent--user"></div>
                    <p className="dropdownContent--user-text">Andres</p>
                </div>
                <div>
                    <div classname="dropdownContent--user dropdownContent--user-2"></div>
                    <p className="dropdownContent--user-text">Tony</p>
                </div>
                <div>
                    <div className="dropdownContent--user dropdownContent--user-3"></div>
                    <p className="dropdownContent--user-text">Luis</p>
                </div>
                <p className="dropdownContent-text">Manage Profiles</p>
                </div>
                <div>
                    <p className="dropdownContent-textOutside">Account</p>
                    <p className="dropdownContent-textOutside">Help Center</p>
                    <p className="dropdownContent-textOutside">Sign Out Of Netflix</p>
                </div>
            </div>
        </div>
);
export default dropdowncontent;
