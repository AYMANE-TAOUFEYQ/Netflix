//assets
import Logo from '../../assets/logo.jpg';

//react
import { Fragment } from 'react';

//routing
import { Link, Outlet } from 'react-router-dom';

//styles
import './navigation.styles.scss'



const Navigation = () => {

    return (
        <Fragment>
            <header>
                <Link to='/'>
                    <img 
                        src={Logo}
                        alt='logo'
                        className='container__logo'
                    />
                </Link>

            </header>
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default Navigation;