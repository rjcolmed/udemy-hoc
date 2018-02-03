import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'


class Header extends React.Component {

  authButton = () => {
    if( this.props.authenticated ) {
      return <button onClick={ () => this.props.authenticate(false) }>Sign out</button>
    }
    return <button onClick={() => this.props.authenticate(true)}>Sign in</button>
  }

  render() {
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/resources'>Resources</Link>
          </li>
          <li className='nav-item'>
            { this.authButton() }
          </li>
        </ul>

      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    authenticate: actions.authenticate
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)