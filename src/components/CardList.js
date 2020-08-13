import React from 'react'
import Cards from 'components/Cards'

const CardList = (props) => {
    return (
        <div>
           {props.profile.map((profile, index) => <Cards key={index} {...profile} /> )} 
        </div>
    )
}

export default CardList
