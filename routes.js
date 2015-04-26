Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'home',
		data: function() {
			Session.set('current-page', null);
		}
	});

	this.route('cards', {
		path: '/cards',
		template: 'cards',
		data: function() {
			Session.set('current-page', 'cards');
		}
	});

	this.route('rules', {
		path: '/rules',
		template: 'rules',
		data: function() {
			Session.set('current-page', 'rules');
		}
	});

	this.route('admin', {
		path: '/admin',
		template: 'admin',
		data: function() {
			Session.set('current-page', 'admin');
		}
	});

	this.route('test', {
		path: '/test',
		template: 'setup',
		data: function() {
			Session.set('current-page', null);
		}
	});
});