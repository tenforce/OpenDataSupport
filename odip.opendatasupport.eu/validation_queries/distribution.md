# dcat:accessURL is a required property for Dataset

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
FILTER(!(EXISTS { ?s dcat:accessURL ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}
```

# dcat:accessURL should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcat:accessURL ?o.
FILTER(!isURI(?o).)
BIND(dcat:accessURL AS ?p).
}
```

# dcterms:description is a recommended property for Distribution

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
FILTER(!(EXISTS { ?s dcterms:description ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}
```

# dcterms:description should be a literal

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcterms:description ?o.
FILTER(!isLiteral(?o).)
BIND(dcterms:description AS ?p).
}
```

# dcterms:format is a recommended property for Distribution

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
FILTER(!(EXISTS { ?s dcterms:format ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}
```

# dcterms:format should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcterms:format ?o.
FILTER(!isURI(?o).)
BIND(dcat:accessURL AS ?p).
}
```

# dcterms:format has a maximum cardinality of 1

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT ?s (rdf:type as ?p) (dcat:Distribution as ?o)
WHERE {
?s rdf:type dcat:Distribution.
?s dcterms:format ?o
} GROUP BY ?s HAVING (count(?o) > 1)
```

# dcterms:license is a recommended property for Distribution

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
FILTER(!(EXISTS { ?s dcterms:license ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}
```

# dcterms:license should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcterms:license ?o.
FILTER(!isURI(?o).)
BIND(dcat:accessURL AS ?p).
}
```

# dcterms:license has a maximum cardinality of 1

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT ?s (rdf:type as ?p) (dcat:Distribution as ?o)
WHERE {
?s rdf:type dcat:Distribution.
?s dcterms:license ?o
} GROUP BY ?s HAVING (count(?o) > 1)
```

# dcterms:byteSize should be a literal

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcterms:byteSize ?o.
FILTER(!isLiteral(?o).)
BIND(dcterms:byteSize AS ?p).
}
```

# dcat:downloadURL should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcat:downloadURL ?o.
FILTER(!isURI(?o).)
BIND(dcat:downloadURL AS ?p).
}

```

# dcat:mediaType should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcat:mediaType ?o.
FILTER(!isURI(?o).)
BIND(dcat:mediaType AS ?p).
}

```

# dcterms:issued should be literal

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcterms:issued ?o.
FILTER(!isLiteral(?o)).
BIND(dcterms:issued AS ?p).
}
```

# dcterms:rights should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcterms:rights ?o.
FILTER(!isURI(?o)).
BIND(dcterms:rights AS ?p).
}
```

# adms:status should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX adms:&lt;http://www.w3.org/ns/adms#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s adms:status ?o.
FILTER(!isUri(?o)).
BIND(adms:status AS ?p).
}
```

# dcterms:title should be a literal

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcterms:title ?o.
FILTER(!isLiteral(?o).)
BIND(dcterms:title AS ?p).
}

```

# dcterms:modified should be a literal


```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Distribution.
?s dcterms:modified ?o.
FILTER(!isLiteral(?o)).
BIND(dcterms:modified AS ?p).
}
```
