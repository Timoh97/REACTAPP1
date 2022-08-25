import React from 'react'


export default class Login extends React.Component {
    state = {
        email: 'qbnnn',
        password: 'hh78',
        message : ''
    }

    onLoginClick = async()=>{
        var response = await fetch(`http://localhost:5000/users?=${this.state.email}&password=${this.state.password}`,{method:'GET'})
        console.log (response)
        var body = await response.json()
        if (body.length>0){
               
              this.setState({message: <span className='text-success'>successfully logged In </span>})
        }else{
            this.setState({message: <span className='text-danger'>Please, Check your password or email</span>})
        }
    }
    
    render (){
        return (
<div className='col-lg-9'>
<h4 className='m-1 p-2 border-bottom'>Login</h4>
<p>{this.state.message}</p>
{/* Email starts */}
<div className='form-group form-row'>
<label className='col-lg-4'>Email</label>
<input type='text' value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}} className='form-control'/>
</div>
{/* Email ends */}
<div className='form-group form-row'>
<label className='col-lg-4'>Password</label>
<input type='password'  value={this.state.password} className='form-control' onChange={(event)=>{this.setState({password:event.target.value})}} />
</div>
<div>
    <button className='btn btn-primary' onClick={this.onLoginClick}>Login</button>
</div>
</div>
        )
    }
}