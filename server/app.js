Meteor.publish('currentUser', function(username) {
  return Users.find({_id: username});
});

Meteor.publish('myApps', function(username) {
  return Apps.find({collaborators: username});
});

Meteor.publish('getCollaborators', function(appId) {
  var app = Apps.findOne({_id: appId});
  if(app) {
    return Users.find({_id: {$in: app.collaborators}});
  } else {
    this.ready();
  }
});

Meteor.methods({
  addCollaborator: function(appId, username) {
    Apps.update(appId, {$push: {collaborators: username}});
  },

  removeCollaborator: function(appId, username) {
    Apps.update(appId, {$pull: {collaborators: username}});
  }
});