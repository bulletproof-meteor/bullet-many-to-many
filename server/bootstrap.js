if(!Users.findOne()) {
  Users.insert({_id: 'arunoda', name: "Arunoda Susiripala"});
  Users.insert({_id: 'sacha', name: "Sacha Grief"});
  Users.insert({_id: 'tom', name: "Tom Coleman"});
  Users.insert({_id: 'pahan', name: "Pahan Sarathchandra"});
  Users.insert({_id: 'thanish', name: "Mohomad Thanish"});
}

if(!Apps.findOne()) {
  Apps.insert({name: "Kadira UI", colloborators: ["arunoda", "thanish"]});
  Apps.insert({name: "Discover Meteor", colloborators: ["arunoda", "sacha"]});
  Apps.insert({name: "Microscope", colloborators: ["tom", "sacha"]});
}