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

  Meteor.call('addColloborator', "kadira", "arunoda");
  Meteor.call('addColloborator', "kadira", "pahan");

  Meteor.call('addColloborator', "dm", "sacha");
  Meteor.call('addColloborator', "dm", "tom");

  Meteor.call('addColloborator', "micro", "tom");
}