import React, { Component } from 'react';
import Axios from 'axios';

export default class CountRepos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfRepos : 0
    }
  }

  async componentDidMount() {
    await Axios.get("https://api.github.com/users/roblindstrom/repos").then(res => {
      
      this.setState({
        numberOfRepos: res.data.length
      })
    })
    
  }


  render() {
    return (<div>
      Antal github repos: {this.state.numberOfRepos}
    </div>
    )
  }
}