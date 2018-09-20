import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Cards';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
<div>
    <div className="Hero">
        <div className="HeroGroup">
        <h1>Mike Butts </h1>
        <p> Web Developer </p>
        <Link to="/video">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-html.png')} width="50" />
          <img src={require('../images/logo-css.png')} width="50" />
          <img src={require('../images/logo-wordpress.png')} width="50" />
          <img src={require('../images/logo-rails.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-php.png')} width="50" />
        </div>
         <Wave />
        </div>
    </div>
</div>
  <div className ="Cards">
      <h2> Projects </h2>
      <div className="CardGroup">
          <Card 
            title="Jessica Photography"
            text="Photography Website"
            image={require('../images/jwright.png')} />
          <Card 
            title="Codelegy"
            text="Learn. Code. Socially."
            image={require('../images/wallpaper3.jpg')} />
          <Card 
            title="That Disney Dad"
            text="Wordpress family blog"
            image={require('../images/disney.png')} />
          <Card 
            title="ARKit 2"
            text="10 sections"
            image={require('../images/wallpaper4.jpg')} />
      </div>
  </div>

  <Section
    image={require('../images/wallpaper2.jpg')}
    logo={require('../images/myoiledpic.png')}
    title="Passion to Create"
    text="Since code is a usable art, a whole team of people are connected to the practice. From the client to the account managers, and including the business people, finance, the support team, QA team, designers, product managers and project managers. Code touches every single person in the organization and makes a difference to every single user that touches it (for good or bad)." />
  </div>
)

export default IndexPage
