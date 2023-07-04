import iPhone from '../../asset/images/iPhone.svg';
import React from 'react';

const AboutSection = () => {
    return(
        <section id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 md-mt-5 order-lg-1">
                        <img className="img-fluid w-100" src={iPhone} alt='log'/>
                    </div>
                    <div className='col-lg-6 col-md-12 order-lg-12'>
                        <div className='section-title mb-3'>
                            <div className='title-effect title-effect-2'>
                                <div className='ellipse'></div>
                                <i className='la la-info'></i>
                            </div>
                            <h2>Directdial is a PBX, or&nbsp;Private Branch Exchange</h2>
                        </div>
                        <p className='lead'>
                            This&nbsp;refers to the enterprise phone system&nbsp;that handles
                            inbound and outbound calls, both internally and externally for an organization.
                            Traditionally, PBX systems function on copper phone lines.
                        </p>
                        <p className='lead'>
                            The&nbsp;PSTN, or&nbsp;Public Switched Telephone Network, is the&nbsp;worldwide telephone line
                            system&nbsp;accessed by the public. Unlike PSTN phone systems, PBX systems are private and primarily
                            used as business phone systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;