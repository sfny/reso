import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
import AvatarHeader from './AvatarHeader.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

if(Meteor.isClient) {
  Resolutions = new Mongo.Collection("resolutions")
  var getting = Session.get('Meteor.loginButtons.dropdownVisible')
}
export default class ResolutionsWrapper extends TrackerReact(React.Component) {
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

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    DocHead.setTitle(Meteor.userId());
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1>My Resolutions - {getting}</h1>
        <ResolutionsForm />
        <AvatarHeader />
        <ReactCSSTransitionGroup
          component="ul"
          className="resolutions"
          transitionName='resolutionLoad'
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}>
          {this.resolutions().map( (resolution)=>{
            return <ResolutionSingle key={resolution._id} resolution={resolution} />
          })}
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    )
  }
}
