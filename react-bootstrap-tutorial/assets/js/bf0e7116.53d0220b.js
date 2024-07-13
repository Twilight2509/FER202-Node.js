"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[3133],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var v=a.createContext({}),s=function(e){var n=a.useContext(v),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(v.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},N=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,v=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=s(t),N=i,c=d["".concat(v,".").concat(N)]||d[N]||m[N]||o;return t?a.createElement(c,l(l({ref:n},p),{},{components:t})):a.createElement(c,l({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=N;var r={};for(var v in n)hasOwnProperty.call(n,v)&&(r[v]=n[v]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}N.displayName="MDXCreateElement"},48345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>f,default:()=>K,frontMatter:()=>u,metadata:()=>y,toc:()=>h});var a=t(87462),i=(t(67294),t(3905));const o='import Nav from \'react-bootstrap/Nav\';\n\nfunction AlignmentExample() {\n  return (\n    <>\n      <Nav className="justify-content-center" activeKey="/home">\n        <Nav.Item>\n          <Nav.Link href="/home">Active</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="link-1">Link</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="link-2">Link</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="disabled" disabled>\n            Disabled\n          </Nav.Link>\n        </Nav.Item>\n      </Nav>\n      <p className="text-center mt-4 mb-4">Or right-aligned</p>\n      <Nav className="justify-content-end" activeKey="/home">\n        <Nav.Item>\n          <Nav.Link href="/home">Active</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="link-1">Link</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="link-2">Link</Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="disabled" disabled>\n            Disabled\n          </Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </>\n  );\n}\n\nexport default AlignmentExample;\n',l='import Nav from \'react-bootstrap/Nav\';\n\nfunction BasicExample() {\n  return (\n    <Nav\n      activeKey="/home"\n      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}\n    >\n      <Nav.Item>\n        <Nav.Link href="/home">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-1">Link</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-2">Link</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="disabled" disabled>\n          Disabled\n        </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  );\n}\n\nexport default BasicExample;\n',r='import Nav from \'react-bootstrap/Nav\';\n\nfunction ListExample() {\n  return (\n    <Nav defaultActiveKey="/home" as="ul">\n      <Nav.Item as="li">\n        <Nav.Link href="/home">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item as="li">\n        <Nav.Link eventKey="link-1">Link</Nav.Link>\n      </Nav.Item>\n      <Nav.Item as="li">\n        <Nav.Link eventKey="link-2">Link</Nav.Link>\n      </Nav.Item>\n    </Nav>\n  );\n}\n\nexport default ListExample;\n',v='import Nav from \'react-bootstrap/Nav\';\nimport NavDropdown from \'react-bootstrap/NavDropdown\';\n\nfunction NavDropdownExample() {\n  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);\n\n  return (\n    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>\n      <Nav.Item>\n        <Nav.Link eventKey="1" href="#/home">\n          NavLink 1 content\n        </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="2" title="Item">\n          NavLink 2 content\n        </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="3" disabled>\n          NavLink 3 content\n        </Nav.Link>\n      </Nav.Item>\n      <NavDropdown title="Dropdown" id="nav-dropdown">\n        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>\n        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>\n        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>\n        <NavDropdown.Divider />\n        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>\n      </NavDropdown>\n    </Nav>\n  );\n}\n\nexport default NavDropdownExample;\n',s="import Dropdown from 'react-bootstrap/Dropdown';\nimport NavItem from 'react-bootstrap/NavItem';\nimport NavLink from 'react-bootstrap/NavLink';\n\nfunction DropdownImplExample() {\n  return (\n    <Dropdown as={NavItem}>\n      <Dropdown.Toggle as={NavLink}>Click to see more\u2026</Dropdown.Toggle>\n      <Dropdown.Menu>\n        <Dropdown.Item>Hello there!</Dropdown.Item>\n      </Dropdown.Menu>\n    </Dropdown>\n  );\n}\n\nexport default DropdownImplExample;\n",p='import Nav from \'react-bootstrap/Nav\';\n\nfunction FillExample() {\n  return (\n    <Nav fill variant="tabs" defaultActiveKey="/home">\n      <Nav.Item>\n        <Nav.Link href="/home">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-2">Link</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="disabled" disabled>\n          Disabled\n        </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  );\n}\n\nexport default FillExample;\n',d='import Nav from \'react-bootstrap/Nav\';\n\nfunction JustifiedExample() {\n  return (\n    <Nav justify variant="tabs" defaultActiveKey="/home">\n      <Nav.Item>\n        <Nav.Link href="/home">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-2">Link</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="disabled" disabled>\n          Disabled\n        </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  );\n}\n\nexport default JustifiedExample;\n',m='import Nav from \'react-bootstrap/Nav\';\n\nfunction StackedExample() {\n  return (\n    <Nav defaultActiveKey="/home" className="flex-column">\n      <Nav.Link href="/home">Active</Nav.Link>\n      <Nav.Link eventKey="link-1">Link</Nav.Link>\n      <Nav.Link eventKey="link-2">Link</Nav.Link>\n      <Nav.Link eventKey="disabled" disabled>\n        Disabled\n      </Nav.Link>\n    </Nav>\n  );\n}\n\nexport default StackedExample;\n',N='import Nav from \'react-bootstrap/Nav\';\n\nfunction TabsExample() {\n  return (\n    <Nav variant="tabs" defaultActiveKey="/home">\n      <Nav.Item>\n        <Nav.Link href="/home">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="disabled" disabled>\n          Disabled\n        </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  );\n}\n\nexport default TabsExample;\n',c='import Nav from \'react-bootstrap/Nav\';\n\nfunction PillsExample() {\n  return (\n    <Nav variant="pills" defaultActiveKey="/home">\n      <Nav.Item>\n        <Nav.Link href="/home">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="disabled" disabled>\n          Disabled\n        </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  );\n}\n\nexport default PillsExample;\n',k='import Nav from \'react-bootstrap/Nav\';\n\nfunction UnderlineExample() {\n  return (\n    <Nav variant="underline" defaultActiveKey="/home">\n      <Nav.Item>\n        <Nav.Link href="/home">Active</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="link-1">Option 2</Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="disabled" disabled>\n          Disabled\n        </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  );\n}\n\nexport default UnderlineExample;\n',u={title:"Navs and tabs",description:"Documentation and examples for how to use Bootstrap\u2019s included navigation components."},f=void 0,y={unversionedId:"components/navs",id:"components/navs",title:"Navs and tabs",description:"Documentation and examples for how to use Bootstrap\u2019s included navigation components.",source:"@site/docs/components/navs.mdx",sourceDirName:"components",slug:"/components/navs",permalink:"/docs/components/navs",draft:!1,tags:[],version:"current",frontMatter:{title:"Navs and tabs",description:"Documentation and examples for how to use Bootstrap\u2019s included navigation components."},sidebar:"sidebar",previous:{title:"Navbars",permalink:"/docs/components/navbar"},next:{title:"Offcanvas",permalink:"/docs/components/offcanvas"}},b={},h=[{value:"Base Nav",id:"base-nav",level:2},{value:"Available styles",id:"available-styles",level:2},{value:"Vertical",id:"vertical",level:3},{value:"Tabs",id:"tabs",level:3},{value:"Pills",id:"pills",level:3},{value:"Underline",id:"underline",level:3},{value:"Fill and justify",id:"fill-and-justify",level:2},{value:"Using dropdowns",id:"using-dropdowns",level:2},{value:"API",id:"api",level:2},{value:"Nav",id:"nav",level:3},{value:"NavItem",id:"navitem",level:3},{value:"NavLink",id:"navlink",level:3},{value:"NavDropdown",id:"navdropdown",level:3}],L=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},I=L("CodeBlock"),x=L("DocLink"),w=L("PropsTable"),g={toc:h},D="wrapper";function K(e){let{components:n,...t}=e;return(0,i.kt)(D,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"base-nav"},"Base Nav"),(0,i.kt)("p",null,"Navigation bits in Bootstrap all share a general ",(0,i.kt)("inlineCode",{parentName:"p"},"Nav"),"\ncomponent and styles. Swap ",(0,i.kt)("inlineCode",{parentName:"p"},"variant"),"s to switch between each\nstyle. The base ",(0,i.kt)("inlineCode",{parentName:"p"},"Nav")," component is built with flexbox and\nprovide a strong foundation for building all types of navigation\ncomponents."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The basic, variant-less, ",(0,i.kt)("inlineCode",{parentName:"p"},"Nav")," component does not include any\n",(0,i.kt)("inlineCode",{parentName:"p"},"active")," prop styling!")),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},l),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<Nav>")," markup is very flexible and styling is controlled via classes so you can\nuse whatever elements you like to build your navs. By default ",(0,i.kt)("inlineCode",{parentName:"p"},"<Nav>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<Nav.Item>")," both\nrender ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"s instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"<ul>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," elements respectively.\nThis because it's possible (and common) to leave off the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Nav.Item>"),"'s and\nrender a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Nav.Link>")," directly, which would create invalid markup by default (",(0,i.kt)("inlineCode",{parentName:"p"},"ul > a"),")."),(0,i.kt)("p",null,"When a ",(0,i.kt)("inlineCode",{parentName:"p"},"<ul>")," is appropriate you can render one via the ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," prop; be sure to\nalso set your items to ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," as well!"),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},r),(0,i.kt)("h2",{id:"available-styles"},"Available styles"),(0,i.kt)("p",null,"You can control the the direction and orientation of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Nav")," by making use of the ",(0,i.kt)(x,{path:"/utilities/flex#justify-content",mdxType:"DocLink"},"flexbox utility"),"\nclasses. By default, navs are left-aligned, but that is easily changed to center or right-aligned."),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},o),(0,i.kt)("h3",{id:"vertical"},"Vertical"),(0,i.kt)("p",null,"Create stacked navs by changing the flex item direction with the ",(0,i.kt)("inlineCode",{parentName:"p"},".flex-column")," class, or\nyour own css. You can even use the responsive versions to stack in some viewports but not\nothers (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},".flex-sm-column"),")."),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},m),(0,i.kt)("h3",{id:"tabs"},"Tabs"),(0,i.kt)("p",null,'Visually represent nav items as "tabs". This style pairs nicely with\ntabbable regions created by our ',(0,i.kt)("a",{parentName:"p",href:"tabs"},"Tab components"),"."),(0,i.kt)("p",null,"Note: creating a vertical nav (",(0,i.kt)("inlineCode",{parentName:"p"},".flex-column"),") with tabs styling is unsupported by Bootstrap's\ndefault stylesheet."),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},N),(0,i.kt)("h3",{id:"pills"},"Pills"),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},c),(0,i.kt)("h3",{id:"underline"},"Underline"),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},k),(0,i.kt)("h2",{id:"fill-and-justify"},"Fill and justify"),(0,i.kt)("p",null,"Force the contents of your nav to extend the full available width. To\nproportionately fill the space use ",(0,i.kt)("inlineCode",{parentName:"p"},"fill"),". Notice that the\nnav is the entire width but each nav item is a different size."),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},p),(0,i.kt)("p",null,"If you want each NavItem to be the same size use ",(0,i.kt)("inlineCode",{parentName:"p"},"justify"),"."),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},d),(0,i.kt)("h2",{id:"using-dropdowns"},"Using dropdowns"),(0,i.kt)("p",null,"You can mix and match the Dropdown components with the NavLink and\nNavItem components to create a Dropdown that plays well in a Nav\ncomponent"),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},s),(0,i.kt)("p",null,"The above demonstrates how flexible the component model can be. But if\nyou didn't want to roll your own versions we've included a\nstraight-forward ",(0,i.kt)("inlineCode",{parentName:"p"},"<NavDropdown>")," that works for most cases."),(0,i.kt)(I,{language:"jsx",live:!0,mdxType:"CodeBlock"},v),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"nav"},"Nav"),(0,i.kt)(w,{name:"Nav",mdxType:"PropsTable"}),(0,i.kt)("h3",{id:"navitem"},"NavItem"),(0,i.kt)(w,{name:"NavItem",mdxType:"PropsTable"}),(0,i.kt)("h3",{id:"navlink"},"NavLink"),(0,i.kt)(w,{name:"NavLink",mdxType:"PropsTable"}),(0,i.kt)("h3",{id:"navdropdown"},"NavDropdown"),(0,i.kt)(w,{name:"NavDropdown",mdxType:"PropsTable"}))}K.isMDXComponent=!0}}]);