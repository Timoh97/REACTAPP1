import React from 'react'


class Navbar extends React.Component {
    render (){
        return (
            <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark navbar-style'>
                <a className='navbar-brand' href='/#'>
                    eCommerce
                </a>

                <button className='Navbar-toggler bg-dark' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='toggle-navigation'>
        <span className='navbar-toggler-icon'></span>
                </button>


                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                        <a className='nav-link' href='/#'>Home</a>
                        </li>

                    </ul>

                </div>
            </nav>
            </>
            )
    }
}

export default Navbar