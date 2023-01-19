// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {isGenerate: 0}

  generateNumber = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({isGenerate: getRandomNumber})
  }

  render() {
    const {isGenerate} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            alt="button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="random-number">{isGenerate}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
