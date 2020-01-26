import React, {Component} from 'react';
import IPAddress from './IPAddress.js';
import Spinner from './Spinner';

class IPAddressContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ip: '',
      city : '',
      country : '',
      loc : '',
      org : '',
      postal : '',
      timezone : '',
      loading : true,
    };
  }

  async componentDidMount() {
    let result = await fetch('https://ipinfo.io/json?token=6c6f02ef23ccab');
    result = await result.json();
    let {ip, city, country, loc, org, postal, timezone} = result;

    this.setState({
      ip, 
      city,
      country,
      loc,
      org, 
      postal,
      timezone,
      loading : false,
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner /> 
    }
    return (
      <>
        <IPAddress {...this.state}
          // ip={this.state.ip}
          // city={this.state.city}
          // country={this.state.country}
          // loc={this.state.loc}
          // org={this.state.org}
          // postal={this.state.postal}
          // timezone={this.state.timezone}
        />
      </>
      );
  }
}

export default IPAddressContainer;