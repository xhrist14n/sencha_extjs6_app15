/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app15.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    'onActivateUsers':function(me,opts){
    	var grid=me.down('#usuariogrid');
    	var form=me.down('#usuarioform');
    	try{
    		grid.getStore().load();
    	}catch(ex){}
    	try{
    		grid.getStore().refresh();
    	}catch(ex){}
    	try{
    		grid.getSelectionModel().deselectAll();
    	}catch(ex){}
    	try{
    		form.reset();
    	}catch(ex){}
    	
    }
});
