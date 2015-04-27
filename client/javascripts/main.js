Meteor.startup(function() {
	Hooks.init();
});

Meteor.subscribe("rooms");
Meteor.subscribe("messages");
Meteor.subscribe('cards');
Meteor.subscribe('users');

Session.setDefault('alignment-filter', "all");
Session.setDefault('current-page', null);
Session.setDefault('removing', false);
Session.setDefault('setup', {});

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Hooks.onLoggedOut = function(userId) {
	Router.go('/');
};