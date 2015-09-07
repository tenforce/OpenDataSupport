# <Country> CKAN to DCAT-AP

Core Vocabulary Identifier | Mapping Relation | Data Model | Identifier | Mapping Comment
---------------------------|------------------|------------|------------|----------------
dcat:Distribution/dcat:accessURL | exactMatch | de | resources/url | 
dcat:Distribution/dct:description | exactMatch | de | resources/description | 
dcat:Distribution/dct:format | exactMatch | de | resources/format | 
dcat:Distribution/dct:license | exactMatch | de | license_url | 
dcat:Distribution/dcat:mediaType | exactMatch | de | resources/file | 
dcat:Distribution/dct:issued | exactMatch | de | resources/created | 
dcat:Distribution/adms:status | exactMatch | de | resources/state | 
dcat:Distribution/dct:title | exactMatch | de | resources/name | 
dcat:Distribution/dct:modified | exactMatch | de | resources/revision_timestamp | 
dcat:Dataset/dct:description | exactMatch| de | notes | 
dcat:Dataset/dct:title | exactMatch| de | title | 
dcat:Dataset/dcat:keyword | exactMatch| de | tags/name | 
dcat:Dataset/dcat:theme | exactMatch| de | groups/name | 
dcat:Dataset/adms:contactPoint/vcard:email | exactMatch| de | maintainer_email | 
dcat:Dataset/adms:contactPoint/vcard:fn | exactMatch| de | maintainer | 
dcat:Dataset/dct:publisher | exactMatch| de | author | 
dcat:Dataset/dct:issued | exactMatch | de | extras/key[date_released]-value | 
dcat:Dataset/dct:spatial | exactMatch | de | extras/key[spatial-text]-value | 
dcat:Dataset/dct:accrualPeriodicity | exactMatch | de | extras/key[frequency-of-update]-value | 
dcat:Dataset/adms:version | exactMatch | de | version | 

 
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
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
?resource <https://www.govdata.de/ckan/predicate/url>  ?url. 
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
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
?resource <https://www.govdata.de/ckan/predicate/description>  ?desc. 
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
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
?resource <https://www.govdata.de/ckan/predicate/format>  ?format. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution license

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?dist dct:license ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://www.govdata.de/ckan/predicate/license_url>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
BIND(IRI(?d) AS ?license).
}
```

### Optional
* byte size

```
```

* download URL

* media type

```
prefix dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:mediaType ?type.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
?resource <https://www.govdata.de/ckan/predicate/file>  ?type. 
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
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
?resource <https://www.govdata.de/ckan/predicate/created>  ?created. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* rights

* status

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist adms:status ?state.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
?resource <https://www.govdata.de/ckan/predicate/state>  ?state. 
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
?dist dct:title ?name.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
?resource <https://www.govdata.de/ckan/predicate/name>  ?name. 
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
?ds <https://www.govdata.de/ckan/predicate/resources>  ?resource. 
?resource <https://www.govdata.de/ckan/predicate/id> ?id.
?resource <https://www.govdata.de/ckan/predicate/revision_timestamp>  ?modif. 
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
?ds  <https://www.govdata.de/ckan/predicate/notes>  ?d. 
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
?ds  <https://www.govdata.de/ckan/predicate/title>  ?d. 
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
?ds <https://www.govdata.de/ckan/predicate/tags>  ?keyword. 
?keyword <https://www.govdata.de/ckan/predicate/name>  ?name. 
}
```

* Mapping theme

```
INSERT 
{ ?harmds <http://www.w3.org/ns/dcat#theme> ?theme.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://www.govdata.de/ckan/predicate/groups>  ?g. 
?g <https://www.govdata.de/ckan/predicate/name> ?theme.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping contactPoint email 

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
?ds  <https://www.govdata.de/ckan/predicate/maintainer_email>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
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
?ds  <https://www.govdata.de/ckan/predicate/maintainer>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping publisher

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:publisher  ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://www.govdata.de/ckan/predicate/author>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


### Optional

* dataset release date

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:issued ?date.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <hhttps://www.govdata.de/ckan/predicate/extras>  ?extra. 
?extra  <hhttps://www.govdata.de/ckan/predicate/key> "date_released".
?extra  <hhttps://www.govdata.de/ckan/predicate/value>  ?date.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset modification date

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:modified

 ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://www.govdata.de/ckan/predicate/revision_timestamp>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset spatial/geographic

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:spatial ?spatial.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <hhttps://www.govdata.de/ckan/predicate/extras>  ?extra. 
?extra  <hhttps://www.govdata.de/ckan/predicate/key> "spatial-text".
?extra  <hhttps://www.govdata.de/ckan/predicate/value>  ?spatial.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

```
PREFIX dct:<http://purl.org/dc/terms/> 
INSERT
{ ?harmds dct:spatial <http://publications.europa.eu/resource/authority/country/DEU> }
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
FILTER (! EXISTS {?harmds dct:spatial ?spatial})
}
```

* dataset language (dct:language)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcterms:language <http://publications.europa.eu/resource/authority/language/DEU>
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
}
```

* frequence 

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:accrualPeriodicity ?frequency.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <hhttps://www.govdata.de/ckan/predicate/extras>  ?extra. 
?extra  <hhttps://www.govdata.de/ckan/predicate/key> "frequency-of-update".
?extra  <hhttps://www.govdata.de/ckan/predicate/value>  ?frequency.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset version

```
prefix adms:<http://www.w3.org/ns/adms#> 
INSERT 
{ ?harmds adms:version ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://www.govdata.de/ckan/predicate/version>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


