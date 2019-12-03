import React, {Component} from 'react'


//Redux
import { bindActionCreators } from 'redux';
import { setData } from '../../redux/actions/changeData';
import { connect } from 'react-redux';

class Operation extends Component {
  handleClick = (e) => {
    e.preventDefault();
    let item = this.props.values;
    var value;
    switch (this.props.type) {
      case 'Add':
        value = parseFloat(item.value1) + parseFloat(item.value2)
        this.props.setData({ value1: '', value2: '', result: value});
        break;

      case 'Substract':
        value = parseFloat(item.value1) - parseFloat(item.value2)
        this.props.setData({ value1: '', value2: '', result: value });
        break;

      case 'Multiply':
        value = parseFloat(item.value1) * parseFloat(item.value2)
        this.props.setData({ value1: '', value2: '', result: value });
        break;

      case 'Devide':
        if(item.value2 === '0') {
          alert('cannot devide by 0');
          return;
        }
        value = parseFloat(item.value1) % parseFloat(item.value2)
        this.props.setData({ value1: '', value2: '', result: value });
        break;
    
      default:
        break;
    }
  }

  render() {
    return (
      <button className='btn_style' onClick={this.handleClick}>
        {this.props.title}
        <p style={{ fontSize: 'medium', marginTop: 5 }}> {this.props.type}</p>
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Operation);
