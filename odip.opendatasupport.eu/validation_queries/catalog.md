# dcat:dataset is a required property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s dcat:dataset ?ds})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```

# dcat:dataset should be a Dataset

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (dcat:dataset as ?p) ?o 
WHERE {
?s a dcat:Catalog.
?s dcat:dataset ?o.
FILTER(!EXISTS {?o a dcat:Dataset}).
}
```


# dcterms:description is a required property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s dcterms:description ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```

# dcterms:description should be a literal

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
?s dcterms:description ?o.
FILTER(!isLiteral(?o).)
BIND(dcterms:description AS ?p).
}
```

# dcterms:publisher is a required property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s dcterms:publisher ?pub})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```

# dcterms:publisher has maximum cardinality of 1 for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Catalog AS ?o)
WHERE {
?s a dcat:Catalog.
?s dcterms:publisher ?pub.
} GROUP BY ?s HAVING(COUNT(?pub > 1))
```

# dcterms:publisher should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (dcterms:publisher as ?p) ?o 
WHERE {
?s a dcat:Catalog.
?s dcterms:publisher ?o.
FILTER(!isURI(?o)).
}
```

# dcterms:publisher should be a foaf:Agent

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcterms:publisher as ?p) ?o 
WHERE {
?s a dcat:Catalog.
?s dcterms:publisher ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a foaf:Agent}).
}
```


# dcterms:title is a required property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s dcterms:title ?title})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```

# dcterms:title should be a literal

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
?s dcterms:title ?o.
FILTER(!isLiteral(?o).)
BIND(dcterms:title AS ?p).
}
```

# foaf:homepage is a recommended property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s foaf:homepage ?homepage})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```

# foaf:homepage has maximum cardinality of 1 for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Catalog AS ?o)
WHERE {
?s a dcat:Catalog.
?s foaf:homepage ?pub.
} GROUP BY ?s HAVING(COUNT(?pub > 1))
```

# foaf:homepage should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (foaf:homepage as ?p) ?o 
WHERE {
?s a dcat:Catalog.
?s foaf:homepage ?o.
FILTER(!isURI(?o)).
}
```

# foaf:homepage should be a foaf:Document

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (foaf:homepage as ?p) ?o 
WHERE {
?s a dcat:Catalog.
?s foaf:homepage ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a foaf:Document}).
}
```

# dcterm:language is a recommended property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!EXISTS {?s dcterms:language ?o.}).
BIND(dcterms:language AS ?p).
}
```

# dcterm:language should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
?s dcterms:language ?o.
FILTER(!isURI(?o)).
BIND(dcterms:language AS ?p).
}
```

# dcterms:language should be a dcterms:LinguisticSystem

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcterms:language as ?p) ?o 
WHERE {
?s a dcat:Catalog.
?s dcterms:language ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a dcterms:LinguisticSystem}).
}
```

# dcterms:license is a recommended property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s dcterms:license ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```

# dcterms:license should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
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

# dcterms:issued is a recommended property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s dcterms:issued ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```

# dcterms:issued should be literal

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
?s dcterms:issued ?o.
FILTER(!isLiteral(?o)).
BIND(dcterms:issued AS ?p).
}
```

# dcterms:issued has maximum cardinality of 1 for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Catalog AS ?o)
WHERE {
?s a dcat:Catalog.
?s dcterms:issued ?issued.
} GROUP BY ?s HAVING(COUNT(?issued > 1))
```

# dcat:themeTaxonomy is a recommended property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s dcat:themeTaxonomy ?taxonomy})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```



# dcat:themeTaxonomy should be a resource

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
?s dcat:themeTaxonomy ?o.
FILTER(!isIRI(?o)).
BIND(dcat:themeTaxonomy AS ?p).
}
```

# dcterms:modified is a recommended property for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
FILTER(!(EXISTS { ?s dcterms:modified ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Catalog AS ?o).
}
```

# dcterms:modified should be a literal

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Catalog.
?s dcterms:modified ?o.
FILTER(!isLiteral(?o)).
BIND(dcterms:modified AS ?p).
}
```

# dcterms:modified has maximum cardinality of 1 for Catalog

```
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Catalog AS ?o)
WHERE {
?s a dcat:Catalog.
?s dcterms:modified ?modified.
} GROUP BY ?s HAVING(COUNT(?modified > 1))
```

