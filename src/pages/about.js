import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About MJ Meyer | Front-end Engineer" />
        <h1>About</h1>
        <p>
          I’m MJ Meyer, a front-end developer from Pretoria, South Africa. I
          love crafting amazing experiences with JavaScript, HTML and CSS and
          have been doing so for the last 10 years. I hang out on Twitter and
          would love to meet you 👋.
        </p>
        <h2>In Detail</h2>
        <p>
          I’m passionate about user experience design, development, and helping
          businesses tell their story. My current role is as lead front-end
          engineer on the InfoSlips product team. From a technical standpoint, I
          spend most of my time working with JavaScript, HTML5, and CSS3. On the
          JavaScript side, I mostly work with Angular, but I’m always exploring
          to learn something new. I’m a firm believer in TDD and Agile
          methodologies.
        </p>
        <h2>How I Got Here</h2>
        <p>
          After completing a one year web development course through CTU, I
          spent the next 5 years creating websites for small businesses at a web
          agency. Although I had worn many hats – I was fast tracked into a
          Creative Director role (and running the business, looong story) – I
          needed a challenge and I knew I would find fulfilment in a more
          developer focused role. Long story short, I joined the InfoSlips team
          and I couldn’t be happier!
        </p>
        <h2>When I’m Not Coding</h2>
        <p>
          I love to spend time with my beautiful wife Annelien, my daughter Ava,
          and chilling around a braai (it’s a bbq for those outside South
          Africa) with friends and family. I’m known to make some pretty wicked
          burgers, pork belly and pizzas on my Weber 😉 When I need some “me”
          time, I’m usually jamming some Xbox, Netflix and chill, or Crossfit to
          blow-off some steam.
        </p>
        <h2>Where I’m Going</h2>
        <p>
          My next goal is becoming a skilled full-stack developer. My love will
          always be front-end development, and I’m not sure if my full-time job
          title needs to be full-stack developer, but I would prefer having the
          option. InfoSlips has already started expanding to the USA and I would
          really love to move my little family there in the next few years. So
          hopefully I can update this bio sometime with a new location and
          skillset 😜
        </p>
      </Layout>
    )
  }
}

export default AboutPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
