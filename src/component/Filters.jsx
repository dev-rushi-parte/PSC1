import React from 'react'

function Filters({ filters, currentFilterBy, updateFilter }) {
    return (
        <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
                {filters.map((value, ind) => {

                    return (<div
                        key={ind}
                        className={`restaurant-option ${currentFilterBy === value ? "underline" : ""}`}
                        onClick={() => updateFilter(value)}
                    >
                        {value}
                    </div>
                    
                    )
                }
                )}

            </div>
        </div>
    )
}

export default Filters