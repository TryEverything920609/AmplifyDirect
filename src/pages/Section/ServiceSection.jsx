import zoomPattern from '../../asset/images/zoompattern.png';
import allworking from '../../asset/images/24x7.png';
import voicemessage from '../../asset/images/voice_message.png';
import unlimited from '../../asset/images/unlimited_minutes.png';
import callrouting from '../../asset/images/call_routing.png';
import voicemail from '../../asset/images/voicemail.png';
import highquaility from '../../asset/images/highquality_msg.png';
import React from 'react';
const ServiceSection = () => {
    return (
        <>
            <section className="pos-r o-hidden text-center">
                <div className="bg-animation">
                    <img className='zoom-fade' src={zoomPattern} alt='logo'/>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12' style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                            <div className='title-effect title-effect-2'>
                                <div className='ellipse'></div>
                                <i className='la la-cubes'></i>
                            </div>
                            <h2 className='title'>Our Excitiing feature And Service</h2>
                            <p>
                                Softino Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderi
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6' style={{padding: '10px'}}>
                            <div className='featured-item style-4'>
                                <div className='featured-icon'>
                                    <img className='img-center' src={allworking} alt='logo'/>
                                </div>
                                <div className='featured-title'>
                                    <h5>24 x 7 Service</h5>
                                </div>
                                <div className='featured-desc'>
                                    <p>
                                        We offer a 24-hour administration and our help group will be there for you should you experience any startling issues!.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 sm-mt-5' style={{padding: '10px'}}>
                            <div className='featured-item style-4'>
                                <div className='featured-icon'>
                                    <img className='img-center' src={voicemessage} alt='logo'/>
                                </div>
                                <div className='featured-title'>
                                    <h5>Voice Message</h5>
                                </div>
                                <div className='featured-desc'>
                                    <p>
                                    Since you have the client's telephone number, you can send a voice message just as an instant message, for a more customized insight.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 sm-mt-5' style={{padding: '10px'}}>
                            <div className='featured-item style-4'>
                                <div className='featured-icon'>
                                    <img className='img-center' src={unlimited} alt='logo'/>
                                </div>
                                <div className='featured-title'>
                                    <h5>Unlimited Minutes</h5>
                                </div>
                                <div className='featured-desc'>
                                    <p>
                                        Customers can make use of the IVR systems at any time of their convenience as it performs its task 24 hours a day within 7 days a week.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 sm-mt-5' style={{padding: '10px'}}>
                            <div className='featured-item style-4'>
                                <div className='featured-icon'>
                                    <img className='img-center' src={callrouting} alt='logo'/>
                                </div>
                                <div className='featured-title'>
                                    <h5>Intelligent Call Routing</h5>
                                </div>
                                <div className='featured-desc'>
                                    <p>
                                        Dispense with long call lines by wisely directing each guest to the correct division and specialist.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 sm-mt-5' style={{padding: '10px'}}>
                            <div className='featured-item style-4'>
                                <div className='featured-icon'>
                                    <img className='img-center' src={voicemail} alt='logo'/>
                                </div>
                                <div className='featured-title'>
                                    <h5>Voicemail</h5>
                                </div>
                                <div className='featured-desc'>
                                    <p>
                                        Facilitate your callers to leave a voicemail when none of your agents aren't available.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 sm-mt-5' style={{padding: '10px'}}>
                            <div className='featured-item style-4'>
                                <div className='featured-icon'>
                                    <img className='img-center' src={highquaility} alt='logo'/>
                                </div>
                                <div className='featured-title'>
                                    <h5>Highquality Message</h5>
                                </div>
                                <div className='featured-desc'>
                                    <p>
                                        A quality message map serves as a tool to ensure consistent messaging cross-functionality internally and across channels and touchpoints externally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceSection;