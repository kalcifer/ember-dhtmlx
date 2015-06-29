import Ember from 'ember';


var get = Ember.get;
var set = Ember.set;
var keys = Ember.keys;

var bind = Ember.run.bind;

export default Ember.Component.extend({
	didInsertElement:function(){
		this.myTree = new dhtmlXTreeObject("treeboxbox_tree","100%","100%",0);
		this.sendAction('created', this.myTree);
		this.myTree.enableCheckBoxes(true, false);
		this.myTree.enableThreeStateCheckboxes(true);
		this.myTree.enableDragAndDrop(true);
		//var jsonObject = {id:0, item:[{id:1,text:"first"},{id:2, text:"middle", item:[{id:"21", text:"child"}]},{id:3,text:"last"}]};
		//this.myTree.loadJSONObject(jsonObject);
		var self = this;
		this.listenToEvents();
		
	},
	listenToEvents:function(){
		var self = this;
		this.myTree.attachEvent("onCheck",function(id){
			self.sendEventActions('onCheck', id);
		    return true;
		});
		this.myTree.attachEvent("onDrop",function(id){
			self.sendEventActions('onDrop', id);
		    return true;
		});	
		this.myTree.attachEvent("onDrag",function(id){
			self.sendEventActions('onDrag', id);
		    return true;
		});	
		this.myTree.attachEvent("onSelect",function(id){
			self.sendEventActions('onSelect', id);
		    return true;
		});	
		this.myTree.attachEvent("onClick",function(id){
			self.sendEventActions('onClick', id);
		    return true;
		});	
		this.myTree.attachEvent("onRightClick",function(id){
			self.sendEventActions('onRightClick', id);
		    return true;
		});	
		this.myTree.attachEvent("onBeforeContextMenu",function(id){
			self.sendEventActions('onBeforeContextMenu', id);
		    return true;
		});	
		this.myTree.attachEvent("onDblClick",function(id){
			self.sendEventActions('onDblClick', id);
		    return true;
		});	
		this.myTree.attachEvent("onOpenStart",function(id, state){
			self.sendEventActions('onOpenStart', id, state);
		    return true;
		});	
		this.myTree.attachEvent("onMouseIn",function(id){
			self.sendEventActions('onMouseIn', id);
		    return true;
		});	
		this.myTree.attachEvent("onMouseOut",function(id){
			self.sendEventActions('onMouseOut', id);
		    return true;
		});	
		this.myTree.attachEvent("onBeforeCheck",function(id){
			self.sendEventActions('onBeforeCheck', id);
		    return true;
		});	
		this.myTree.attachEvent("onEdit",function(id){
			self.sendEventActions('onEdit', id);
		    return true;
		});	
	},
	sendEventActions: function(){
		var args = Array.prototype.slice.call(arguments);
		var moreArgs = [];
		if(args.length > 1){
			moreArgs = args.slice(1, args.length);
		}
		this.sendAction('treeAction', args[0], this.myTree, moreArgs);
	}
})