<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Recommended</a>
<ul>
<li><a href="#sec-1-1">1.1. distribution title</a></li>
<li><a href="#sec-1-2">1.2. distribution description</a></li>
<li><a href="#sec-1-3">1.3. distribution format</a></li>
<li><a href="#sec-1-4">1.4. distribution accessURL</a></li>
<li><a href="#sec-1-5">1.5. distribution license</a></li>
</ul>
</li>
<li><a href="#sec-2">2. Optional</a>
<ul>
<li><a href="#sec-2-1">2.1. byte size</a></li>
<li><a href="#sec-2-2">2.2. download URL</a></li>
<li><a href="#sec-2-3">2.3. media type</a></li>
<li><a href="#sec-2-4">2.4. release dat</a></li>
<li><a href="#sec-2-5">2.5. modification date</a></li>
<li><a href="#sec-2-6">2.6. rights</a></li>
<li><a href="#sec-2-7">2.7. status</a></li>
<li><a href="#sec-2-8">2.8. title</a></li>
</ul>
</li>
<li><a href="#sec-3">3. Dataset properties</a>
<ul>
<li><a href="#sec-3-1">3.1. Mandatory</a></li>
<li><a href="#sec-3-2">3.2. Recommended</a></li>
<li><a href="#sec-3-3">3.3. Optional</a></li>
</ul>
</li>
<li><a href="#sec-4">4. Value Mapping</a></li>
<li><a href="#sec-5">5. ODS Spain Tasks&#xa0;&#xa0;&#xa0;<span class="tag"><span class="noexport">noexport</span></span></a>
<ul>
<li><a href="#sec-5-1">5.1. LodManager Initialisation <code>[2/3]</code></a></li>
</ul>
</li>
</ul>
</div>
</div>


Core Vocabulary Identifier | Mapping Relation | Data Model | Identifier | Mapping Comment
---------------------------|------------------|------------|------------|----------------
dcat:Distribution/dcat:accessURL | exactMatch | de | resources/url | to be checked
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

# Recommended<a id="sec-1" name="sec-1"></a>


## distribution title<a id="sec-1-1" name="sec-1-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gob.es/catalog/predicate/> 
    SELECT DISTINCT ?disttitle 
    FROM <http://data.gob.es/>
    WHERE {
     ?ds a dcat:Distribution .
     ?ds dct:title ?disttitle . 
    } LIMIT 10

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
     BIND (IRI(CONCAT(?hds,md5(?dist))) AS ?distribution)
    }

## distribution description<a id="sec-1-2" name="sec-1-2"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?dist ?distdesc
    WHERE {
     ?ds a dcat:Distribution . 
     ?ds dct:description ?distdesc .
     FILTER ( isLiteral(?distdesc) )
     BIND(CONCAT(STR("XXX"),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist) 
    } LIMIT 10

The INSERT statement is:

    PREFIX  dcat: <http://www.w3.org/ns/dcat#>
    PREFIX  dct:  <http://purl.org/dc/terms/>
    PREFIX  orig: <http://data.gob.es/catalog/predicate/>
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
        BIND (CONCAT(?harmds,"/distributions/") AS ?hds)
        BIND (IRI(CONCAT(?hds,md5(?dist))) AS ?distribution)
    }

## distribution format<a id="sec-1-3" name="sec-1-3"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?format
    WHERE {
      ?ds dcat:distribution ?dist .
      ?dist a dcat:Distribution .
      ?dist dcat:format ?format . 
    } LIMIT 50

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">format</td>
</tr>


<tr>
<td class="left"><http://publications.europa.eu/resource/authority/file-type/ZIP></td>
</tr>


<tr>
<td class="left"><http://publications.europe.eu/resource/authority/file-type/ZIP></td>
</tr>
</tbody>
</table>

The INSERT statement is:

    PREFIX  dcat: <http://www.w3.org/ns/dcat#>
    PREFIX  dct:  <http://purl.org/dc/terms/>
    PREFIX  orig: <http://data.gob.es/catalog/predicate/>
    INSERT {
      ?harmds dcat:distribution ?distribution .
      ?distribution a dcat:Distribution .
      ?distribution dct:format ?format .
    } WHERE { 
      ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .
      ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
      ?ds dcat:distribution ?dist .
      ?dist a dcat:Distribution .
      ?dist dct:format ?format .
      BIND (CONCAT(?harmds,"/distributions/") AS ?hds)
      BIND (IRI(CONCAT(?hds,md5(?dist))) AS ?distribution)
    }

### TODO mapping of the values (to a URI)<a id="sec-1-3-1" name="sec-1-3-1"></a>

## distribution accessURL<a id="sec-1-4" name="sec-1-4"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gob.es/predicate/> 
    SELECT DISTINCT ?distribution ?accessUrl
    WHERE { GRAPH <http://data.gob.es/> {
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
<td class="left">/distribution/a32e4a4de8696f75a52710d32811b9f6</td>
<td class="left"><http://www.exteriores.gob.es/Portal/es/Ministerio/Ministro/Paginas/Actividades.aspx></td>
</tr>


<tr>
<td class="left">/distribution/08b8f9f88c1f0118ac24f21b26b14ad1</td>
<td class="left"><http://www.exteriores.gob.es/Portal/es/SalaDePrensa/Comunicados/Paginas/default.aspx></td>
</tr>


<tr>
<td class="left">/distribution/18daac003aa4c7409c5a98b51dcf9a08</td>
<td class="left"><http://www.exteriores.gob.es/Portal/en/SalaDePrensa/OfficialStatements/Paginas/default.aspx></td>
</tr>


<tr>
<td class="left">/distribution/6620f4d33897ec7eb941f27c9b0383b8</td>
<td class="left">º<sub>3</sub>.pdf</td>
</tr>


<tr>
<td class="left">/distribution/27b2e9ef89fdcb95627cff7cee30f596</td>
<td class="left"><http://www.exteriores.gob.es/Portal/es/SalaDePrensa/Multimedia/Publicaciones/Paginas/Inicio.aspx></td>
</tr>


<tr>
<td class="left">/distribution/4a20b88a84e1c188bf08267dafd8deda</td>
<td class="left"><http://www.defensa.gob.es/actualidad/entrevistas/prensa/></td>
</tr>


<tr>
<td class="left">/distribution/064935ba0e49748b25e3e32c137f4c6e</td>
<td class="left"><http://www.defensa.gob.es/gabinete/multimedia/fototeca/></td>
</tr>


<tr>
<td class="left">/distribution/a7df1d60e62f26aa63eb25068f2e7690</td>
<td class="left"><http://webaux.cedex.es/buscador_publicaciones/html/index.htm></td>
</tr>


<tr>
<td class="left">/distribution/709976126fe7459689cdb05e6f24b08e</td>
<td class="left"><http://www.cedex.gob.es/CEDEX/LANG_CASTELLANO/DOCU/RED/CATALOGO/></td>
</tr>


<tr>
<td class="left">/distribution/4faadde0c7754f96c333a562a2fcf432</td>
<td class="left"><http://www.puertos.es/sistema_portuario/legislacion_portuaria.html></td>
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
        ?ds dcat:distribution ?dist .
        ?dist a dcat:Dataset .
        ?dist dcat:accessURL ?accessUrl .
        BIND(concat(str(?harmds), "/distributions/") AS ?hds)
        BIND(iri(concat(?hds, md5(?dist))) AS ?distribution)
    }

### TODO Check construction of ?distribution uri is okay.<a id="sec-1-4-1" name="sec-1-4-1"></a>

## distribution license<a id="sec-1-5" name="sec-1-5"></a>

The INSERT for the license is:

    PREFIX orig: <http://data.gob.es/catalog/predicate/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dcat:distribution ?distribution.
     ?distribution a dcat:Distribution.
     ?distribution dct:license ?license.
    } WHERE {
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds .
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds .
     ?ds dcat:distribution ?dist .
     ?dist a dcat:Dataset .
     ?dist dct:license ?license . 
     BIND(concat(str(?harmds), "/distributions/") AS ?hds)
     BIND(iri(concat(?hds, md5(?dist))) AS ?distribution)
    }

# Optional<a id="sec-2" name="sec-2"></a>

## byte size<a id="sec-2-1" name="sec-2-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT DISTINCT ?distribution ?byteSize
    WHERE { GRAPH <http://data.gob.es/> {
     ?ds a <http://www.w3.org/ns/dcat#Distribution>. 
     ?ds dcat:byteSize ?byteSize .
     FILTER( datatype(?byteSize) = xsd:decimal )
     BIND(iri(concat("/distribution/", md5(?ds))) AS ?distribution)
    } } LIMIT 10

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="right" />
</colgroup>
<tbody>
<tr>
<td class="left">distribution</td>
<td class="right">byteSize</td>
</tr>


<tr>
<td class="left">/distribution/8a7f8e22b50d33e9d5621e8b080102f4</td>
<td class="right">0</td>
</tr>


<tr>
<td class="left">/distribution/740a5e3331ff7a3cff7bf7821e87ae1c</td>
<td class="right">0</td>
</tr>


<tr>
<td class="left">/distribution/4937b4ef460c9597f7dac2dcbbca862c</td>
<td class="right">20</td>
</tr>


<tr>
<td class="left">/distribution/d6dcf901b01c639257ed3d2256a36bb2</td>
<td class="right">20</td>
</tr>


<tr>
<td class="left">/distribution/1c04afcfaa9578b17ba24467100fe558</td>
<td class="right">20</td>
</tr>


<tr>
<td class="left">/distribution/8032cc2653379e681e8a43b70cc36acc</td>
<td class="right">20</td>
</tr>


<tr>
<td class="left">/distribution/0bcc199dc4ca63fedd914023e729fb5d</td>
<td class="right">20</td>
</tr>


<tr>
<td class="left">/distribution/173e6a8b9fc7a5aa3ddad52ffccccc51</td>
<td class="right">20</td>
</tr>


<tr>
<td class="left">/distribution/23f503ff652d002f1b0ed5397dca0641</td>
<td class="right">20</td>
</tr>


<tr>
<td class="left">/distribution/cfe36be40b1f4edf1869aff6b2d052dd</td>
<td class="right">20</td>
</tr>
</tbody>
</table>

### TODO byteSize is rdfs:Literal, but spec says xsd:decimal<a id="sec-2-1-1" name="sec-2-1-1"></a>

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

## download URL<a id="sec-2-2" name="sec-2-2"></a>

url points to a PDF

## media type<a id="sec-2-3" name="sec-2-3"></a>

type indicates "dataset"

## release dat<a id="sec-2-4" name="sec-2-4"></a>

The INSERT for the issued date.

    PREFIX orig: <http://data.gob.es/catalog/predicate/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    prefix dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dcat:distribution ?dist.
     ?dist a dcat:Distribution.
     ?dist dct:issued ?created.
    } WHERE {
     ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
     ?ds dcat:created ?created. 
     BIND(CONCAT(STR(?harmds),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist)
    }

## modification date<a id="sec-2-5" name="sec-2-5"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gob.es/catalog/predicate/> 
    SELECT ?dist ?modified
    WHERE {
     ?ds a dcat:Dataset . 
     ?ds dcat:revision_timestamp  ?modified .
     BIND(CONCAT(STR("harmds"),"/distributions/") AS ?hds)
     BIND(IRI(CONCAT(?hds,md5(?ds))) AS ?dist) } LIMIT 10

The INSERT is:

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gob.es/catalog/predicate/> 
    INSERT
    {
     ?harmds dcat:distribution ?distribution .
     ?distribution a dcat:Distribution.
     ?distribution dct:modified ?modified.
    }
    WHERE {
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds . 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds . 
     ?ds dcat:distribution ?dist .
     ?dist a dcat:Distribution .
     ?dist dcat:byteSize ?byteSize .
     FILTER( datatype(?byteSize) = xsd:decimal )
     BIND(concat(str(?harmds), "/distributions/") AS ?hds)
     BIND(iri(concat(?hds, md5(?dist))) AS ?distribution)
    }

## rights<a id="sec-2-6" name="sec-2-6"></a>

## status<a id="sec-2-7" name="sec-2-7"></a>

## title<a id="sec-2-8" name="sec-2-8"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct:<http://purl.org/dc/terms/> 
    SELECT DISTINCT ?ds ?title
    where { GRAPH <http://data.gob.es/> { 
     ?ds a dcat:Dataset .
     ?ds dct:title ?title .
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


<tr>
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-publicaciones-musicales-de-agencia-espanola-del-ismn></td>
<td class="left">ñola del ISMN</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-publicaciones-musicales-de-agencia-espanola-del-ismn></td>
<td class="left">Publicaciones musicales con ISMN</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-publicaciones-musicales-de-agencia-espanola-del-ismn></td>
<td class="left">úmero Internacional Normalizado para Música Escrita</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-publicaciones-musicales-de-agencia-espanola-del-ismn></td>
<td class="left">ISMN, International Standard Music Number</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-editoriales-de-musica-de-agencia-del-ismn></td>
<td class="left">úsica de la Agencia del ISMN</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-editoriales-de-musica-de-agencia-del-ismn></td>
<td class="left">úsica con ISMN</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/revista-del-cdti></td>
<td class="left">Revista del CDTI</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/revista-del-cdti></td>
<td class="left">Perspectiva CDTI</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/registro-de-entidades-locales-busqueda-comarcas></td>
<td class="left">úsqueda por comarcas</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/notas-de-prensa-de-secretaria-de-estado-de-administraciones-publicas></td>
<td class="left">ía de Estado de Administraciones Públicas</td>
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

# Dataset properties<a id="sec-3" name="sec-3"></a>

## Mandatory<a id="sec-3-1" name="sec-3-1"></a>

### Mapping description<a id="sec-3-1-1" name="sec-3-1-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct:<http://purl.org/dc/terms/> 
    PREFIX orig: <http://data.gob.es/catalog/predicate/> 
    SELECT DISTINCT ?ds ?description
    WHERE {
     ?ds a <http://www.w3.org/ns/dcat#Dataset> .
     ?ds dct:description ?description . 
    } LIMIT 10

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    INSERT {
     ?harmds dct:description ?description
    } WHERE {
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
     ?ds a dcat:Dataset .
     ?ds dct:description ?description . 
    }

### Mapping Title<a id="sec-3-1-2" name="sec-3-1-2"></a>

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

## Recommended<a id="sec-3-2" name="sec-3-2"></a>

### Map tags to keywords<a id="sec-3-2-1" name="sec-3-2-1"></a>

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

### Mapping theme<a id="sec-3-2-2" name="sec-3-2-2"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#> 
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?theme
    FROM <http://data.gob.es/>
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
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/comercio></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/ciencia-tecnologia></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/sector-publico></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/hacienda></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/sociedad-bienestar></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/empleo></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/urbanismo-infraestructuras></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/seguridad></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/medio-rural-pesca></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/economia></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/medio-ambiente></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/demografia></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/salud></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/turismo></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/cultura-ocio></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/educacion></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/energia></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/legislacion-justicia></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/transporte></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/industria></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/vivienda></td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/kos/sector-publico/sector/deporte></td>
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

### TODO Mapping contactPoint email<a id="sec-3-2-3" name="sec-3-2-3"></a>

Not found 

### TODO Mapping contactPoint name<a id="sec-3-2-4" name="sec-3-2-4"></a>

Not found 

### Mapping publisher<a id="sec-3-2-5" name="sec-3-2-5"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct:<http://purl.org/dc/terms/> 
    SELECT DISTINCT ?publisher
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

## Optional<a id="sec-3-3" name="sec-3-3"></a>

### dataset conformsTo (dct:conformsTo)<a id="sec-3-3-1" name="sec-3-3-1"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?ds ?conformsTo
    WHERE { 
     ?ds a dcat:Dataset .
     ?ds dct:conformsTo ?conformsTo .
    } LIMIT 10

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

### TODO dataset frequency (dct:accrualPeriodicity)<a id="sec-3-3-2" name="sec-3-3-2"></a>

Is present, but needs mapping

### TODO dataset identifier (dct:identifier)<a id="sec-3-3-3" name="sec-3-3-3"></a>

Not present.

### TODO dataset landing page (dcat:landingPage)<a id="sec-3-3-4" name="sec-3-3-4"></a>

Nothing found at present.

### dataset language (dct:language)<a id="sec-3-3-5" name="sec-3-3-5"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    SELECT DISTINCT ?ds ?language
    WHERE { 
     ?ds a dcat:Dataset .
     ?ds dct:language ?language .
    } LIMIT 10

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

1.  TODO Language Value needs to be mapped (NLD)

### dataset other identifier (adms:identifier)<a id="sec-3-3-6" name="sec-3-3-6"></a>

Nothing relevant found?

### dataset release date (dct:issued)<a id="sec-3-3-7" name="sec-3-3-7"></a>

    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT ?ds ?issued
    WHERE { GRAPH <http://data.gob.es/> {
     ?ds a dcat:Dataset . 
     ?ds dct:issued ?issued . 
     FILTER( datatype(?issued) = xsd:date )
    } }  LIMIT 10

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

### dataset modification date (dct:modified)<a id="sec-3-3-8" name="sec-3-3-8"></a>

    PREFIX dct:<http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT ?ds ?modified
    WHERE { GRAPH <http://data.gob.es/> {
     ?ds a dcat:Dataset .
     ?ds dct:modified ?modified .
      FILTER( datatype(?modified) = xsd:date )
    } } LIMIT 10

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
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-publicaciones-musicales-de-agencia-espanola-del-ismn></td>
<td class="left">2014-05-07T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-editoriales-de-musica-de-agencia-del-ismn></td>
<td class="left">2014-05-14T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/revista-del-cdti></td>
<td class="left">2011-11-07T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/liquidacion-de-presupuestos-de-comunidades-ciudades-autonomas-base-de-datos></td>
<td class="left">2013-03-03T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/presupuestos-liquidaciones-de-entidades-locales-datos-agregados></td>
<td class="left">2013-02-28T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/directorio-de-servicios-perifericos-del-ministerio-de-hacienda-administraciones-publicas></td>
<td class="left">2012-12-28T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/normdoc-normativa-doctrina></td>
<td class="left">2013-01-22T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/bomeh-boletin-oficial-de-ministerios-de-hacienda-administraciones-publicas-de-economia></td>
<td class="left">2013-01-25T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/consultas-tributarias-generales-de-direccion-general-de-tributos></td>
<td class="left">2013-01-31T00:00:00Z</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/doctrina-criterios-del-tribunal-economico-administrativo-central></td>
<td class="left">2012-10-30T00:00:00Z</td>
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
      FILTER( datatype(?modified) = xsd:date )
    }

### TODO dataset spatial/geographic (dct:spatial)<a id="sec-3-3-9" name="sec-3-3-9"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    SELECT ?ds ?spatial
    WHERE { GRAPH <http://data.gob.es/> {
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
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-publicaciones-musicales-de-agencia-espanola-del-ismn></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/base-de-datos-de-editoriales-de-musica-de-agencia-del-ismn></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/registro-de-entidades-locales-busqueda-comarcas></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/notas-de-prensa-de-secretaria-de-estado-de-administraciones-publicas></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/registro-de-entidades-locales-busqueda-municipios></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/archivo-grafico-de-secretaria-de-estado-de-administraciones-publicas></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/geolocalizacion-de-proyectos-de-inversion-busqueda-listado></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/geolocalizacion-de-proyectos-de-inversion-busqueda-galeria-de-imagenes></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/registro-de-entidades-locales-busqueda-provincias></td>
<td class="left">ña</td>
</tr>


<tr>
<td class="left"><http://datos.gob.es/catalogo/registro-de-entidades-locales-busqueda-islas></td>
<td class="left">ña</td>
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

### TODO dataset temporal (dct:temporal)<a id="sec-3-3-10" name="sec-3-3-10"></a>

Info not found

### dataset version<a id="sec-3-3-11" name="sec-3-3-11"></a>

    PREFIX dct: <http://purl.org/dc/terms/> 
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    SELECT ?version
    WHERE { 
     ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
     ?ds dcat:version  ?version . 
    } LIMIT 10

    PREFIX orig: <http://data.gob.es/catalog/predicate/> 
    PREFIX adms: <http://www.w3.org/ns/adms#> 
    INSERT { 
     ?harmds adms:version ?d .
    } WHERE { 
     ?ds a <http://www.w3.org/ns/dcat#Dataset>. 
     ?ds  orig:version  ?d. 
     ?harmrecord <http://data.opendatasupport.eu/ontology/harmonisation.owl#raw_dataset> ?ds. 
     ?harmrecord <http://xmlns.com/foaf/0.1/primaryTopic> ?harmds. 
    }

### TODO dataset version notes (adms:versionNotes)<a id="sec-3-3-12" name="sec-3-3-12"></a>

Not found 

### dataset status<a id="sec-3-3-13" name="sec-3-3-13"></a>

Not found

# Value Mapping<a id="sec-4" name="sec-4"></a>

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

### TODO Mapping of the format, finish the rest - possible to just copy<a id="sec-4-0-1" name="sec-4-0-1"></a>

across and instantiate it?

# ODS Spain Tasks     :noexport:<a id="sec-5" name="sec-5"></a>

## LodManager Initialisation <code>[2/3]</code><a id="sec-5-1" name="sec-5-1"></a>

### DONE Virtuoso Extractors<a id="sec-5-1-1" name="sec-5-1-1"></a>

-   State "DONE"       from "TODO"       <span class="timestamp-wrapper"><span class="timestamp">[2013-12-16 Mon 15:41]</span></span>

### TODO Transformers <code>[5/6]</code><a id="sec-5-1-2" name="sec-5-1-2"></a>

1.  DONE ODS Dcat application profile harmonizer

    -   State "DONE"       from "TODO"       <span class="timestamp-wrapper"><span class="timestamp">[2013-12-16 Mon 16:53]</span></span>
    -   set to 'es'

2.  DONE ODS Modification Detector

    -   State "DONE"       from "TODO"       <span class="timestamp-wrapper"><span class="timestamp">[2013-12-16 Mon 16:54]</span></span>
    -   nothing to configure?

3.  Sparql Update Tranformations <code>[1/2]</code>

    1.  DONE Initial versions
    
        -   State "DONE"       from "TODO"       <span class="timestamp-wrapper"><span class="timestamp">[2013-12-18 Wed 09:24]</span></span>
    
    2.  TODO Test Transformations

4.  ODS Value Mapper <code>[1/2]</code>

    1.  DONE Plugin Added
    
        -   State "DONE"       from ""           <span class="timestamp-wrapper"><span class="timestamp">[2013-12-18 Wed 09:22]</span></span>
    
    2.  TODO Add Value Mappings

5.  DONE ODS Cleaner

    -   State "DONE"       from "TODO"       <span class="timestamp-wrapper"><span class="timestamp">[2013-12-16 Mon 16:54]</span></span>

6.  DONE ODS Validator

    -   State "DONE"       from "TODO"       <span class="timestamp-wrapper"><span class="timestamp">[2013-12-16 Mon 16:54]</span></span>

### DONE Virtuoso Loader<a id="sec-5-1-3" name="sec-5-1-3"></a>

-   State "DONE"       from "TODO"       <span class="timestamp-wrapper"><span class="timestamp">[2013-12-17 Tue 11:41]</span></span>

### Tests<a id="sec-5-1-4" name="sec-5-1-4"></a>

    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    SELECT ?s ?p ?o
    FROM <http://data.gob.es/>
    WHERE {
      ?s a dcat:Distribution.
      OPTIONAL {?s dcterms:format ?format }
      FILTER (!BOUND(?format))
      BIND("p" AS ?p)
      BIND("o" AS ?o)
    } LIMIT 10
