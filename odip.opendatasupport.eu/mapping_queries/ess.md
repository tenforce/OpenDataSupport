+TITLE: ODS Spain
=================

+OPTIONS: toc:2 (only to two levels in TOC)
===========================================

+TODO: TODO(t) WAIT(w@/!) | STARTED(s) | DONE(d!) CANCELED(c@)
==============================================================

+DRAWERS: HIDDEN PROPERTIES STATE
=================================

-   Introduction

-   http://192.168.33.33/lodms
-   http://192.168.33.33/sparql

To get the predicates accessible:

+NAME: sparqlend\_direct\_predicates
====================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

  PREFIX orig: <http://data.gob.es/> PREFIX dct:
  <http://purl.org/dc/terms/> SELECT DISTINCT ?p FROM
   <http://data.gob.es/> where { ?ds a <http://www.w3.org/ns/dcat#Dataset>
  . ?ds ?p ?o } ORDER BY ?p \#+end\_src

+RESULTS: sparqlend\_direct\_predicates
=======================================

| p | | http://purl.org/dc/terms/accrualPeriodicity | |
http://purl.org/dc/terms/conformsTo | |
http://purl.org/dc/terms/description | |
http://purl.org/dc/terms/identifier | | http://purl.org/dc/terms/issued
| | http://purl.org/dc/terms/language | |
http://purl.org/dc/terms/license | | http://purl.org/dc/terms/modified |
| http://purl.org/dc/terms/publisher | |
http://purl.org/dc/terms/references | | http://purl.org/dc/terms/spatial
| | http://purl.org/dc/terms/temporal | | http://purl.org/dc/terms/title
| | http://www.w3.org/1999/02/22-rdf-syntax-ns\#type | |
http://www.w3.org/ns/dcat\#distribution | |
http://www.w3.org/ns/dcat\#keyword | | http://www.w3.org/ns/dcat\#theme
|

+NAME: sparqlend\_count
=======================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

 PREFIX dct: <http://purl.org/dc/terms/> PREFIX dcat:
 <http://www.w3.org/ns/dcat#> PREFIX orig: <http://data.gob.es/> SELECT
 DISTINCT ?dc ( COUNT(?ds) AS ?cnt ) FROM <http://data.gob.es/> WHERE {
 ?dc a dcat:Catalog . ?dc dcat:dataset ?ds . } ORDER BY ?dc \#+end\_src

+RESULTS: sparqlend\_count
==========================

| dc | cnt | | http://s484195306.mialojamiento.es/datos/catalogo-prueba
| 657 |

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

 PREFIX dct: <http://purl.org/dc/terms/> PREFIX dcat:
 <http://www.w3.org/ns/dcat#> PREFIX orig: <http://data.gob.es/> SELECT
 DISTINCT ?p FROM <http://data.gob.es/> WHERE { ?dc a dcat:Distribution .
 ?dc ?p ?o . } \#+end\_src

+RESULTS:
=========

| p | | http://www.w3.org/1999/02/22-rdf-syntax-ns\#type | |
http://purl.org/dc/terms/format | | http://purl.org/dc/terms/relation |
| http://www.w3.org/ns/dcat\#accessURL | |
http://www.w3.org/ns/dcat\#byteSize | | http://purl.org/dc/terms/title |

+NAME: sparqlend\_size
======================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

 PREFIX dct: <http://purl.org/dc/terms/> SELECT ?size ?title ?description
FROM <http://data.gob.es/> WHERE { { select ( SUM(?len) AS ?size ) { ?s
?p ?o . FILTER isLiteral(?o) BIND(STRLEN(STR(?o)) AS ?len) } } { select
( SUM(?tlen) AS ?title ) { ?s dct:title ?o . FILTER isLiteral(?o)
BIND(STRLEN(STR(?o)) AS ?tlen) } } { select ( SUM(?dlen) AS ?description
) { ?s dct:description ?o . FILTER isLiteral(?o) BIND(STRLEN(STR(?o)) AS
?dlen) } } } \#+end\_src

+RESULTS: sparqlend\_size
=========================

| size | title | description | | 549888 | 47472 | 182953 |

+NAME: sparqlend\_key\_value
============================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dct: <http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> PREFIX orig: <http://data.gob.es/> SELECT
DISTINCT ?keyword FROM <http://data.gob.es/> WHERE { ?ds a dcat:Dataset
. ?ds dcat:keyword ?keyword . } ORDER BY ?keyword LIMIT 100 \#+end\_src

+RESULTS: sparqlend\_key\_value
===============================

| keyword | | | | | | | Accesibilidad | | | | | | | ón | del | Estado |
| | | | ón | local | | | | | | ón | periférica | | | | | | ón | pública
| | | | | | Agricultura | | | | | | | Agricultura. | Transporte. |
Censos | y | directorios. | | | Agua | | | | | | | Anuncios | | | | | |
| Archivos | | | | | | | ística. | Catálogos | | | | | | ística. |
Censos | y | directorios | | | | Arte | | | | | | | ía | Personal | | |
| | | écnicas | | | | | | | Bibliotecas | | | | | | | álogos | | | | | |
| ón | ambiental | | | | | | ía | | | | | | | álogos | | | | | | |
álogos. | | | | | | | Censos | y | directorios | | | | | Censos | y |
directorios. | | | | | Centros | sanitarios | | | | | | ía | | | | | | |
Cine | | | | | | | Comercio | | | | | | | Comercio | exterior | | | | |
| Contrataciones | y | licitaciones | | | | | ón | | | | | | | ísticos |
| | | | | | ísticos. | | | | | | | Defensa | | | | | | | Dependencia | |
| | | | | ámenes. | Catálogos | | | | | | Discapacidad | | | | | | |
Empresas | | | | | | | Encuestas | | | | | | | ísticas | | | | | | |
ísticas | | | | | | | Exposiciones | | | | | | | ía | | | | | | | Fondos
| de | pensiones | | | | | ón | pública | | | | | | ía | | | | | | |
Geociencias | | | | | | | ágenes | | | | | | | I+D | | | | | | | ón | y
| exportación | | | | | ágenes. | | | | | | | Indicadores | | | | | | |
Industria | | | | | | | Informes | | | | | | | Informes. | | | | | | |
ón | | | | | | | ón | de | vehículos | | | | | Invalidez | | | | | | |
Jurisprudencia | | | | | | | álogos | | | | | | | Justicia | | | | | | |
Lectura | | | | | | | ón | | | | | | | ón. | Normas | y |
jurisprudencia. | | | | Mapas | y | planos | | | | | Medio | Ambiente |
| | | | | Medio | rural | y | pesca | | | | ón | | | | | | | Museos | |
| | | | | úsica | | | | | | | Normas | | | | | | | Normas | y |
jurisprudencia | | | | | Normas | y | jurisprudencia. | | | | |
Normativa | y | jurisprudencia | | | | | Noticias | y | actualidad | | |
| | Noticias | y | actualidad. | | | | | Oposiciones | y | procesos |
selectivos | | | | Patentes | | | | | | | Patrimonio | | | | | | | Pesca
| | | | | | | ón | y | control | de | especies | marinas | | úblicas | |
| | | | | úblicas | | | | | | | Procedimientos | administrativos | | | |
| | ícolas | y | ganaderas | | | | | Productos | de | Apoyo | | | | |
Publicaciones | | | | | | | Publicaciones | e | informes | | | | | ón |
de | mercados | agrícolas | | | | Religiones | | | | | | | Sanidad |
vegetal | y | animal | | | | Sanidad. | Censos | y | directorios | | | |
Sector | agroalimentario | | | | | | Seguridad | Social. | Censos | y |
directorios | | | Seguros | | | | | | | Sociedad | y | bienestar | | | |
| Sociedades | mercantiles | | | | | | Sondeos | | | | | | |
Subvenciones | y | ayudas | | | | | áfico | | | | | | | ículos | | | | |
|

+NAME: sparqlend\_theme
=======================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dct: <http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> PREFIX orig: <http://data.gob.es/> SELECT
DISTINCT ?theme FROM <http://data.gob.es/> WHERE { ?ds a
<http://www.w3.org/ns/dcat#Dataset>. ?ds dcat:theme ?theme . } ORDER BY
?theme LIMIT 100 \#+end\_src

+RESULTS: sparqlend\_theme
==========================

| theme | |
http://datos.gob.es/kos/sector-publico/sector/ciencia-tecnologia | |
http://datos.gob.es/kos/sector-publico/sector/comercio | |
http://datos.gob.es/kos/sector-publico/sector/cultura-ocio | |
http://datos.gob.es/kos/sector-publico/sector/economia | |
http://datos.gob.es/kos/sector-publico/sector/educacion | |
http://datos.gob.es/kos/sector-publico/sector/empleo | |
http://datos.gob.es/kos/sector-publico/sector/hacienda | |
http://datos.gob.es/kos/sector-publico/sector/legislacion-justicia | |
http://datos.gob.es/kos/sector-publico/sector/medio-ambiente | |
http://datos.gob.es/kos/sector-publico/sector/medio-rural-pesca | |
http://datos.gob.es/kos/sector-publico/sector/salud | |
http://datos.gob.es/kos/sector-publico/sector/sector-publico | |
http://datos.gob.es/kos/sector-publico/sector/seguridad | |
http://datos.gob.es/kos/sector-publico/sector/sociedad-bienestar | |
http://datos.gob.es/kos/sector-publico/sector/transporte |

+NAME: sparqlend\_format
========================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dct: <http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> PREFIX orig: <http://data.gob.es/> SELECT
DISTINCT ?format FROM <http://data.gob.es/> WHERE { ?ds a
<http://www.w3.org/ns/dcat#Dataset> . ?ds dct:format ?format . } ORDER
BY ?format LIMIT 100 \#+end\_src

The list of acceptable file types can be accessed at:
http://publications.europa.eu/resource/authority/file-type

+NAME: sparqlend\_select\_concept
=================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

select distinct ?concept FROM
<http://publications.europa.eu/resource/authority/file-type> WHERE {
?concept a <http://www.w3.org/2004/02/skos/core#Concept> } ORDER BY
?concept \#+end\_src

+RESULTS: sparqlend\_select\_concept
====================================

: concept

-   Recommended \*\* distribution title

+NAME: sparqlend\_disttitle
===========================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX orig:
<http://data.gob.es/catalog/predicate/> SELECT DISTINCT ?disttitle FROM
<http://data.gob.es/> WHERE { ?ds a dcat:Distribution . ?ds dct:title
?disttitle . } LIMIT 10 \#+end\_src

+RESULTS: sparqlend\_disttitle
==============================

| disttitle | | 2008 | | 2009 | | 2010 | | 2011 | | 2012 | | 2013 | | ía
| | ón | | Cantabria | | ón |

The INSERT statement is:

+NAME: sparqlend\_disttitle\_insert
===================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dcat:distribution
?distribution . ?distribution a dcat:Distribution . ?distribution
dct:title ?title . } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
dcat:distribution ?dist. ?dist a dcat:Distribution . ?dist dct:title
?title . BIND (CONCAT(?harmds,"/distributions/") AS ?hds) BIND
(IRI(CONCAT(?hds,md5(?dist))) AS ?distribution) } \#+end\_src

\*\* distribution description

+NAME: sparqlend\_distdescription
=================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> SELECT DISTINCT ?dist ?distdesc WHERE { ?ds
a dcat:Distribution . ?ds dct:description ?distdesc .
BIND(CONCAT(STR("XXX"),"/distributions/") AS ?hds)
BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist) } LIMIT 10 \#+end\_src

+RESULTS: sparqlend\_distdescription
====================================

| resource | dist | distdesc |

The INSERT statement is:

+NAME: sparqlend\_distdescription\_insert
=========================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX orig:
<http://data.gob.es/catalog/predicate/> INSERT { ?harmds
dcat:distribution ?distribution . ?distribution a dcat:Distribution .
?distribution dct:description ?description . } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
dcat:distribution ?dist . ?dist a dcat:Distribution . ?dist
dct:description ?description . BIND (CONCAT(?harmds,"/distributions/")
AS ?hds) BIND (IRI(CONCAT(?hds,md5(?dist))) AS ?distribution) }
\#+end\_src

+RESULTS: sparqlend\_distdescription\_insert
============================================

\*\* distribution format

+NAME: sparqlend\_format
========================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> SELECT DISTINCT ?format WHERE { ?ds a
dcat:Distribution . ?ds dct:format ?format .
BIND(CONCAT(STR("XXXX"),"/distributions/") AS ?hds)
BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist) } \#+end\_src

+RESULTS: sparqlend\_format
===========================

The INSERT statement is:

+NAME: sparqlend\_format\_insert
================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX orig:
<http://data.gob.es/catalog/predicate/> INSERT { ?harmds
dcat:distribution ?distribution . ?distribution a dcat:Distribution .
?distribution dct:format ?format . } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
dcat:distribution ?dist . ?dist a dcat:Distribution . ?dist dct:format
?format . BIND (CONCAT(?harmds,"/distributions/") AS ?hds) BIND
(IRI(CONCAT(?hds,md5(?dist))) AS ?distribution) } \#+end\_src

*\** TODO mapping of the values (to a URI)

\*\* distribution accessURL

+NAME: sparqlend\_accessURL
===========================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX orig: <http://data.gob.es/predicate/>
SELECT DISTINCT ?distribution ?accessUrl WHERE { GRAPH
<http://data.gob.es/> { ?ds a dcat:Distribution . ?ds dcat:accessURL
?accessUrl . BIND(iri(concat("/distribution/", md5(?ds))) AS
?distribution) } } LIMIT 10 \#+end\_src

+RESULTS: sparqlend\_accessURL
==============================

| distribution | accessUrl | |
/distribution/7c11c57f170a0ca1d2c4a1fac7266b8a |
http://www.catastro.minhap.es/esp/estadisticas\_2.asp | |
/distribution/96aa6b6266b8f49a309fa773e3b4d1cf |
http://www.alimentacion.es/imagenes/es/Plan\_Consumo\_Fruta\_y\_Verdura\_en\_Escuelas\_2009\_2010\_tcm5-38690.pdf
| | /distribution/4826971ab145df7476f241c43326363e |
https://sede.micinn.gob.es/inforct/ | |
/distribution/5acb5302deada315c25fab6f43b2bc8d |
http://www.dependencia.imserso.es/dependencia\_01/estadisticas/inf\_gp/2008/index.htm
| | /distribution/c6514dcf7fcc0b059fbea1237175abac |
http://www.dependencia.imserso.es/dependencia\_01/estadisticas/inf\_gp/2009/index.htm
| | /distribution/365365bf5761300eed9433f4c022eadb |
http://www.dependencia.imserso.es/dependencia\_01/estadisticas/inf\_gp/2010/index.htm
| | /distribution/7a3b3b5b24247825ae68c3d3294e5536 |
http://www.dependencia.imserso.es/dependencia\_01/estadisticas/inf\_gp/2011/index.htm
| | /distribution/e7b49bb25ecb17351ebd238f8e1c79c0 |
http://www.dependencia.imserso.es/dependencia\_01/estadisticas/inf\_gp/2012/index.htm
| | /distribution/174b7e7dbf58af9c4f7fb8a38d2f417c |
http://www.dependencia.imserso.es/dependencia\_01/estadisticas/inf\_gp/2013/index.htm
| | /distribution/4403d4a9974e87d7ccd82c7bed02ff94 |
RevisionSelectionMethod=LatestReleased |

The INSERT statement is:

+NAME: sparqlend\_accessURL\_insert
===================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dcat:distribution
?distibution . ?distribution a dcat:Distribution . ?distribution
dcat:accessURL ?accessUrl . } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
dcat:distribution ?dist . ?dist a dcat:Dataset . ?dist dcat:accessURL
?accessUrl . BIND(concat(str(?harmds), "/distributions/") AS ?hds)
BIND(iri(concat(?hds, md5(?dist))) AS ?distribution) } \#+end\_src

*\** TODO Check construction of ?distribution uri is okay.

\*\* distribution license

The INSERT for the license is:

+NAME: sparqlend\_format\_insert
================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX orig: <http://data.gob.es/catalog/predicate/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> PREFIX dct: <http://purl.org/dc/terms/>
INSERT { ?harmds dcat:distribution ?distribution. ?distribution a
dcat:Distribution. ?distribution dct:license ?license. } WHERE {
?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
dcat:distribution ?dist . ?dist a dcat:Dataset . ?dist dct:license
?license . BIND(concat(str(?harmds), "/distributions/") AS ?hds)
BIND(iri(concat(?hds, md5(?dist))) AS ?distribution) } \#+end\_src

-   Optional \*\* byte size

+NAME: sparqlend\_bytesize
==========================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX xsd:
<http://www.w3.org/2001/XMLSchema#> SELECT DISTINCT ?distribution
?byteSize WHERE { GRAPH <http://data.gob.es/> { ?ds a
<http://www.w3.org/ns/dcat#Distribution>. ?ds dcat:byteSize ?byteSize .
FILTER( datatype(?byteSize) = xsd:decimal )
BIND(iri(concat("/distribution/", md5(?ds))) AS ?distribution) } } LIMIT
10 \#+end\_src

+RESULTS: sparqlend\_bytesize
=============================

| distribution | byteSize |

*\** TODO byteSize is rdfs:Literal, but spec says xsd:decimal - Note ::
The filter is *not* included in the lodms query at present - there would
not be any results.

The INSERT statement is:

+NAME: sparqlend\_byteSize\_insert
==================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dcat:distribution
?distibution . ?distribution a dcat:Distribution . ?distribution
dcat:byteSize ?byteSize . } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
dcat:distribution ?dist . ?dist a dcat:Distribution . ?dist
dcat:byteSize ?byteSize . FILTER( datatype(?byteSize) = xsd:decimal )
BIND(concat(str(?harmds), "/distributions/") AS ?hds)
BIND(iri(concat(?hds, md5(?dist))) AS ?distribution) } \#+end\_src

\*\* download URL

url points to a PDF

\*\* media type

type indicates "dataset"

\*\* release dat

The INSERT for the issued date.

+NAME: sparqlend\_rdate
=======================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX orig: <http://data.gob.es/catalog/predicate/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> prefix dct: <http://purl.org/dc/terms/>
INSERT { ?harmds dcat:distribution ?dist. ?dist a dcat:Distribution.
?dist dct:issued ?created. } WHERE { ?ds a
<http://www.w3.org/ns/dcat#Dataset>. ?harmrecord
<http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?ds dcat:created ?created.
BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds)
BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist) } \#+end\_src

\*\* modification date

+NAME: sparqlend\_select\_mdate
===============================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX orig:
<http://data.gob.es/catalog/predicate/> SELECT ?dist ?modified WHERE {
?ds a dcat:Dataset . ?ds dcat:revision\_timestamp ?modified .
BIND(CONCAT(STR("harmds"),"/distributions/") AS ?hds)
BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist) } LIMIT 10 \#+end\_src

+RESULTS: sparqlend\_select\_mdate
==================================

The INSERT is:

+NAME: sparqlend\_mdate
=======================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX orig:
<http://data.gob.es/catalog/predicate/> INSERT { ?harmds
dcat:distribution ?distribution . ?distribution a dcat:Distribution.
?distribution dct:modified ?modified. } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
dcat:distribution ?dist . ?dist a dcat:Distribution . ?dist
dcat:byteSize ?byteSize . FILTER( datatype(?byteSize) = xsd:decimal )
BIND(concat(str(?harmds), "/distributions/") AS ?hds)
BIND(iri(concat(?hds, md5(?dist))) AS ?distribution) } \#+end\_src

\*\* rights

\*\* status

\*\* title

+NAME: sparqlend\_title
=======================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX
dct:<http://purl.org/dc/terms/> SELECT DISTINCT ?ds ?title where { GRAPH
<http://data.gob.es/> { ?ds a dcat:Dataset . ?ds dct:title ?title . } }
LIMIT 10 \#+end\_src

+RESULTS: sparqlend\_title
==========================

The associated INSERT for the title is:

+NAME: sparqlend\_title\_insert
===============================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dct: <http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> INSERT { ?harmds dct:title ?title. } WHERE
{ ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?ds a dcat:Dataset . ?ds dct:title ?title . } \#+END\_SRC

-   Dataset properties *\* Mandatory*\*\* Mapping description

+NAME: sparqlend\_description\_select
=====================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX
dct:<http://purl.org/dc/terms/> PREFIX orig:
<http://data.gob.es/catalog/predicate/> SELECT DISTINCT ?ds ?description
WHERE { ?ds a <http://www.w3.org/ns/dcat#Dataset> . ?ds dct:description
?description . } LIMIT 10 \#+end\_src

+RESULTS: sparqlend\_description\_select
========================================

| ds | description | |
http://data.opendatasupport.eu/id/catalog/it/dataset/aci-automobile-club-italia\_annuario-statistico
| Pubblicazione che contiene in particolare serie storiche a livello
nazionale e regionale riguardantiparco veicolare, prime iscrizioni,
radiazioni, trasferimenti di proprieta di veicoli.La pubblicazione
contiene altresi dati riguardanti spese ed oneri fiscali gravanti sull
auto, elaboratidall Area Professionale Statistica dell ACI in base a
fonti varie.Una sezione e dedicata a prezzi e consumi di carburanti per
autotrazione, con dati di fonteMinistero delle attivita produttive e
Staffetta petrolifera.La pubblicazione e edita entro il mese di luglio
di ciascun anno con dati riferiti all anno precedente. | |
http://data.opendatasupport.eu/id/catalog/it/dataset/aci-automobile-club-italia\_autoritratto
| Pubblicazione che contiene, suddivise in diverse sezioni, tutte le
statistiche riguardanti il parcoveicolare al 31 dicembre dell anno di
riferimento nonche i principali dati di flusso nel corsodell
anno:Consistenza Parco veicoli: analisi statistica del parco veicolare
al 31 dicembre secondo leprincipali caratteristiche del veicolo (unita
statistica di rilevazione) - categoria, alimentazione,potenza,
cilindrata, portata, posti, fabbrica, modello, classe euro -. I dati
sono presentati a livellonazionale, di macroregione, regione, provincia,
comune.Prime iscrizioni di veicoli: analisi statistica dei veicoli nuovi
di fabbrica iscritti al PubblicoRegistro Automobilistico nel corso dell
anno di riferimento. I principali caratteri di analisi sono:livello
territoriale sulla base della residenza dell intestatario, categoria di
veicolo, alimentazione,potenza, uso, fabbrica.Radiazioni di veicoli:
analisi statistica dei veicoli radiati dal Pubblico
RegistroAutomobilistico nel corso dell anno di riferimento. I principali
caratteri di analisi sono: livelloterritoriale sulla base della
residenza dell intestatario, categoria di veicolo, alimentazione, anno
diimmatricolazione, classe Euro, mese, causale di
radiazione.Trasferimenti di proprieta di veicoli: analisi statistica dei
veicoli rivenduti nel corso dell annodi riferimento, sulla base delle
risultanze del Pubblico Registro Automobilistico. I principali
caratteridi analisi sono: categoria di veicolo, classe Euro, modello del
veicolo.Metadati: La fonte primaria delle statistiche concernenti il
parco veicolare e il Pra, Pubblicoregistro automobilistico, istituto
gestito dall Aci e previsto dal Codice civile a tutela dei diritti
deicittadini sugli autoveicoli. Tutte le statistiche sui veicoli
confluiscono in due elaborazioni da archivioamministrativo facenti parte
del Programma Statistico Nazionale - PSN -, ACI00002 ?Parcoveicolare? e
ACI00014 ?Mercato automobilistico: prime iscrizioni, radiazioni,e
trasferimenti diproprieta dei veicoli?.Periodicita: La pubblicazione e
edita entro il mese di ottobre di ciascun anno con dati riferitiall anno
precedente | |
http://data.opendatasupport.eu/id/catalog/it/dataset/aci-automobile-club-italia\_autotrend-1h-2013
| Pubblicazione riguardante il mercato automobilistico con dati relativi
a prime iscrizioni, trasferimenti di proprieta (mercato dell usato)
totali ed al netto delle minivolture (veicoli presso i concessionari in
attesa di essere rivenduti), radiazioni per categoria di veicoli. Dati a
livello nazionale e provinciale, con calcolo di alcuni indicatori
significativi La pubblicazione e edita mensilmente con dati relativi al
mese precedente. Periodo Gennario-Giugno 2013 | |
http://data.opendatasupport.eu/id/catalog/it/dataset/aci-automobile-club-italia\_autotrend-2h-2013
| Pubblicazione riguardante il mercato automobilistico con dati relativi
a prime iscrizioni, trasferimenti di proprieta (mercato dell usato)
totali ed al netto delle minivolture (veicoli presso i concessionari in
attesa di essere rivenduti), radiazioni per categoria di veicoli. Dati a
livello nazionale e provinciale, con calcolo di alcuni indicatori
significativi La pubblicazione e edita mensilmente con dati relativi al
mese precedente. Periodo Luglio-Dicembre 2013 | |
http://data.opendatasupport.eu/id/catalog/it/dataset/aci-automobile-club-italia\_fringe-benefit
| Italia deve elaborare entro il 30 novembre di ciascun anno e
comunicare al Ministero delle Finanze (ora Agenzia delle Entrate) che
provvede alla pubblicazione entro il 31 dicembre, con effetto dal
periodo di imposta successivo, al netto degli ammontari eventualmente
trattenuti al dipendente. | |
http://data.opendatasupport.eu/id/catalog/it/dataset/aci-automobile-club-italia\_localizzazione-incidenti
| La pubblicazione riporta il numero di incidenti stradali, morti e
feriti nonche alcune caratteristichedegli incidenti - tipologia,
presenza di veicoli pesanti o a due ruote, fascia oraria, luogo, mese -
perciascun chilometro di strada o per tratte a livello provinciale o
comunale. Sono disponibili alcuniindicatori.La ?rilevazione degli
incidenti stradali con lesioni a persone? riguarda tutti gli
incidentistradali verificatisi sulla rete stradale del territorio
nazionale, verbalizzati da un autorita di Polizia odai Carabinieri,
avvenuti su una strada aperta alla circolazione pubblica e che hanno
causatolesioni a persone, morti e/o feriti, con il coinvolgimento di
almeno un veicolo.L Aci cura in particolare le informazioni riguardanti
la localizzazione e, in tempi piu recenti,l integrazione con i dati dei
veicoli coinvolti desunti dal Pra. Le due elaborazioni rientrano
nelProgramma Statistico Nazionale - PSN -, ACI00012 ?Localizzazione
degli incidenti stradali? eACI00013 ?Veicoli e incidenti?.La
pubblicazione e edita entro il mese di ottobre di ciascun anno con dati
riferitiall anno precedente. | |
http://data.opendatasupport.eu/id/catalog/it/dataset/autorita-di-bacino-del-fiume-arno\_10
| Fasce altimetriche passo 100 metri, generate in automatico da DTM 100
metri. | |
http://data.opendatasupport.eu/id/catalog/it/dataset/autorita-di-bacino-del-fiume-arno\_1048
| Perimetrazione dei 17 acquiferi di pianura oggetto di bilancio. Tavole
correlate (TAV A)Per dettagli vedere Relazione di Piano cap. Il quadro
conoscitivo al paragrafo Caratterizzazione degli acquiferi significativi
delle pianure alluvionali pag. 67 ; cap. Il bilancio delle acque
sotterranee e la valutazione della disponibilit? idricaai paragrafi il
bilancio degli acquiferi significativi pag.137 e Bilanci degli acquiferi
significativi del bacino del fiume Arno pag. 144. | |
http://data.opendatasupport.eu/id/catalog/it/dataset/autorita-di-bacino-del-fiume-arno\_1049
| Perimetrazione aree di ricarica degli acquiferi oggetto di bilancio
(Id=1048). Sono le aree di alimentazione delle falde degli acquiferi di
pianura. Suddivise in due distinte tipologie, in funzione del loro tipo
di permeabilit?: | |
http://data.opendatasupport.eu/id/catalog/it/dataset/autorita-di-bacino-del-fiume-arno\_1056
| Raggruppamento su base idrogeologica delle formazioni del bacino
(complessi idrogeologici), che in funzione delle formazioni geologiche
affioranti presentano simile assetto idrogeologico, produttivit?,
vulnerabilit? e facies idrogeochimica.I complessi del bacino dell?Arno
sono risultati i seguenti: |

+NAME: sparqlend\_title\_insert
===============================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dct:description
?description } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. ?ds a
dcat:Dataset . ?ds dct:description ?description . } \#+END\_SRC

*\** Mapping Title The INSERT statement is: \#+NAME:
sparqlend\_title\_insert \#+BEGIN\_SRC rq :tangle yes PREFIX dcat:
<http://www.w3.org/ns/dcat#> PREFIX dct: <http://purl.org/dc/terms/>
INSERT { ?harmds dct:title ?title } WHERE { ?ds a dcat:Dataset .
?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. ?ds
dct:title ?title . } \#+END\_SRC

*\* Recommended*\*\* Map tags to keywords

+NAME: sparqlend\_title\_insert
===============================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dcat:keyword ?keyword }
WHERE { ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds.
?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?ds a dcat:Dataset . ?ds dcat:keyword ?keyword . } \#+END\_SRC

*\** Mapping theme

+NAME: sparqlend\_theme\_select
===============================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> SELECT DISTINCT ?theme FROM
<http://data.gob.es/> WHERE { ?ds a dcat:Dataset . ?ds dcat:theme ?theme
. } LIMIT 50 \#+end\_src

+NAME: sparqlend\_theme\_select
===============================

| theme | | http://datos.gob.es/kos/sector-publico/sector/hacienda | |
http://datos.gob.es/kos/sector-publico/sector/sector-publico | |
http://datos.gob.es/kos/sector-publico/sector/legislacion-justicia | |
http://datos.gob.es/kos/sector-publico/sector/seguridad | |
http://datos.gob.es/kos/sector-publico/sector/cultura-ocio | |
http://datos.gob.es/kos/sector-publico/sector/ciencia-tecnologia | |
http://datos.gob.es/kos/sector-publico/sector/comercio | |
http://datos.gob.es/kos/sector-publico/sector/transporte | |
http://datos.gob.es/kos/sector-publico/sector/sociedad-bienestar | |
http://datos.gob.es/kos/sector-publico/sector/empleo | |
http://datos.gob.es/kos/sector-publico/sector/medio-rural-pesca | |
http://datos.gob.es/kos/sector-publico/sector/medio-ambiente | |
http://datos.gob.es/kos/sector-publico/sector/salud | |
http://datos.gob.es/kos/sector-publico/sector/economia | |
http://datos.gob.es/kos/sector-publico/sector/educacion |

The INSERT Statement is:

+NAME: sparqlend\_email\_insert
===============================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dcat:theme ?theme . } WHERE
{ ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
a dcat:Dataset . ?ds dcat:theme ?theme . } \#+END\_SRC

*\** TODO Mapping contactPoint email

Not found

*\** TODO Mapping contactPoint name

Not found

*\** Mapping publisher

+NAME: sparqlend\_publisher\_select
===================================

+BEGIN\_SRC roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX
dct:<http://purl.org/dc/terms/> SELECT DISTINCT ?publisher WHERE { ?ds a
dcat:Dataset . ?ds dct:publisher ?publisher . } LIMIT 10 \#+END\_SRC

+RESULTS: sparqlend\_publisher\_select
======================================

| publisher | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E04921301 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E00003301 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E04921401 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E00123904 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E00003901 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E00115003 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E04921801 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E00131802 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E00003801 | |
http://datos.gob.es/recurso/sector-publico/org/Organismo/E00130201 |

The INSERT statement is:

+NAME: sparqlend\_publisher\_insert
===================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX
dct:<http://purl.org/dc/terms/> INSERT { ?harmds dct:publisher
?publisher } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. ?ds a
dcat:Dataset . ?ds dct:publisher ?publisher . } \#+END\_SRC

\*\* Optional

*\** dataset conformsTo (dct:conformsTo)

+NAME: sparqlend\_conformsTo\_select
====================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> SELECT DISTINCT ?ds ?conformsTo WHERE { ?ds
a dcat:Dataset . ?ds dct:conformsTo ?conformsTo . } LIMIT 10 \#+END\_SRC

+RESULTS: sparqlend\_conformsTo\_select
=======================================

| ds | conformsTo | | \_:nodeIDzzzb192115 |
http://www.boe.es/buscar/doc.php?id=BOE-A-2008-19826 |

The INSERT statement is:

+NAME: sparqlend\_email\_insert
===============================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dct:conformsTo ?conforms .
} WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
a dcat:Dataset . ?ds dct:conformsTo ?conformsTo . } \#+END\_SRC

*\** TODO dataset frequency (dct:accrualPeriodicity)

Is present, but needs mapping

*\** TODO dataset identifier (dct:identifier)

Not present.

*\** TODO dataset landing page (dcat:landingPage)

Nothing found at present.

*\** dataset language (dct:language)

+NAME: sparqlend\_language\_select
==================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> SELECT DISTINCT ?ds ?language WHERE { ?ds a
dcat:Dataset . ?ds dct:language ?language . } LIMIT 10 \#+END\_SRC

+RESULTS: sparqlend\_language\_select
=====================================

| ds | language | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/inspire-view-service-van-de-kabels-en-leidingen-van-de-gemeente-maasgouw
| http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/cbs-provincies-wms
| http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/zeegraskartering-wms
| http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/natuurbeheerplan-2014--collectief-beheerplan
| http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/geluid-bedrijventerreinen-1999--50db-contouren
| http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/bevolking-gemeente-ede-1647-1913
| http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/ecotopen-wms |
http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/historische-geografie--jaagpaden-en-trekwegen
| http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/nationaal-archief-foto-s
| http://publications.europa.eu/resource/authority/language/NLD | |
http://data.opendatasupport.eu/id/catalog/nl/dataset/natuurbeheerplan-2014--bijzonder-gebied
| http://publications.europa.eu/resource/authority/language/NLD |

The INSERT statement is:

+NAME: sparqlend\_email\_insert
===============================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dct:language ?language . }
WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
a dcat:Dataset . ?ds dct:language ?language . } \#+END\_SRC

\*\*\*\* TODO Language Value needs to be mapped (NLD)

*\** dataset other identifier (adms:identifier)

Nothing relevant found?

*\** dataset release date (dct:issued)

+NAME: sparqlend\_dsissued\_select
==================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX xsd:
<http://www.w3.org/2001/XMLSchema#> SELECT ?ds ?issued WHERE { GRAPH
<http://data.gob.es/> { ?ds a dcat:Dataset . ?ds dct:issued ?issued .
FILTER( datatype(?issued) = xsd:date ) } } LIMIT 10 \#+END\_SRC

+RESULTS: sparqlend\_dsissued\_select
=====================================

| ds | issued | |
http://s484195306.mialojamiento.es/datos/catalogo/estadisticas-catastro-inmobiliario-rustico
| 2013-03-31 | |
http://s484195306.mialojamiento.es/datos/catalogo/estadisticas-catastro-inmobiliario-titulares
| 2013-03-31 | |
http://s484195306.mialojamiento.es/datos/catalogo/estadisticas-catastro-inmobiliario-urbano
| 2013-03-31 | |
http://s484195306.mialojamiento.es/datos/catalogo/inventario-de-entes-dependientes-de-comunidades-autonomas
| 2003-01-01 | |
http://s484195306.mialojamiento.es/datos/catalogo/ejecucion-presupuestaria-mensual-de-comunidades-autonomas-datos-de-ejecucion-informe-sobre
| 2010-01-01 | |
http://s484195306.mialojamiento.es/datos/catalogo/presupuestos-de-comunidades-ciudades-autonomas-base-de-datos-resumen-ejecutivo
| 2002-01-01 | |
http://s484195306.mialojamiento.es/datos/catalogo/base-general-de-datos-de-entidades-locales
| 2007-01-01 | |
http://s484195306.mialojamiento.es/datos/catalogo/imposicion-local-tipos-de-gravamen-indices-coeficientes
| 2007-01-01 | |
http://s484195306.mialojamiento.es/datos/catalogo/presupuestos-liquidaciones-de-entidades-locales-datos-individuales
| 2007-01-01 | |
http://s484195306.mialojamiento.es/datos/catalogo/deuda-viva-de-entidades-locales
| 2007-01-01 |

+NAME: sparqlend\_issued\_insert
================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> PREFIX xsd:
<http://www.w3.org/2001/XMLSchema#> INSERT { ?harmds dct:issued ?issued
} WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. ?ds a
dcat:Dataset . ?ds dct:issued ?issued . FILTER( datatype(?issued) =
xsd:date ) } \#+END\_SRC

*\** dataset modification date (dct:modified)

+NAME: sparqlend\_dsmodified\_select
====================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dct:<http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> PREFIX xsd:
<http://www.w3.org/2001/XMLSchema#> SELECT ?ds ?modified WHERE { GRAPH
<http://data.gob.es/> { ?ds a dcat:Dataset . ?ds dct:modified ?modified
. FILTER( datatype(?modified) = xsd:date ) } } LIMIT 10 \#+end\_src

+RESULTS: sparqlend\_dsmodified\_select
=======================================

| ds | modified | |
http://s484195306.mialojamiento.es/datos/catalogo/inventario-de-entes-dependientes-de-comunidades-autonomas
| 2012-12-03 | |
http://s484195306.mialojamiento.es/datos/catalogo/ejecucion-presupuestaria-mensual-de-comunidades-autonomas-datos-de-ejecucion-informe-sobre
| 2013-04-17 | |
http://s484195306.mialojamiento.es/datos/catalogo/presupuestos-de-comunidades-ciudades-autonomas-base-de-datos-resumen-ejecutivo
| 2013-03-27 | |
http://s484195306.mialojamiento.es/datos/catalogo/imposicion-local-tipos-de-gravamen-indices-coeficientes
| 2012-12-30 | |
http://s484195306.mialojamiento.es/datos/catalogo/presupuestos-liquidaciones-de-entidades-locales-datos-individuales
| 2013-03-26 | |
http://s484195306.mialojamiento.es/datos/catalogo/deuda-viva-de-entidades-locales
| 2013-04-30 | |
http://s484195306.mialojamiento.es/datos/catalogo/estadistica-sobre-gestion-ejecucion-de-fondos-de-compensacion-interterritorial
| 2013-04-01 | |
http://s484195306.mialojamiento.es/datos/catalogo/liquidacion-del-sistema-de-financiacion-de-comunidades-autonomas-ciudades-con-estatuto-de
| 2012-12-31 | | \_:nodeIDzzzb191349 | 2013-08-05 | |
\_:nodeIDzzzb191360 | 2011-10-13 |

+NAME: sparqlend\_title\_insert
===============================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dct:<http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> PREFIX xsd:
<http://www.w3.org/2001/XMLSchema#> INSERT { ?harmds dct:modified
?modified } WHERE { ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?ds
a dcat:Dataset . ?ds dcat:modified ?modified . FILTER(
datatype(?modified) = xsd:date ) } \#+END\_SRC

*\** TODO dataset spatial/geographic (dct:spatial)

+NAME: sparqlend\_spatial\_select
=================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql :exports both
=====================================================================

PREFIX dct: <http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> SELECT ?ds ?spatial WHERE { GRAPH
<http://data.gob.es/> { ?ds a dcat:Dataset . ?ds dct:spatial ?spatial .
} } LIMIT 10 \#+end\_src

+RESULTS: sparqlend\_spatial\_select
====================================

| ds | spatial | |
http://s484195306.mialojamiento.es/datos/catalogo/estadisticas-catastro-inmobiliario-titulares
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/inventario-de-entes-dependientes-de-comunidades-autonomas
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/ejecucion-presupuestaria-mensual-de-comunidades-autonomas-datos-de-ejecucion-informe-sobre
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/presupuestos-de-comunidades-ciudades-autonomas-base-de-datos-resumen-ejecutivo
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/base-general-de-datos-de-entidades-locales
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/imposicion-local-tipos-de-gravamen-indices-coeficientes
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/presupuestos-liquidaciones-de-entidades-locales-datos-individuales
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/deuda-viva-de-entidades-locales
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/inventario-de-entes-del-sector-publico-local
| ña | |
http://s484195306.mialojamiento.es/datos/catalogo/estadistica-sobre-gestion-ejecucion-de-fondos-de-compensacion-interterritorial
| ña |

The INSERT for the spatial is:

+NAME: sparqlend\_spatial\_insert
=================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX dcat: <http://www.w3.org/ns/dcat#> PREFIX dct:
<http://purl.org/dc/terms/> INSERT { ?harmds dct:spatial ?modified }
WHERE { ?ds a dcat:Dataset . ?harmrecord
<http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . ?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds . ?ds dct:spatial ?modified . } \#+END\_SRC

*\** TODO dataset temporal (dct:temporal)

Info not found

*\** dataset version

+NAME: sparqlend\_version\_select
=================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dct: <http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> SELECT ?version WHERE { ?ds a
<http://www.w3.org/ns/dcat#Dataset>. ?ds dcat:version ?version . } LIMIT
10 \#+END\_SRC

+RESULTS: sparqlend\_version\_select
====================================

| version | ds |

+NAME: sparqlend\_version\_insert
=================================

+BEGIN\_SRC rq :tangle yes
==========================

PREFIX orig: <http://data.gob.es/catalog/predicate/> PREFIX adms:
<http://www.w3.org/ns/adms#> INSERT { ?harmds adms:version ?d . } WHERE
{ ?ds a <http://www.w3.org/ns/dcat#Dataset>. ?ds orig:version ?d.
?harmrecord
<http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset>
?ds. ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. }
\#+END\_SRC

*\** TODO dataset version notes (adms:versionNotes)

Not found

*\** dataset status

Not found

-   Value Mapping

http://publications.europa.eu/resource/authority/file-type

+NAME: sparqlend\_select\_concept
=================================

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

select distinct ?concept FROM
<http://publications.europa.eu/resource/authority/file-type> WHERE {
?concept a <http://www.w3.org/2004/02/skos/core#Concept> } ORDER BY
?concept \#+end\_src

| concept | current |
|-----------------------------------------------------------------------+---------|
| http://publications.europa.eu/resource/authority/file-type/AZW | | |
http://publications.europa.eu/resource/authority/file-type/CSV | yes | |
http://publications.europa.eu/resource/authority/file-type/DBF | | |
http://publications.europa.eu/resource/authority/file-type/DOC | yes | |
http://publications.europa.eu/resource/authority/file-type/DOCX | | |
http://publications.europa.eu/resource/authority/file-type/E00 | | |
http://publications.europa.eu/resource/authority/file-type/EPUB | | |
http://publications.europa.eu/resource/authority/file-type/FMX2 | | |
http://publications.europa.eu/resource/authority/file-type/FMX3 | | |
http://publications.europa.eu/resource/authority/file-type/FMX4 | | |
http://publications.europa.eu/resource/authority/file-type/GIF | | |
http://publications.europa.eu/resource/authority/file-type/GZIP | | |
http://publications.europa.eu/resource/authority/file-type/HTML | yes |
| http://publications.europa.eu/resource/authority/file-type/JPEG | | |
http://publications.europa.eu/resource/authority/file-type/JSON | | |
http://publications.europa.eu/resource/authority/file-type/KML | | |
http://publications.europa.eu/resource/authority/file-type/MDB | | |
http://publications.europa.eu/resource/authority/file-type/MOBI | | |
http://publications.europa.eu/resource/authority/file-type/MOP | | |
http://publications.europa.eu/resource/authority/file-type/MXD | | |
http://publications.europa.eu/resource/authority/file-type/OP\_DATPRO |
| | http://publications.europa.eu/resource/authority/file-type/PDF | yes
| | http://publications.europa.eu/resource/authority/file-type/PDFA1A |
| | http://publications.europa.eu/resource/authority/file-type/PDFA1B |
| | http://publications.europa.eu/resource/authority/file-type/PDFX | |
| http://publications.europa.eu/resource/authority/file-type/PNG | | |
http://publications.europa.eu/resource/authority/file-type/PPSX | | |
http://publications.europa.eu/resource/authority/file-type/PPT | | |
http://publications.europa.eu/resource/authority/file-type/PPTX | | |
http://publications.europa.eu/resource/authority/file-type/RDF\_XML | |
| http://publications.europa.eu/resource/authority/file-type/RTF | yes |
| http://publications.europa.eu/resource/authority/file-type/SGML | | |
http://publications.europa.eu/resource/authority/file-type/SKOS\_XML | |
| http://publications.europa.eu/resource/authority/file-type/SPARQLQ | |
| http://publications.europa.eu/resource/authority/file-type/SPARQLQRES
| | | http://publications.europa.eu/resource/authority/file-type/TIFF |
| | http://publications.europa.eu/resource/authority/file-type/TSV | | |
http://publications.europa.eu/resource/authority/file-type/TXT | | |
http://publications.europa.eu/resource/authority/file-type/XHTML | | |
http://publications.europa.eu/resource/authority/file-type/XLS | | |
http://publications.europa.eu/resource/authority/file-type/XLSX | | |
http://publications.europa.eu/resource/authority/file-type/XML | yes | |
http://publications.europa.eu/resource/authority/file-type/XSLT | | |
http://publications.europa.eu/resource/authority/file-type/ZIP | yes |

*\** TODO Mapping of the format, finish the rest - possible to just copy
across and instantiate it?

-   ODS Spain Tasks *\* LodManager Initialisation [2/3]*\*\* DONE
    Virtuoso Extractors
    -   State "DONE" from "TODO" [2013-12-16 Mon 15:41] **\* TODO
        Transformers [5/6]**\*\* DONE ODS Dcat application profile
        harmonizer
    -   State "DONE" from "TODO" [2013-12-16 Mon 16:53]

-   set to 'es' \*\*\*\* DONE ODS Modification Detector
    -   State "DONE" from "TODO" [2013-12-16 Mon 16:54]

-   nothing to configure? \*\*\*\* Sparql Update Tranformations [1/2]
    \*\*\*\*\* DONE Initial versions
    -   State "DONE" from "TODO" [2013-12-18 Wed 09:24] \*\*\*\*\* TODO
        Test Transformations \*\*\*\* ODS Value Mapper [1/2] \*\*\*\*\*
        DONE Plugin Added
    -   State "DONE" from "" [2013-12-18 Wed 09:22] \*\*\*\*\* TODO Add
        Value Mappings \*\*\*\* DONE ODS Cleaner
    -   State "DONE" from "TODO" [2013-12-16 Mon 16:54] \*\*\*\* DONE
        ODS Validator
    -   State "DONE" from "TODO" [2013-12-16 Mon 16:54] *\** DONE
        Virtuoso Loader
    -   State "DONE" from "TODO" [2013-12-17 Tue 11:41]

*\** Tests

+begin\_src roqet :endpoint http://192.168.33.33/sparql
=======================================================

PREFIX dcterms: <http://purl.org/dc/terms/> PREFIX dcat:
<http://www.w3.org/ns/dcat#> SELECT ?s ?p ?o FROM <http://data.gob.es/>
WHERE { ?s a dcat:Distribution. OPTIONAL {?s dcterms:format ?format }
FILTER (!BOUND(?format)) BIND("p" AS ?p) BIND("o" AS ?o) } LIMIT 10
\#+end\_src

+RESULTS:
=========

| s | p | o |
