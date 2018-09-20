import React, { Component } from 'react';
import Link from 'gatsby-link'
import './Header.css'


class header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div>
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>  
        <div className="HeaderGroup">
            <Link to="/"><img src={require('../images/x.png')} width="30"/></Link>
            <Link to="/courses">Home</Link>
            <Link to="/courses">Projects</Link>
            <Link to="/courses">Contact</Link>
            <Link to="/courses"><button>Make Payment</button></Link>
        </div>
      </div>

  </div>
    );
  }
}

export default header;
