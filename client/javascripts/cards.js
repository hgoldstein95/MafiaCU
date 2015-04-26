Template.cards.events({
	'click #expand-role': function(evt) {
		$(evt.target).parent().parent().next('.panel-body').toggle();
	},
	'click #expand-all': function(evt) {
		$('.panel-body').toggle();
	}
});

Template.cards.helpers({
	'cards': function() {
		if(Session.get('alignment-filter') === 'all')
			return Cards.find({'alignment': 'success'}).fetch()
				.concat(Cards.find({'alignment': 'danger'}).fetch())
				.concat(Cards.find({'alignment': 'warning'}).fetch());
		else
			return Cards.find({'alignment': Session.get('alignment-filter')}).fetch();
	},
	'thirdParty': function(card) {
		return card.alignment == "warning";
	}
});