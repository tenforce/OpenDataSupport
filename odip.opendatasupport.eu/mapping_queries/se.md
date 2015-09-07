# <Country> CKAN to DCAT-AP

Core Vocabulary Identifier | Mapping Relation | Data Model | Identifier | Mapping Comment
---------------------------|------------------|------------|------------|----------------
dcat:Distribution/dcat:accessURL | exactMatch | se |  | 
dcat:Distribution/dct:description | exactMatch | se | resources/description | 
dcat:Distribution/dct:format | exactMatch | se | resources/format | 
dcat:Distribution/dct:license | exactMatch | se | license_url | 
dcat:Distribution/dcat:downloadURL | exactMatch | se | resources/url | 
dcat:Distribution/dct:issued | exactMatch | se | resources/created | 
dcat:Distribution/dct:modified | exactMatch | se | resources/revision_timestamp | 
dcat:Distribution/dct:title | exactMatch | se | resources/name | 
dcat:Dataset/dct:description | exactMatch| se | notes | 
dcat:Dataset/dct:title | exactMatch| se | title | 
dcat:Dataset/dcat:keyword | exactMatch| se | tags/name | 
dcat:Dataset/dcat:theme | exactMatch| se | eurovoc_thesaurus | 
dcat:Dataset/adms:contactPoint/vcard:email | exactMatch| se | maintainer_email | 
dcat:Dataset/adms:contactPoint/vcard:fn | exactMatch| se | maintainer | 
dcat:Dataset/dct:publisher | exactMatch| se | author | 
dcat:Dataset/dcat:landingPage | exactMatch| se | url | 
dcat:Dataset/dct:issued | exactMatch | se | metadata_created | 
dcat:Dataset/dct:modified | exactMatch | se | metadata_modified | 

## Distribution properties

### Mandatory
* accessURL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:accessURL ?ds.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://oppnadata.se/predicate/resources>  ?resource. 
?resource <http://oppnadata.se/predicate/id> ?id.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

### Recommended

* distribution description

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
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
?ds <http://oppnadata.se/predicate/resources>  ?resource. 
?resource <http://oppnadata.se/predicate/id> ?id.
?resource <http://oppnadata.se/predicate/description> ?desc.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution format

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
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
?ds <http://oppnadata.se/predicate/resources>  ?resource. 
?resource <http://oppnadata.se/predicate/id> ?id.
?resource <http://oppnadata.se/predicate/format> ?format.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```


* distribution license

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
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
?ds <http://oppnadata.se/predicate/resources>  ?resource. 
?resource <http://oppnadata.se/predicate/id> ?id.
?ds <http://oppnadata.se/predicate/license_url> ?license.
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:downloadURL ?url.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://oppnadata.se/predicate/resources>  ?resource. 
?resource <http://oppnadata.se/predicate/id> ?id.
?resource <http://oppnadata.se/predicate/url>  ?url. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* media type

```
```

* release date

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
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
?ds <http://oppnadata.se/predicate/resources>  ?resource. 
?resource <http://oppnadata.se/predicate/id> ?id.
?resource <http://oppnadata.se/predicate/created>  ?created. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* modification date

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/> 
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
?ds <http://oppnadata.se/predicate/resources>  ?resource. 
?resource <http://oppnadata.se/predicate/id> ?id.
?resource <http://oppnadata.se/predicate/modified>  ?modified. 
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
PREFIX dct: <http://purl.org/dc/terms/> 
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
?ds <http://oppnadata.se/predicate/resources>  ?resource. 
?resource <http://oppnadata.se/predicate/id> ?id.
?resource <http://oppnadata.se/predicate/name>  ?title. 
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
?ds  <http://oppnadata.se/predicate/notes>  ?d. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* Mapping Title

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:title ?title.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://oppnadata.se/predicate/title>  ?title. 
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
?ds <http://oppnadata.se/predicate/tags>  ?keyword. 
?keyword <http://oppnadata.se/predicate/name>  ?name. 
}
```

* Mapping theme

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:theme ?theme
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://oppnadata.se/predicate/http://oppnadata.se/predicate/eurovoc_thesaurus>  ?theme. 
}
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
?ds  <http://oppnadata.se/predicate/maintainer_email>  ?email.  
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
?ds  <http://oppnadata.se/predicate/maintainer>  ?name.  
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
{ ?harmds dct:publisher ?author.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://oppnadata.se/predicate/author>  ?author. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT 
{ ?harmds dcat:landingPage ?page.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://oppnadata.se/predicate/url>  ?page. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset language (dct:language)

```
PREFIX dct:<http://purl.org/dc/terms/> 
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT 
{ ?harmds dct:language <http://publications.europa.eu/resource/authority/language/SWE>} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```

* dataset other identifier (adms:identifier)

```
```

* dataset release date (dct:issued)

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:issued ?created.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://oppnadata.se/predicate/metadata_created>  ?created. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


* dataset modification date (dct:modified)

```
prefix dct:<http://purl.org/dc/terms/> 
INSERT 
{ ?harmds dct:modified ?modified.} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds  <http://oppnadata.se/predicate/metadata_modified>  ?modified. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. }
```


* dataset spatial/geographic (dct:spatial)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcterms:spatial <http://publications.europa.eu/resource/authority/country/SWE>
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
```

* dataset version notes (adms:versionNotes)

```
```




