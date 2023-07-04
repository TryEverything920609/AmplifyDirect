import background from '../asset/images/03.png';
import logo from '../asset/images/logo.png';

const AuthFooter = () => {
    return (
        <footer className="footer pos-r grey-bg bg-contain bg-pos-lt" >
            <div className='primary-footer container' style={{ backgroundImage: { background }}}>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='footer-logo'>
                            <img id="footer-logo-img" className='img-center' src={logo} alt='log'/>
                        </div>
                        <p className='mb-0'>Click here</p>
                        <a href='https://directdia.net/privacy'>
                            to read our terms & conditions, disclosures, privacy policy, and 
                            reasonable use policy.
                        </a>
                    </div>
                    <div className='col-lg-4 col-md-6 pl-md-5 sm-mt-5 footer-list justify-content-between d-flex'>
                        <ul className='list-unstyled w-100'>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Service</a></li>
                            <li><a href='#'>Contact Us</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-12 md-mt-5'>
                        <ul className='media-icon list=unstyled'>
                            <li><p className='mb-0'>Address: <b>423B, Road Worldwide Country, USA</b></p></li>
                            <li>Email:<b>support@directdial.net.</b></li>
                            <li>Toll-Free: <b>855.8.Client</b></li>
                            <li>Phone: <b>+91-234-567-8900</b></li>
                            <li>Fax: <b>855.605.8568</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AuthFooter;