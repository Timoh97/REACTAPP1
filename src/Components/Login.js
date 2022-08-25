import React from 'react'


export default class Login extends React.Component {
    render (){
        return (
<div className='col-lg-9'>\
<h4 className='m-1 p-2 border-bottom'>Login</h4>
{/* Email starts */}
<div className='form-group form-row'>
<label className='col-lg-4'>Email</label>
<input type='text' className='form-control'/>
</div>
{/* Email ends */}
<div className='form-group form-row'>
<label className='col-lg-4'>Password</label>
<input type='password' className='form-control'/>
</div>
</div>
        )
    }
}