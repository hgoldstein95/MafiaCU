Meteor.publish('cards', function() {
	return Cards.find({});
});

Meteor.publish('users', function() {
	return Meteor.users.find({});
});