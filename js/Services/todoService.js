/*global define*/
'use strict';

define([],function(){
	return function(){

		var todos = [ {
			text : 'learn angular',
			done : true
		}, {
			text : 'build an angular app',
			done : false
		} ];
		return {
			getAll: function(response){
				response(todos);
			}
		};

	};
});
