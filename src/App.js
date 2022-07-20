import React from 'react'
import Character from './components/Character'
import Favorite from './components/Favorite'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      characters: [],
      favorites: []
    }
  }

  async componentDidMount() {
    const request = await fetch("https://thronesapi.com/api/v2/Characters")
    // console.log(request)
    const response = await request.json()
    // console.log(response)

    this.setState({
      characters: response
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    console.log(this.state)
  }

  // méthode pour les favoris
  handleFavoriteClick(character) {
    // création d'un clone du tableau grâce à la destructuration 
    const clonedFavorites = [...this.state.favorites]
    clonedFavorites.push(character)
    // mise à jour du tableau cloné
    this.setState({
      favorites: clonedFavorites
    })
    console.log(character)
  }

	render() {
    console.log(this.state)
		return(
			<div className='container'>
			  <h1 className='text-center p-5'>Game of thrones</h1>
        <div className='row gap-3 gy-3 justify-content-center'>
          {
            // ajout d'une clé index selon les recommandations
            this.state.characters.map((character, index) => {
              return(
                <Character
                  key = {index}
                  name = {character.fullName}
                  title = {character.title}
                  image = {character.imageUrl}
                  favorite = {() => {
                    this.handleFavoriteClick(character)}
                  }
                />
              )
            })
          }
        </div>
        
        <div className='row gap-3 gy-3 justify-content-center'>
          <h2 className='text-center p-5'>Favoris</h2>
          {
            this.state.favorites.map((favorite, index) => {
              return(
                <Favorite
                  key = {index}
                  name = {favorite.fullName}
                />
              )
            })
          }
        </div>
        
			</div>
		)
	}
}

export default App