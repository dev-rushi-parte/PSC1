import React from 'react'
import Restaurent from './Restaurent'

function Restaurants(props) {
    return (
        <div className="container divider">
            <div className="cards">

                {props.restaurants.map((restaurants) => {
                    return (
                        <Restaurent key={restaurants.id} restaurants={restaurants} />
                    )
                })}


            </div>
        </div>
    )
}

export default Restaurants