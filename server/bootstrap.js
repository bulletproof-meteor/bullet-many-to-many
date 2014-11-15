if(!Users.findOne()) {
  Users.insert({_id: 'arunoda', name: "Arunoda Susiripala"});
  Users.insert({_id: 'sacha', name: "Sacha Grief"});
  Users.insert({_id: 'tom', name: "Tom Coleman"});
  Users.insert({_id: 'pahan', name: "Pahan Sarathchandra"});
  Users.insert({_id: 'thanish', name: "Mohomad Thanish"});
}

if(!Apps.findOne()) {
  Apps.insert({_id: "kadira", name: "Kadira UI"});
  Apps.insert({_id: "dm", name: "Discover Meteor"});
  Apps.insert({_id: "micro", name: "Microscope"});

  Meteor.call('addCollaborator', "kadira", "arunoda");
  Meteor.call('addCollaborator', "kadira", "pahan");

  Meteor.call('addCollaborator', "dm", "sacha");
  Meteor.call('addCollaborator', "dm", "tom");

  Meteor.call('addCollaborator', "micro", "tom");
}