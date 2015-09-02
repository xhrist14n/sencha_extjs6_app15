Ext.define('app15.controller.usuario.UsuarioController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.usuario',
	'nuevoUsuario' : function(button, e, eOpts) {
		var form = button.up('form');
		form.reset();
		var tab = button.up('#usuariotab');
		var grid = tab.down('#usuariogrid');
		try {
			grid.getStore().load();
			grid.getView().refresh();
			grid.getSelectionModel().deselectAll();
		} catch(ex) {
		}

	},
	'guardarUsuario' : function(button, e, eOpts) {
		var form = button.up('form');
		var tab = button.up('#usuariotab');
		var grid = tab.down('#usuariogrid');
		if (form.isValid()) {
			form.submit({
				url : 'source/index.php/usuario/save/',
				waitMsg : 'Guardando datos',
				success : function(fp, o) {
					if (o.result.success == 'true') {
						try {
							grid.getStore().load();
							grid.getView().refresh();
							grid.getSelectionModel().deselectAll();
						} catch(ex) {
						}

						Ext.Msg.alert('Exito', 'Datos guardados exitosamente.');
						try {
							form.reset();
						} catch(ex) {
						}

					} else {
						Ext.Msg.alert('Error', 'Hubo un error en el proceso');
					}

					return;
				}
			});
		}
		return;
	},
	'eliminarUsuario' : function(button, e, eOpts) {
		var grid = null;
		var elems = Ext.ComponentQuery.query('#usuariotab');
		var grid = null;
		for (var i in elems) {
			try {
				grid = elems[i].down('#usuariogrid');
			} catch(ex) {
			}
			if (Ext.isEmpty(grid) != true) {
				break;
			}
		}

		var form = null;
		for (var i in elems) {
			try {
				form = elems[i].down('#usuarioform');
			} catch(ex) {
			}
			if (Ext.isEmpty(form) != true) {
				break;
			}
		}

		Ext.Ajax.request({
			url : 'source/index.php/usuario/delete',
			params : {
				id : id
			},
			callback : function(opt, success, respon) {
				if (grid != null) {
					try {
						grid.getStore().load();
					} catch(ex) {
					}
					try {
						grid.getView().refresh();
					} catch(ex) {
					}
				}
				if (form != null) {
					try {
						form.reset();
					} catch(ex) {
					}
				}
				Ext.Msg.alert('Exito', 'Usuario Eliminado con exito');
				return;
			}
		});

		return;
	},
	'seleccionarGenero' : function(combo, record, options) {
		// nada por hacer aca
		return;
	},
	'seleccionar' : function(sender, record, index, options) {
		var elems = Ext.ComponentQuery.query('#usuariotab');
		var form = null;
		for (var i in elems) {
			try {
				form = elems[i].down('#usuarioform');
			} catch(ex) {
			}
			if (Ext.isEmpty(form) != true) {
				break;
			}
		}

		var id = record.get("id");
		Ext.Ajax.request({
			url : 'source/index.php/usuario/session/' + id,
			params : {
				id : id
			},
			callback : function(opt, success, respon) {

				form.loadRecord(record);

				return;
			}
		});
	}
});

