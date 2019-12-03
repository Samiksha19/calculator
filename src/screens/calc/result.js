import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultComponent extends Component {
  render() {
    let { result } = this.props.values;
    return (
      <div className="result" key={'new'}>
        <p style={{ fontSize: 'medium' }}>Result</p>
        <h3 className='result_value'>{result || '0'}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { values } = state
  return { values }
}

export default connect(mapStateToProps, null)(ResultComponent);