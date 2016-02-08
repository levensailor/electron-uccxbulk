import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: null,
      username: null,
      password: null
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    let [ip, user, pass] =
      [this.refs.ip.value, this.refs.user.value, this.refs.pass.value];
    loginEvt.emit('login', {ip: ip, user: user, pass: pass});
    loggedIn.on('loggedIn', (skills) => {
      console.log(skills);
    })
  }
  render() {
    var displayLogin = this.dispLogin();
    var dcreds = {
      s: '', u: '', p: ''
    };
    return (
      <div style={displayLogin} className='panel panel-primary'>
        <h4 className='col-sm-offset-1'> UCCX Login </h4>
        <div
          style={{margin: '20px 20px 20px 20px'}}
          className='form-horizontal'>
          <div className='form-group'>
            <label className='col-sm-2 control-label'> Server: </label>
            <div className='col-sm-10'>
              <input
                ref='ip'
                type='text'
                className='form-control'
                placeholder='Server IP'/>
            </div>
          </div>
          <div className='form-group'>
            <label className='col-sm-2 control-label'> UserId: </label>
            <div className='col-sm-10'>
              <input
                ref='user'
                type='text'
                className='form-control'
                placeholder='User Id'/>
            </div>
          </div>
          <div className='form-group'>
            <label className='col-sm-2 control-label'> Password: </label>
            <div className='col-sm-10'>
              <input
                ref='pass'
                type='password'
                className='form-control'
                placeholder='Password'/>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <button
                className='btn btn-sm btn-primary'
                onClick={this.handleLogin}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  dispLogin() {
    return {
      display: (this.props.loggedIn) ? 'none': 'block',
      margin: '20px 20px 20px 20px'
    };
  }
}
