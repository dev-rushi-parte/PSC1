import React from 'react'
import logo from '../assets/logo.svg'

const navbarOption = [
    {
        iconName: "person_outline",
        lable: "Sign In"
    },
    {
        iconName: "shopping_bag",
        lable: "Cart"
    },
    {
        iconName: "support",
        lable: "Help"
    },
    {
        iconName: "search",
        lable: "Search"
    }
]

function Navbar() {
    return (
        <section className="navbar">
            <div className="container">
                <img className="logo" src={logo} alt='logo' />

                <div className="location">
                    <span className="city"> Pune</span>
                    <span className="state">Maharashtra, India</span>
                </div>
                <div className="navbar-options">

                    {navbarOption.map((navbarOption) => (

                        <div key={navbarOption.iconName} className="navbar-option">
                            <span className="material-icons"> {navbarOption.iconName}</span> Sign In
                        </div>

                    ))}


                </div>
            </div>

        </section>
    )
}

export default Navbar