import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {currencyDetails} = this.props
    const {
      currencyName,
      usdValue,
      euroValue,
      id,
      currencyLogo,
    } = currencyDetails
    return (
      <li className="list-item-container">
        <div>
          <img
            className="currency-logo"
            src={currencyLogo}
            alt={currencyName}
          />
          <p className="currency-name">{currencyName}</p>
        </div>
        <hr className="seperator" />
        <p className="usd-value">{usdValue}</p>
        <hr className="seperator" />
        <p className="euro-value">{euroValue}</p>
      </li>
    )
  }
}

export default CryptocurrencyItem
