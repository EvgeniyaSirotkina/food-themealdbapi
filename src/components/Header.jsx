import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='deep-purple accent-3'>
            <div className='nav-wrapper'>
            <Link to={'/food-themealdbapi'} className='brand-logo right'>React Shop</Link>
                <ul id='nav-mobile' className='left hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/EvgeniyaSirotkina?tab=repositories'
                            target='_blank'
                            rel='noreferrer'
                        >
                            GitHub
                        </a>
                    </li>
                    <li><Link to={'/food-themealdbapi/about'}>About</Link></li>
                    <li><Link to={'/food-themealdbapi/contacts'}>Contacts</Link></li>
                </ul>
            </div>
        </nav >
    );
}

export default Header;