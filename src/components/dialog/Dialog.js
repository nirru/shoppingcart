import React from 'react';
import './dialog.css';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {increaseItemQuantity, setItemQuantity} from '../../actions';
import {PRODUCT} from '../../dummy/product';
class ProductDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: this.props.item.color,size:this.props.item.size,value:this.props.item.quantity};
  }

  closeDialog = () => {
    this.props.close();
  };
  handleChangeForColor = (event) =>{
    this.setState({color: event.target.value});
  };

  handleChangeForSize = (event) =>{
    this.setState({size: event.target.value});
  };

  handleQuantityChange = (event) =>{
    this.setState({value: event.target.value});
  };

  save = (id) => {
    if (this.state.value > 5){
      alert('please reduce the item quantity below or upto 5');
    }else {
      this.props.close();
      const {dispatch} = this.props;
      const product = PRODUCT.find(item=>item.id === id);
      dispatch(setItemQuantity(id,this.state.value,product.price,this.state.size,this.state.color));
    }
  }

  render() {
    const {item} = this.props;
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={()=>this.closeDialog()}>&times;</span>
          <div className="root">
            <div className="column">
              <img src={item.imgUrl} alt={item.name}/>
            </div>
            <div className="column">
              <p>Name: {item.name}</p>
              <p>
                Pick your favorite Color:
                <select value={this.state.color} onChange={this.handleChangeForColor}>
                  {item.colors.map(item=>{
                    return <option key={item.id} value={item.color}>{item.color}</option>;
                  })}
                </select>
              </p>
              <p>
                Pick your Size:
                <select value={this.state.size} onChange={this.handleChangeForSize}>
                  {item.sizes.map(item=>{
                    return <option key={item.id} value={item.size}>{item.size}</option>;
                  })}
                </select>
              </p>
              <p>
                quantity:<input type="number" step="1" 
                  pattern="\d+" 
                  value={this.state.value} 
                  onChange={this.handleQuantityChange}
                  min="1"
                  max="5"/>

                  (upto 5 item you can add)
              </p>
              <button onClick={()=>this.save(item.id)}>Save</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default compose(connect(undefined,undefined))(ProductDialog);