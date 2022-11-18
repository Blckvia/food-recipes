import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='grey darken-3'>
            <div className='nav-wrapper'>
                <Link
                    to='/'
                    className='brand-logo'
                >
                    Food Recipes
                </Link>
                <ul
                    id='nav-mobile'
                    className='right hide-on-med-and-down'
                ></ul>
                <a
                    className='github right'
                    href='https://github.com/Blckvia/fortnite-shop'
                    target='_blank'
                    rel='noreferrer'
                >
                    GitHub
                </a>
                <Link
                    className='contacts right'
                    to='/contacts'
                >
                    Contacts
                </Link>
                <Link
                    className='about right'
                    to='/about'
                >
                    About
                </Link>
            </div>
        </nav>
    );
}

export default Header;
