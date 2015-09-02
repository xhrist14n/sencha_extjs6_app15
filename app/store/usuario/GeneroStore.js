Ext.define(
	'app15.store.usuario.GeneroStore',
	{
		extend: 'Ext.data.Store',
		model: 'app15.model.usuario.GeneroModel',
		alias: 'store.genero',
		proxy: {
			type:'ajax',
			api:{
				create: 	'source/index.php/genero/save',
				read:		'source/index.php/genero/all',
				update: 	'source/index.php/genero/update',
				destroy: 	'source/index.php/genero/delete'
			},
			reader:{
				type: 'json',
				rootProperty: 'data'
			},
			writer: {
				type:'json',
				rootProperty: 'data',
				writeAllFields: true,
				encode: true,
				allowSingle: true
			}
		},
		autoLoad: true,
		autoSync: true
	}
);