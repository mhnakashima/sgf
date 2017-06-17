(function($){
	$(document).ready(function(){

		var table = $("#sgf__table");

		var ACOES_CELL = 2;
		var STATUS_CELL = 3;

		if(table.length > 0){
			table.DataTable( {
				"ajax": {
		            "url": "../data/items.json",
		            "type": "GET",
		            "srcData": ""
		        },
		        "scrollX": true,
		        "bProcessing": false,
			    "columns": [
		            { "data": "area" },
		            { "data": "subarea" },
		            { "data": "acoes" },
		            { "data": "status" },		            
		        ],
		        "drawCallback": function(){
		        	$('[data-toggle="tooltip"]').tooltip();
		        },
		        "columnDefs": [
		            
		            {
		                // The `data` parameter refers to the data for the cell (defined by the
		                // `data` option, which defaults to the column being worked with, in
		                // this case `data: 0`.
		                "render": function ( data, type, row ) {
		                    var link = "";
		                    if(row.subarea == "" || row.subarea == undefined || row.subarea == null){
		                    	link = "<a data-toggle='tooltip' data-placement='top' title='Editar Área' href='cadastroArea.html?areaID=" + row.areaID + "' title='Editar Área'><i class='fa fa-edit font16px'></i></a>";
		                    }else{
		                    	link = "<a data-toggle='tooltip' data-placement='top' title='Editar Subárea' href='cadastroArea.html?subAreaID=" + row.subAreaID + "' title='Editar subárea'><i class='fa fa-edit font16px'></i></a>";
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
		                    	link = "Ativo";
		                    }else{
		                    	link = "Inativo";
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