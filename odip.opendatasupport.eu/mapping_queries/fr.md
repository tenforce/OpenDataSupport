# <Country> CKAN to DCAT-AP

## Distribution properties

### Mandatory
* accessURL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  dct:  <http://purl.org/dc/terms/>
PREFIX  orig: <http://www.data.gouv.fr/predicate/>
INSERT {
  ?harmds dcat:distribution ?dist .
  ?dist a dcat:Distribution .
  ?dist dcat:accessURL ?url .
} WHERE { 
    ?ds a dcat:Dataset .
    ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .
    ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
    ?ds orig:resources  ?resource . 
    ?resource orig:id ?id .
    ?resource orig:url ?url . 
    BIND(concat(str(?harmds), "/distributions/") AS ?hds)
    BIND(iri(concat(?hds, ?id)) AS ?dist)
}

```

### Recommended

* distribution description

```

```

* distribution format

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  dct:  <http://purl.org/dc/terms/>
PREFIX  orig: <http://www.data.gouv.fr/predicate/>
INSERT {
  ?harmds dcat:distribution ?dist .
  ?dist a dcat:Distribution .
  ?dist dct:format ?format .
} WHERE { 
  ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .
  ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
  ?ds a dcat:Dataset . 
  ?ds orig:resources ?resource . 
  ?resource orig:id ?id .
  ?resource orig:format ?format .
  FILTER ISIRI(?format)
  BIND(concat(str(?harmds), "/distributions/") AS ?hds)
  BIND(iri(concat(?hds, ?id)) AS ?dist)
}
```

* distribution license

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
INSERT {
 ?harmds dcat:distribution ?dist.
 ?dist a dcat:Distribution.
 ?dist dct:license ?license.
} WHERE {
 ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
 ?ds orig:resource ?resource. 
 ?resource orig:id ?id.
 ?ds orig:license_id ?license. 
 BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
 BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}

```

### Optional
* byte size

```
```

* download URL

```
```

* media type

```
```

* release date

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX dcat: <http://www.w3.org/ns/dcat#>
prefix dct: <http://purl.org/dc/terms/> 
INSERT {
 ?harmds dcat:distribution ?dist.
 ?dist a dcat:Distribution.
 ?dist dct:issued ?created.
} WHERE {
 ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?ds orig:resources  ?resource. 
 ?resource orig:id ?id.
 ?resource orig:created ?created. 
 BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
 BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}

```

* modification date

```
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
INSERT
{
 ?harmds dcat:distribution ?dist.
 ?dist a dcat:Distribution.
 ?dist dct:modified ?modified.
}
WHERE {
 ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
 ?ds orig:resources ?resource. 
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
 ?resource orig:id ?id.
 ?resource orig:revision_timestamp  ?modified.
 BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
 BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}

```

* rights

```
```

* status

```
```

* title

```

```


## Dataset properties

### Mandatory
* Mapping description

```
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct:<http://purl.org/dc/terms/> 
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
INSERT {
 ?harmds dct:description ?description
} WHERE {
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
 ?ds a dcat:Dataset .
 ?ds orig:notes ?description. 
}

```


* Mapping Title

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
INSERT {
 ?harmds dct:title ?title
} WHERE {
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds . 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . 
 ?ds a dcat:Dataset .
 ?ds orig:title ?title .
}
```



### Recommended

* Map tags to keywords

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX dcat: <http://www.w3.org/ns/dcat#>
INSERT {
  ?harmds dcat:keyword ?name
} WHERE {
  ?ds a dcat:Dataset . 
  ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
  ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
  ?ds orig:tags ?keyword. 
  ?keyword orig:name  ?name. 
}

```

* Mapping theme

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX adms: <http://www.w3.org/ns/adms#>  
PREFIX eu: <http://eurovoc.europa.eu/schema#> 
PREFIX dcat: <http://www.w3.org/ns/dcat#>  
PREFIX skos: <http://www.w3.org/2004/02/skos/core#> 
INSERT { 
 ?harmds dcat:theme ?themeURI .
} WHERE {  
 ?ds a <http://www.w3.org/ns/dcat#Dataset>.  
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .  
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .  
 ?ds orig:extras ?ex  . 
 ?ex orig:key "theme_available"  . 
 ?ex orig:value ?theme . 
 BIND(IRI(?theme) AS ?themeURI) 
} 

```

* Mapping contactPoint email 

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX adms: <http://www.w3.org/ns/adms#>
INSERT { 
  ?harmds adms:contactPoint ?cPoint .
  ?cPoint a <http://www.w3.org/2006/vcard/ns#VCard> .
  ?cPoint <http://www.w3.org/2006/vcard/ns#fn> ?name
} WHERE { 
  ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
  ?ds orig:maintainer ?name. 
  ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
  ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
  BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint)
}

```

* Mapping publisher

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX dct:<http://purl.org/dc/terms/> 
INSERT { 
  ?harmds dct:publisher ?publisher
} WHERE { 
  ?ds a <http://www.w3.org/ns/dcat#Dataset> . 
  ?ds orig:author ?publisher .
  ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
  ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
}

```


### Optional

* dataset conformsTo (dct:conformsTo)

```
```

* dataset frequency (dct:accrualPeriodicity)

```
```

* dataset identifier (dct:identifier)

```
PREFIX dct: <http://purl.org/dc/terms/> 
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX adms: <http://www.w3.org/ns/adms#> 
INSERT { 
 ?harmds dct:identifier ?name .
} WHERE { 
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
 ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
 ?ds orig:name ?name .
}
```

* dataset landing page (dcat:landingPage)

```
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
INSERT {
 ?harmds dcat:distribution ?dist.
 ?dist a dcat:Distribution.
 ?dist dcat:landingPage ?ds.
} WHERE {
 ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
 ?ds orig:resources ?resource. 
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
 ?resource orig:id ?id.
 BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
 BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}

```

* dataset language (dct:language)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcterms:language <http://publications.europa.eu/resource/authority/language/FRA>
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
}
```

* dataset other identifier (adms:identifier)

```
```

* dataset release date (dct:issued)

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX dct:<http://purl.org/dc/terms/> 
INSERT {
 ?harmds dct:issued ?issued
} WHERE {
 ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?ds orig:metadata_created ?issued. 
}

```

* dataset modification date (dct:modified)

```
PREFIX  orig: <http://www.data.gouv.fr/predicate/> 
prefix dct:<http://purl.org/dc/terms/> 
INSERT {
 ?harmds dct:modified ?modified
} WHERE {
 ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?ds orig:metadata_modified ?modified. 
}

```

* dataset spatial/geographic (dct:spatial)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcterms:spatial <http://publications.europa.eu/resource/authority/country/FRA>
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
}
```

* dataset temporal (dct:temporal)

```
```

* dataset version

```
PREFIX orig: <http://www.data.gouv.fr/predicate/> 
PREFIX adms: <http://www.w3.org/ns/adms#> 
INSERT { 
 ?harmds adms:version ?d .
} WHERE { 
 ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
 ?ds  orig:version  ?d. 
 ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
 ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
}

```

* dataset version notes (adms:versionNotes)

```
```




