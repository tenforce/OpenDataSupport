# <Country> CKAN to DCAT-AP

## Distribution properties

### Mandatory
* accessURL

```
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

* media type

```
```

* release date

```
```

* rights

* status

* title

```
```
* modification date

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
?ds <http://data.gov.uk/predicate/tags>  ?keyword. 
?keyword <http://data.gov.uk/predicate/name>  ?name. 
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
?extra  <http://data.gov.uk/predicate/extras>  ?extra. 
?extra  <http://data.gov.uk/predicate/key>  "contact-email". 
?extra  <http://data.gov.uk/predicate/value>  ?email. 
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

* dataset release date

```
```

* dataset modification date

```
```
* dataset spatial/geographic

```
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

* Mapping license

```
```



