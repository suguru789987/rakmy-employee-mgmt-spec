"use strict";

const matchCustom = (params, data) => {
	const lower = str => str.toLowerCase();
	const originalMatcher = $.fn.select2.defaults.defaults.matcher;
	const result = originalMatcher(params, data);

	const resultsAndChildrenExist = result && data.children && result.children && data.children.length;
	if (resultsAndChildrenExist) {
			if (data.children.length !== result.children.length && lower(data.text).includes(lower(params.term))) {
					result.children = data.children;
			}
			return result;
	}

	return null;
}

!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;n.define("select2/i18n/ja",[],function(){return{errorLoading:function(){return"結果が読み込まれませんでした"},inputTooLong:function(n){return n.input.length-n.maximum+" 文字を削除してください"},inputTooShort:function(n){return"少なくとも "+(n.minimum-n.input.length)+" 文字を入力してください"},loadingMore:function(){return"読み込み中…"},maximumSelected:function(n){return n.maximum+" 件しか選択できません"},noResults:function(){return"対象が見つかりません"},searching:function(){return"検索しています…"},removeAllItems:function(){return"すべてのアイテムを削除"}}}),n.define,n.require}();

var KTFormsSelect2Demo = { init: function() { var e;
		e = function(e) { if (!e.id) return e.text; var t = document.createElement("span"),
					n = ""; return n += '<img src="' + e.element.getAttribute("data-kt-select2-country") + '" class="h-20px me-2" alt="image"/>', n += e.text, t.innerHTML = n, $(t) }, $("#kt_docs_select2_country").select2({ templateSelection: e, templateResult: e }),
			function() { var e = function(e) { if (!e.id) return e.text; var t = document.createElement("span"),
						n = ""; return n += '<img src="' + e.element.getAttribute("data-kt-select2-user") + '" class="h-20px me-2" alt="image"/>', n += e.text, t.innerHTML = n, $(t) };
				$("#kt_docs_select2_users").select2({ templateSelection: e, templateResult: e }) }(),
			function() { var e = function(e) { if (!e.id) return e.text; var t = document.createElement("span"),
						n = ""; return n += '<img src="' + e.element.getAttribute("data-kt-select2-image") + '" class="h-20px me-2" alt="image"/>', n += e.text, t.innerHTML = n, $(t) };
				$("#kt_docs_select2_floating_labels_1").select2({ placeholder: "Select coin", minimumResultsForSearch: 1 / 0, templateSelection: e, templateResult: e }) }(),
			function() { var e = function(e) { if (!e.id) return e.text; var t = document.createElement("span"),
						n = ""; return n += '<img src="' + e.element.getAttribute("data-kt-select2-image") + '" class="h-20px me-2 mb-1" alt="image"/>', n += e.text, t.innerHTML = n, $(t) };
				$("#kt_docs_select2_floating_labels_2").select2({ placeholder: "Select coin", templateSelection: e, templateResult: e, matcher: matchCustom, language: "ja" }).on('select2:opening', function(e) {　$(this).data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', '選択してください')}) }(), (() => { const e = e => { if (!e.id) return e.text; var t = document.createElement("span"),
						n = ""; return n += '<div class="d-flex align-items-center">', n += '<img src="' + e.element.getAttribute("data-kt-rich-content-icon") + '" class=" h-40px me-3" alt="' + e.text + '"/>', n += '<div class="d-flex flex-column">', n += '<span class="fs-4 fw-bolder lh-1">' + e.text + "</span>", n += '<span class="text-muted fs-7">' + e.element.getAttribute("data-kt-rich-content-subcontent") + "</span>", n += "</div>", n += "</div>", t.innerHTML = n, $(t) };
				$("#kt_docs_select2_rich_content").select2({ placeholder: "Select an option", minimumResultsForSearch: 1 / 0, templateSelection: e, templateResult: e }) })() } };
KTUtil.onDOMContentLoaded((function() { KTFormsSelect2Demo.init() }));

$('input.select2-search__field').prop('placeholder', 'enter username or city');