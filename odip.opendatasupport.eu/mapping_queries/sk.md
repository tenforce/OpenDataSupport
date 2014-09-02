# <Country> CKAN to DCAT-AP

## Distribution properties

### Mandatory
* accessURL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:accessURL ?url.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.sk/predicate/resources>  ?resource. 
?resource <http://data.gov.sk/predicate/id> ?id.
?resource <http://data.gov.sk/predicate/url>  ?url. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

### Recommended

* distribution description

```
prefix dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:description ?desc.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.sk/predicate/resources>  ?resource. 
?resource <http://data.gov.sk/predicate/id> ?id.
?resource <http://data.gov.sk/predicate/description>  ?desc. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution format

```
prefix dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:format ?format.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.sk/predicate/resources>  ?resource. 
?resource <http://data.gov.sk/predicate/id> ?id.
?resource <http://data.gov.sk/predicate/format>  ?format. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution license

```
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
prefix dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:mediaType ?format.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.sk/predicate/resources>  ?resource. 
?resource <http://data.gov.sk/predicate/id> ?id.
?resource <http://data.gov.sk/predicate/type>  ?format. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* release date

```
prefix dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:issued ?created.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.sk/predicate/resources>  ?resource. 
?resource <http://data.gov.sk/predicate/id> ?id.
?resource <http://data.gov.sk/predicate/created>  ?created. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* modification date

```
prefix dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:modified ?modified.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.sk/predicate/resources>  ?resource. 
?resource <http://data.gov.sk/predicate/id> ?id.
?resource <http://data.gov.sk/predicate/revision_timestamp>  ?modified. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* rights

```
```

* status

```
prefix adms:<http://www.w3.org/ns/adms#>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist adms:status ?status.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.sk/predicate/resources>  ?resource. 
?resource <http://data.gov.sk/predicate/id> ?id.
?resource <http://data.gov.sk/predicate/state>  ?status. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* title

```
prefix dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:title ?title.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.sk/predicate/resources>  ?resource. 
?resource <http://data.gov.sk/predicate/id> ?id.
?resource <http://data.gov.sk/predicate/title>  ?title. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
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
?ds  <http://data.gov.sk/predicate/notes>  ?d. 
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
?ds  <http://data.gov.sk/predicate/title>  ?d. 
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
?ds <http://data.gov.sk/predicate/tags>  ?keyword. 
?keyword <http://data.gov.sk/predicate/name>  ?name. 
}
```

* Mapping theme

```
```

* Mapping contactPoint email 

```
prefix adms:<http://www.w3.org/ns/adms#>
INSERT 
{ 
?ds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?extra  <http://data.gov.sk/predicate/maintainer_email>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping contactPoint na me

```
prefix adms:<http://www.w3.org/ns/adms#>
INSERT 
{ 
?ds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#fn>  ?name
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.sk/predicate/maintainer>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping publisher

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ 
?harmds dct:publisher ?publisher
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.sk/predicate/groups>  ?groups. 
?group <http://data.gov.sk/predicate/name> ?publisher.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
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
```

* dataset landing page (dcat:landingPage)

```
```

* dataset language (dct:language)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcterms:language <http://publications.europa.eu/resource/authority/language/SLK>
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
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:issued ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.sk/predicate/metadata_created>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset modification date (dct:modified)

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:modified ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.sk/predicate/metadata_modified>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset spatial/geographic (dct:spatial)

```
PREFIX dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT 
{ ?harmds dct:language <http://publications.europa.eu/resource/authority/country/SVK>} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset temporal (dct:temporal)

```
```

* dataset version

```
prefix adms:<http://www.w3.org/ns/adms#> 
INSERT 
{ ?harmds adms:version  ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://data.gov.sk/predicate/version>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset license

```
```

* dataset version notes (adms:versionNotes)

```
```




