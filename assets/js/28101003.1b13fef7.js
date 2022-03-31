"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7385],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,b=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8426:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],l={sidebar_position:27,title:"DataHubRetention",sidebar_label:"DataHubRetention",slug:"/generated/metamodel/entities/datahubretention",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md"},d="DataHubRetention",s={unversionedId:"docs/generated/metamodel/entities/dataHubRetention",id:"docs/generated/metamodel/entities/dataHubRetention",isDocsHomePage:!1,title:"DataHubRetention",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubRetention.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubretention",permalink:"/docs/generated/metamodel/entities/datahubretention",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27,title:"DataHubRetention",sidebar_label:"DataHubRetention",slug:"/generated/metamodel/entities/datahubretention",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md"},sidebar:"overviewSidebar",previous:{title:"DataHubExecutionRequest",permalink:"/docs/generated/metamodel/entities/datahubexecutionrequest"},next:{title:"DataPlatformInstance",permalink:"/docs/generated/metamodel/entities/dataplatforminstance"}},c=[{value:"Aspects",id:"aspects",children:[{value:"dataHubRetentionKey",id:"datahubretentionkey",children:[],level:3},{value:"dataHubRetentionConfig",id:"datahubretentionconfig",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahubretention"},"DataHubRetention"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"datahubretentionkey"},"dataHubRetentionKey"),(0,o.kt)("p",null,"Key for a DataHub Retention"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubRetentionKey"\n  },\n  "name": "DataHubRetentionKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "type": "string",\n      "name": "entityName",\n      "doc": "Entity name to apply retention to. * (or empty) for applying defaults."\n    },\n    {\n      "type": "string",\n      "name": "aspectName",\n      "doc": "Aspect name to apply retention to. * (or empty) for applying defaults."\n    }\n  ],\n  "doc": "Key for a DataHub Retention"\n}\n'))),(0,o.kt)("h3",{id:"datahubretentionconfig"},"dataHubRetentionConfig"),(0,o.kt)("p",null,"None"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubRetentionConfig"\n  },\n  "name": "DataHubRetentionConfig",\n  "namespace": "com.linkedin.retention",\n  "fields": [\n    {\n      "type": {\n        "type": "record",\n        "name": "Retention",\n        "namespace": "com.linkedin.retention",\n        "fields": [\n          {\n            "type": [\n              "null",\n              {\n                "type": "record",\n                "name": "VersionBasedRetention",\n                "namespace": "com.linkedin.retention",\n                "fields": [\n                  {\n                    "type": "int",\n                    "name": "maxVersions"\n                  }\n                ],\n                "doc": "Keep max N latest records"\n              }\n            ],\n            "name": "version",\n            "default": null\n          },\n          {\n            "type": [\n              "null",\n              {\n                "type": "record",\n                "name": "TimeBasedRetention",\n                "namespace": "com.linkedin.retention",\n                "fields": [\n                  {\n                    "type": "int",\n                    "name": "maxAgeInSeconds"\n                  }\n                ],\n                "doc": "Keep records that are less than X seconds old"\n              }\n            ],\n            "name": "time",\n            "default": null\n          }\n        ],\n        "doc": "Base class that encapsulates different retention policies.\\nOnly one of the fields should be set"\n      },\n      "name": "retention"\n    }\n  ]\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);