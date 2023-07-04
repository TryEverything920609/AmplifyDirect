import virtualPBX from '../../asset/images/virtualPBX.jpg';
import React from 'react';
const BenefitSection = () => {
    return(
        <section className="pos-r o-hidden">
            <canvas id="confetti" width={"1920px"} height={"795px"}/>
            <div className="morph-wrap">
                <svg className="morph" width={"1400px"} height={"770px"} viewBox="0 0 1400 770">
                    <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"></path>
                </svg>
            </div>
            <div className="container">
                <div className="col-lg-5 col-md-12 image-column">
                    <img className="img-fluid" src={virtualPBX} alt='logo'/>
                </div>
                <div className='col-lg-6 col-md-12 ml-auto xs-mt-5' style={{marginLeft: 'auto'}}>
                    <div className='section-title'>
                        <div className='title-effect title-effect-2'>
                            <div className='ellipse'></div>
                            <i className='la la-info'></i>
                        </div>
                        <h2 className='title'>We Built Directdial on a Hosted PBX</h2>
                    </div>
                    <div className='work-process style-2'>
                        <div className='step-num-box'>
                            <div className='step-icon'>
                                <span><i className='la la-lightbulb-o'></i></span>
                            </div>
                            <div className='step-num'>01</div>
                        </div>
                        <div className='step-desc'>
                            <h4>Cost Saving</h4>
                            <p className='mb-0'>
                                As the original self-service tool, IVR technology has long been a cost savings mechanism.
                            </p>
                        </div>
                    </div>
                    <div className='work-process style-2 mt-5'>
                        <div className='step-num-box'>
                            <div className='step-icon'>
                                <span><i className='la la-rocket'></i></span>
                            </div>
                            <div className='step-num'>02</div>
                        </div>
                        <div className='step-desc'>
                            <h4>Targeting</h4>
                            <p className='mb-0'>
                                Nostrud exercitat ullamco lorem ipsum dolor sit amet, consece adipising elit, sed doeo eiusmod
                            </p>
                        </div>
                    </div>
                    <div className='work-process style-2 mt-5'>
                        <div className='step-num-box'>
                            <div className='step-icon'>
                                <span><i className='la la-check-square'></i></span>
                            </div>
                            <div className='step-num'>03</div>
                        </div>
                        <div className='step-desc'>
                            <h4>Result</h4>
                            <p className='mb-0'>
                            Nostrud exercitat ullamco lorem ipsum dolor sit amet, consece adipising elit, sed doeo eiusmod
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitSection;