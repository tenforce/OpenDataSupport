# <Country> CKAN to DCAT-AP

Core Vocabulary Identifier | Mapping Relation | Data Model | Identifier | Mapping Comment
---------------------------|------------------|------------|------------|----------------
dcat:Distribution/dcat:accessURL | exactMatch | nl | resources/url | 
dcat:Distribution/dct:format | exactMatch | nl | resources/format | 
dcat:Distribution/dct:license | exactMatch | de | license_url | 
dcat:Distribution/dcat:downloadURL | exactMatch | nl | resources/url | 
dcat:Distribution/dct:issued | exactMatch | nl | resources/created | 
dcat:Distribution/dct:modified | exactMatch | nl | resources/revision_timestamp | 
dcat:Distribution/dct:title | exactMatch | nl | resources/name | 
dcat:Dataset/dct:description | exactMatch| nl | notes | 
dcat:Dataset/dct:title | exactMatch| nl | title | 
dcat:Dataset/dcat:keyword | exactMatch| nl | tags/name | 
dcat:Dataset/adms:contactPoint/vcard:email | exactMatch| nl | maintainer_email | 
dcat:Dataset/adms:contactPoint/vcard:fn | exactMatch| nl | maintainer | 
dcat:Dataset/dct:publisher | exactMatch| nl | author | 
dcat:Dataset/dct:issued | exactMatch | nl | metadata_created | 
dcat:Dataset/dct:modified | exactMatch | nl | revision_timestamp | 
dcat:Dataset/dct:spatial | exactMatch | de | extras/key[spatial]-value | 

## Distribution properties

### Mandatory
* accessURL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:accessURL ?iri.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <https://data.overheid.nl/data/predicate/resources>  ?resource. 
?resource <https://data.overheid.nl/data/predicate/id> ?id.
?resource <https://data.overheid.nl/data/predicate/url>  ?url. 
BIND(IRI(?url) AS ?iri).
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

### Recommended

* distribution description

```

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
?ds <https://data.overheid.nl/data/predicate/resources>  ?resource. 
?resource <https://data.overheid.nl/data/predicate/id> ?id.
?resource <https://data.overheid.nl/data/predicate/format>  ?format. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution license

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?dist dct:license ?license.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://data.overheid.nl/data/predicate/license_url>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <https://data.overheid.nl/data/predicate/resources>  ?resource. 
?resource <https://data.overheid.nl/data/predicate/id> ?id.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
BIND(IRI(?d) ?license)
}
```

### Optional
* byte size

```
```

* download URL

* media type

```
```

* release date

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
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
?ds <https://data.overheid.nl/data/predicate/resources>  ?resource. 
?resource <https://data.overheid.nl/data/predicate/id> ?id.
?resource <https://data.overheid.nl/data/predicate/created>  ?created. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* rights

* status


* title

```
prefix dct:<http://purl.org/dc/terms/> 
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
?ds <https://data.overheid.nl/data/predicate/resources>  ?resource. 
?resource <https://data.overheid.nl/data/predicate/id> ?id.
?resource <https://data.overheid.nl/data/predicate/name>  ?title. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* modification date

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
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
?ds <https://data.overheid.nl/data/predicate/resources>  ?resource. 
?resource <https://data.overheid.nl/data/predicate/id> ?id.
?resource <https://data.overheid.nl/data/predicate/revision_timestamp>  ?modified. 
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
?ds  <https://data.overheid.nl/data/predicate/notes>  ?d. 
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
?ds  <https://data.overheid.nl/data/predicate/title>  ?d. 
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
?ds <https://data.overheid.nl/data/predicate/tags>  ?keyword. 
?keyword <https://data.overheid.nl/data/predicate/name>  ?name. 
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
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds <https://data.overheid.nl/data/predicate/maintainer_email> ?email.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* contactPoint name

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
?ds <https://data.overheid.nl/data/predicate/maintainer> ?name.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping publisher

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/publisher> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://data.overheid.nl/data/predicate/author>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


### Optional

* dataset release date

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:issued ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://data.overheid.nl/data/predicate/metadata_created>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset modification date

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:modified ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://data.overheid.nl/data/predicate/revision_timestamp>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset spatial/geographic

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:spatial ?lang.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://data.overheid.nl/data/predicate/extras>  ?extra. 
?extra  <https://data.overheid.nl/data/predicate/key> "spatial".
?extra  <https://data.overheid.nl/data/predicate/value>  ?lang.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* frequence 

```
```

* mapping frequency

```
```

* dataset version

```
```

* language

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:language ?lang.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <https://data.overheid.nl/data/predicate/extras>  ?extra. 
?extra  <https://data.overheid.nl/data/predicate/key> "language".
?extra  <https://data.overheid.nl/data/predicate/value>  ?lang.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


