/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app15.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'app15.view.main.MainController',
        'app15.view.main.MainModel',
        'app15.view.main.List',
        
        'app15.view.usuario.UsuarioGrid',
        'app15.view.usuario.UsuarioForm'
        
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 10,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
	    {
	        title: 'Users',
	        itemId:'usuariotab',
	        iconCls: 'fa-user',
	        listeners:{
    			activate:'onActivateUsers'
			},    		
	        layout:{
	        	type: 'border'
	        },
	        items: [
		        {
		            xtype: 'usuariolist',
		            itemId:'usuariogrid',
		            region:'center'
		        },
		        {
		            xtype: 'usuarioform',
		            itemId:'usuarioform',
		            region:'south',
		            height: '200'
		        }
	        ]
	    }, {
	        title: 'Acerca de',
	        iconCls: 'fa-users',
	        bind: {
	            html: '{about}'
	        }
	    }
    ]
    
});
