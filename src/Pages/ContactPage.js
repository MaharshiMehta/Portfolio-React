import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/d/u/0/viewer?hl=en&gl=us&vpsrc=6&ctz=240&ie=UTF8&msa=0&t=m&ll=37.26435399999999%2C-79.935386&spn=0.002988%2C0.00456&z=17&source=embed&mid=1nxxfsdOOs2x2HPEsNV-YlJDLFzM" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'7016730113'} text2={''} title={'Phone'}/>
                    <ContactItem icon={email} text1={'loremipusum@hmail.com'} text2={'abcloremipsum@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'2512, bhavnagar'} text2={'Gujrat'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
