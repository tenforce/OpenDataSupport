# Example predicate mapping queries
## Great Britain CKAN to DCAT-AP

* Map a resource url to distribution with accessURL
```
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dcat:accessURL ?url.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/url> ?url.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (CONCAT(?distURL,?id) AS ?distribution).
}
```

* Map tags to keywords
```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:keyword ?name
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.uk/predicate/tags>  ?keyword. 
?keyword <http://data.gov.uk/predicate/name>  ?name. 
}
```

* Mapping release date to dataset issue date
```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:issued ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/date_released>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping description
```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:description ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/notes>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping theme
```
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT 
{ ?harmds dcat:theme ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/theme-primary>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping Title
```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:title ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/title>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping geographic_coverage to dataset spatial/geographic
```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:spatial ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/geographic_coverage>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```
*
```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:accrualPeriodicity ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/update_frequency>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

*
```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:accrualPeriodicity ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/update_frequency-other>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

*
```
prefix adms:<http://www.w3.org/ns/adms#> 
INSERT 
{ ?harmds adms:version ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/version>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```
