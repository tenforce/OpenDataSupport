# <Country> CKAN to DCAT-AP

Core Vocabulary Identifier | Mapping Relation | Data Model | Identifier | Mapping Comment
---------------------------|------------------|------------|------------|----------------
dcat:Distribution/dcat:accessURL | exactMatch | ro | resources | 
dcat:Distribution/dct:description | exactMatch | ro | resources/description | 
dcat:Distribution/dct:format | exactMatch | ro | resources/format | 
dcat:Distribution/dct:license | exactMatch | de | license_url | 
dcat:Distribution/dcat:downloadURL | exactMatch | ro | resources/url | 
dcat:Distribution/dct:issued | exactMatch | ro | resources/created | 
dcat:Distribution/dct:modified | exactMatch | ro | resources/revision_timestamp | 
dcat:Distribution/dct:title | exactMatch | ro | resources/name | 
dcat:Dataset/dct:description | exactMatch| ro | notes | 
dcat:Dataset/dct:title | exactMatch| ro | title | 
dcat:Dataset/dcat:keyword | exactMatch| ro | tags/name | 
dcat:Dataset/dcat:theme | exactMatch| ro | groups/name | 
dcat:Dataset/adms:contactPoint/vcard:email | exactMatch| ro | maintainer_email | 
dcat:Dataset/adms:contactPoint/vcard:fn | exactMatch| ro | maintainer | 
dcat:Dataset/dct:publisher | exactMatch| ro | author | 
dcat:Dataset/dct:landingPage | exactMatch| ro |  | 
dcat:Dataset/dct:issued | exactMatch | ro | metadata_created | 
dcat:Dataset/dct:modified | exactMatch | ro | revision_timestamp | 
dcat:Dataset/adms:version | exactMatch | ro | revision_id | 

## Distribution properties

### Mandatory
* accessURL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:accessURL ?dist.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/resources>  ?resource. 
?resource <http://data.gov.ro/predicate/id> ?id.
?resource <http://data.gov.ro/predicate/url>  ?url. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).

}
```

### Recommended

* distribution description

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:description ?desc.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/resources>  ?resource. 
?ds <http://data.gov.ro/predicate/id>  ?id. 
?resource <http://data.gov.ro/predicate/description> ?desc.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}

```

* distribution format

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:format ?format.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/resources>  ?resource. 
?ds <http://data.gov.ro/predicate/id>  ?id. 
?resources <http://data.gov.ro/predicate/format> ?format.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}

```

* distribution license

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:license ?license_iri
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/resources>  ?resource. 
?ds <http://data.gov.ro/predicate/id> ?id. 
?ds <http://data.gov.ro/predicate/license_url> ?license.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
BIND(IRI(?license) AS ?license_iri).
}
```

### Optional
* byte size

```
```

* download URL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcat:downloadURL ?dist.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/resources>  ?resource. 
?resource <http://data.gov.ro/predicate/id> ?id.
?resource <http://data.gov.ro/predicate/url>  ?url. 
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
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:issued ?issued.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/resources>  ?resource. 
?resource <http://data.gov.ro/predicate/created> ?issued.
?ds <http://data.gov.ro/predicate/id>  ?id. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}

```

* modification date

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:modified ?modified.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/resources>  ?resource. 
?resource <http://data.gov.ro/predicate/revision_timestamp> ?modified.
?ds <http://data.gov.ro/predicate/id>  ?id. 
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
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:title ?title
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/resources>  ?resource. 
?resource <http://data.gov.ro/predicate/name> ?title.
?ds <http://data.gov.ro/predicate/id>  ?id. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}

```


## Dataset properties

### Mandatory
* Mapping description

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:description ?desc
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/notes> ?desc
}
```

* Mapping Title

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:title ?title
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/title> ?title
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
?ds <http://data.gov.ro/predicate/tags>  ?keyword. 
?keyword <http://data.gov.ro/predicate/name>  ?name. 
}
```

* Mapping theme

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:theme ?theme
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/groups> ?group.
?group <http://data.gov.ro/predicate/name> ?theme
}
```

* Mapping contactPoint email 

```
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT 
{ 
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo.
?cPoint <http://www.w3.org/2006/vcard/ns#fn> ?maintainer
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds <http://data.gov.ro/predicate/maintainer> ?maintainer.
?ds  <http://data.gov.ro/predicate/maintainer_email>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping publisher
																																																																																																																																																																																																																																																																		
```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:publisher ?publisher
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/author> ?publisher
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:landingPage ?ds
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
}
```

* dataset language (dct:language)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcterms:language <http://publications.europa.eu/resource/authority/language/RON>
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:issued ?issued
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/metadata_created> ?issued
}
```


* dataset modification date (dct:modified)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:modified ?mod
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/revision_timestamp> ?mod
}
```

* dataset spatial/geographic (dct:spatial)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds dcterms:spatial <http://publications.europa.eu/resource/authority/country/ROU>
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>
INSERT
{
?harmds adms:version ?id
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds <http://data.gov.ro/predicate/revision_id> ?version
}
```

* dataset version notes (adms:versionNotes)

```
```




