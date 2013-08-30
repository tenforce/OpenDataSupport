$(document).ready(function() {
  $('#queryButton').click(function() {
	submitSparql($('#txtSparql').val());
	});
//safe mailto's
 $('a[href*="[at]"][href*="[dot]"]').each(function() {
  var email = $(this).attr('href').split('[at]').join('@').split('[dot]').join('.');
  $(this).attr('href', email.toLowerCase());
  if ($(this).text().length == 0) $(this).text(email);
 });
});

function submitSparql(query) {
	$.ajax({
	  dataType: "json",
	  url: '/sparql?query=' + encodeURIComponent(query),
	  success: function (data) {
		$('#sparqlResults').html('');
		
		if (data.results.bindings.length == 0) {
			// no data found, bail out
			$('#sparqlResults').html('<div class="row">query returned no results</div>');
			return;
		}

		// create header
		$('#sparqlResults').append('<div class="row">');
		$(data.head.vars).each(function(index,name) {
			$('#sparqlResults').append('<div class="span3">' + name + '</div>');
		});
		$('#sparqlResults').append('</div>');
		
		// display data
		$(data.results.bindings).each(function(idx,row) {			
			$('#sparqlResults').append('<div class="row">');
			$.each(row,function(name,object) {
				if (object.type == "uri") {
					$('#sparqlResults').append('<div class="span3"><a href="'+ object.value+'">' +object.value + '</a></div>');
				}
				else {
					$('#sparqlResults').append('<div class="span3">' + object.value + '</div>');
				}
			});
			$('#sparqlResults').append('</div>');
		}); 
		}	
	});
}

function loadCatalogRecordQuery() {
	$('#txtSparql').text("prefix dcat:<http://www.w3.org/ns/dcat#> \n select * \n where {{?record a dcat:CatalogRecord }{?record ?x ?y}}  \n LIMIT 100");
}

function loadDescriptionQuery() {
	$('#txtSparql').text("prefix dcat:<http://www.w3.org/ns/dcat#> \n select distinct ?c \n where  { ?s a dcat:Dataset. ?s <http://purl.org/dc/terms/description> ?o. filter regex(?o, 'GDP', 'i'). ?rec <http://xmlns.com/foaf/0.1/primaryTopic> ?s. ?c dcat:record ?rec. }");
}
