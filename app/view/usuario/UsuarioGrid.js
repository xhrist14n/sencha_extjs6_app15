Ext.define('app15.view.usuario.UsuarioGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usuariolist',

    requires: [
    	'app15.controller.usuario.UsuarioController',
        'app15.store.usuario.UsuarioStore'
    ],

    title: 'Usuarios',
    
    controller: 'usuario',

    store: {
        type: 'usuario'
    },

    columns: [
        { 
        	text: 'Id',  
        	dataIndex: 'id' 
        },
        { 
        	text: 'Usuario', 
        	dataIndex: 'usuario', 
        	flex: 1 
        },
        { 
        	text: 'Nombres', 
        	dataIndex: 'nombres', 
        	flex: 1 
        },
        { 
        	text: 'Apellidos', 
        	dataIndex: 'apellidos', 
        	flex: 1 
        },
        { 
        	text: 'Email', 
        	dataIndex: 'email', 
        	flex: 1 
        },
        { 
        	text: 'Genero', 
        	dataIndex: 'genero', 
        	flex: 1 
        },
        { 
        	text: 'Nacimiento', 
        	dataIndex: 'nacimiento', 
        	flex: 1 
        },
        { 
        	text: 'Registro', 
        	dataIndex: 'registro', 
        	flex: 1 
        },
        {
        	xtype:'widgetcolumn',
        	text:'Accion',
        	flex:1,
        	widget: {
    			xtype: 'button',
    			text:'Eliminar',
    			scale: 'small',
    			listeners: {
			        click: 'eliminarUsuario'
			    }        			
        	}
        	 	
        }
    ],

    listeners: {
        select: 'seleccionar'
    }
});
