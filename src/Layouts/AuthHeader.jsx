import logo from '../asset/images/logo.png';
import React, { useEffect, useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav
} from 'mdb-react-ui-kit';
import '../asset/css/base.css';

function AuthHeader() {
    const [ scrollY, setScrollY ] = useState(0);
    const [ showNavSecond, setShowNavSecond ] = useState(false);
    
    useEffect (() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const style = scrollY > 60 ? 'fixed-header' : '';

    return (
        <header id='site-header' className="header header-2">
            <div className='container'>
                <div id='header-wrap' className={style}>
                    <MDBNavbar expand='lg' light>
                        <MDBContainer fluid className='d-flex justify-content-end'>
                            <div className='d-flex justify-content-between'>
                                <MDBNavbarBrand href='#' className='logo'>
                                <img
                                    id='logo-white-img'
                                    src={logo}
                                    className='img-center'
                                    alt='logo'
                                />
                                <img
                                    id='logo-img'
                                    src={logo}
                                    className='img-center sticky-logo'
                                    alt='logo'
                                />
                                </MDBNavbarBrand>
                                <MDBNavbarToggler
                                    aria-expanded='false'
                                    aria-label='Toggle navigation'
                                    onClick={() => setShowNavSecond(!showNavSecond)}
                                >
                                    <MDBIcon icon='bars' fas />
                                </MDBNavbarToggler>
                            </div>
                            <MDBCollapse navbar show={showNavSecond}>
                                <MDBNavbarNav className='d-flex justify-content-end'>
                                    <MDBNavbarLink active aria-current='page' href="#" style={{ marginRight : '10px'}}>
                                        Home
                                    </MDBNavbarLink>
                                    <MDBNavbarLink href="#" style={{marginRight : '10px'}}>About Dialing</MDBNavbarLink>
                                    <MDBNavbarLink href="#" style={{marginRight : '10px'}}>About Hashtag Dialing Code</MDBNavbarLink>
                                    <MDBNavbarLink href="#" style={{marginRight : '10px'}}>
                                        Contact Us
                                    </MDBNavbarLink>
                                </MDBNavbarNav>
                            </MDBCollapse>
                            <a className='btn btn-theme btn-sm' href = "/login">
                                <span style={{opacity:0.5}} >L</span>
                                <span style={{opacity:0.5}} >o</span>
                                <span style={{opacity:0.5}} >g</span>
                                <span style={{opacity:0.5}} >i</span>
                                <span style={{opacity:0.5}} >n</span>
                            </a>
                        </MDBContainer>
                    </MDBNavbar>
                </div>
            </div>
        </header>
    );
}

export default AuthHeader;