

import React from 'react'
import Product from './Product'

class ShoppingCart extends React.Component {

state ={
    products:[
        {id:1,productName:'iPhone',price:89000, quantity:0},
        {id:2,productName:'HTC',price:89000, quantity:0},
        {id:3,productName:'Samsung',price:89000, quantity:0},
        {id:4,productName:'OPPO',price:89000, quantity:0},
        {id:5,productName:'Techno',price:89000, quantity:0},
        {id:6,productName:'Redmi',price:89000, quantity:0}

]
}

handleIncrement =(product,maxVal)=>{
    let allProducts=[...this.state.products];
    let index = allProducts.indexOf(product);
    // console.log(index)
    // console.log(allProducts[index])
    if (allProducts[index].quantity<maxVal){
        allProducts[index].quantity++
        this.setState({products:allProducts})
    }

}
handleDecrement =(product,minVal)=>{
    let allProducts=[...this.state.products];
    let index = allProducts.indexOf(product);
    // console.log(index)
    // console.log(allProducts[index])
    if (allProducts[index].quantity>minVal){
        allProducts[index].quantity--
        this.setState({products:allProducts})
    }

}
//executes upon clicking delete button
handleDelete = (product)=>{
//index of product
let allProducts=[...this.state.products];
let index = allProducts.indexOf(product);
if(window.confirm('Ready to delete?'))
//delete product based on index
allProducts.splice(index,1)
//update the set state method
this.setState({products:allProducts}
)
}
    render (){
        return (
            <div className='container-fluid'>
                <h4>Shopping Cart</h4>
                <div className='row'>
                    {this.state.products.map((product)=>{
                        return <Product key={product.id} product={product} onDelete={this.handleDelete} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement}>
                            <button className='btn btn-outline-primary'>Buy Now</button>
                        </Product>
                    })}
                </div>
            </div>
        )
    }
}

export default ShoppingCart