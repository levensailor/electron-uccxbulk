import React from 'react';
import config from '../../../config';

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
    this.props.login();
  }
  render() {
    var err;
    var msg = this.props.message;
    var displayLogin = this.dispLogin();
    var dcreds = {
      s: config.i, u: config.u, p: config.p
    };
    if(msg && msg.name === 'StatusCodeError') {
      err = true;
    }
    return (
      <div style={displayLogin} className='panel panel-default'>
        <div className='panel-heading' style={{textAlign: 'center'}}>
          <strong style={{fontSize: '1.2em'}}>UCCX Login</strong>
        </div>
        <a className='col-sm-offset-1'
           style={{
             display: err ? 'block': 'none',
             marginTop: '20px',
             marginBottom: '20px'
           }}>
          <span style={{fontSize: '1.1em'}}
                className='badge'>Authentication Error</span>
        </a>
        <div
          style={{margin: '20px 20px 20px 20px'}}
          className='form-horizontal'>
          <div className='form-group'>
            <label className='col-sm-2 control-label'> Server: </label>
            <div className='col-sm-10'>
              <input
                ref='ip'
                defaultValue={dcreds.s}
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
                defaultValue={dcreds.u}
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
                defaultValue={dcreds.p}
                type='password'
                className='form-control'
                placeholder='Password'/>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <a
                style={{color: 'green', fontSize: '1.5em'}}
                className='glyphicon glyphicon-log-in'
                onClick={this.handleLogin}>
                {/*<strong style={{marginLeft: '10px'}}>LOGIN</strong>*/}
              </a>
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
