# Great Britain CKAN to DCAT-AP

## Distribution properties

### Mandatory
* Map a resource url to accessURL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:accessURL ?accessURL.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.uk/predicate/resources>  ?resource. 
?ds <http://data.gov.uk/predicate/id>  ?id. 
BIND(CONCAT(STR(?ds),"/resource/",?id) AS ?accessURL).
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

### Recommended

* distribution description

```
prefix dct:<http://purl.org/dc/terms/> 
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dct:description ?desc.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/description> ?desc.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

* distribution format

```
prefix dct:<http://purl.org/dc/terms/> 
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dct:format ?format.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/format> ?format.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

* distribution license

```

prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?distribution dct:license ?license} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "license_url". 
?extra  <http://data.gov.uk/predicate/value>  ?license. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

### Optional
* byte size

```
prefix dct:<http://purl.org/dc/terms/> 
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dcat:byteSize ?size.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/size> ?size.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

* download URL

```
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dcat:downloadURL ?url.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/url> ?url.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

* media type

```
prefix dct:<http://purl.org/dc/terms/> 
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dcat:mediaType ?type.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/mimetype> ?type.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

* release date

```
prefix dct:<http://purl.org/dc/terms/> 
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dct:issued ?created.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/created> ?created.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

* rights

* status

* title

```
prefix dct:<http://purl.org/dc/terms/> 
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dct:title ?title.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/name> ?title.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```
* modification date

```
prefix dct:<http://purl.org/dc/terms/> 
prefix dcat:<http://www.w3.org/ns/dcat#> 
INSERT
{
 ?harmds dcat:distribution ?distribution.
 ?distribution rdf:type dcat:Distribution.
 ?distribution dct:modified ?created.
}
where {
?record <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?record <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?ds a dcat:Dataset.
?ds <http://data.gov.uk/predicate/resources> ?resource.
?resource <http://data.gov.uk/predicate/id> ?id.
?resource <http://data.gov.uk/predicate/last_modified> ?modified.
BIND (CONCAT(?harmds,"/distributions/") AS ?distURL).
BIND (IRI(CONCAT(?distURL,?id)) AS ?distribution).
}
```

## Dataset properties

### Mandatory
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


### Recommended

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
?ds  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "theme-primary". 
?extra  <http://data.gov.uk/predicate/value>  ?theme. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping contactPoint email - version 1 (defined on extras)

```
prefix adms:<http://www.w3.org/ns/adms#>
INSERT 
{ 
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "contact-email". 
?extra  <http://data.gov.uk/predicate/value>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping contactPoint email - version 2 (defined on dataset)

```
prefix adms:<http://www.w3.org/ns/adms#>
INSERT 
{ 
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/contact-email>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping contactPoint name

```
prefix adms:<http://www.w3.org/ns/adms#>
INSERT 
{ 
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#fn>  ?name
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "contact-name". 
?extra  <http://data.gov.uk/predicate/value>  ?name. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint)
}
```

* Mapping contactPoint phoneNumber

```
prefix adms:<http://www.w3.org/ns/adms#>
INSERT 
{ 
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#tel>  [
rdf:value ?phone;
rdf:type <http://www.w3.org/2006/vcard/ns#Pref>
]
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "contact-phone". 
?extra  <http://data.gov.uk/predicate/value>  ?phone. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint)
}
```

* Mapping publisher

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:publisher ?publisher} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "published_by". 
?extra  <http://data.gov.uk/predicate/value>  ?publisher. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


### Optional

* release date
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

* modification date

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:modified ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.uk/predicate/revision_timestamp>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* language

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcterms:language <http://publications.europa.eu/resource/authority/language/ENG>
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
}
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

* Set spatial to Great britain if not previously set

```
PREFIX dct:<http://purl.org/dc/terms/> 
INSERT
{ ?harmds dct:spatial <http://publications.europa.eu/resource/authority/country/GBR> }
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
FILTER (! EXISTS {?harmds dct:spatial ?spatial})
}
```

* frequence 

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

* mapping frequency

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

* mapping the dataset version

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


