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

Meteor.methods({
  addColloborator: function(appId, username) {
    Apps.update(appId, {$push: {colloborators: username}});
  },

  removeColloborator: function(appId, username) {
    Apps.update(appId, {$pull: {colloborators: username}});
  }
});