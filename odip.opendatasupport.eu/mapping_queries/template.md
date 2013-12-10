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
?ds <#YOURPORTAL#predicate/resources>  ?resource. 
?resource <#YOURPORTAL#predicate/id> ?id.
?resource <#YOURPORTAL#predicate/url>  ?url. 
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
```

* distribution license

```
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
```

* modification date

```
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
```

* Mapping Title

```
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
?ds <#YOURPORTAL#predicate/tags>  ?keyword. 
?keyword <#YOURPORTAL#predicate/name>  ?name. 
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
?extra  <#YOURPORTAL#predicate/extras>  ?extra. 
?extra  <#YOURPORTAL#predicate/key>  "contact-email". 
?extra  <#YOURPORTAL#predicate/value>  ?email. 
?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint).
BIND (IRI(CONCAT("mailto:",?email)) AS ?emailTo)
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
```

* dataset modification date (dct:modified)

```
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

* dataset version notes (adms:versionNotes)

```
```




