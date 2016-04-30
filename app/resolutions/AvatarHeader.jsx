import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class AvatarHeader extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}>
        <h3>{Meteor.userId()}</h3>
        <h6>Favorite Resolutions</h6>
      </ReactCSSTransitionGroup>
    )
  }
}
