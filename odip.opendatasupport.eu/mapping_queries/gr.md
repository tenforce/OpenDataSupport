<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Introduction&#xa0;&#xa0;&#xa0;<span class="tag"><span class="local">local</span></span></a>
<ul>
<li><a href="#sec-1-1">1.1. Accessible Predicate</a></li>
<li><a href="#sec-1-2">1.2. Count of Catalogs</a></li>
<li><a href="#sec-1-3">1.3. Count of Datasets</a></li>
<li><a href="#sec-1-4">1.4. Distribution predicates</a></li>
<li><a href="#sec-1-5">1.5. Title/Description Sizes</a></li>
<li><a href="#sec-1-6">1.6. List of key/value pairs</a></li>
<li><a href="#sec-1-7">1.7. List of themes</a></li>
<li><a href="#sec-1-8">1.8. List of formats</a></li>
<li><a href="#sec-1-9">1.9. List of concepts</a></li>
</ul>
</li>
<li><a href="#sec-2">2. Recommended</a>
<ul>
<li><a href="#sec-2-1">2.1. distribution title</a></li>
<li><a href="#sec-2-2">2.2. distribution description</a></li>
<li><a href="#sec-2-3">2.3. distribution format</a>
<ul>
<li><a href="#sec-2-3-1">2.3.1. <span class="todo TODO">TODO</span> mapping of the values (to a URI)</a></li>
</ul>
</li>
<li><a href="#sec-2-4">2.4. distribution accessURL</a>
<ul>
<li><a href="#sec-2-4-1">2.4.1. <span class="todo TODO">TODO</span> Check construction of ?distribution uri is okay.</a></li>
</ul>
</li>
<li><a href="#sec-2-5">2.5. distribution license</a></li>
</ul>
</li>
<li><a href="#sec-3">3. Optional</a>
<ul>
<li><a href="#sec-3-1">3.1. byte size</a>
<ul>
<li><a href="#sec-3-1-1">3.1.1. <span class="todo TODO">TODO</span> byteSize is xsd:integer but spec says xsd:decimal</a></li>
</ul>
</li>
<li><a href="#sec-3-2">3.2. download URL</a></li>
<li><a href="#sec-3-3">3.3. media type</a></li>
<li><a href="#sec-3-4">3.4. release date</a></li>
<li><a href="#sec-3-5">3.5. modification date</a></li>
<li><a href="#sec-3-6">3.6. rights</a></li>
<li><a href="#sec-3-7">3.7. status</a></li>
<li><a href="#sec-3-8">3.8. title</a></li>
</ul>
</li>
<li><a href="#sec-4">4. Dataset properties</a>
<ul>
<li><a href="#sec-4-1">4.1. Mandatory</a>
<ul>
<li><a href="#sec-4-1-1">4.1.1. Mapping description</a></li>
<li><a href="#sec-4-1-2">4.1.2. Mapping Title</a></li>
</ul>
</li>
<li><a href="#sec-4-2">4.2. Recommended</a>
<ul>
<li><a href="#sec-4-2-1">4.2.1. Map tags to keywords</a></li>
<li><a href="#sec-4-2-2">4.2.2. Mapping theme</a></li>
<li><a href="#sec-4-2-3">4.2.3. <span class="todo TODO">TODO</span> Mapping contactPoint email</a></li>
<li><a href="#sec-4-2-4">4.2.4. <span class="todo TODO">TODO</span> Mapping contactPoint name</a></li>
<li><a href="#sec-4-2-5">4.2.5. Mapping publisher</a></li>
</ul>
</li>
<li><a href="#sec-4-3">4.3. Optional</a>
<ul>
<li><a href="#sec-4-3-1">4.3.1. dataset conformsTo (dct:conformsTo)</a></li>
<li><a href="#sec-4-3-2">4.3.2. <span class="todo TODO">TODO</span> dataset frequency (dct:accrualPeriodicity)</a></li>
<li><a href="#sec-4-3-3">4.3.3. <span class="todo TODO">TODO</span> dataset identifier (dct:identifier)</a></li>
<li><a href="#sec-4-3-4">4.3.4. <span class="todo TODO">TODO</span> dataset landing page (dcat:landingPage)</a></li>
<li><a href="#sec-4-3-5">4.3.5. dataset language (dct:language)</a></li>
<li><a href="#sec-4-3-6">4.3.6. dataset other identifier (adms:identifier)</a></li>
<li><a href="#sec-4-3-7">4.3.7. dataset release date (dct:issued)</a></li>
<li><a href="#sec-4-3-8">4.3.8. dataset modification date (dct:modified)</a></li>
<li><a href="#sec-4-3-9">4.3.9. <span class="todo TODO">TODO</span> dataset spatial/geographic (dct:spatial)</a></li>
<li><a href="#sec-4-3-10">4.3.10. <span class="todo TODO">TODO</span> dataset temporal (dct:temporal)</a></li>
<li><a href="#sec-4-3-11">4.3.11. dataset version</a></li>
<li><a href="#sec-4-3-12">4.3.12. <span class="todo TODO">TODO</span> dataset version notes (adms:versionNotes)</a></li>
<li><a href="#sec-4-3-13">4.3.13. dataset status</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-5">5. Value Mapping</a>
<ul>
<li>
<ul>
<li><a href="#sec-5-0-1">5.0.1. <span class="todo TODO">TODO</span> Mapping of the format, finish the rest - possible to just copy</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
</div>


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

# Introduction     :local:<a id="sec-1" name="sec-1"></a>

-   <http://192.168.33.33/lodms>
-   <http://192.168.33.33/sparql>

This file contains:
-   **(1):** Selects which connect to the SPARQL endpoint above (C-c C-c)
-   **(2):** The inserts which are tangled (C-c C-v t) into a single file.

## Accessible Predicate<a id="sec-1-1" name="sec-1-1"></a>

To get the predicates accessible:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT DISTINCT ?p
    WHERE {
     ?ds a dcat:Dataset .
     ?ds ?p ?o .
    } ORDER BY ?p LIMIT 100

## Count of Catalogs<a id="sec-1-2" name="sec-1-2"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    SELECT DISTINCT (COUNT(DISTINCT ?dc) AS ?cnt)
    WHERE {
     ?dc a dcat:Catalog .
    }

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="right" />
</colgroup>
<tbody>
<tr>
<td class="right">cnt</td>
</tr>


<tr>
<td class="right">30</td>
</tr>
</tbody>
</table>

## Count of Datasets<a id="sec-1-3" name="sec-1-3"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    SELECT DISTINCT ?dc (COUNT(DISTINCT ?ds) AS ?cnt)
    WHERE {
     ?dc a dcat:Catalog .
     ?dc dcat:dataset ?ds .
    } GROUP BY ?dc

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="right" />
</colgroup>
<tbody>
<tr>
<td class="left">dc</td>
<td class="right">cnt</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/odp/></td>
<td class="right">7937</td>
</tr>


<tr>
<td class="left"><http://data.gov.sk/></td>
<td class="right">222</td>
</tr>


<tr>
<td class="left"><http://www.dati.gov.it/catalog/></td>
<td class="right">13596</td>
</tr>


<tr>
<td class="left"><http://data.gov.uk/></td>
<td class="right">23151</td>
</tr>


<tr>
<td class="left"><https://data.overheid.nl/data/></td>
<td class="right">3287</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/gb/></td>
<td class="right">23080</td>
</tr>


<tr>
<td class="left"><http://www.data.gouv.fr/></td>
<td class="right">13826</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/fr/></td>
<td class="right">13826</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/nl/></td>
<td class="right">2250</td>
</tr>


<tr>
<td class="left"><http://open-data.europa.eu/data/></td>
<td class="right">13880</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/de/></td>
<td class="right">10549</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/es/></td>
<td class="right">6460</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo-de-informacion-publica-reutilizable-0></td>
<td class="right">7014</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/gr/></td>
<td class="right">76</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/sk/></td>
<td class="right">222</td>
</tr>


<tr>
<td class="left"><https://www.govdata.de/ckan/></td>
<td class="right">10549</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/it/></td>
<td class="right">10530</td>
</tr>


<tr>
<td class="left"><http://oppnadata.se/></td>
<td class="right">54</td>
</tr>


<tr>
<td class="left"><http://nio.gov.si/nio/data/></td>
<td class="right">10</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/sl/></td>
<td class="right">10</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/ro/></td>
<td class="right">201</td>
</tr>


<tr>
<td class="left"><http://data.gov.ro/></td>
<td class="right">201</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/at/></td>
<td class="right">1512</td>
</tr>


<tr>
<td class="left"><https://www.opendata.fi/data/></td>
<td class="right">1557</td>
</tr>


<tr>
<td class="left"><https://www.data.gv.at/katalog/></td>
<td class="right">1512</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/fi/></td>
<td class="right">1557</td>
</tr>


<tr>
<td class="left"><http://data.gov.ie/></td>
<td class="right">509</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/ie/></td>
<td class="right">509</td>
</tr>


<tr>
<td class="left"><http://demo.difi.no/datanorge/></td>
<td class="right">233</td>
</tr>


<tr>
<td class="left"><http://data.opendatasupport.eu/id/catalog/no/></td>
<td class="right">233</td>
</tr>
</tbody>
</table>

## Distribution predicates<a id="sec-1-4" name="sec-1-4"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX orig: <http://data.gov.gr/> 
    SELECT DISTINCT ?p
    FROM <http://data.gov.gr/> 
    WHERE {
     ?dc a dcat:Distribution .
     ?dc ?p ?o .
    }

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">p</td>
</tr>


<tr>
<td class="left"><http://www.w3.org/1999/02/22-rdf-syntax-ns#type></td>
</tr>


<tr>
<td class="left"><http://purl.org/dc/terms/modified></td>
</tr>


<tr>
<td class="left"><http://purl.org/dc/terms/issued></td>
</tr>


<tr>
<td class="left"><http://purl.org/dc/terms/description></td>
</tr>


<tr>
<td class="left"><http://purl.org/dc/terms/license></td>
</tr>


<tr>
<td class="left"><http://www.w3.org/ns/dcat#downloadURL></td>
</tr>


<tr>
<td class="left"><http://www.w3.org/ns/dcat#accessURL></td>
</tr>
</tbody>
</table>

## Title/Description Sizes<a id="sec-1-5" name="sec-1-5"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT ?size ?title ?description
    FROM <http://data.gov.gr/> 
    WHERE { 
      { select ( SUM(?len) AS ?size ) 
               { ?s ?p ?o .
                 FILTER isLiteral(?o) 
                 BIND(STRLEN(STR(?o)) AS ?len) }
      }
      { select ( SUM(?tlen) AS ?title ) 
               { ?s dct:title ?o .
                 FILTER isLiteral(?o) 
                 BIND(STRLEN(STR(?o)) AS ?tlen) }
      }
      { select ( SUM(?dlen) AS ?description ) 
               { ?s dct:description ?o .
                 FILTER isLiteral(?o) 
                 BIND(STRLEN(STR(?o)) AS ?dlen) }
      } 
    }

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="right" />

<col  class="right" />

<col  class="right" />
</colgroup>
<tbody>
<tr>
<td class="right">size</td>
<td class="right">title</td>
<td class="right">description</td>
</tr>


<tr>
<td class="right">58869</td>
<td class="right">2481</td>
<td class="right">15996</td>
</tr>
</tbody>
</table>

## List of key/value pairs<a id="sec-1-6" name="sec-1-6"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX orig: <http://data.gov.gr/> 
    SELECT DISTINCT ?keyword
    FROM <http://data.gov.gr/> 
    WHERE {
      ?ds a dcat:Dataset .
      ?ds dcat:keyword ?keyword . 
    } ORDER BY ?keyword LIMIT 100

    keyword

## List of themes<a id="sec-1-7" name="sec-1-7"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX orig: <http://data.gov.gr/> 
    SELECT DISTINCT ?theme
    FROM <http://data.gov.gr/> 
    WHERE {
      ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
      ?ds dcat:theme ?theme . 
    } ORDER BY ?theme LIMIT 100

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">theme</td>
</tr>


<tr>
<td class="left">AG</td>
</tr>


<tr>
<td class="left">BE</td>
</tr>


<tr>
<td class="left">CE</td>
</tr>


<tr>
<td class="left">CH</td>
</tr>


<tr>
<td class="left">EC</td>
</tr>


<tr>
<td class="left">ED</td>
</tr>


<tr>
<td class="left">EN</td>
</tr>


<tr>
<td class="left">HN</td>
</tr>


<tr>
<td class="left">IC</td>
</tr>


<tr>
<td class="left">IEPW</td>
</tr>


<tr>
<td class="left">LECP</td>
</tr>


<tr>
<td class="left">LFEE</td>
</tr>


<tr>
<td class="left">MI</td>
</tr>


<tr>
<td class="left">OT</td>
</tr>


<tr>
<td class="left">PR</td>
</tr>


<tr>
<td class="left">TR</td>
</tr>
</tbody>
</table>

## List of formats<a id="sec-1-8" name="sec-1-8"></a>

    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX orig: <http://data.gov.gr/>
    SELECT DISTINCT ?format
    FROM <http://data.gov.gr/>
    WHERE {
      ?ds a <http://www.w3.org/ns/dcat#Dataset> . 
      ?ds dct:format ?format . 
    } ORDER BY ?format LIMIT 100

## List of concepts<a id="sec-1-9" name="sec-1-9"></a>

The list of acceptable file types can be accessed at:
     <http://publications.europa.eu/resource/authority/file-type>

    select distinct ?concept
    FROM <http://publications.europa.eu/resource/authority/file-type>
    WHERE {
      ?concept a <http://www.w3.org/2004/02/skos/core#Concept>
    } ORDER BY ?concept

    concept

# Recommended<a id="sec-2" name="sec-2"></a>


## distribution title<a id="sec-2-1" name="sec-2-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gov.gr/catalog/predicate/> 
    SELECT DISTINCT ?disttitle 
    FROM <http://data.gov.gr/>
    WHERE {
     ?dist a dcat:Distribution .
     ?dist dct:title ?disttitle . 
    } LIMIT 10

    disttitle

The INSERT statement is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dcat:distribution ?distribution .
     ?distribution a dcat:Distribution .
     ?distribution dct:title ?title .
    } WHERE {
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds . 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . 
     ?ds dcat:distribution ?dist.
     ?dist a dcat:Distribution .
     ?dist dct:title ?title .
     BIND (CONCAT(?harmds,"/distributions/") AS ?hds)
     BIND (IRI(CONCAT(?hds,md5(?dist))) AS ?distribution).
    }

## distribution description<a id="sec-2-2" name="sec-2-2"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?dist ?distdesc
    WHERE {
     ?ds dcat:distribution ?dist
     ?dist a dcat:Distribution . 
     ?dist dct:description ?distdesc .
     BIND(CONCAT(STR("XXX"),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?dist))) AS ?distribution)
    } LIMIT 10

The INSERT statement is:

    PREFIX  dcat: <http://www.w3.org/ns/dcat#>
    PREFIX  dct:  <http://purl.org/dc/terms/>
    INSERT {
      ?harmds dcat:distribution ?distribution .
      ?distribution a dcat:Distribution .
      ?distribution dct:description ?description .
    } WHERE { 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
      ?ds dcat:distribution ?dist . 
      ?dist a dcat:Distribution .
      ?dist dct:description ?description .
      BIND(concat(str(?harmds), "/distributions/") AS ?hds)
      BIND(iri(concat(?hds, md5(?dist))) AS ?distribution)
    }

## distribution format<a id="sec-2-3" name="sec-2-3"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?distribution ?format
    WHERE {
     ?ds dcat:distribution ?dist.    
     ?dist a dcat:Distribution .
     ?dist dct:format ?format .
     BIND(CONCAT(STR("XXXX"),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?dist))) AS ?distribution)
    } LIMIT 10

The INSERT statement is:

    PREFIX  dcat: <http://www.w3.org/ns/dcat#>
    PREFIX  dct:  <http://purl.org/dc/terms/>
    PREFIX  orig: <http://data.gov.gr/catalog/predicate/>
    INSERT {
      ?harmds dcat:distribution ?distribution .
      ?distribution a dcat:Distribution .
      ?distribution dct:format ?format .
    } WHERE { 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
      ?ds dcat:distribution ?dist.
      ?dist a dcat:Distribution .
      ?dist dct:format ?format .
      BIND(concat(str(?harmds), "/distributions/") AS ?hds)
      BIND(iri(concat(?hds, md5(?dist))) AS ?distribution)
    }

### TODO mapping of the values (to a URI)<a id="sec-2-3-1" name="sec-2-3-1"></a>

## distribution accessURL<a id="sec-2-4" name="sec-2-4"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gov.gr/predicate/> 
    SELECT DISTINCT ?distribution ?accessUrl
    WHERE { GRAPH <http://data.gov.gr/> {
     ?ds a dcat:Distribution .
     ?ds dcat:accessURL ?accessUrl .
     BIND(iri(concat("/distribution/", md5(?ds))) AS ?distribution)
    } } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">distribution</td>
<td class="left">accessUrl</td>
</tr>


<tr>
<td class="left">/distribution/ab06377172c51ceba8044470b1bc6c0c</td>
<td class="left"><http://www.fireservic/></td>
</tr>
</tbody>
</table>

The INSERT statement is:

    PREFIX  dcat: <http://www.w3.org/ns/dcat#>
    PREFIX  dct:  <http://purl.org/dc/terms/>
    INSERT  {
      ?harmds dcat:distribution ?distibution .
      ?distribution a dcat:Distribution .
      ?distribution dcat:accessURL ?accessUrl .
    } WHERE {
        ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .
        ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
        ?ds dcat:distribution ?dist.    
        ?dist a dcat:Distribution .
        ?dist dcat:accessURL ?accessUrl .
        BIND(concat(str(?harmds), "/distributions/") AS ?hds)
        BIND(iri(concat(?hds, md5(?dist))) AS ?distribution)
    }

### TODO Check construction of ?distribution uri is okay.<a id="sec-2-4-1" name="sec-2-4-1"></a>

## distribution license<a id="sec-2-5" name="sec-2-5"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gov.gr/predicate/> 
    SELECT DISTINCT ?distribution ?license
    WHERE { GRAPH <http://data.gov.gr/> {
     ?ds a dcat:Dataset .
     ?ds dcat:distribution ?dist .
     ?dist a dcat:Distribution . 
     ?dist dct:license ?license . 
     BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?dist))) AS ?distribution)
    } } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">distribution</td>
<td class="left">license</td>
</tr>


<tr>
<td class="left">true/distributions/890cc25a5c8bb832234f84e4c593af5f</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/bb93c233ae5a7e184ac7cf1b6e35aa60</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/2b272faf307283bc9ed31fa511d502f4</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/3ac6e23c939442c48d206f7386da3bdb</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/dcebe87c41b66875511dfc858ed37a5e</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/cd88b62c852a975ebc8feb3a146e7f75</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/01325bbc9a5dacad80e870bf538cef0f</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/83a0420976692080989efa30d4ded194</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/a17342f4fd402174d48ddf9c5b27299f</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>


<tr>
<td class="left">true/distributions/b5ee0684e5255455a1cefad48d0d7d6e</td>
<td class="left">OKD Compliant::Creative Commons Attribution</td>
</tr>
</tbody>
</table>

The INSERT for the license is:

    PREFIX orig: <http://data.gov.gr/catalog/predicate/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dcat:distribution ?distribution.
     ?distribution a dcat:Distribution.
     ?distribution dct:license ?license.
    } WHERE {
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds . 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . 
     ?ds a dcat:Dataset .
     ?ds dcat:distribution ?dist .
     ?dist a dcat:Distribution . 
     ?dist dct:license ?license . 
     BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?dist))) AS ?distribution)
    }

# Optional<a id="sec-3" name="sec-3"></a>

## byte size<a id="sec-3-1" name="sec-3-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT DISTINCT ?distribution ?byteSize
    WHERE { GRAPH <http://data.gov.gr/> {
     ?ds a dcat:Distribution .
     ?ds dcat:byteSize ?byteSize .
     FILTER( datatype(?byteSize) = xsd:decimal )
     BIND(iri(concat("/distribution/", md5(?ds))) AS ?distribution)
    } } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">distribution</td>
<td class="left">byteSize</td>
</tr>
</tbody>
</table>

### TODO byteSize is xsd:integer but spec says xsd:decimal<a id="sec-3-1-1" name="sec-3-1-1"></a>

-   **Note:** The filter is **not** included in the lodms query at
    present - there would not be any results.

The INSERT statement is:

    PREFIX  dcat: <http://www.w3.org/ns/dcat#>
    PREFIX  dct:  <http://purl.org/dc/terms/>
    INSERT  {
      ?harmds dcat:distribution ?distibution .
      ?distribution a dcat:Distribution .
      ?distribution dcat:byteSize ?byteSize .
    } WHERE {
        ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .
        ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
        ?ds dcat:distribution ?dist .
        ?dist a dcat:Distribution .
        ?dist dcat:byteSize ?byteSize .
        FILTER( datatype(?byteSize) = xsd:decimal )
        BIND(concat(str(?harmds), "/distributions/") AS ?hds)
        BIND(iri(concat(?hds, md5(?dist))) AS ?distribution)
    }

## download URL<a id="sec-3-2" name="sec-3-2"></a>

url points to a PDF

## media type<a id="sec-3-3" name="sec-3-3"></a>

type indicates "dataset"

## release date<a id="sec-3-4" name="sec-3-4"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT ?dist ?issued
    WHERE {
     ?ds a dcat:Distribution . 
     ?ds dct:issued ?issued .
     FILTER ( datatype(?issued) = xsd:date )
     BIND(CONCAT(STR("harmds"),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist) } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">dist</td>
<td class="left">issued</td>
</tr>
</tbody>
</table>

The INSERT for the issued date.

    PREFIX orig: <http://data.gov.gr/catalog/predicate/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    prefix dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dcat:distribution ?distribution.
     ?distribution a dcat:Distribution.
     ?distribution dct:issued ?created.
    } WHERE {
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
     ?ds a dcat:Dataset .
     ?ds dcat:distribution ?dist .
     ?dist a dcat:Distribution .
     ?dist dcat:created ?created. 
     BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
     BIND(IRI(CONCAT(?hds,md5(?dist))) AS ?distribution).
    }

## modification date<a id="sec-3-5" name="sec-3-5"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT ?dist ?modified
    WHERE {
     ?ds a dcat:Distribution . 
     ?ds dct:modified ?modified .
     FILTER ( datatype(?modified) = xsd:date )
     BIND(CONCAT(STR("harmds"),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist) } LIMIT 10

The INSERT is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gov.gr/catalog/predicate/> 
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    INSERT
    {
     ?harmds dcat:distribution ?dist.
     ?dist a dcat:Distribution.
     ?dist dct:modified ?modified.
    }
    WHERE {
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds . 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . 
     ?ds dcat:distribution ?dist .
     ?dist a dcat:Distribution .
     ?dist dct:modified ?modified .
     FILTER ( datatype(?modified) = xsd:date )
     BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds).
     BIND(IRI(CONCAT(?hds,md5(?dist))) AS ?dist).
    }

## rights<a id="sec-3-6" name="sec-3-6"></a>

## status<a id="sec-3-7" name="sec-3-7"></a>

## title<a id="sec-3-8" name="sec-3-8"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct:<http://purl.org/dc/terms/> 
    SELECT DISTINCT ?ds ?title
    WHERE { GRAPH <http://data.gov.gr/> { 
     ?ds a dcat:Distribution .
     ?ds dct:title ?title .
     FILTER( isLiteral(?title) )
    } } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">ds</td>
<td class="left">title</td>
</tr>
</tbody>
</table>

The associated INSERT for the title is:

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    INSERT {
     ?harmds dct:title ?title.
    } WHERE { 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.
     ?ds a dcat:Dataset .
     ?ds dct:title ?title . 
    }

# Dataset properties<a id="sec-4" name="sec-4"></a>

## Mandatory<a id="sec-4-1" name="sec-4-1"></a>

### Mapping description<a id="sec-4-1-1" name="sec-4-1-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct:<http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gov.gr/catalog/predicate/> 
    SELECT DISTINCT ?ds ?description
    WHERE { GRAPH <http://data.gov.gr/> { 
     ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
     ?ds dct:description ?description. 
    } } LIMIT 10

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dct:description ?description
    } WHERE {
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
     ?ds a dcat:Dataset .
     ?ds dct:description ?description. 
    }

### Mapping Title<a id="sec-4-1-2" name="sec-4-1-2"></a>

The INSERT statement is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dct:title ?title
    } WHERE {
     ?ds a dcat:Dataset .
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
     ?ds dct:title ?title .
    }

## Recommended<a id="sec-4-2" name="sec-4-2"></a>

### Map tags to keywords<a id="sec-4-2-1" name="sec-4-2-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT {
      ?harmds dcat:keyword ?keyword
    } WHERE {
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
      ?ds a dcat:Dataset . 
      ?ds dcat:keyword ?keyword .
    }

### Mapping theme<a id="sec-4-2-2" name="sec-4-2-2"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#> 
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?theme
    FROM <http://data.gov.gr/>
    WHERE {
     ?ds a dcat:Dataset .
     ?ds dcat:theme ?theme .
    } LIMIT 50

<table id="sparqlend_theme_select" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">theme</td>
</tr>


<tr>
<td class="left">OT</td>
</tr>


<tr>
<td class="left">EN</td>
</tr>


<tr>
<td class="left">EC</td>
</tr>


<tr>
<td class="left">CE</td>
</tr>


<tr>
<td class="left">LECP</td>
</tr>


<tr>
<td class="left">CH</td>
</tr>


<tr>
<td class="left">LFEE</td>
</tr>


<tr>
<td class="left">PR</td>
</tr>


<tr>
<td class="left">IEPW</td>
</tr>


<tr>
<td class="left">BE</td>
</tr>


<tr>
<td class="left">AG</td>
</tr>


<tr>
<td class="left">TR</td>
</tr>


<tr>
<td class="left">MI</td>
</tr>


<tr>
<td class="left">ED</td>
</tr>


<tr>
<td class="left">IC</td>
</tr>


<tr>
<td class="left">HN</td>
</tr>
</tbody>
</table>

The INSERT Statement is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT { 
      ?harmds dcat:theme ?theme .
    } WHERE { 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
      ?ds a dcat:Dataset .
      ?ds dcat:theme ?theme . 
    }

### TODO Mapping contactPoint email<a id="sec-4-2-3" name="sec-4-2-3"></a>

Not found 

    PREFIX  dct: <http://purl.org/dc/terms/> 
    PREFIX  adms: <http://www.w3.org/ns/adms#>
    SELECT DISTINCT ?ds ?contactPoint
    FROM <http://data.gov.gr/>
    WHERE { 
     ?ds adms:contactPoint ?contactPoint .  
    } LIMIT 10

The INSERT statement is:

    PREFIX  orig: <http://www.gov.gr/catalog/predicate/> 
    PREFIX  adms: <http://www.w3.org/ns/adms#>
    INSERT { 
      ?harmds adms:contactPoint ?cPoint .
      ?cPoint a <http://www.w3.org/2006/vcard/ns#VCard> .
      ?cPoint <http://www.w3.org/2006/vcard/ns#email>  ?emailTo
    } WHERE { 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds . 
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . 
      ?ds a <http://www.w3.org/ns/dcat#Dataset> . 
      ?ds adms:contactPoint ?emailTo .
      BIND (IRI(CONCAT(?ds,"/contactPoint")) AS ?cPoint) 
    }

### TODO Mapping contactPoint name<a id="sec-4-2-4" name="sec-4-2-4"></a>

Not found 

### Mapping publisher<a id="sec-4-2-5" name="sec-4-2-5"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct:<http://purl.org/dc/terms/> 
    SELECT DISTINCT ?publisher
    FROM <http://data.gov.gr/>
    WHERE {
      ?ds a dcat:Dataset .
      ?ds dct:publisher ?publisher .
    } LIMIT 10

The INSERT statement is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct:<http://purl.org/dc/terms/> 
    INSERT { 
      ?harmds dct:publisher ?publisher
    } WHERE { 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
      ?ds a dcat:Dataset .
      ?ds dct:publisher ?publisher .
    }

## Optional<a id="sec-4-3" name="sec-4-3"></a>

### dataset conformsTo (dct:conformsTo)<a id="sec-4-3-1" name="sec-4-3-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?ds ?conformsTo
    FROM <http://data.gov.gr/>
    WHERE { 
     ?ds a dcat:Dataset .
     ?ds dct:conformsTo ?conformsTo .
    } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">ds</td>
<td class="left">conformsTo</td>
</tr>
</tbody>
</table>

The INSERT statement is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT { 
      ?harmds dct:conformsTo ?conforms .
    } WHERE { 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
      ?ds a dcat:Dataset .
      ?ds dct:conformsTo ?conformsTo . 
    }

### TODO dataset frequency (dct:accrualPeriodicity)<a id="sec-4-3-2" name="sec-4-3-2"></a>

Is present, but needs mapping

### TODO dataset identifier (dct:identifier)<a id="sec-4-3-3" name="sec-4-3-3"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?identifier
    WHERE { GRAPH <http://data.gov.gr/> { 
      ?ds a <http://www.w3.org/ns/dcat#Dataset> .
      ?ds dct:identifier ?identifier .
    } } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="right" />
</colgroup>
<tbody>
<tr>
<td class="right">identifier</td>
</tr>


<tr>
<td class="right">2</td>
</tr>


<tr>
<td class="right">3</td>
</tr>


<tr>
<td class="right">4</td>
</tr>


<tr>
<td class="right">5</td>
</tr>


<tr>
<td class="right">6</td>
</tr>


<tr>
<td class="right">7</td>
</tr>


<tr>
<td class="right">8</td>
</tr>


<tr>
<td class="right">9</td>
</tr>


<tr>
<td class="right">10</td>
</tr>


<tr>
<td class="right">11</td>
</tr>
</tbody>
</table>

The identifier INSERT statement:

    PREFIX adms: <http://www.w3.org/ns/adms#> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT { 
     ?harmds adms:identifier ?identifier .
    } WHERE { 
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds.  
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
     ?ds a dcat:Dataset .
     ?ds  dct:identifier ?identifier xs
    }

### TODO dataset landing page (dcat:landingPage)<a id="sec-4-3-4" name="sec-4-3-4"></a>

Nothing found at present.

### dataset language (dct:language)<a id="sec-4-3-5" name="sec-4-3-5"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?ds ?language
    FROM <http://data.gov.gr/>
    WHERE { 
     ?ds a dcat:Dataset .
     ?ds dct:language ?language .
    } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">ds</td>
<td class="left">language</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/2></td>
<td class="left">el</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/3></td>
<td class="left">el</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/4></td>
<td class="left">el</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/5></td>
<td class="left">el</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/6></td>
<td class="left">el</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/6></td>
<td class="left">--</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/7></td>
<td class="left">el</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/8></td>
<td class="left">el</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/9></td>
<td class="left">el</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/10></td>
<td class="left">el</td>
</tr>
</tbody>
</table>

The INSERT statement is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT { 
      ?harmds dct:language ?language .
    } WHERE { 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
      ?ds a dcat:Dataset .
      ?ds dct:language ?language . 
    }

1.  TODO Language Value needs to be mapped (iso vocab)

### dataset other identifier (adms:identifier)<a id="sec-4-3-6" name="sec-4-3-6"></a>

Identifier is present.

### dataset release date (dct:issued)<a id="sec-4-3-7" name="sec-4-3-7"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT ?ds ?issued
    WHERE { GRAPH <http://data.gov.gr/> {
     ?ds a dcat:Dataset . 
     ?ds dct:issued ?issued . 
     FILTER( datatype(?issued) = xsd:date )
    } }  LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">ds</td>
<td class="left">issued</td>
</tr>
</tbody>
</table>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    INSERT {
      ?harmds dct:issued ?issued
    } WHERE {
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
      ?ds a dcat:Dataset . 
      ?ds dct:issued ?issued .
      FILTER( datatype(?issued) = xsd:date )
    }

### dataset modification date (dct:modified)<a id="sec-4-3-8" name="sec-4-3-8"></a>

    PREFIX dct:<http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT ?ds ?modified
    WHERE { GRAPH <http://data.gov.gr/> {
     ?ds a dcat:Dataset .
     ?ds dct:modified ?modified .
      FILTER( isLiteral(?modified) )
    } } LIMIT 10

1.  TODO dsModified should be date or dateTime - it fails it the filter restricts further

    ie. FILTER( datatype(?modified) = xsd:date )
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="left" />
    
    <col  class="left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="left">ds</td>
    <td class="left">modified</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/2></td>
    <td class="left">2013-09-09 14:32:22.985829+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/3></td>
    <td class="left">2014-04-08 16:18:58.992213+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/4></td>
    <td class="left">2014-05-02 00:03:34.844935+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/5></td>
    <td class="left">2013-10-09 12:00:27.590658+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/6></td>
    <td class="left">2013-10-09 11:52:51.865274+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/7></td>
    <td class="left">2013-10-09 11:56:08.285519+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/8></td>
    <td class="left">2013-09-06 17:44:30.982914+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/9></td>
    <td class="left">2013-09-06 17:45:40.79204+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/10></td>
    <td class="left">2013-10-09 11:58:22.192597+03</td>
    </tr>
    
    
    <tr>
    <td class="left"><http://data.gov.gr/datasets/11></td>
    <td class="left">2013-09-06 17:49:12.860462+03</td>
    </tr>
    </tbody>
    </table>
    
        PREFIX dct:<http://purl.org/dc/terms/> 
        PREFIX dcat: <http://www.w3.org/ns/dcat#>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        INSERT {
         ?harmds dct:modified ?modified
        } WHERE {
         ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds . 
         ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . 
         ?ds a dcat:Dataset . 
         ?ds dcat:modified ?modified . 
        }

### TODO dataset spatial/geographic (dct:spatial)<a id="sec-4-3-9" name="sec-4-3-9"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    SELECT ?ds ?spatial
    WHERE { GRAPH <http://data.gov.gr/> {
     ?ds a dcat:Dataset .
     ?ds dct:spatial ?spatial .
    } } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">ds</td>
<td class="left">spatial</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/2></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/3></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/4></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/5></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/6></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/7></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/8></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/9></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/10></td>
<td class="left">GR</td>
</tr>


<tr>
<td class="left"><http://data.gov.gr/datasets/11></td>
<td class="left">GR</td>
</tr>
</tbody>
</table>

The INSERT for the spatial is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dct:spatial ?modified
    } WHERE {
     ?ds a dcat:Dataset . 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . 
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds . 
     ?ds dct:spatial ?modified . 
    }

### TODO dataset temporal (dct:temporal)<a id="sec-4-3-10" name="sec-4-3-10"></a>

Info not found

### dataset version<a id="sec-4-3-11" name="sec-4-3-11"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    SELECT ?version
    WHERE { 
     ?ds a dcat:Dataset . 
     ?ds dcat:version ?version . 
    } LIMIT 10

    version

    PREFIX orig: <http://data.gov.gr/catalog/predicate/> 
    PREFIX adms: <http://www.w3.org/ns/adms#> 
    INSERT { 
     ?harmds adms:version ?d .
    } WHERE { 
     ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
     ?ds  orig:version  ?d. 
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
    }

### TODO dataset version notes (adms:versionNotes)<a id="sec-4-3-12" name="sec-4-3-12"></a>

Not found 

### dataset status<a id="sec-4-3-13" name="sec-4-3-13"></a>

Not found

# Value Mapping<a id="sec-5" name="sec-5"></a>

<http://publications.europa.eu/resource/authority/file-type>

    select distinct ?concept
    FROM <http://publications.europa.eu/resource/authority/file-type>
    WHERE {
      ?concept a <http://www.w3.org/2004/02/skos/core#Concept>
    } ORDER BY ?concept

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">concept</th>
<th scope="col" class="left">current</th>
</tr>
</thead>

<tbody>
<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/AZW></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/CSV></td>
<td class="left">yes</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/DBF></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/DOC></td>
<td class="left">yes</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/DOCX></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/E00></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/EPUB></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/FMX2></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/FMX3></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/FMX4></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/GIF></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/GZIP></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/HTML></td>
<td class="left">yes</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/JPEG></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/JSON></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/KML></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/MDB></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/MOBI></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/MOP></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/MXD></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/OP_DATPRO></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/PDF></td>
<td class="left">yes</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/PDFA1A></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/PDFA1B></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/PDFX></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/PNG></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/PPSX></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/PPT></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/PPTX></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/RDF_XML></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/RTF></td>
<td class="left">yes</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/SGML></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/SKOS_XML></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/SPARQLQ></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/SPARQLQRES></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/TIFF></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/TSV></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/TXT></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/XHTML></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/XLS></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/XLSX></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/XML></td>
<td class="left">yes</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/XSLT></td>
<td class="left">&#xa0;</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/ZIP></td>
<td class="left">yes</td>
</tr>
</tbody>
</table>

### TODO Mapping of the format, finish the rest - possible to just copy<a id="sec-5-0-1" name="sec-5-0-1"></a>

across and instantiate it?
