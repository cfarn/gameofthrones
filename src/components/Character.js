import React from 'react'

class Character extends React.Component {
	render() {
		return(
			<div className='card col-3'>
				<img src={this.props.image} className="card-img-top" alt="character" />
				<div className='card-body'>
					<h3 className="card-title">{this.props.name}</h3>
					<p>{this.props.title}</p>
					{/* bouton pour les favoris */}
					<button type="button" className="btn btn-outline-primary" onClick={this.props.favorite}>Add Favorite</button>
				</div>
			</div>
		)
	}
}

export default Character