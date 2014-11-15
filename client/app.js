Login = function(username) {
  Meteor._localStorage.setItem('currentUser', username);
  Session.set('currentUser', username);
};

Logout = function() {
  Login(null);
};

Template.app.helpers({
  currentUser: function() {
    return Users.findOne(Session.get('currentUser'));
  },

  myApps: function() {
    var currentUser = Session.get('currentUser');
    return Apps.find({colloborators: currentUser});
  },

  currentApp: function() {
    return Apps.findOne(Session.get('currentApp'));
  },

  currentColloborators: function() {
    var app = Apps.findOne(Session.get('currentApp'));
    if(app) {
      return Users.find({_id: {$in: app.colloborators}});
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
  Meteor.subscribe('getColloborators', currentApp);
});

Meteor.startup(function() {
  var currentUser = Meteor._localStorage.getItem('currentUser');
  Session.set('currentUser', currentUser);
});