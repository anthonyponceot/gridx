define([
	"dojo/_base/declare",
	"dijit/Menu",
	"../Filter"
], function(declare, Menu, Filter){

	return declare(Menu, {
		grid: null,

		colId: null,

		leftClickToOpen: true,

		postCreate: function(){
			this.inherited(arguments);
			this._createMenuItems();
		},

		bindGrid: function(grid){
			//summary:
			//	Attach the menu with grid, so that it could do filter actions
			this.grid = grid;
			grid.filter._rules = grid.filter._rules || {};
		},

		_addFilter: function(key, rule){
			this.grid.filter._rules[key] = rule;
			this._doFilter();
		},

		_removeFilter: function(key){
			delete this.grid.filter._rules[key];
			this._doFilter();
		},

		_doFilter: function(){
			var filter = this.grid.filter,
				rules = filter._rules;
			filter.setFilter(function(row){
				for(var key in rules){
					if(!rules[key](row)){
						return 0;
					}
				}
				return 1;
			});
		}
	});
});
