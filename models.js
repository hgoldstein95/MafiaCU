MafiaRooms = new Meteor.Collection("MafiaRooms");
Cards = new Meteor.Collection('cards');

MafiaRooms.allow({
	'insert': function(userId, doc) {
		var userId = Meteor.userId();
		if(userId && MafiaRooms.find({mod: userId}).fetch().length == 0){
			return true;
		}
		return false;
	},
	'remove': function(userId, doc) {
		var userId = Meteor.userId();
		if(userId && MafiaRooms.find({mod: userId}).fetch().length == 1){
			return true;
		}
		return false;
	},
	'update': function(userId, doc) {
		if(Meteor.user()){
			return true;
		}
		return false;
	}

})

Cards.allow({
	'insert': function(userId, doc) {
		var usr = Meteor.user();
		if(usr && usr.profile.admin && Cards.find({'title': doc.title}).fetch().length == 0)
			return true;
		return false;
	},
	'remove': function(userId, doc) {
		var usr = Meteor.user();
		if(usr && usr.profile.admin)
			return true;
		return false;
	},
	'update': function(userId, doc) {
		var usr = Meteor.user();
		if(usr && usr.profile.admin)
			return true;
		return false;
	}
});

Meteor.users.allow({
	'insert': function() {
		return false;
	},
	'remove': function() {
		return false;
	},
	'update': function(userId, doc) {
		var usr = Meteor.user();
		if(usr && usr.profile.admin)
			return true;
		return false;
	}
});

Meteor.users.deny({
	'insert': function() {
		return true;
	},
	'remove': function() {
		return true
	},
	'update': function(userId, doc) {
		var usr = Meteor.user();
		if(usr && usr.profile.admin)
			return false;
		return true;
	}
});