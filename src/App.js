import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Place from './components/Place'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isLoading: true,
    travelList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      const filteredData = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({isLoading: false, travelList: filteredData})
    }
  }

  renderTravelList = () => {
    const {travelList} = this.state
    return (
      <ul>
        {travelList.map(eachPlace => (
          <Place key={eachPlace.id} details={eachPlace} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <h1>Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderTravelList()
        )}
      </div>
    )
  }
}

export default App
