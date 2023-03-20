import './account.styles.scss';

import { Link } from "react-router-dom";

import { Fragment } from 'react';

import Footer from "../footer/footer.component";

//data
import New_Account from '../../store/accounts_new.json';
import Blocked_Account from '../../store/accounts_new.json';



const Account = () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    return (
        <Fragment>
            <div className='post'>
                <h3 className='post-title'>Daily Free Netflix Account</h3>
                <div className='post-body'>
                    <div className='post-body--title'>Updated as of {date}</div>

                    <div style={{textAlign : 'center'}}>
                        <div style={{color : "white", fontSize: '18px', margin: "10px"}}>Having trouble on our Daily Free Netflix Account?</div>
                        <Link to="/" className='button' style={{fontSize: "18px", marginTop: '10px'}}>
                            Try Netflix Premium Account Generator
                        </Link>
                    </div>

                    <div className='post-body-b'>
                        ***Please Do Not Changed the PASSWORD!***
                        <br />
                        <br />
                        ****NEW ACCOUNTS***
                        <br />
                        {New_Account.map((account) => (
                            <p key={account.id}>{account.account}</p>
                        ))}
                        <br />
                        <br />
                        ****NEW ACCOUNTS***
                        <br />
                        {Blocked_Account.map((account) => (
                            <p key={account.id}>{account.account}</p>
                        ))}
                        <br />
                    </div>
                </div>
            

                <div className="terms__pager">
                    <Link to="/" className="terms__pager--link">
                        Home
                    </Link>
                </div>
            </div>

            <Footer />
        </Fragment>
    );
}

export default Account;