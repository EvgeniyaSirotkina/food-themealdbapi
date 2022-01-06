const Header = () => {
    return (
        <nav className='deep-purple accent-3'>
            <div className='nav-wrapper'>
                <a href='/food-themealdbapi' className='brand-logo right'>React Shop</a>
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
                    <li><a href='/food-themealdbapi/about' >About</a></li>
                    <li><a href='/food-themealdbapi/contact' >Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;