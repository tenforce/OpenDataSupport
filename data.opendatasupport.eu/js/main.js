$(document).ready(function() {
  $('#queryButton').click(function() {
	submitSparql($('#txtSparql').val());
	});
	countHarmonizedDatasets();
 	countHarmonizedCatalogs();
//safe mailto's
 $('a[href*="[at]"][href*="[dot]"]').each(function() {
  var email = $(this).attr('href').split('[at]').join('@').split('[dot]').join('.');
  $(this).attr('href', email.toLowerCase());
  if ($(this).text().length == 0) $(this).text(email);
 });
});

function countHarmonizedCatalogs() {
	var query = "prefix dcat:<http://www.w3.org/ns/dcat#> \n"+
		"select count(distinct(?cat)) as ?result where { ?cat a dcat:Catalog. ?cat dcat:record ?record. ?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?raw_dataset}";
	var setCatStat = function(data) {
			$('#harmCatalogs').html("Harmonized " + data.results.bindings[0].result.value + " data catalogs");
		};
	jsonSPARQL(query,setCatStat);
}

function countHarmonizedDatasets() {
	var query = "prefix dcat:<http://www.w3.org/ns/dcat#> \n" +
		   "select count(distinct(?dataset)) as ?result where { ?dataset a dcat:Dataset. ?record <http://xmlns.com/foaf/0.1/primaryTopic> ?dataset. ?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?raw_dataset}";
	var setDatasetStat = function(data) {
			$('#harmDatasets').html("containing " + data.results.bindings[0].result.value + " datasets");
		};
	jsonSPARQL(query,setDatasetStat);
}

function jsonSPARQL(query,success,error,dType) {
	error = typeof error !== 'undefined' ? error: function(){};
	dType = typeof dType !== 'undefined' ? dType: "json";
	$.ajax({
		"dataType": dType,
		"type" : "POST",
		"data": {"query":query},
		url: '/sparql',
		"success": success,
		"error": error
	});
}

function submitSparql(query) {
	$('#sparqlResults').html('<img src="img/ajax-loader.gif">'); 
	var onSuccess= function (data) {
		$('#sparqlResults').html('');
		
		if (data.results.bindings.length == 0) {
			// no data found, bail out
			$('#sparqlResults').html('<div class="row">query returned no results</div>');
			return;
		}
		var size = Math.round(9 / data.head.vars.length);
		// create header
		$('#sparqlResults').append('<div class="row">');
		$(data.head.vars).each(function(index,name) {
			$('#sparqlResults').append('<div class="span' + size + '">' + name + '</div>');
		});
		$('#sparqlResults').append('</div>');
		
		// display data
		$(data.results.bindings).each(function(idx,row) {			
			$('#sparqlResults').append('<div class="row">');
			$.each(row,function(name,object) {
				if (object.type == "uri") {
					$('#sparqlResults').append('<div class="span' + size + '"><a href="'+ object.value+'">' +object.value + '</a></div>');
				}
				else {
					$('#sparqlResults').append('<div class="span' + size + '">' + object.value + '</div>');
				}
			});
			$('#sparqlResults').append('</div>');
		}); 
		};
	var onError = function (request, status, error) {
		$('#sparqlResults').html('<div class="span9" style="color:red;">' + request.responseText +'</div>');
	};
	jsonSPARQL(query,onSuccess,onError);
}

function loadCatalogRecordQuery() {
	$('#txtSparql').val("prefix dcat:<http://www.w3.org/ns/dcat#> \n select * \n where {?record a dcat:CatalogRecord. ?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?raw_dataset. ?record ?x ?y}  \n LIMIT 100");
}

function loadDatasetquery() {
	$('#txtSparql').val("prefix dcat:<http://www.w3.org/ns/dcat#> \n" +
			     "select ?dataset \n" +
			     "where { \n" +
			     "	?dataset a dcat:Dataset. \n" +
			     "	?record <http://xmlns.com/foaf/0.1/primaryTopic> ?dataset.\n" +
			     "	?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?raw_dataset \n"  +
			     "} LIMIT 100");
}
function loadGeneralOverviewQuery() {
	$('#txtSparql').val("prefix dcat:<http://www.w3.org/ns/dcat#> \n" +
"select ?catalog count(?dataset) as ?datasets \n" +
"where {  \n" +
"	?dataset a dcat:Dataset.  \n" +
"	?record <http://xmlns.com/foaf/0.1/primaryTopic> ?dataset. \n" +
"	?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?raw_dataset. \n" +
"         ?catalog dcat:dataset ?dataset \n" +
"} group by ?catalog \n" +
"limit 100");
}

function loadDescriptionQuery() {
	$('#txtSparql').val("prefix dcat:<http://www.w3.org/ns/dcat#> \n"+
"select distinct(?dataset) ?description \n"+
"where  { \n"+
"	?dataset a dcat:Dataset.\n"+ 
"	?dataset <http://purl.org/dc/terms/description> ?description. \n"+
"	filter regex(?description, 'GDP', 'i'). \n"+
"	?record <http://xmlns.com/foaf/0.1/primaryTopic> ?dataset. \n"+
"	?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?raw_dataset \n"+
"} LIMIT 100");}
function loadKeywordQuery() {
	$('#txtSparql').val("prefix dcat:<http://www.w3.org/ns/dcat#>  \n"+
"select ?dataset \n"+
"where  {  \n"+
"	?dataset a dcat:Dataset. \n"+
"	?dataset dcat:keyword 'amsterdam'.  \n"+
"	?record <http://xmlns.com/foaf/0.1/primaryTopic> ?dataset.  \n"+
"	?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?raw_dataset  \n"+
"} LIMIT 100");
}
function loadTitleQuery() {
	$('#txtSparql').val("prefix dcat:<http://www.w3.org/ns/dcat#> \n"+
"select distinct(?dataset) ?title \n"+
"where  { \n"+
"	?dataset a dcat:Dataset.\n"+ 
"	?dataset <http://purl.org/dc/terms/title> ?title. \n"+
"	filter regex(?title, 'GDP', 'i'). \n"+
"	?record <http://xmlns.com/foaf/0.1/primaryTopic> ?dataset. \n"+
"	?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?raw_dataset \n"+
"} LIMIT 100");
}
