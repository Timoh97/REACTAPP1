import React from 'react'


export default class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    render (){
        return (
<div className='col-lg-9'>\
<h4 className='m-1 p-2 border-bottom'>Login</h4>
{/* Email starts */}
<div className='form-group form-row'>
<label className='col-lg-4'>Email</label>
<input type='text' value={this.state.email}  className='form-control'/>
</div>
{/* Email ends */}
<div className='form-group form-row'>
<label className='col-lg-4'>Password</label>
<input type='password' value={this.state.password} className='form-control'/>
</div>
</div>
        )
    }
}