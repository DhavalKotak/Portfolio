import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Projects } from './Projects';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/nav';
import { Footer } from './components/Footer'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
            <Switch>
              <Layout>
                <Route exact path="/" component={Header} />
                <Route path="/projects" component={Projects} />
              </Layout>
            </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;