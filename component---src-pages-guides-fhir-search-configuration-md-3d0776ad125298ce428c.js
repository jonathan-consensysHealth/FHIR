(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{xV4d:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a("k1TG"),n=a("8o2o"),i=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),{}),c={_frontmatter:o},h=s.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(h,Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"IBM FHIR Server - Search Configuration Overview"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/search.html"}),"FHIR Specification")," defines a set of searchable fields for each resource type. The IBM FHIR Server supports searching via both specification-defined search parameters and tenant-specific search parameters."),Object(i.b)("p",null,"Specifically, the IBM FHIR Server supports searching on additional fields, including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"fields that are defined in the base specification, which are not configured for search; and"),Object(i.b)("li",{parentName:"ul"},"extension elements that a tenant may add to a standard FHIR resource type")),Object(i.b)("p",null,"The IBM FHIR Server allows deployers to define search parameters on a tenant-specific basis. This allows each tenant to share an instance of the FHIR server while maintaining the ability to have their own set of search parameters. Additionally, specification-defined search parameters can be filtered out in order to avoid the cost of extracting and storing the corresponding indices."),Object(i.b)("p",null,"Tenant search parameters are defined via a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/bundle.html"}),"Bundle")," of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/searchparameter.html"}),"SearchParameter")," resources that define the additional search parameters which describe the searchable field and define the FHIRPath expression for extraction.  For example, a tenant that extends the ",Object(i.b)("inlineCode",{parentName:"p"},"Patient")," resource type with the ",Object(i.b)("inlineCode",{parentName:"p"},"favorite-color")," extension, enables search on ",Object(i.b)("inlineCode",{parentName:"p"},"favorite-color")," by defining a SearchParameter as part of this bundle."),Object(i.b)("h2",null,"1 Configuration"),Object(i.b)("p",null,"There are three layers of search parameter configuration.  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"built-in parameters from the core specification and packaged implementation guides"),Object(i.b)("li",{parentName:"ul"},"default tenant parameters"),Object(i.b)("li",{parentName:"ul"},"tenant-specific parameters")),Object(i.b)("p",null,"The built-in SearchParameters are loaded from the ",Object(i.b)("inlineCode",{parentName:"p"},"fhir-registry")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"fhir-search")," module during server startup."),Object(i.b)("p",null,"The default and tenant level configurations are put in the ",Object(i.b)("inlineCode",{parentName:"p"},"default")," and tenant-specific (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"tenant1"),") config folders respectively. These folders are populated with ",Object(i.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json"),"."),Object(i.b)("p",null,"The IBM FHIR Server configuration prefers the JSON formatted configuration documents, and implements caching via ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/FHIR/blob/master/fhir-search/src/main/java/com/ibm/fhir/search/parameters/cache/TenantSpecificSearchParameterCache.java"}),"TenantSpecificSearchParameterCache.java"),"."),Object(i.b)("p",null,"The IBM FHIR Server supports compartment searches based on the CompartmentDefinition resources found at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/FHIR/blob/master/fhir-search/src/main/resources/compartments.json"}),"fhir-search/src/main/resources/compartments.json"),". These definitions come directly from the specification and the server provides no corresponding default or tenant-level configuration."),Object(i.b)("h3",null,"1.1 Tenant-specific parameters"),Object(i.b)("p",null,"To configure tenant-specific search parameters, create a file called ",Object(i.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json"),", placing it in the ",Object(i.b)("inlineCode",{parentName:"p"},"${server.config.dir}/config/<tenant-id>")," directory. For example, the ",Object(i.b)("inlineCode",{parentName:"p"},"${server.config.dir}/config/acme/extension-search-parameters.json")," file would contain the search parameters for the ",Object(i.b)("inlineCode",{parentName:"p"},"acme")," tenant, while ",Object(i.b)("inlineCode",{parentName:"p"},"${server.config.dir}/config/qpharma/extension-search-parameters.json")," would contain search parameters used by the ",Object(i.b)("inlineCode",{parentName:"p"},"qpharma")," tenant."),Object(i.b)("p",null,"When the FHIR server processes a request associated with the ",Object(i.b)("inlineCode",{parentName:"p"},"acme")," tenant, the server is uses the built-in search parameters and the user-defined search parameters defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"acme")," tenant’s ",Object(i.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," file. Likewise, when processing a request associated with the ",Object(i.b)("inlineCode",{parentName:"p"},"qpharma")," tenant, the server uses the built-in search parameters and the user-defined search parameters defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"qpharma")," tenant’s ",Object(i.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," file."),Object(i.b)("p",null,"If a tenant-specific extension-search-parameters.json file does not exist, the server falls back to the global ",Object(i.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," file found at ",Object(i.b)("inlineCode",{parentName:"p"},"${server.config.dir}/config/default/extension-search-parameters.json"),"."),Object(i.b)("p",null,"The FHIR server caches search parameters in memory (organized first by tenant id, then by resource type and search parameter). Any updates to a tenant’s ",Object(i.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," file causes the FHIR server to re-load the tenant’s search parameters and refresh the information stored in the cache, without requiring a server re-start. This allows the deployer to deploy a new tenant’s ",Object(i.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," or update an existing file without re-starting the FHIR server and any subsequent requests processed by the FHIR server after the updates have been made use the updated search parameters. However, it is important to note that this process ",Object(i.b)("strong",{parentName:"p"},"does not")," re-index already-created resources that are stored on the FHIR Server. One technique for updating the indices for a given resource type is to ",Object(i.b)("inlineCode",{parentName:"p"},"read")," and ",Object(i.b)("inlineCode",{parentName:"p"},"update")," each resource instance with itself, triggering search parameter extraction (and creating a new version of each resource)."),Object(i.b)("p",null,"Starting in version 4.5.0, the IBM FHIR Server supports ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#2-re-index"}),"re-indexing resources")," with an updated set of search parameters. This is very similar to creating a new version of the resources, except in this case the version number doesn’t change and the data for the resource never leaves the server."),Object(i.b)("h4",null,"1.1.1 Search parameters configuration: extension-search-parameters.json"),Object(i.b)("p",null,"To configure the FHIR server with one or more custom search parameters, create a file called ",Object(i.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," and populate the contents with a Bundle of ",Object(i.b)("inlineCode",{parentName:"p"},"SearchParameter")," resources."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"fhir-search")," module requires that the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/searchparameter-definitions.html#SearchParameter.expression"}),"expression"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/searchparameter-definitions.html#SearchParameter.type"}),"type")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/searchparameter-definitions.html#SearchParameter.code"}),"code")," be set, as in the following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n   "resourceType": "Bundle",\n   "id": "searchParams",\n   "meta": {\n      "lastUpdated": "2019-07-12T22:37:54.724+11:00"\n   },\n   "type": "collection",\n   "entry": [{\n      "fullUrl": "http://ibm.com/fhir/SearchParameter/Patient-favorite-color",\n      "resource": {\n         "resourceType": "SearchParameter",\n         "id": "Patient-favorite-color",\n         "url": "http://ibm.com/fhir/SearchParameter/Patient-favorite-color",\n         "version": "4.0.0",\n         "name": "favorite-color",\n         "status": "draft",\n         "experimental": false,\n         "date": "2018-12-27T22:37:54+11:00",\n         "publisher": "IBM FHIR Server Test",\n         "contact": [{\n            "telecom": [{\n               "system": "url",\n               "value": "http://ibm.com/fhir"\n            }]\n         },\n         {\n            "telecom": [{\n               "system": "url",\n               "value": "http://ibm.com/fhir"\n            }]\n         }],\n         "description": "the patient\'s favorite color",\n         "code": "favorite-color",\n         "base": ["Patient"],\n         "type": "string",\n         "xpathUsage": "normal",\n         "xpath": "f:Patient/f:extension[@url=\'http://ibm.com/fhir/extension/Patient/favorite-color\']/f:valueString",\n         "expression": "Patient.extension.where(url=\'http://ibm.com/fhir/extension/Patient/favorite-color\').value",\n         "multipleOr": true,\n         "multipleAnd": true,\n         "modifier": []\n      }\n   }\n}\n')),Object(i.b)("p",null,"A few things to note are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This SearchParameter includes an xpath element for completeness, but the IBM FHIR Server does not use the XPath during extraction; it only uses the expression (FHIRPath)."),Object(i.b)("li",{parentName:"ul"},"The SearchParameter with a path including ",Object(i.b)("inlineCode",{parentName:"li"},"value")," use the Choice data types which are determined based on the SearchParameter type ."),Object(i.b)("li",{parentName:"ul"},"Each time a resource is created or updated, the FHIR server evaluates the FHIRPath expression applicable to the resource type and indexes the values of the matching elements, making these available via a search where the query parameter name matches the ",Object(i.b)("inlineCode",{parentName:"li"},"code")," element on the ",Object(i.b)("inlineCode",{parentName:"li"},"SearchParameter")," definition.")),Object(i.b)("p",null,"In the preceding example, extension elements (on a Patient resource) with a url of ",Object(i.b)("inlineCode",{parentName:"p"},"http://ibm.com/fhir/extension/Patient/favorite-color")," are indexed by the ",Object(i.b)("inlineCode",{parentName:"p"},"favorite-color")," search parameter. To search for Patients with a favorite color of “pink”, users could send an HTTP GET request to a URL like ",Object(i.b)("inlineCode",{parentName:"p"},"[base]/api/v1/Patient?favorite-color:exact=pink"),"."),Object(i.b)("p",null,"For more information on search parameters, see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/R4/searchparameter.html"}),"HL7 FHIR specification"),"."),Object(i.b)("h4",null,"1.1.2 Recommendations"),Object(i.b)("p",null,"When creating the SearchParameter FHIRPath expression, be sure to test both the FHIRPath expression and the search parameter."),Object(i.b)("p",null,"If a search parameter expression extracts an element with a data type that is incompatible with the declared search parameter type, the server skips the value and logs a message. For choice elements, like Extension.value, its recommended to restrict the expression to values of the desired type by using the ",Object(i.b)("inlineCode",{parentName:"p"},"as")," function. For example, to select only Decimal values from the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://example.org/demical"}),"http://example.org/demical")," extension, use an expressions like ",Object(i.b)("inlineCode",{parentName:"p"},"Basic.extension.where(url='http://example.org/decimal').value.as(Decimal)"),"."),Object(i.b)("h3",null,"1.2 Filtering"),Object(i.b)("p",null,"The FHIR server supports the filtering of built-in search parameters. The default behavior of the FHIR server is to consider all built-in search parameters when storing resources or processing search requests, but you can configure inclusion filters to restrict the FHIR server’s view to specific search parameters on a given resource type. This filtering feature does not apply to user-defined search parameters in the extension-search-parameters.json file. User-defined search parameters are always included in the FHIR server’s view regardless of the configured inclusion filters."),Object(i.b)("p",null,"Why would you want to filter built-in search parameters? The answer lies in how search parameters are used by the FHIR server. When the FHIR server processes a ",Object(i.b)("em",{parentName:"p"},"create")," or ",Object(i.b)("em",{parentName:"p"},"update")," operation, it stores the resource contents in the datastore, along with search index information that is used by the FHIR server when performing search operations. The search index information stored for a particular resource instance is driven by the search parameters defined for that resource type. Therefore if you are storing a resource whose type has a lot of built-in search parameters defined for it (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"Patient"),"), then you could potentially be storing a lot of search index information for each resource."),Object(i.b)("p",null,"For performance and scalability reasons, it might be desirable to limit the number of search parameters considered during a ",Object(i.b)("em",{parentName:"p"},"create")," or ",Object(i.b)("em",{parentName:"p"},"update")," operation for particular resource types, if those search parameters will never be used in search operations. After all, if there will be no need to use the search index information, there’s no need to store it. For example, if you know that due to the way in which a particular tenant’s applications use the FHIR REST API that those applications will never need to search Patients by birthdate, then there would be no need to store search index information for the ",Object(i.b)("inlineCode",{parentName:"p"},"birthdate")," attribute in ",Object(i.b)("inlineCode",{parentName:"p"},"Patient")," resources. Consequently, you could filter out the ",Object(i.b)("inlineCode",{parentName:"p"},"birthdate")," search parameter for the ",Object(i.b)("inlineCode",{parentName:"p"},"Patient")," resource type and not lose any needed functionality, but yet save a little bit of storage capacity in your datastore."),Object(i.b)("p",null,"The search parameter filtering feature is supported through a set of inclusion rules specified via the ",Object(i.b)("inlineCode",{parentName:"p"},"fhirServer/resources")," property group in ",Object(i.b)("inlineCode",{parentName:"p"},"fhir-server-config.json"),". The search parameter inclusion rules allow you to define a set of search parameters per resource type that should be included in the FHIR server’s view of search parameters when storing resources and performing search operations. The following snippet shows the general form for specifying inclusion rules:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'"resources": {\n    "open": false,\n    "CarePlan": {\n        "searchParameters": {}\n    },\n    "ExplanationOfBenefit": {\n        "searchParameters": {\n            "_id": "http://hl7.org/fhir/SearchParameter/Resource-id",\n            "_lastUpdated": "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated",\n            "patient": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-patient",\n            "type": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-type",\n            "identifier": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-identifier",\n            "service-date": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-service-date"\n        }\n    },\n    "Patient": {\n        "searchParameters": {}\n    },\n    "RelatedPerson": {\n        "searchParameters": {}\n    }\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"fhirServer/resources/<resourceType>/searchParameters")," property group is a JSON map where the key is the search parameter code that will be used to search on this parameter and the value is a canonical URL which resolves to a SearchParameter definition from the ",Object(i.b)("inlineCode",{parentName:"p"},"fhir-registry")," at run-time.\nOmitting this property is equivalent to supporting all search parameters in the server’s registry that apply to the given resource type.\nAn empty object, ",Object(i.b)("inlineCode",{parentName:"p"},"{}"),", can be used to indicate that no global search parameters are supported.\nIt may be desirable to re-define a single search parameter code. In this case, if you do not wish to filter any other parameters for this type, a value of ",Object(i.b)("inlineCode",{parentName:"p"},'"*": "*"')," can be used to prevent further filtering."),Object(i.b)("p",null,"Additionally, for SearchParameters defined across all resource types (i.e. SearchParameters with a base of type ",Object(i.b)("inlineCode",{parentName:"p"},"Resource"),"), the filter can be applied at this level as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'"resources": {\n    "open": false,\n    "CarePlan": {\n        "searchParameters": {}\n    },\n    "ExplanationOfBenefit": {\n        "searchParameters": {\n            "patient": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-patient",\n            "type": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-type",\n            "identifier": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-identifier",\n            "service-date": "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-service-date"\n        }\n    },\n    "Patient": {\n        "searchParameters": {}\n    },\n    "RelatedPerson": {\n        "searchParameters": {}\n    },\n    "Resource": {\n        "searchParameters": {\n            "_id": "http://hl7.org/fhir/SearchParameter/Resource-id",\n            "_lastUpdated": "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"\n        }\n    }\n}\n')),Object(i.b)("p",null,"For reference, the following is the list of codes in this category:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"code"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_id")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_lastUpdated")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_profile")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_security")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_source")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_tag")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_content")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"_query")))),Object(i.b)("p",null,"Note: ",Object(i.b)("inlineCode",{parentName:"p"},"_content")," and ",Object(i.b)("inlineCode",{parentName:"p"},"_query")," are not yet supported by the IBM FHIR Server."),Object(i.b)("p",null,"The filter ",Object(i.b)("inlineCode",{parentName:"p"},'"*": "*"')," is not necessary to include these Resource-level parameters."),Object(i.b)("h4",null,"1.2.1 Handling unexpected search parameters"),Object(i.b)("p",null,"The IBM FHIR Server supports configurable handling of unknown or unsupported search parameters as defined at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://ibm.github.io/FHIR/Conformance#http-headers"}),"https://ibm.github.io/FHIR/Conformance#http-headers"),".\nFiltered search parameters are handled exactly the same as undefined search parameters, meaning that searches which include these parameters will fail in ",Object(i.b)("inlineCode",{parentName:"p"},"strict")," mode."),Object(i.b)("h2",null,"2 Re-index"),Object(i.b)("p",null,"Reindexing is implemented as a custom operation that tells the server to read a set of resources and replace the existing search parameters with those newly extracted from the resource body."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"$reindex")," operation can be invoked via an HTTP(s) POST to ",Object(i.b)("inlineCode",{parentName:"p"},"[base]/$reindex"),". By default, the operation will select 10 resources and re-extract their search parameters values based on the current configuration of the server. The operation supports the following parameters to control the behavior:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"_tstamp")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Reindex any resource not previously reindexed before this timestamp. Format as a date YYYY-MM-DD or time YYYY-MM-DDTHH:MM:DDZ.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"_resourceCount")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The maximum number of resources to reindex in this call. If this number is too large, the processing time might exceed the transaction timeout and fail.")))),Object(i.b)("p",null,"To aid the re-indexing process, the IBM FHIR Server team has introduced some new features into the fhir-bucket resource-loading tool for driving the reindex. The fhir-bucket tool uses a thread-pool to make concurrent POST requests to the IBM FHIR Server ",Object(i.b)("inlineCode",{parentName:"p"},"$reindex")," custom operation."),Object(i.b)("p",null,"To run the reindex step, see this example (using PostgreSQL):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'JAR="/path/to/fhir-bucket-4.5.0-cli.jar"\n\njava \\\n  -Djava.util.logging.config.file=logging.properties \\\n  -jar "${JAR}" \\\n  --db-type postgresql \\\n  --fhir-properties fhir.properties \\\n  --tenant-name "YOUR-TENANT-NAME" \\\n  --max-concurrent-fhir-requests 200 \\\n  --no-scan \\\n  --reindex-tstamp YYYY-MM-DD \\\n  --reindex-resource-count 10 \\\n  --reindex-concurrent-requests 200\n')),Object(i.b)("p",null,"The value of YYYY-MM-DD is a date-stamp used to indicate the date on which the resources have been reindexed. The IBM FHIR Server tracks when a resource was last reindexed and only resources with a reindex_tstamp value less than the given YYYY-MM-DD parameter will be processed. When a resource is reindexed, its reindex_tstamp is set to the given YYYY-MM-DD value indicating it has been processed. In most cases, using the current date (for example “2020-10-27”) is the best option for this value."),Object(i.b)("p",null,"Reindexing is resource-intensive and can take several hours or even days to complete depending on the number of resources currently in the system and the capability of the hosting platform."),Object(i.b)("hr",null),Object(i.b)("p",null,"FHIR® is the registered trademark of HL7 and is used with the permission of HL7."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-fhir-search-configuration-md-3d0776ad125298ce428c.js.map