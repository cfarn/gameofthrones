import React from 'react'

class Continent extends React.Component {
    render() {
        return(
           <div className='card col-3'>
                <h5 className="card-title">{this.props.name}</h5>
           </div> 
        )
    }
}

export default Continent