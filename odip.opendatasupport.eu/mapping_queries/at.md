# Austria CKAN to DCAT-AP

## Distribution properties

### Mandatory
* accessURL

```
PREFIX orig: <https://www.data.gv.at/katalog/>
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:description ?desc
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:format ?format
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:license ?license
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:license_url ?license.
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:issued ?issued
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources  ?resource. 
?resource orig:id ?id.
?resource orig:created ?issued.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
BIND(IRI(CONCAT(?hds,?id)) AS ?dist).
}
```

* modification date

```
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:modified ?modified
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dcat:distribution ?dist.
?dist a dcat:Distribution.
?dist dct:title ?title
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:resources  ?resource. 
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:description ?description
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:notes  ?description. 
```

* Mapping Title

```
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:title ?name
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:keyword ?name
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:tags  ?keyword. 
?keyword orig:name  ?name. 
}
```

* Mapping theme

```
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX  dcat: <http://www.w3.org/ns/dcat#>
INSERT
{
?harmds dcat:theme ?theme
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:extras  ?extra. 
?extra orig:key "categorization".
?extra orig:value ?theme
}
```

* Mapping contactPoint email 

```
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX adms:<http://www.w3.org/ns/adms#>
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX adms:<http://www.w3.org/ns/adms#>
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX dct:<http://purl.org/dc/terms>
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
?extra orig:key "publisher".
?extra orig:value ?name.
BIND (IRI(CONCAT(?harmds,"/publisher")) AS ?publisher).
}
```

* publisher email

```
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:publisher ?publisher.
?publisher a foaf:Agent.
?publisher foaf:mbox ?emailTo
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:extras  ?extra. 
?extra orig:key "publisher_email".
?extra orig:value ?email.
BIND (IRI(CONCAT(?harmds,"/publisher")) AS ?publisher).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
}
```

### Optional

* dataset conformsTo (dct:conformsTo)

```
possibly extras.schema_name (tbc)
```

* dataset frequency (dct:accrualPeriodicity)

```
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:accrualPeriodicity ?freq.
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:extras  ?extra. 
?extra orig:key "update_frequency".
?extra orig:value ?freq.
}
```

* dataset identifier (dct:identifier)

```
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:identifier ?id
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:language <http://publications.europa.eu/resource/authority/language/DEU>
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:issued ?issued
}
WHERE {
?ds a <http://www.w3.org/ns/dcat#Dataset>. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
?ds orig:metadata_created ?issued
}
```

* dataset modification date (dct:modified)

```
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:modified ?modified
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
PREFIX orig: <https://www.data.gv.at/katalog/>
PREFIX dct:<http://purl.org/dc/terms>
INSERT
{
?harmds dct:spatial <http://publications.europa.eu/resource/authority/country/AUT>
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




