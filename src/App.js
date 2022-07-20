import React from 'react'
import Character from './components/Character'

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

  handleFavoriteClick(character) {
    // this.setState({favorites: character})
    // création d'un clone du tableau 
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
			  <h1 className='text-center'>Game of thrones</h1>
        <div className='row gap-3 justify-content-center'>
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
        
			</div>
		)
	}
}

export default App