# name is a required property for Agent

```
PREFIX dcterms: <http://purl.org/dc/terms/>;
PREFIX dcat:<http://www.w3.org/ns/dcat#>;
PREFIX foaf:<http://xmlns.com/foaf/0.1/>;
SELEC ?s ?p ?o 
WHERE {
?s a foaf:Agent.
FILTER(!EXISTS {?s foaf:name ?name}).
BIND (rdf:type as ?p).
BIND (foaf:Agent as ?o).
}
```

# foaf:name should be a literal

```
PREFIX dcterms: <http://purl.org/dc/terms/>;
PREFIX dcat:<http://www.w3.org/ns/dcat#>;
PREFIX foaf:<http://xmlns.com/foaf/0.1/>;
SELEC ?s ?p ?o 
WHERE {
?s a foaf:Agent.
?s foaf:name ?o.
FILTER(!isLiteral(?o)).
BIND (foaf:name as ?p)
}
```

# type is a recommended property for Agent

```
PREFIX dcterms: <http://purl.org/dc/terms/>;
PREFIX dcat:<http://www.w3.org/ns/dcat#>;
PREFIX foaf:<http://xmlns.com/foaf/0.1/>;
SELEC ?s ?p ?o 
WHERE {
?s a foaf:Agent.
FILTER(!EXISTS {?s dct:type ?type}).
BIND (rdf:type as ?p).
BIND (foaf:Agent as ?o).
}
```

# type should be a resource

```
PREFIX dcterms: <http://purl.org/dc/terms/>;
PREFIX dcat:<http://www.w3.org/ns/dcat#>;
PREFIX foaf:<http://xmlns.com/foaf/0.1/>;
SELEC ?s ?p ?o 
WHERE {
?s a foaf:Agent.
?s dct:type ?o.
FILTER(!isUri(?o)).
BIND (dct:type as ?p)
}
```

