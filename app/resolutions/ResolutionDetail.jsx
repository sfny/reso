import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ResolutionDetail extends TrackerReact(Component) {
  constructor() {
      super();

      this.state = {
        subscription: {
          resolutions: Meteor.subscribe("userResolutions")
        }
      }
  }
  componentWillUnmount() {
      this.state.subscription.resolutions.stop();
  }

  resolution() {
      return Resolutions.findOne(this.props.id);
  }

	render() {
    console.log(this.resolution());
    let res = this.resolution();

    if(!res) {
      return(<div>loading...</div>);
    }
		return (
			<div>
				<h1>{res.text}</h1>
			</div>
		)
	}
}
