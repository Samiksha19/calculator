import React, { Component } from 'react';
import './index.css';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setData } from '../../redux/actions/changeData';

//Other Components
import Operation from './operation';
import ResultComponent from './result';

//helper
import { stripAmount } from '../../lib/helpers';

class index extends Component {

  changeValue = (e) => {
    const regEx = /^[0-9\b]+$/;
    if (e.target.value === '' || regEx.test(e.target.value)) {
      e.target.name === 'value1' ? this.props.setData({ value1: e.target.value, value2: this.props.values ? this.props.values.value2 : '' })
        : this.props.setData({ value1: this.props.values ? this.props.values.value1 : '', value2: e.target.value })
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <form style={{ width: '100%' }}>
          <label className='title'>
            Enter Value 1:
          </label><br />
          <input type="text" value={this.props.values.value1} name="value1" onChange={this.changeValue} />
          <br /><br />
          <label className='title'>
            Enter Value 2:
          </label><br />
          <input type="text" value={this.props.values.value2} name="value2" onChange={this.changeValue} />
        </form>
        
        <div className='operation_view'>
          <Operation title={'+'} type='Add' />
          <Operation title={'-'} type='Substract' />
        </div>
        <div className='operation_view'>
          <Operation title={'x'} type='Multiply' />
          <Operation title={'÷'} type='Devide' />
        </div>

        <ResultComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { values } = state
  return { values }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setData
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(index);
