"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[3780],{3905:(e,n,a)=>{a.d(n,{Zo:()=>f,kt:()=>m});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),i=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},f=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=i(a),v=o,m=p["".concat(c,".").concat(v)]||p[v]||d[v]||s;return a?t.createElement(m,r(r({ref:n},f),{},{components:a})):t.createElement(m,r({ref:n},f))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=v;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var i=2;i<s;i++)r[i]=a[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}v.displayName="MDXCreateElement"},66989:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>v,contentTitle:()=>p,default:()=>y,frontMatter:()=>f,metadata:()=>d,toc:()=>m});var t=a(87462),o=(a(67294),a(3905));const s="import { useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Offcanvas from 'react-bootstrap/Offcanvas';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant=\"primary\" onClick={handleShow}>\n        Launch\n      </Button>\n\n      <Offcanvas show={show} onHide={handleClose}>\n        <Offcanvas.Header closeButton>\n          <Offcanvas.Title>Offcanvas</Offcanvas.Title>\n        </Offcanvas.Header>\n        <Offcanvas.Body>\n          Some text as placeholder. In real life you can have the elements you\n          have chosen. Like, text, images, lists, etc.\n        </Offcanvas.Body>\n      </Offcanvas>\n    </>\n  );\n}\n\nexport default Example;\n",r="import { useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Offcanvas from 'react-bootstrap/Offcanvas';\n\nconst options = [\n  {\n    name: 'Enable backdrop (default)',\n    scroll: false,\n    backdrop: true,\n  },\n  {\n    name: 'Disable backdrop',\n    scroll: false,\n    backdrop: false,\n  },\n  {\n    name: 'Enable body scrolling',\n    scroll: true,\n    backdrop: false,\n  },\n  {\n    name: 'Enable both scrolling & backdrop',\n    scroll: true,\n    backdrop: true,\n  },\n];\n\nfunction OffCanvasExample({ name, ...props }) {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const toggleShow = () => setShow((s) => !s);\n\n  return (\n    <>\n      <Button variant=\"primary\" onClick={toggleShow} className=\"me-2\">\n        {name}\n      </Button>\n      <Offcanvas show={show} onHide={handleClose} {...props}>\n        <Offcanvas.Header closeButton>\n          <Offcanvas.Title>Offcanvas</Offcanvas.Title>\n        </Offcanvas.Header>\n        <Offcanvas.Body>\n          Some text as placeholder. In real life you can have the elements you\n          have chosen. Like, text, images, lists, etc.\n        </Offcanvas.Body>\n      </Offcanvas>\n    </>\n  );\n}\n\nfunction Example() {\n  return (\n    <>\n      {options.map((props, idx) => (\n        <OffCanvasExample key={idx} {...props} />\n      ))}\n    </>\n  );\n}\n\nrender(<Example />);\n",l="import { useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Offcanvas from 'react-bootstrap/Offcanvas';\n\nfunction Example() {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant=\"primary\" onClick={handleShow}>\n        Toggle static offcanvas\n      </Button>\n\n      <Offcanvas show={show} onHide={handleClose} backdrop=\"static\">\n        <Offcanvas.Header closeButton>\n          <Offcanvas.Title>Offcanvas</Offcanvas.Title>\n        </Offcanvas.Header>\n        <Offcanvas.Body>\n          I will not close if you click outside of me.\n        </Offcanvas.Body>\n      </Offcanvas>\n    </>\n  );\n}\n\nexport default Example;\n",c='import { useState } from \'react\';\nimport Alert from \'react-bootstrap/Alert\';\nimport Button from \'react-bootstrap/Button\';\nimport Offcanvas from \'react-bootstrap/Offcanvas\';\n\nfunction ResponsiveExample() {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant="primary" className="d-lg-none" onClick={handleShow}>\n        Launch\n      </Button>\n\n      <Alert variant="info" className="d-none d-lg-block">\n        Resize your browser to show the responsive offcanvas toggle.\n      </Alert>\n\n      <Offcanvas show={show} onHide={handleClose} responsive="lg">\n        <Offcanvas.Header closeButton>\n          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>\n        </Offcanvas.Header>\n        <Offcanvas.Body>\n          <p className="mb-0">\n            This is content within an <code>.offcanvas-lg</code>.\n          </p>\n        </Offcanvas.Body>\n      </Offcanvas>\n    </>\n  );\n}\n\nexport default ResponsiveExample;\n',i="import { useState } from 'react';\nimport Button from 'react-bootstrap/Button';\nimport Offcanvas from 'react-bootstrap/Offcanvas';\n\nfunction OffCanvasExample({ name, ...props }) {\n  const [show, setShow] = useState(false);\n\n  const handleClose = () => setShow(false);\n  const handleShow = () => setShow(true);\n\n  return (\n    <>\n      <Button variant=\"primary\" onClick={handleShow} className=\"me-2\">\n        {name}\n      </Button>\n      <Offcanvas show={show} onHide={handleClose} {...props}>\n        <Offcanvas.Header closeButton>\n          <Offcanvas.Title>Offcanvas</Offcanvas.Title>\n        </Offcanvas.Header>\n        <Offcanvas.Body>\n          Some text as placeholder. In real life you can have the elements you\n          have chosen. Like, text, images, lists, etc.\n        </Offcanvas.Body>\n      </Offcanvas>\n    </>\n  );\n}\n\nfunction Example() {\n  return (\n    <>\n      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (\n        <OffCanvasExample key={idx} placement={placement} name={placement} />\n      ))}\n    </>\n  );\n}\n\nrender(<Example />);\n",f={title:"Offcanvas",description:"Build hidden sidebars into your project for navigation, shopping carts, and more."},p=void 0,d={unversionedId:"components/offcanvas",id:"components/offcanvas",title:"Offcanvas",description:"Build hidden sidebars into your project for navigation, shopping carts, and more.",source:"@site/docs/components/offcanvas.mdx",sourceDirName:"components",slug:"/components/offcanvas",permalink:"/docs/components/offcanvas",draft:!1,tags:[],version:"current",frontMatter:{title:"Offcanvas",description:"Build hidden sidebars into your project for navigation, shopping carts, and more."},sidebar:"sidebar",previous:{title:"Navs and tabs",permalink:"/docs/components/navs"},next:{title:"Overlay",permalink:"/docs/components/overlays"}},v={},m=[{value:"Examples",id:"examples",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Responsive",id:"responsive",level:3},{value:"Placement",id:"placement",level:3},{value:"Backdrop",id:"backdrop",level:3},{value:"Static backdrop",id:"static-backdrop",level:3},{value:"API",id:"api",level:2},{value:"Offcanvas",id:"offcanvas",level:3},{value:"OffcanvasHeader",id:"offcanvasheader",level:3},{value:"OffcanvasTitle",id:"offcanvastitle",level:3},{value:"OffcanvasBody",id:"offcanvasbody",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},h=u("CodeBlock"),O=u("PropsTable"),b={toc:m},k="wrapper";function y(e){let{components:n,...a}=e;return(0,o.kt)(k,(0,t.Z)({},b,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Offcanvas includes support for a header with a close button and an optional body class\nfor some initial padding. We suggest that you include offcanvas headers with dismiss\nactions whenever possible, or provide an explicit dismiss action."),(0,o.kt)("h3",{id:"basic-example"},"Basic Example"),(0,o.kt)(h,{language:"jsx",live:!0,mdxType:"CodeBlock"},s),(0,o.kt)("h3",{id:"responsive"},"Responsive"),(0,o.kt)("p",null,"Responsive offcanvas classes hide content outside the viewport from a specified breakpoint\nand down. Above that breakpoint, the contents within will behave as usual."),(0,o.kt)(h,{language:"jsx",live:!0,mdxType:"CodeBlock"},c),(0,o.kt)("h3",{id:"placement"},"Placement"),(0,o.kt)("p",null,"Offcanvas supports a few different placements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"start")," places offcanvas on the left of the viewport"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"end")," places offcanvas on the right of the viewport"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"top")," places offcanvas on the top of the viewport"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bottom")," places offcanvas on the bottom of the viewport")),(0,o.kt)(h,{language:"jsx",live:!0,noInline:!0,mdxType:"CodeBlock"},i),(0,o.kt)("h3",{id:"backdrop"},"Backdrop"),(0,o.kt)("p",null,"Scrolling the ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," element is disabled when an offcanvas and its backdrop are\nvisible. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"scroll")," prop to toggle ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," scrolling and the ",(0,o.kt)("inlineCode",{parentName:"p"},"backdrop")," prop\nto toggle the backdrop."),(0,o.kt)(h,{language:"jsx",live:!0,noInline:!0,mdxType:"CodeBlock"},r),(0,o.kt)("h3",{id:"static-backdrop"},"Static backdrop"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"backdrop")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"static"),", the offcanvas will not close when clicking outside of it."),(0,o.kt)(h,{language:"jsx",live:!0,mdxType:"CodeBlock"},l),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"offcanvas"},"Offcanvas"),(0,o.kt)(O,{name:"Offcanvas",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"offcanvasheader"},"OffcanvasHeader"),(0,o.kt)(O,{name:"OffcanvasHeader",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"offcanvastitle"},"OffcanvasTitle"),(0,o.kt)(O,{name:"OffcanvasTitle",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"offcanvasbody"},"OffcanvasBody"),(0,o.kt)(O,{name:"OffcanvasBody",mdxType:"PropsTable"}))}y.isMDXComponent=!0}}]);