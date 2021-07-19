import React, { Component } from 'react';
import ListImage from '../static/checked.png';

class MobilePlan extends Component {
  render() {
    return (
      <div className="mobile-plan">
        <h6 className="plan__header">Mobilus START 1</h6>
        <h2 className="plan__dataAllow">1 GB</h2>
        <small className="plan__dataEU">Iš jų 1 GB ES/EEE</small>
        <p className="plan__min-sms">Neribotos MIN ir SMS</p>
        <div className="plan__features">
          <div className="hr"></div>
          <ul className="features__list">
            <li>
              <img className="features__check" src={ListImage} alt="check" />
              <span>M. parašas (6 mėn.)</span>
            </li>
            <li>
              <img className="features__check" src={ListImage} alt="check" />
              <span>Įrangos draudimas (3 mėn.)</span>
            </li>
          </ul>
          <div className="hr"></div>
        </div>
        <div className="plan__bottom">
          <div className="bottom__price-part">
            <h3 className="bottom__price">
              9,00 <span>&euro;/men</span>
            </h3>
            <small className="bottom__term">24 mėn. sutartis</small>
          </div>
          <button className="plan__cta">Domina</button>
        </div>
      </div>
    );
  }
}

export default MobilePlan;
