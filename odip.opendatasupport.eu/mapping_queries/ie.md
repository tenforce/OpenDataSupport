# Irish CKAN to DCAT-AP

## Distribution properties

### Mandatory
* accessURL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
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
?ds orig:resources ?resource
?resource orig:id ?id.
?resource orig:url  ?url. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

### Recommended

* distribution description

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:description ?desc
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources ?resource.
?resource orig:id ?id.
?resource orig:description ?desc. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution format

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
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
?ds orig:resources ?resource.
?resource orig:id ?id.
?resource orig:format ?format.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution license

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:license ?license.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources ?resource.
?resource orig:id ?id.
?ds orig:license_url ?license
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:issued ?created.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources ?resource.
?resource orig:id ?id.
?resource orig:created ?created.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* modification date

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
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
?ds orig:resources ?resource.
?resource orig:id ?id.
?resource orig:revision_timestamp ?modified.
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
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dcterms:title ?title.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources ?resource.
?resource orig:id ?id.
?resource orig:name ?title.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```


## Dataset properties

### Mandatory
* Mapping description

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:description ?desc
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:notes ?desc
}
```

* Mapping Title

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:title ?title.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:title ?title.
}
```


### Recommended

* Map tags to keywords

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:keyword ?key
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:tags ?tag.
?tag orig:name ?key
}
```

* Mapping theme

```
```

* Mapping contactPoint email 

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>


INSERT
{
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email> ?emailTo.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:author_email ?email.
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX adms:<http://www.w3.org/ns/adms#>

INSERT
{
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email> ?name
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:author ?name
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint)
}
```

* Mapping publisher

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
INSERT
{
?harmds dcterms:publisher ?publisher.
?publisher a foaf:Agent;
        foaf:name ?name.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:groups ?pub.
?pub orig:name ?name.
?pub orig:description ?desc
BIND (IRI(CONCAT("http://data.gov.ie/publishers/",?name)) AS ?publisher)
}
```

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:publisher ?publisher.
?publisher a foaf:Agent;
        dcterms:description ?desc.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:groups ?pub.
?pub orig:name ?name.
?pub orig:description ?desc
BIND (IRI(CONCAT("http://data.gov.ie/publishers/",?name)) AS ?publisher)
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
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:identifier ?id.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:id ?id
}
```

* dataset landing page (dcat:landingPage)

```
```

* dataset language (dct:language)

```
# hardcoded english as language
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:language <http://publications.europa.eu/resource/authority/language/FIN>
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:id ?id
}

```

* dataset other identifier (adms:identifier)

```
```

* dataset release date (dct:issued)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:issued ?created
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:metadata_created ?created
}
```

* dataset modification date (dct:modified)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX  orig: <http://data.gov.ie/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:modified ?modified.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:metadata_modified ?modified
}
```

* dataset spatial/geographic (dct:spatial)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:spatial <http://publications.europa.eu/resource/authority/country/IRL>
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




