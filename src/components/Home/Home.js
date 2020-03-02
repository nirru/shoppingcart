import React from 'react';
import './home.css';
import '../../styles/loader.css';
import {PRODUCT} from '../../dummy/product';
import {decreaseItemQuantity, deleteItem, getCartItems, increaseItemQuantity} from '../../actions';
import {cartItemSelector} from '../../selectors';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ProductDialog from '../dialog/Dialog';

let total = 0;
class Home extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      coupon:0,
      value:'',
      item:undefined,
    };

    const {dispatch} = this.props;
    dispatch(getCartItems());
  }


  handleChange(e) {
    this.setState({value:e.target.value});
  }

  deleteItem = (id)=>{
    const {dispatch} = this.props;
    dispatch(deleteItem(id));
  };

  openDialog = (item) => {
    this.setState({
      item:item,
    });
  };

  onDialogClose = () => {
    this.setState({item:undefined});
  }

  quantitySelection = (id,originalPrice,k)=>{
    const {dispatch} =  this.props;
    this.setState({value:''});
    const product = PRODUCT.find(item=>item.id === id);
    if (k === 1){
      dispatch(increaseItemQuantity(id,product.price));
    } else {
      dispatch(decreaseItemQuantity(id,product.price));
    }
  };

  calculateSubTotal = (data)=>{
    let price = 0;
    data.map(item=>{
      price = price + item.price;
      return item;
    });
    // price = price + 100;
    total = price;
    return  parseFloat(price).toFixed(2);
  };

  calculateTotalWithShipping = (data)=>{
    const result = parseFloat(this.calculateSubTotal(data)) + 100;
    total = result;
    return parseFloat(result).toFixed(2);
  }

  totalAfterCoupon = () => {
    // console.log('sds');
    if (this.state.value !== ''){
      const result = total - 100;
      document.getElementById('total-cost').innerHTML = parseFloat(result).toFixed(2);
    } else {
      alert('please enter coupon code');
    }
  }

  render() {
    const {cart,fetched} = this.props;
    const {coupon,item} = this.state;
    return (
      <div>
        {item !== undefined ? <ProductDialog item = {item} close = {this.onDialogClose}/> : null};
        <div className="heading">
          <h1>
            Shopping Cart
          </h1>


        </div>

        <div className="cart transition is-open">



          <div className="table">


            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center ">Price(Inr)</div>
              <div className="col col-qty align-center">QTY</div>
              <div className="col"></div>
              <div className="col">Total(Inr)</div>
            </div>

            {fetched === true ? cart.map (item=>{
              return  <div key={item.id} className="layout-inline row">

                <div className="col col-pro layout-inline">
                  <img src={item.imgUrl} alt={item.name}/>
                  <p >{item.name}</p>
                  <br/>
                  <div className="product-desc">
                    <p>Size : {item.size}</p>
                    <p className="prod-color">Color:{item.color}</p>
                  </div>

                </div>
                <div className="col col-price col-numeric align-center ">
                  <p> {parseFloat(item.price/item.quantity)}</p>
                </div>

                <div className="col col-qty layout-inline">
                  <a href="javascript:void(0)" className="qty qty-minus" onClick={()=>this.quantitySelection(item.id,item.price,0)}>-</a>
                  <input type="numeric" value={item.quantity} disabled/>
                  <a href="javascript:void(0)" className="qty qty-plus" onClick={()=>this.quantitySelection(item.id,item.price,1)}>+</a>
                </div>

                <div className="col col-vat col-numeric">
                  <button className="delete-btn" onClick={()=>this.deleteItem(item.id)}>
                    Delete
                  </button>
                  <button className="edit-btn" onClick={()=>this.openDialog(item)}>
                    Edit
                  </button>
                </div>

                <div className="col col-total col-numeric"><p> {parseFloat(item.price).toFixed(2)}</p>
                </div>
              </div>;
            }) : null}

            {fetched === true ?  <div className="tf">
              <div className="row layout-inline">
                <div className="col">
                  <p>Sub Total</p>
                </div>
                <div className="col"><p >{this.calculateSubTotal(cart)}</p></div>
              </div>

              <div className="row layout-inline">
                <div className="col">
                  <p>Shipping</p>
                </div>
                <div className="col">
                  <p>Rs 100</p>
                </div>
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Apply Coupon</p>
                </div>
                <div className="col">
                  <input placeholder="coupon code" value={this.state.value} style={{marginRight:'10px'}} onChange={this.handleChange}/>

                  <a href="javascript:void(0)" className="btn btn-update" onClick={()=>this.totalAfterCoupon('ss')}>Apply</a>
                </div>
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Total</p>
                </div>
                <div className="col"><p id="total-cost">{this.calculateTotalWithShipping(cart)}</p></div>
              </div>
            </div> : null}

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const cart = cartItemSelector(state);
  return cart ? {
    cart:cart.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};
export default compose(withRouter,connect(mapStateToProps,undefined))(Home);

