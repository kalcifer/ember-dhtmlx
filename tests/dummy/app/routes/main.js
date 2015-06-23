import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return {
			treeComponent:{}
		}
	},
	actions:{
		'treeAction':function(type, treeObject, args){
			var eventName = type;
			this.currentModel.treeComponent = treeObject;
			this.currentModel.selectedId = args[0];
			console.log('Event of type - ' + type + 'on selected Id' + args[0]);
		},
		addItem:function(item){
			item = {id:24, text:'something'};
			this.currentModel.treeComponent.insertNewChild(1, 24, "something", 0,0,0,0,"SELECT");
		},
		treeCreated:function(treeObject){
			this.currentModel.treeComponent = treeObject;
			treeObject.setImagePath("/assets/");
		}
	}
})