import React from 'react'
import Character from './components/Character'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      characters: []
    }
  }

  async componentDidMount() {
    const request = await fetch("https://thronesapi.com/api/v2/Characters")
    console.log(request)
    const response = await request.json()
    console.log(response)

    this.setState({
      characters: response.results
    })
  }

	render() {
		return(
			<>
			  <h1>Game of thrones</h1>
        <Character/>
			</>
		)
	}
}

export default App