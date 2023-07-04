import pattern from '../../asset/images/backpatter1.png';
import vpbx from '../../asset/images/vpbx.png';
import React from 'react';
const EffectSection = () => {
    return(
        <section className="bg-effect pos-r">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 image-column">
                        <div className="blink-img">
                            <img className="img-fluid blinkblink" src={ pattern } alt='logo'/>
                        </div>
                        <img className='img-fluid' src={ vpbx } alt='logo'/>
                    </div>
                    <div className='col-lg-6 col-md-12 md-mt-5 ml-auto' style={{ marginLeft: 'auto'}}>
                        <div className='section-title mb-3'>
                            <div className='title-effect title-effect-2'>
                                <div className='ellipse'></div>
                                <i className='la la-info'></i>
                            </div>
                            <h2>How does a PBX work?</h2>
                        </div>
                        <p className='lead'>
                            Traditional PBX telephone systems work by utilizing physical, on-
                            premises copper landlines and a PBX box through which users share a 
                            given number of phone numbers and lines. There are several iteractions 
                            of the PBX system now, from the original analog to the top-of-the-line
                            hybrid and cloud-based systems that utilize&nbsp;VoIP.
                        </p>
                        <p className='lead'>
                            Directdial is built on Twilio technology, which allows for the
                            routing of "shared telephone numbers" to add many dedicated phone
                            lines as there are area codes is the United States.
                        </p>
                        <p className='lead'>
                            our plan is to grow Directdial into a full feature IVR and CRM, Lead Management System.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EffectSection;