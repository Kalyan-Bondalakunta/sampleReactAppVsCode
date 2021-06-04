import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoescount: 0, bananascount: 0}

  onClickMangoBtn = () => {
    this.setState(prevState => ({mangoescount: prevState.mangoescount + 1}))
  }

  onClickBananaBtn = () => {
    this.setState(prevState => ({bananascount: prevState.bananascount + 1}))
  }

  render() {
    const {mangoescount, bananascount} = this.state

    return (
      <div className="bg-container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="fruit-count">{mangoescount}</span> mangoes{' '}
            <span className="fruit-count">{bananascount}</span> bananas
          </h1>
          <div className="cards-container">
            <div className="card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="card-img"
              />
              <button
                type="button"
                className="card-btn"
                onClick={this.onClickMangoBtn}
              >
                Eat Mango
              </button>
            </div>
            <div className="card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="card-img"
              />
              <button
                type="button"
                className="card-btn"
                onClick={this.onClickBananaBtn}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter