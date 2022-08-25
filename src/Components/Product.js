import React from 'react'


class Product extends React.Component {


    state ={
        product:this.props.product
     }


    render (){

        return (
        <div className='col-lg-6'>
            <div className='card m-2'>
                <div className='card-body'>
                    <div className='text-muted'>Products #{this.state.product.id}
                    
                    <span onClick={()=>{this.props.onDelete(this.state.product)}} className='pull-right hand-icon'>
                     <i className='fa fa-times'></i>
                    </span>
                    </div>

                    <h5 className='p-5 border-top'>{this.state.product.productName}</h5>
                    <h5>$ {this.state.product.price}</h5>
                </div>
                <div className='card-footer text-right'>
                    <div className='float-left'>
                        <span className='badge'>{this.state.product.quantity}</span>
                        <div className='btn-group'>
                            <button className='btn btn-outline-primary' onClick={()=>{this.props.onIncrement(this.state.product,10)}}>+</button>
                            <button className='btn btn-outline-success' onClick={()=>{this.props.onDecrement(this.state.product,0)}}>-</button>
                        </div>
                    </div>
                    <div className='float-right'>{this.props.children}</div>
                    
                </div>
            </div>
        </div>
        )
    }
}

export default Product