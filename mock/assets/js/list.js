$("#datatable_header0").DataTable({
	paging: false,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: true, targets: 0 },
	fixedHeader:{
		header: false,
		headerOffset: 0
	}
});

$("#datatable_fixed_header1").DataTable({
	paging: false,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
	fixedHeader:{
		header: true,
		headerOffset: 0
	}
});

$("#datatable_fixed_header2").DataTable({
	paging: false,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
	fixedHeader:{
		header: true,
		headerOffset: 0
	}
});

$("#datatable_fixed_header3").DataTable({
	paging: false,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
	fixedHeader:{
		header: true,
		headerOffset: 0
	}
});

$("#datatable_fixed_header4").DataTable({
	paging: false,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
	fixedHeader:{
		header: true,
		headerOffset: 0
	}
});

$("#datatable_fixed_header5").DataTable({
	paging: false,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
	fixedHeader:{
		header: true,
		headerOffset: 0
	}
});

$("#datatable_fixed_header6").DataTable({
	paging: false,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
	fixedHeader:{
		header: true,
		headerOffset: 0
	}
});

$("#datatable_fixed_header7").DataTable({
	paging: false,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
	fixedHeader:{
		header: true,
		headerOffset: 0
	}
});

$("#datatable_paging_1").DataTable({
	paging: true,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
});

$("#datatable_paging_2").DataTable({
	paging: true,
	info : false,
	scrollX:        false,
	scrollCollapse: false,
	columnDefs: { orderable: false, targets: 0 },
});

// Supplier table sorting
$("#supplier_table").DataTable({
	paging: false,
	info: false,
	searching: true, // Enable searching for filtering functionality
	dom: 'rt', // Show only table (r) and processing (t), hide search box
	scrollX: false,
	scrollCollapse: false,
	order: [[2, 'desc']], // Default sort by amount column (descending)
	columnDefs: [
		{ orderable: true, targets: '_all' }, // Enable sorting for all columns
		{ type: 'num-fmt', targets: [2, 3] } // Specify numeric sorting for amount columns
	],
	language: {
		"emptyTable": "データがありません",
		"info": "_TOTAL_ 件中 _START_ から _END_ まで表示",
		"infoEmpty": "0 件中 0 から 0 まで表示",
		"infoFiltered": "（全 _MAX_ 件より抽出）",
		"lengthMenu": "_MENU_ 件表示",
		"search": "検索:",
		"zeroRecords": "一致するレコードがありません"
	}
});