# Greek CKAN to DCAT-AP
Greece has moved to ckan for its open data portal. This are the mappings applied.

## Distribution properties

### Mandatory
* accessURL

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
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
?ds orig:resources  ?resource. 
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
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?dist dcterms:description ?desc
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources  ?resource. 
?resource orig:id ?id.
?resource orig:description  ?desc. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution format

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?dist dcterms:format ?format
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources  ?resource. 
?resource orig:id ?id.
?resource orig:format  ?format. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* distribution license

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?dist dcterms:license ?license
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources  ?resource. 
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
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?dist dcterms:issued ?issued
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources  ?resource. 
?resource orig:id ?id.
?resource orig:created  ?issued. 
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* modification date

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?dist dcterms:modified ?modified
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources  ?resource. 
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
```


## Dataset properties

### Mandatory
* Mapping description

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:description ?desc
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:notes_en ?notes. 
BIND( STRLANG(?notes,"en") AS ?desc).
}
```

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:description ?desc
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:notes ?notes.
BIND( STRLANG(?notes,"fi") AS ?desc).
}
```

* Mapping Title

```
# finnish title
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:title ?title
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:title ?notes.
BIND( STRLANG(?notes,"fi") AS ?title).
}
```

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:title ?title
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:title_en ?notes.
BIND( STRLANG(?notes,"en") AS ?title).
}
```


### Recommended

* Map tags to keywords

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:keyword ?keyword
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:tags ?tag.
?tag orig:name ?keyword
}
```

* Mapping theme

```
#mapping theme, categories is a comma separated value...
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcat:theme ?theme
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
    ?ds orig:extras ?extra.
    ?extra orig:key "categories".
    ?extra orig:value ?theme.
}
```

* Mapping contactPoint email 

```
prefix adms:<http://www.w3.org/ns/adms#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
INSERT 
{ 
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds orig:maintainer_email ?email.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

* Mapping contactPoint name

```
prefix adms:<http://www.w3.org/ns/adms#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
INSERT 
{ 
?harmds adms:contactPoint ?cPoint.
?cPoint a <http://www.w3.org/2006/vcard/ns#VCard>.
?cPoint <http://www.w3.org/2006/vcard/ns#fn>  ?name
} 
where { 
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?ds orig:maintainer ?name.
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?harmds,"/contactPoint")) AS ?cPoint).
}
```
* Mapping publisher name

```
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX dct:<http://purl.org/dc/terms/>
INSERT
{
?harmds dct:publisher ?publisher.
?publisher a foaf:Agent.
?publisher foaf:name ?name
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:extras  ?extra. 
?extra orig:key "agency".
?extra orig:value ?name.
BIND (IRI(CONCAT("http://data.opendatasupport.eu/id/catalog/fi/publishers/",md5(?name))) AS ?publisher).
}
```


### Optional

* dataset conformsTo (dct:conformsTo)

```
```

* dataset frequency (dct:accrualPeriodicity)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:accrualPeriodicity ?frequency
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:update_frequency ?frequency.
}
```

* dataset identifier (dct:identifier)


```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:identifier ?id
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
# adding hardcoded language
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:language <http://publications.europa.eu/resource/authority/language/FIN>
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
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:issued ?issued
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:created ?issued.
}
```

* dataset modification date (dct:modified)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
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
?harmds dcterms:spatial ?coverage
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:extras ?extra.
?extra orig:key "geographic_coverage".
?extra orig:value ?coverage
}
```

* dataset temporal (dct:temporal)

```
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX orig: <https://www.opendata.fi/data/predicate/>
PREFIX dcterms: <http://purl.org/dc/terms/>
INSERT
{
?harmds dcterms:temporal ?temporal.
?temporal a dcterms:PeriodOfTime;
          dcterms:start ?start;
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:extras ?extra.
?extra orig:key "temporal_coverage-from".
?extra orig:value ?start
BIND(IRI(CONCAT(?harmds,'/temporal')) AS ?temporal).
}
```

* dataset version

```
```

* dataset version notes (adms:versionNotes)

```
```




