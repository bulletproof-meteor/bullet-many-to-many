Login = function(username) {
  Meteor._localStorage.setItem('currentUser', username);
  Session.set('currentUser', username);
};

Logout = function() {
  Login(null);
};

AddCollaborator = function(username) {
  var currentApp = Session.get('currentApp');
  if(!currentApp) {
    throw new Error("You've not selected an app");
  }

  Meteor.call('addCollaborator', currentApp, username, function(err) {
    if(err) {
      console.log('collaborator adding failed!: ', err.message);
    } else {
      console.log('collaborator added!');
    }
  });
};

RemoveCollaborator = function(username) {
  var currentApp = Session.get('currentApp');
  if(!currentApp) {
    throw new Error("You've not selected an app");
  }

  Meteor.call('removeCollaborator', currentApp, username, function(err) {
    if(err) {
      console.log('collaborator removing failed!: ', err.message);
    } else {
      console.log('collaborator removed!');
    }
  });
};

Template.app.helpers({
  currentUser: function() {
    return Users.findOne(Session.get('currentUser'));
  },

  myApps: function() {
    var currentUser = Session.get('currentUser');
    return Apps.find({collaborators: currentUser});
  },

  currentApp: function() {
    return Apps.findOne(Session.get('currentApp'));
  },

  currentCollaborators: function() {
    var app = Apps.findOne(Session.get('currentApp'));
    if(app) {
      return Users.find({_id: {$in: app.collaborators}});
    }
  } 
});

Template.app.events({
  "change #myapps": function(event) {
    var el = $(event.target);
    Session.set('currentApp', el.val());
  }
});

Tracker.autorun(function() {
  var currentUser = Session.get('currentUser');
  Meteor.subscribe('currentUser', currentUser);
  Meteor.subscribe('myApps', currentUser);
});

Tracker.autorun(function() {
  var currentApp = Session.get('currentApp');
  Meteor.subscribe('getCollaborators', currentApp);
});

Meteor.startup(function() {
  var currentUser = Meteor._localStorage.getItem('currentUser');
  Session.set('currentUser', currentUser);
});