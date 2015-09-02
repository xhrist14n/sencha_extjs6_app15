
Ext.define('app15.view.usuario.UsuarioForm', {
    extend: 'Ext.form.Panel',
    requires:[
    	'app15.controller.usuario.UsuarioController',
    	'app15.store.usuario.GeneroStore'
    ],
    xtype: 'usuarioform',
    title: 'Formulario de Usuarios',
    bodyPadding: 10,
    controller: 'usuario',
    frame: true,
    items: [
        {
            xtype: 'hiddenfield',
            name: 'id',
            fieldLabel: 'Id',
            labelWidth: 100,
            msgTarget: 'side',
            allowBlank: true,
            anchor: '100%'
        },
        {
        	xtype: 'fieldcontainer',
        	anchor: '100%',
        	layout: 'hbox',
        	bodyPadding:10,
        	items:[
		        {
		            xtype: 'textfield',
		            name: 'nombres',
		            fieldLabel: 'Nombres',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1
		        },
		        {
		        	xtype: 'menuseparator'
		        },
		        {
		            xtype: 'textfield',
		            name: 'apellidos',
		            fieldLabel: 'Apellidos',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1
		        }	
        	]
        	
        },
        {
        	xtype: 'fieldcontainer',
        	anchor: '100%',
        	layout: 'hbox',
        	bodyPadding:10,
        	items:[
				{
		            xtype: 'textfield',
		            name: 'email',
		            fieldLabel: 'Email',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1
		        },
		        {
		        	xtype: 'menuseparator'
		        },
		        {
		            xtype: 'combobox',
		            name: 'genero',
		            fieldLabel: 'Genero',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1,
				    store: {
				   		type: 'genero'
				    },
				    queryMode: 'local',
				    displayField: 'genero',
				    valueField: 'id',
				    listeners:{
				    	select: 'seleccionarGenero' 
				    	// evento de seleccion de elemento de grilla
				    }
		        }        
		    ]
        	
        },
        
        {
            xtype: 'datefield',
            name: 'nacimiento',
            fieldLabel: 'Nacimiento',
            format: 'Y-m-d',
            labelWidth: 100,
            msgTarget: 'side',
            allowBlank: false,
            anchor: '50%'
        },
        {
        	xtype: 'fieldcontainer',
        	anchor: '100%',
        	layout: 'hbox',
        	bodyPadding:10,
        	items:[
		        {
		            xtype: 'textfield',
		            name: 'usuario',
		            fieldLabel: 'Usuario',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex:1
		        },
		        {
		        	xtype: 'menuseparator'
		        },
		        {
		            xtype: 'textfield',
		            name: 'clave',
		            fieldLabel: 'Clave',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            inputType: 'password', // propiedad importante para poner en modo password el textfield
		            flex:1
		        }		
        	]
        	
        }
        
    ],

    buttons: [
        {
            text: 'Guardar',
            formBind: true, //only enabled once the form is valid
        	disabled: true,
        	scale: 'small',
            listeners: {
		        click: 'guardarUsuario' 
		    }
        },
        {
            text: 'Nuevo',
            formBind: true, //only enabled once the form is valid
        	disabled: true,
        	scale: 'small',
            listeners: {
		        click: 'nuevoUsuario' 
		    }
        },
        {
            text: 'Eliminar',
            formBind: true, //only enabled once the form is valid
        	disabled: true,
        	scale: 'small',
            listeners: {
		        click: 'eliminarUsuario' 
		    }
        }
    ]

});