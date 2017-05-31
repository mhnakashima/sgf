(function($){
	$(document).ready(function(){

		var menuOpenItem = $(".sgf-expand__menu");
		var menuCloseItem = $(".sgf-sidebar__close");

		var sidebar = $(".sgf-sidebar");
		var area = $(".sgf__select2");
		var table = $(".sgf__table");

		var ACOES_CELL = 2;
		var STATUS_CELL = 3;

		var areaData =  [
			{ id: 0, text: 'Educação' }, 
			{ id: 1, text: 'Marketing e Vendas' }, 
			{ id: 2, text: 'Recursos Humanos e Empreendedorismo' }, 
			{ id: 3, text: 'Serviços Financeiros e Contabéis' }
		]

		var openMenu = function(open){			
			open ? sidebar.removeClass('displayNone') : sidebar.addClass('displayNone');
		}

		menuOpenItem	
					.on('click tap', function(){
						openMenu(true);
					})

		menuCloseItem
					.on('click tap', function(){
						openMenu(false);
					})

		if(area.length > 0){
			area.select2({
				data: ['Educação', 'Marketing e Vendas', 'Recursos Humanos e Empreendedorismo', 'Serviços Financeiros e Contabéis']
			})
		}

		if(table.length > 0){
			table.DataTable( {
				"ajax": {
		            "url": "data/items.json",
		            "type": "GET",
		            "srcData": ""
		        },
		        "bProcessing": false,
			    "columns": [
		            { "data": "area" },
		            { "data": "subarea" },
		            { "data": "acoes" },
		            { "data": "status" },		            
		        ],
		        "columnDefs": [
		            
		            {
		                // The `data` parameter refers to the data for the cell (defined by the
		                // `data` option, which defaults to the column being worked with, in
		                // this case `data: 0`.
		                "render": function ( data, type, row ) {
		                    var link = "";
		                    if(row.subarea == "" || row.subarea == undefined || row.subarea == null){
		                    	link = "<a href='cadastroArea.html?areaID=" + row.areaID + "'><i class='fa fa-edit font16px'></i></a>";
		                    }else{
		                    	link = "<a href='cadastroSubarea.html?subAreaID=" + row.subAreaID + "'><i class='fa fa-edit font16px'></i></a>";
		                    }
		                    return link;
		                },
		                "className": "alignCenter",
		                "targets": ACOES_CELL 
		            },
		            {
		                // The `data` parameter refers to the data for the cell (defined by the
		                // `data` option, which defaults to the column being worked with, in
		                // this case `data: 0`.
		                "render": function ( data, type, row ) {
		                    var link = "";
		                    if(row.status == "Y"){
		                    	link = "<span class='bg-success colorBlack padding5px'>Ativo</span>";
		                    }else{
		                    	link = "<span class='bg-danger colorBlack padding5px'>Inativo</span>";
		                    }
		                    return link;
		                },
		                "className": "alignCenter",
		                "targets": STATUS_CELL
		            }		            
		        ],
		        "oLanguage": {
		        	"sInfo": "Página: _PAGE_ de _PAGES_",
			        "sLengthMenu": "Número de Registros _MENU_", 	
			    	"sSearch": "Busca rápida",
			    	"sZeroRecords": "Sem resultados para mostrar",
			    	"oPaginate": {
				    	"sNext": "Próximo",
				    	"sPrevious": "Anterior"
				    }  		      			        
			    }
		    });
		}
	})
})(jQuery);