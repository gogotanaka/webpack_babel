import React from 'react';
import axios from 'axios';
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: null
    }
  }

  componentWillMount() {
    axios.get('https://api.ipify.org?format=json')
    .then((response) => {
      this.setState({ ip: response.data.ip })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>{this.state.ip}</div>
    );
  }
}
