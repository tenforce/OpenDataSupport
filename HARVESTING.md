Harmonization of a Ckan portal
-------------------------------

Harmonization of a ckan portal consists of multiple transformation steps that can be subdivided into three main modules: triplification, schema level harmonization and finally value harmonization. The first module, triplification, converts JSON messages to RDF triples, the algoritm used is detailed below.

## Raw harvest (Triplification)
A predicate namespace is set in the module configuration. "pred:" is used in the algoritm. Each json message belongs to a dataset with uri <dataset-uri> that will be used as the initial subject-uri.

1. Get all key value pairs on the first level of the json object
2. for each pair:
	2.1 convert the key to a full uri <pred:key>
	2.2a value is a string, int or boolean -> create a triple <subject-uri> <pred:key> value
	2.2b value is a json object
		- create resource <subject-uri/key>
		- create triple <subject-uri> <pred:key> <subject-uri/key>
		- start at 1 with subject-uri = <subject-uri/key> and the json object
	2.2c value is a json array
		- for each element array[i]
				* create resource <subject-uri/key/i>
				* create triple <subject-uri> <pred:key> <subject-uri/key/i>
				* start at 1 with subject-uri = <subject-uri/key> and the json object

example set of triples as the result of the raw harvest specified above:

```
@prefix dcat:	<http://www.w3.org/ns/dcat#> .
@prefix dataset:	<http://www.dati.gov.it/catalog/dataset/> .
@prefix rdf:	<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix pred:	<http://www.dati.gov.it/catalog/predicate/> .
dataset:aci-automobile-club-italia_annuario-statistico	rdf:type	dcat:Dataset .
dataset:aci-automobile-club-italia_annuario-statistico	pred:resources	<http://www.dati.gov.it/catalog/dataset/aci-automobile-club-italia_annuario-statistico/resources/0> ;
	pred:revision_timestamp	"2013-11-28T17:38:47.657946" ;
	pred:id	"07cd3ac4-9a65-48d8-abd9-20c8edc6b223" ;
	pred:state	"active" ;
	pred:url	"http://www.aci.it/fileadmin/documenti/ACI/Trasparenza/Open_Data/Annuario_statistico.pdf" ;
	pred:revision_id	"2ce57553-4152-4c09-94b7-ba4b12a9bee1" ;
	pred:type	"dataset" ;
	pred:private	0 ;
	pred:owner_org	"570b522e-3829-402b-b3d0-e0b8da2e22ce" ;
	pred:title	"Annuario Statistico" ;
	pred:name	"aci-automobile-club-italia_annuario-statistico" ;
	pred:license_title	"Creative Commons Attribution Non-Derivatives" ;
	pred:license_id	"cc-by-nd" .
```


## Schema level harmonization
The opendatasupport portal publishes datasets and it's distributions as Linked Open Data. It is therefore important they get a URI within the data.opendatasupport.eu namespace.
Schema level harmonization involves both mapping existing resources onto the new derefencable URI and mapping properties onto the properties specified in the DCAT application profile.

## Value level harmonization
The dcat ap for european portals specifies controlled vocabularies for a set of properties. Value level harmonization will create a mapping between values used at the source portal and those in the controlled vocabularies where possible.
