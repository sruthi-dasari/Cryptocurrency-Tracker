import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyList} = this.props
    return (
      <div className="cryptocurrency-list-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          className="main-logo"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <ul className="currency-list-container">
          <li>
            <p className="list-title">Coin Type</p>
            <hr className="seperator" />
            <p className="list-title">USD</p>
            <hr className="seperator" />
            <p className="list-title">EURO</p>
          </li>
          {currencyList.map(eachItem => (
            <CryptocurrencyItem currencyDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
