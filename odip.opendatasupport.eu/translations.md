# Translation Guide
1. Subscribe to the Microsoft Translator API on Azure Marketplace
Subscribe to the Microsoft Translator API on Azure Marketplace at https://datamarket.azure.com/dataset/bing/microsofttranslator. Basic subscriptions, up to 2 million characters a month, are free. Translating more than 2 million characters per month requires a payment. You may pick from any of the available subscription offers.

2. Register your application Azure DataMarket
To register your application with Azure DataMarket, visit https://datamarket.azure.com/developer/applications/ using the LiveID credentials from step 1, and click on “Register”. In the “Register your application” dialog box, you can define your own Client ID and Name. The redirect URI is not used for the Microsoft Translator API. However, the redirect URI field is a mandatory field, and you must provide a URI to obtain the access code. A description is optional. 
Take a note of the client ID and the client secret value. Please visit here to learn more about how to sign up for Microsoft Translator on Azure Marketplace.

3. Set up a job in ODIP
Create a new job in ODIP add the virtuoso extractor to the load step and extract the graph you want to translate (for example http://data.opendatasupport.eu/id/catalog/nl/).
It is recommended you specify a predicate to limit the data extracted and speed up the process. Add the extractor multiple times with different predicates if you wish to translate multiple predicates.
Add the translator to the transformation step, provide a the client id and client secret from step 2 and an optional graph with existing translations.
Next add the virtuoso loader to the loading step, specify a graph to load translation into. It is recommended to create a seperate graph for translations (eg http://data.opendatasupport.eu/id/catalog/nl/translations). You can also use this graph in the translation plugin.
