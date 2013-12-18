# dcterms:description is a required property for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
FILTER(!(EXISTS { ?s dcterms:description ?desc})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}

# dcterms:description should be a literal
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:description ?o.
FILTER(!isLiteral(?o).)
BIND(dcterms:description AS ?p).
}

# dcterms:title is a required property for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
FILTER(!(EXISTS { ?s dcterms:title ?title})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}

# dcterms:title should be a literal
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:title ?o.
FILTER(!isLiteral(?o).)
BIND(dcterms:title AS ?p).
}

# adms:contactPoint is a recommended property for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX adms:&lt;http://www.w3.org/ns/adms#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
FILTER(!(EXISTS { ?s adms:contactPoint ?cPoint})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}

# adms:contactPoint should be a resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX adms:&lt;http://www.w3.org/ns/adms#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s adms:contactPoint ?o.
FILTER(!isUri(?o)).
BIND(adms:contactPoint AS ?p).
}

# adms:contactPoint should be a vCard
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX adms:&lt;http://www.w3.org/ns/adms#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s adms:contactPoint ?o.
?o ?pred ?val.
FILTER(!EXISTS {?o a <http://www.w3.org/2006/vcard/ns#VCard>}).
BIND(adms:contactPoint AS ?p).
}


# dcat:distribution is a recommended property for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
FILTER(!(EXISTS { ?s dcat:distribution ?dist})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}


# dcat:distribution should be a resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcat:distribution ?o.
FILTER(!isURI(?o)).
BIND(dcat:distribution AS ?p).
}

# dcat:distribution should be a Distribution
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcat:distribution ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a dcat:Distribution}).
BIND(dcat:distribution AS ?p).
}

# dcat:keyword is a recommended property for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
FILTER(!(EXISTS { ?s dcat:keyword ?key})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}

# dcat:keyword should be a literal
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcat:keyword ?o.
FILTER(!isLiteral(?o)).
BIND(dcat:keyword AS ?p).
}

# dcterms:publisher is a recommended property for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
FILTER(!(EXISTS { ?s dcterms:publisher ?pub})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}

# dcterms:publisher has maximum cardinality of 1 for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Dataset AS ?o)
WHERE {
?s a dcat:Dataset.
?s dcterms:publisher ?pub.
} GROUP BY ?s HAVING(COUNT(?pub > 1))


# dcterms:publisher should be a resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (dcterms:publisher as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:publisher ?o.
FILTER(!isURI(?o)).
}

# dcterms:publisher should be a foaf:Agent
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcterms:publisher as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:publisher ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a foaf:Agent}).
}

# dcat:theme is a recommended property for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
FILTER(!(EXISTS { ?s dcat:theme ?theme})).
BIND(rdf:type AS ?p).
BIND(dcat:Dataset AS ?o).
}

# dcat:theme should be a resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcat:theme ?o.
FILTER(!isURI(?o)).
BIND(dcat:theme AS ?p).
}

# dcterms:conformsTo should be a resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:conformsTo ?o.
FILTER(!isURI(?o)).
BIND(dcterms:conformsTo AS ?p).
}

# dcterms:conformsTo should be a dcterms:Standard
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcterms:publisher as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:publisher ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a dcterms:Standard}).
}

# dcterms:accrualPeriodicity should be a resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:accrualPeriodicity ?o.
FILTER(!isURI(?o)).
BIND(dcterms:accrualPeriodicity AS ?p).
}

# dcterms:accrualPeriodicity should be a dcterms:Frequency
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcterms:accrualPeriodicity as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:accrualPeriodicity ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a dcterms:Frequency}).
}

# dcterms:accrualPeriodicity has maximum cardinality of 1 for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Dataset AS ?o)
WHERE {
?s a dcat:Dataset.
?s dcterms:accrualPeriodicity ?period.
} GROUP BY ?s HAVING(COUNT(?period > 1))

# dcterms:identifier should be a literal
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:identifier ?o.
FILTER(!isLiteral(?o)).
BIND(dcterms:identifier AS ?p).
}
# dcat:landingPage should be a resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcat:landingPage ?o.
FILTER(!isURI(?o)).
BIND(dcat:landingPage AS ?p).
}

# dcat:landingPage has maximum cardinality of 1 for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Dataset AS ?o)
WHERE {
?s a dcat:Dataset.
?s dcat:landingPage ?page.
} GROUP BY ?s HAVING(COUNT(?page > 1))

# dcat:landingPage should be a foaf:Document
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcat:landingPage as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s dcat:landingPage ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a foaf:Document}).
}

# dcterm:language should be a resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:language ?o.
FILTER(!isURI(?o)).
BIND(dcterms:language AS ?p).
}

# dcterms:language should be a dcterms:LinguisticSystem

PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcterms:language as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:language ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a dcterms:LinguisticSystem}).
}

# adms:identifier should be a resource
prefix adms:&lt;http://www.w3.org/ns/adms#>&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s adms:version ?o.
FILTER(!isURI(?o)).
BIND(adms:versionNotes AS ?p).
}

# adms:identifier should be a adms:Identifier

PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
prefix adms:&lt;http://www.w3.org/ns/adms#>&gt;
SELECT
?s (adms:identifier as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s adms:identifier ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a adms:Identifier}).
}


# dcterms:issued should be literal
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:issued ?o.
FILTER(!isLiteral(?o)).
BIND(dcterms:issued AS ?p).
}

# dcterms:issued has maximum cardinality of 1 for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Dataset AS ?o)
WHERE {
?s a dcat:Dataset.
?s dcterms:issued ?issued.
} GROUP BY ?s HAVING(COUNT(?issued > 1))

# dcterms:spatial should be resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:spatial ?o.
FILTER(!isURI(?o)).
BIND(dcterms:spatial AS ?p).
}

# dcterms:spatial should be a dcterms:LinguisticSystem

PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcterms:spatial as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:spatial ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a dcterms:Location}).
}

# dcterms:temporal should be resource
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:temporal ?o.
FILTER(!isURI(?o)).
BIND(dcterms:temporal AS ?p).
}

# dcterms:temporal should be a dcterms:PeriodOfTime 

PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
PREFIX foaf:&lt;http://xmlns.com/foaf/0.1/>&gt;
SELECT
?s (dcterms:temporal as ?p) ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:temporal ?o
?o ?pred ?val.
FILTER(!EXISTS {?o a dcterms:PeriodOfTime}).
}


# dcterms:modified should be a literal
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s dcterms:modified ?o.
FILTER(!isLiteral(?o)).
BIND(dcterms:modified AS ?p).
}

# dcterms:modified has maximum cardinality of 1 for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Dataset AS ?o)
WHERE {
?s a dcat:Dataset.
?s dcterms:modified ?modified.
} GROUP BY ?s HAVING(COUNT(?modified > 1))

# adms:version should be a literal
prefix adms:&lt;http://www.w3.org/ns/adms#>&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s adms:version ?o.
FILTER(!isLiteral(?o)).
BIND(adms:version AS ?p).
}

# adms:version has maximum cardinality of 1 for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Dataset AS ?o)
WHERE {
?s a dcat:Dataset.
?s adms:version ?version.
} GROUP BY ?s HAVING(COUNT(?version > 1))

# adms:versionNotes should be literal
prefix adms:&lt;http://www.w3.org/ns/adms#>&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s ?p ?o 
WHERE {
?s a dcat:Dataset.
?s adms:version ?o.
FILTER(!isLiteral(?o)).
BIND(adms:versionNotes AS ?p).
}

# adms:versionNotes has maximum cardinality of 1 for Dataset
PREFIX dcterms: &lt;http://purl.org/dc/terms/&gt;
PREFIX dcat:&lt;http://www.w3.org/ns/dcat#&gt;
SELECT
?s (rdf:type AS ?p) (dcat:Dataset AS ?o)
WHERE {
?s a dcat:Dataset.
?s adms:versionNotes ?versionNotes.
} GROUP BY ?s HAVING(COUNT(?versionNotes > 1))

