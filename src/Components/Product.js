import React from 'react'


class Product extends React.Component {


    state ={
        product:this.props.product
     }


    render (){
        // console.log (this.state.product.photo)
        return (
        <div className='col-lg-6'>
            <div className='card m-2'>
                <div className='card-body'>
                    <div className='text-center text-muted'>Products #{this.state.product.id}
                    
                    <span onClick={()=>{this.props.onDelete(this.state.product)}} className='pull-right hand-icon'>
                     <i className='fa fa-times'></i>
                    </span>
                    </div>


                    <h5 className='text-center text-primary p-5 border-top'>{this.state.product.productName}</h5>
                    <div style={{margin: 'auto', padding:'auto'}}><img className='pic' src={this.state.product.photo} alt="product" height=""></img></div>
                    <h5 className='text-center'>Ksh {this.state.product.price}</h5>
                </div>
                <div className='card-footer text-right'>
                    <div className='float-left'>
                        <span style={{fontSize:'1em'}} className='badge'>{this.state.product.quantity}</span>
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