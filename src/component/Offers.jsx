import React from 'react'

function Offers(props) {
    return (<section className="offers">
        <div className="container">
            {props.offers.map((el, index) => (
                <img key={index} className="offer" alt='img' src={el} />
            ))}


        </div>
    </section>

    )
}

export default Offers