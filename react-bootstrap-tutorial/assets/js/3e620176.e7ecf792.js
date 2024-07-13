"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[638],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>b});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(b,s(s({ref:e},p),{},{components:n})):o.createElement(b,s({ref:e},p))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74369:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),r=n(35578);const s={title:"Why React-Bootstrap?",sidebar_position:2},i=void 0,l={unversionedId:"getting-started/why-react-bootstrap",id:"getting-started/why-react-bootstrap",title:"Why React-Bootstrap?",description:"React-Bootstrap is a complete re-implementation of the",source:"@site/docs/getting-started/why-react-bootstrap.mdx",sourceDirName:"getting-started",slug:"/getting-started/why-react-bootstrap",permalink:"/docs/getting-started/why-react-bootstrap",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Why React-Bootstrap?",sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/getting-started/introduction"},next:{title:"Theming",permalink:"/docs/getting-started/theming"}},c={},p=[{value:"A Simple React Component",id:"a-simple-react-component",level:2},{value:"Bootstrap",id:"bootstrap",level:3},{value:"React-Bootstrap",id:"react-bootstrap",level:3},{value:"Bootstrap with state",id:"bootstrap-with-state",level:2},{value:"React-bootstrap",id:"react-bootstrap-1",level:3},{value:"Bootstrap",id:"bootstrap-1",level:3}],u=(d="CodeBlock",function(t){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)});var d;const m={toc:p},b="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(b,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React-Bootstrap is a complete re-implementation of the\nBootstrap components using React. It has\xa0",(0,a.kt)("strong",{parentName:"p"},"no dependency\non either\xa0",(0,a.kt)("inlineCode",{parentName:"strong"},"bootstrap.js"),"\xa0or jQuery.")," If you have React\nsetup and React-Bootstrap installed, you have everything\nyou need."),(0,a.kt)("p",null,"Methods and events using jQuery is done imperatively\nby directly manipulating the DOM. In contrast, React\nuses updates to the state to update the virtual DOM.\nIn this way, React-Bootstrap provides a more reliable\nsolution by incorporating Bootstrap functionality into\nReact's virtual DOM. Below are a few examples of how\nReact-Bootstrap components differ from Bootstrap."),(0,a.kt)("h2",{id:"a-simple-react-component"},"A Simple React Component"),(0,a.kt)("p",null,"The CSS and details of Bootstrap components are rather\nopinionated and lengthy. React-Bootstrap simplifies\nthis by condensing the original Bootstrap into React-styled\ncomponents."),(0,a.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as React from \'react\';\n\nfunction Example() {\n  return (\n    <div class="alert alert-danger alert-dismissible fade show" role="alert">\n      <strong>Oh snap! You got an error!</strong>\n      <p>Change this and that and try again.</p>\n      <button\n        type="button"\n        class="close"\n        data-dismiss="alert"\n        aria-label="Close"\n      >\n        <span aria-hidden="true">&times;</span>\n      </button>\n    </div>\n  );\n}\n')),(0,a.kt)("h3",{id:"react-bootstrap"},"React-Bootstrap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport Alert from 'react-bootstrap/Alert';\n\nfunction Example() {\n  return (\n    <Alert dismissible variant=\"danger\">\n      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>\n      <p>Change this and that and try again.</p>\n    </Alert>\n  );\n}\n")),(0,a.kt)("h2",{id:"bootstrap-with-state"},"Bootstrap with state"),(0,a.kt)("p",null,"Since React-Bootstrap is built with React Javascript, state\ncan be passed within React-Bootstrap components as a prop.\nIt also makes it easier to manage the state as updates are\nmade using React\u2019s state instead of directly manipulating\nthe state of the DOM. This also gives a lot of flexibility\nwhen creating more complex components."),(0,a.kt)("h3",{id:"react-bootstrap-1"},"React-bootstrap"),(0,a.kt)(u,{language:"jsx",live:!0,mdxType:"CodeBlock"},r.Z),(0,a.kt)("h3",{id:"bootstrap-1"},"Bootstrap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="alert alert-success alert-dismissible fade show firstCollapsible" role="alert">\n  <strong>How\'s it going?!</strong>\n  <p>\n    Duis mollis, est non commodo luctus, nisi erat porttitor ligula,\n    eget lacinia odio sem nec elit. Cras mattis consectetur purus sit\n    amet fermentum.\n  </p>\n  <hr/>\n  <div class="d-flex justify-content-end">\n    <button type="button" class="btn btn-outline-success">Close me ya\'ll!</button>\n  </div>\n</div>\n<div class="d-flex justify-content-start alert fade show">\n    <button type="button" class="btn btn-primary d-none secondCollapsible">Show Alert</button>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$('.btn-outline-success').on('click', function(e) {\n    $('.firstCollapsible').addClass('d-none');\n    $('.secondCollapsible').removeClass('d-none');\n})\n\n$('.btn-primary').on('click', function(e) {\n    $('.firstCollapsible').removeClass('d-none');\n    $('.secondCollapsible').addClass('d-none');\n})\n")))}f.isMDXComponent=!0},35578:(t,e,n)=>{n.d(e,{Z:()=>o});const o="import { useState } from 'react';\nimport Alert from 'react-bootstrap/Alert';\nimport Button from 'react-bootstrap/Button';\n\nfunction AlertDismissible() {\n  const [show, setShow] = useState(true);\n\n  return (\n    <>\n      <Alert show={show} variant=\"success\">\n        <Alert.Heading>My Alert</Alert.Heading>\n        <p>\n          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget\n          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet\n          fermentum.\n        </p>\n        <hr />\n        <div className=\"d-flex justify-content-end\">\n          <Button onClick={() => setShow(false)} variant=\"outline-success\">\n            Close me\n          </Button>\n        </div>\n      </Alert>\n\n      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}\n    </>\n  );\n}\n\nexport default AlertDismissible;\n"}}]);