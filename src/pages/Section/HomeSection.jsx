import background1 from './../../asset/images/04.png';
import macbook from './../../asset/images/mackbook.png';
import pattern1  from './../../asset/images/pattern/01.png';
const HomeSection = () => {
    return (
        <section id='home' className="fullscreen-banner banner p-0" style={{height:'969px', backgroundImage:{pattern1}}}>
            <div className="hero-bg">
                <img className="img-fluid" src={background1} alt='log'/>
            </div>
            <div className='align-center p-0' style={{paddingTop: '90px'}}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 img-side'>
                            <img className='img-center' src={ macbook } alt='log'/>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 col-md-12 md-mt-5 ml-auto' style={{marginLeft: 'auto'}}>
                            <h1 className='mb-4 font-weight-normal wow fadeInUp'>
                                Welcome to
                                <span className='font-weight-bold text-uppercase'> Direct-dial</span>
                            </h1>
                            <p className='lead mb-4 wow fadeInUp'>
                                an Advanced IVR and Lead Tracking Service for Clients of Hashtag Dialing Codes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='round-shape'></div>
        </section>
    );
}

export default HomeSection;