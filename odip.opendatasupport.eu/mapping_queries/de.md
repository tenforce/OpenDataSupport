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
?ds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://www.govdata.de/ckan/predicate/maintainer_email>  ?email. 
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
?ds  <https://www.govdata.de/ckan/predicate/maintainer>  ?email. 
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


