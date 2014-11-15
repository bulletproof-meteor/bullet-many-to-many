Meteor.publish('currentUser', function(username) {
  return Users.find({_id: username});
});

Meteor.publish('myApps', function(username) {
  return Apps.find({colloborators: username});
});

Meteor.publish('getColloborators', function(appId) {
  var app = Apps.findOne({_id: appId});
  if(app) {
    return Users.find({_id: {$in: app.colloborators}});
  } else {
    this.ready();
  }
});