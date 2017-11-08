import React from 'react';
import axios from 'axios';
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: null
    }
  }

  async componentWillMount() {
    const response = await axios.get('https://api.ipify.org?format=json')
    this.setState({ ip: response.data.ip });
  }

  render() {
    return(
      <div>{this.state.ip}</div>
    );
  }
}
