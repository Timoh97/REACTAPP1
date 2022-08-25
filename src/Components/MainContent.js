import React from 'react'


class MainContent extends React.Component {
    state ={
        pageTitle:'Customers',
        customerCount: 5,
        customers: [
            
            {id: 1, name: 'Jeff',phone: null,photo:'https://picsum.photos/id/1014/60',address: {city:'NewYork'} },
            {id: 2, name: 'Mike',phone: '0786001789', photo:'https://picsum.photos/id/1015/60' ,address: {city:'AddisAbaba'} },
            {id: 3, name: 'Andrew',phone:null,photo:'https://picsum.photos/id/1012/60',address: {city:'Antananarivo'}  },
            {id: 4, name: 'Jake',phone: '0787001789',photo:'https://picsum.photos/id/1016/60',address: {city:'Geneva'}  },
            {id: 5, name: 'Joe',phone: '0782001789' ,photo:'https://picsum.photos/id/1018/60',address: {city:'Zurich'} }            
        ]

    }
    getCustomerRow =()=> {
        return (
            this.state.customers.map((cust)=>{
                return ( 
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td> <img src={cust.photo} alt=''/> </td>
                    <td>{cust.name}</td>
                    <td>{(cust.phone==null)? 'No Phone' : cust.phone }</td>
                    <td>{cust.address.city}</td>
                </tr>)
            })
        )
    }
    onRefreshClick =()=>{
        this.setState({
            customerCount: 7
        })
    }
    render (){

        return(
            <>
            <div>
                <h2 className='border-bottom m-1 p-1'>{this.state.pageTitle}
                <span className='badge badge-secondary m-2'>{this.state.customerCount}</span>
                <button className='btn btn-info' onClick={this.onRefreshClick}>Refresh</button>
                </h2>
                

                <table className='table'>
                 <thead>
                    <tr>
                        <th>id</th>
                        <th>Photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City Name</th>
                    </tr>
                 </thead>
                 <tbody>

                 {this.getCustomerRow ()}
                 </tbody>
                </table>
            </div>
            </>
        )
    }
}


export default MainContent