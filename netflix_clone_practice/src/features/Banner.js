import React from 'react';
import './Banner.css';

function Banner() {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://in.images.search.yahoo.com/images/view;_ylt=AwrwJSG.8f5g7kgAPlG9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzZhNDU4MDM5NGFiYjZlOWJjMGU5NWUxZWIyOTRmZTAyBGdwb3MDMTYyBGl0A2Jpbmc-?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dblack%2Bbanner%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D162&w=850&h=314&imgurl=www.f-covers.com%2Fcover%2Fblack-texture-facebook-cover-timeline-banner-for-fb.jpg&rurl=http%3A%2F%2Fwww.f-covers.com%2Ffacebook-cover%2Fblack-texture&size=39.1KB&p=black+banner&oid=6a4580394abb6e9bc0e95e1eb294fe02&fr2=piv-web&fr=mcafee&tt=black+texture+Facebook+Cover+timeline+photo+banner+for+fb&b=121&ni=21&no=162&ts=&tab=organic&sigr=ZOU04rytWkJa&sigb=ck2e3Q57nhLY&sigi=n2Lv2aD2rPS8&sigt=00hLQ2lO8dIb&.crumb=z7x4ILTUQDD&fr=mcafee&fr2=piv-web&type=E211IN826G0")`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner__contents">
               <h1 className="banner__title">Movie Nmae</h1>
               <div className="banner_buttons">
                   <button className="banner__button">play</button>
                   <button className="banner_button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`This is a film description This is a film description This is a film description This is a film description
                    This is a film description This is a film description This is a film description
                    This is a film description This is a film description This is a film description`,150)
                    }
                </h1> 
               </div>
               <div className="banner--fadeBottom" />
               </header>
               )
            }
