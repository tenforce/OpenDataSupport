# Example predicate mapping queries
## Great Britain CKAN to DCAT-AP

### Distribution properties
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
BIND (URI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

* Mapping resource to distribution description
release-notes

```
```

* Mapping resource to distribution format
```
```

* Mapping resource to distribution license
```
```


### Dataset properties

#### Mandatory
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


#### Recommended

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

* Mapping theme - version 1 (theme specified on dataset)

```
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT 
{ ?harmds dcat:theme ?theme.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/theme-primary>  ?theme. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping theme - version 2 (theme specified in extras)

```
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT 
{ ?harmds dcat:theme ?theme.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?extra  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "theme-primary". 
?extra  <http://data.gov.uk/predicate/value>  ?theme. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping contactPoint email - version 1 (defined on extras)

```
INSERT 
{ 
?ds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?extra  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "contact-email". 
?extra  <http://data.gov.uk/predicate/value>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (URI(CONCAT(?ds,"/contactPoint")) AS ?cPoint).
BIND (URI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping contactPoint email - version 2 (defined on dataset)

```
INSERT 
{ 
?ds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?extra  <http://data.gov.uk/predicate/contact-email>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (URI(CONCAT(?ds,"/contactPoint")) AS ?cPoint).
BIND (URI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping contactPoint name

```
INSERT 
{ 
?ds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#fn>  ?name
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?extra  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "contact-name". 
?extra  <http://data.gov.uk/predicate/value>  ?name. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (URI(CONCAT(?ds,"/contactPoint")) AS ?cPoint)
}
```

* Mapping contactPoint phoneNumber

```
INSERT 
{ 
?ds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#tel>  [
rdf:value ?phone;
rdf:type <http://www.w3.org/2006/vcard/ns#Pref>
]
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?extra  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "contact-phone". 
?extra  <http://data.gov.uk/predicate/value>  ?phone. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (URI(CONCAT(?ds,"/contactPoint")) AS ?cPoint)
}
```


#### Optional

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

* Mapping license
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:license ?license} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?extra  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "license_url". 
?extra  <http://data.gov.uk/predicate/value>  ?license. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


* Mapping publisher


