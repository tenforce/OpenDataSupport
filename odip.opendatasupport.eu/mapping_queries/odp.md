# <Country> CKAN to DCAT-AP

Core Vocabulary Identifier | Mapping Relation | Data Model | Identifier | Mapping Comment
---------------------------|------------------|------------|------------|----------------
dcat:Distribution/dcat:accessURL | exactMatch | odp | resources/url | 
dcat:Distribution/dct:description | exactMatch | odp | resources/description | 
dcat:Distribution/dct:format | exactMatch | odp | resources/format | 
dcat:Distribution/dct:license | exactMatch | odp | license_id | 
dcat:Distribution/dcat:byteSize | exactMatch | odp | resources/size | 
dcat:Distribution/dcat:mediaType | exactMatch | odp | resources/mimetype | 
dcat:Distribution/dct:issued | exactMatch | odp | resources/created | 
dcat:Distribution/dct:modified | exactMatch | odp | resources/revision_timestamp | 
dcat:Distribution/dct:title | exactMatch | odp | resources/name | 
dcat:Dataset/dct:description | exactMatch| odp | notes | 
dcat:Dataset/dct:title | exactMatch| odp | title | 
dcat:Dataset/dcat:keyword | exactMatch| odp | keywords/name | 
dcat:Dataset/adms:contactPoint/vcard:email | exactMatch| odp | contact_email | 
dcat:Dataset/adms:contactPoint/vcard:fn | exactMatch| odp | contact_name | 
dcat:Dataset/adms:contactPoint/vcard:url | exactMatch| odp | contact_webpage | 
dcat:Dataset/dct:publisher | exactMatch| odp | published_by |
dcat:Dataset/dct:accrualPeriodicity | exactMatch | odp | accrual_periodicity 
dcat:Dataset/dct:identifier | exactMatch | odp | identifier 
dcat:Dataset/dct:language | exactMatch| odp | language | 
dcat:Dataset/dct:issued | exactMatch | odp | release_date | 
dcat:Dataset/dct:modified | exactMatch | odp | modified_date | 
dcat:Dataset/dct:spatial | exactMatch | odp | geographical_coverage | 
dcat:Dataset/dct:temporal/start | exactMatch | odp | temporal_coverage_from | 
dcat:Dataset/dct:temporal/end | exactMatch | odp | temporal_coverage_to | 
dcat:Dataset/adms:version | exactMatch | odp | version | 
dcat:Dataset/adms:versionNotes | exactMatch | odp | version_description | 

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
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
?resource <http://open-data.europa.eu/data/predicate/url>  ?url. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

### Recommended

* distribution description

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
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
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
?resource <http://open-data.europa.eu/data/predicate/description>  ?desc. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution format

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
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
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
?resource <http://open-data.europa.eu/data/predicate/format>  ?format. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution license

```
INSERT 
{ ?dist <http://purl.org/dc/terms/license> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/license_id>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

### Optional
* byte size

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:byteSize ?size.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
?resource <http://open-data.europa.eu/data/predicate/size>  ?size. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* download URL

```
```

* media type

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:mediaType ?mimetype.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
?resource <http://open-data.europa.eu/data/predicate/mimetype>  ?mimetype. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
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
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
?resource <http://open-data.europa.eu/data/predicate/created>  ?created. 
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
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
?resource <http://open-data.europa.eu/data/predicate/revision_timestamp>  ?modified. 
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
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
?ds <http://open-data.europa.eu/data/predicate/resources>  ?resource. 
?resource <http://open-data.europa.eu/data/predicate/id> ?id.
?resource <http://open-data.europa.eu/data/predicate/name>  ?name. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```


## Dataset properties

### Mandatory
* Mapping description

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/description> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/description>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping Title

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/title> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/title>  ?d. 
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
?ds <http://open-data.europa.eu/data/predicate/keywords>  ?keyword. 
?keyword <http://open-data.europa.eu/data/predicate/name>  ?name. 
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
?ds  <http://open-data.europa.eu/data/predicate/contact_email>  ?email. 
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
?ds  <http://open-data.europa.eu/data/predicate/contact_name>  ?name. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping contactPoint webpage 

```
prefix adms:<http://www.w3.org/ns/adms#>
INSERT 
{ 
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#url>  ?url
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/contact_webpage>  ?url. 
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
?ds  <http://open-data.europa.eu/data/predicate/published_by>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


### Optional

* dataset conformsTo (dct:conformsTo)

```
```

* dataset frequency (dct:accrualPeriodicity)

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/accrualPeriodicity> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/accrual_periodicity>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonization.owl#raw_dataset> ?ds. }
```

* dataset identifier (dct:identifier)

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/identified> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/identifier>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset landing page (dcat:landingPage)

```
```

* dataset language (dct:language)

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/dataset_language> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/language>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset other identifier (adms:identifier)

```
```

* dataset release date (dct:issued)

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/issued> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/release_date>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset modification date (dct:modified)

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/modified> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/modified_date>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset spatial/geographic (dct:spatial)

```
INSERT 
{ ?harmds <http://purl.org/dc/terms/spatial> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/geographical_coverage>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset temporal (dct:temporal)

```
INSERT 
{ 
?harmds <http://purl.org/dc/terms/temporal> ?temporal.
?temporal <http://data.opendatasupport.eu/ontology/harmonisation.owl#start> ?start.
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/temporal_coverage_from>  ?start. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND(IRI(CONCAT(?harmds,"/temporal"))).
}
```

```
INSERT 
{ 
?harmds <http://purl.org/dc/terms/temporal> ?temporal.
?temporal <http://data.opendatasupport.eu/ontology/harmonisation.owl#end> ?end
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/temporal_coverage_to>  ?end. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND(IRI(CONCAT(?harmds,"/temporal"))).
}
```

* dataset version

```
prefix adms:<http://www.w3.org/ns/adms#> 
INSERT 
{ ?harmds <http://www.w3.org/ns/adms#version> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/version>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset version notes (adms:versionNotes)

```
prefix adms:<http://www.w3.org/ns/adms#> 
INSERT 
{ ?harmds <http://www.w3.org/ns/adms#versionNotes> ?d.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://open-data.europa.eu/data/predicate/version_description>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```




