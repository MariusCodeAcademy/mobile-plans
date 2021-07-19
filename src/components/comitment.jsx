import React, { Component } from 'react';
import CustomRadio from './common/customRadio';

class Comitment extends Component {
  handleRadio = () => {
    console.log('radio was pressed');

    // atvaizduoti 24 men. is CustomRadio komponento vidaus

    // pakeisti teksta is not selected i selected kai paspaudziam ant mygtuko

    // iskviesti handleRadio funkcija is CustomRadio componento

    //
  };
  render() {
    return (
      <div className="commitment-component">
        <div className="c__selection">
          <span className="c__select">
            <CustomRadio checked={!this.props.noCommitment} onClick={this.handleRadio}>
              24 men.
            </CustomRadio>
          </span>
        </div>
        <div className="c__selection">
          <span className="c__select">
            <CustomRadio checked={this.props.noCommitment} onClick={this.handleRadio}>
              Be isipareigojimu
            </CustomRadio>
          </span>
        </div>
      </div>
    );
  }
}

export default Comitment;
