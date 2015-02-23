# <Country> CKAN to DCAT-AP

Core Vocabulary Identifier | Mapping Relation | Data Model | Identifier | Mapping Comment
---------------------------|------------------|------------|------------|----------------
dcat:Distribution/dcat:accessURL | exactMatch | de | resources/url | not checked yet
dcat:Distribution/dct:description | exactMatch | de | resources/description | xx
dcat:Distribution/dct:format | exactMatch | de | resources/format | xx
dcat:Distribution/dct:license | exactMatch | de | license_url | xx
dcat:Distribution/dct:issued | exactMatch | de | resources/revision_timestamp | xx
dcat:Distribution/dct:title | exactMatch | de | resources/name | xx
dcat:Dataset/dct:description | exactMatch | de | notes | xx
dcat:Dataset/dct:title | exactMatch | de | title | xx
dcat:Dataset/dcat:keyword | exactMatch | de | tags/name | xx
dcat:Dataset/dcat:theme | exactMatch | de | extras/key[categorization]-value | xx
dcat:Dataset/adms:contactPoint/email | exactMatch | de | maintainer_email | xx
dcat:Dataset/adms:contactPoint/fn | exactMatch | de | maintainer | xx

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
?ds <http://www.dati.gov.it/catalog/predicate/resources>  ?resource. 
?resource <http://www.dati.gov.it/catalog/predicate/id> ?id.
?resource <http://www.dati.gov.it/catalog/predicate/url>  ?url. 
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
?ds <http://www.dati.gov.it/catalog/predicate/resources>  ?resource. 
?resource <http://www.dati.gov.it/catalog/predicate/id> ?id.
?resource <http://www.dati.gov.it/catalog/predicate/description>  ?desc. 
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
?ds <http://www.dati.gov.it/catalog/predicate/resources>  ?resource. 
?resource <http://www.dati.gov.it/catalog/predicate/id> ?id.
?resource <http://www.dati.gov.it/catalog/predicate/format>  ?format. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution license

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:license ?license.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://www.dati.gov.it/catalog/predicate/resources>  ?resource. 
?resource <http://www.dati.gov.it/catalog/predicate/id> ?id.
?ds <http://www.dati.gov.it/catalog/predicate/license_id>  ?license. 
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
?dist dct:format ?format.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://www.dati.gov.it/catalog/predicate/resources>  ?resource. 
?resource <http://www.dati.gov.it/catalog/predicate/id> ?id.
?resource <http://www.dati.gov.it/catalog/predicate/description>  ?format. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* download URL

```
```

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
?ds <http://www.dati.gov.it/catalog/predicate/resources>  ?resource. 
?resource <http://www.dati.gov.it/catalog/predicate/id> ?id.
?resource <http://www.dati.gov.it/catalog/predicate/created>  ?created. 
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
?ds <http://www.dati.gov.it/catalog/predicate/resources>  ?resource. 
?resource <http://www.dati.gov.it/catalog/predicate/id> ?id.
?resource <http://www.dati.gov.it/catalog/predicate/revision_timestamp>  ?modified. 
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
INSERT
{
?harmds dct:description ?description
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://www.dati.gov.it/catalog/predicate/notes>  ?description. 
}
```

* Mapping Title

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
prefix dct:<http://purl.org/dc/terms/> 
INSERT
{
?harmds dct:title ?title
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://www.dati.gov.it/catalog/predicate/title>  ?title. 
}
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
?ds <http://www.dati.gov.it/catalog/predicate/tags>  ?keyword. 
?keyword <http://www.dati.gov.it/catalog/predicate/name>  ?name. 
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
?ds  <http://www.dati.gov.it/catalog/predicate/maintainer_email>  ?email. 
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
?ds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#fn>  ?name
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://www.dati.gov.it/catalog/predicate/maintainer>  ?name. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint)
}
```
* Mapping publisher

```
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
```

* dataset other identifier (adms:identifier)

```
```

* dataset release date (dct:issued)

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT
{
?harmds dct:issued ?issued
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://www.dati.gov.it/catalog/predicate/tags>  ?keyword. 
?keyword <http://www.dati.gov.it/catalog/predicate/metadata_created>  ?issued. 
}

```

* dataset modification date (dct:modified)

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT
{
?harmds dct:modified ?modified
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://www.dati.gov.it/catalog/predicate/tags>  ?keyword. 
?keyword <http://www.dati.gov.it/catalog/predicate/metadata_modified>  ?modified. 
}

```

* dataset spatial/geographic (dct:spatial)

```
```

* dataset temporal (dct:temporal)

```
```

* dataset version

```
```

* dataset license

```
```

* dataset version notes (adms:versionNotes)

```
```




