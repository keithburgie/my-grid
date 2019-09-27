import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './styles/App.scss'
import projects from './data/projects.json'
import Hero from './components/Hero'
import { Container, Row, Column } from './components/Grid'

class App extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    this.setState({
      images: this.setImages()
    })
  }

  setImages() {
    const source = 'https://loremflickr.com/700/440/business?random='
    let images = []
    for (let i = 0; i <= projects.length; i++) {
      images.push(source + i)
    }
    return images
  }

  render() {
    const { images } = this.state

    return (
      <Fragment>
        <Hero
          title={"Hello!"}
          content={"This is some pretty sweet information, right here."}
          cta={"Learn More"}
          background={"https://keithburgie.github.io/assets/img/workspace-sm.jpg"}
        />
        <Container>
          <Row header={"Portfolio"}>
            {projects.length ?
              projects.reverse().map(project => (
                <Column key={project.id} classes={"md-6 lg-4 xl-3"}>
                  <h3>{project.name}</h3>
                  <img src={images[project.id]} alt={"Random from Flickr"} />
                  <p>{project.type}</p>
                  <p><em>{project.client}</em></p>
                </Column>
              ))
              : "Projects loading"
            }
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
