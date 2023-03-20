//react
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//image
import Netflix from '../../assets/netflix_image.jpg';

//styles
import './home.styles.scss';

//component
import Footer from "../footer/footer.component";

//data
import Recent from '../../store/recent.json';

const Home = () => {
    const titles= ['Premium 30 Days','Premium 90 Days','Premium 120 Days'];

    const locker = () => {
        // eslint-disable-next-line no-undef
        CPABuildLock();
    }

    return (
        <div className='home__container'>

            <div className='home__container__gen'>
                <div className='home__container__gen__columns'>

                    <div className='home__container__gen__columns__column'>
                        <img
                            className='home__container__gen__columns__column__image'
                            src={Netflix}
                            alt='logo Netflix'
                        />
                        <p className='home__Container__gen__columns__column__des'>Daily Free</p>
                        <Link to='/daily-free-netflix-account' className="button">Get</Link>
                    </div>

                    {titles.map((title) => (
                        <div className='home__container__gen__columns__column'>
                            <img
                                className='home__container__gen__columns__column__image'
                                src={Netflix}
                                alt='logo Netflix'
                            />
                            <p className='home__Container__gen__columns__column__des'>{title}</p>
                            <button className="button" onClick={locker}>Get</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="home__container__gen__columns"><div className="home__container__gen__columns__column"></div></div>
        
            <div className="home__container__gen__columns">
                <div className="home__container__gen__columns__column">
                    <div className="console">
                        <div className="console-header">
                            Recent Generated Account
                        </div>
                        <div className="console-content">
                            {Recent.map((item)=>
                                <p key={item.id}><img src={item.flag} alt="flags" /> ({item.country}) just generated a Premium Netflix Account of {item.premium} Days. IP: {item.ip}</p>
                            )}
                        </div>
                    </div>
                
                </div>
            </div>
        
            <div className="content">
                <div className="console-header" style={{position: 'inherit'}}>
                    Top Comments
                </div>
            </div>
        
            <div className="content">
                <div className="cycle-nav">
                    <div className="cycle-slideshow">
                        <img 
                            src='//1.bp.blogspot.com/-zwAHtfaXTc4/WaZghkiiI3I/AAAAAAAAAGQ/BZGOMqhjLs4_3ptGfyDm2g91j9O1a5qiQCK4BGAYYCw/s1600/03.png'
                            alt="profile"
                            className="profile"
                        />
                    </div>
                    <div className="caption">Just In Connor - Thank you for this awesome netflix premium account generator, ive been using this generator for half a year now! you deseve a treat folks!</div>
                </div>
            </div>

            <div className="content">
                <h2 className="content__q">How does the Netflix Premium Subscription Generator work?</h2>
                <p className="content__s">We are using a portion of the money we make from ads to offer <u>Premium Netflix Accounts</u>. <strong>Everyone can claim a Netflix Premium Subscription!</strong>  Simply scroll up and choose one of the available options. We are currently offering Premium Netflix accounts of <strong>30, 90 and 120 Days.</strong></p>
            
                <h2 className="content__q">Is this a Hack?</h2>
                <p className="content__s">Absolutely not! You are simply going to be given a new Netflix account with preloaded Premium Status.</p>
            

                <h2 className="content__q">Why do I have to complete a Survey?</h2>
                <p>We are receiving thousands of Premium Netflix account requests every day and some of them are spam. In an effort to minimize spam and abuse we ask you to prove you're a human by simply filling out a quick and easy to do survey.</p>
            
            </div>

            <Footer />
        </div>
    )
}

export default Home
