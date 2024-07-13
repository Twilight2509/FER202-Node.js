"use strict";(self.webpackChunkreact_bootstrap_website=self.webpackChunkreact_bootstrap_website||[]).push([[6787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},C="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),C=s(a),u=n,c=C["".concat(l,".").concat(u)]||C[u]||m[u]||d;return a?r.createElement(c,o(o({ref:t},p),{},{components:a})):r.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,o=new Array(d);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[C]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<d;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>w,default:()=>O,frontMatter:()=>B,metadata:()=>L,toc:()=>I});var r=a(87462),n=(a(67294),a(3905));const d="import Button from 'react-bootstrap/Button';\nimport Card from 'react-bootstrap/Card';\n\nfunction BasicExample() {\n  return (\n    <Card style={{ width: '18rem' }}>\n      <Card.Img variant=\"top\" src=\"holder.js/100px180\" />\n      <Card.Body>\n        <Card.Title>Card Title</Card.Title>\n        <Card.Text>\n          Some quick example text to build on the card title and make up the\n          bulk of the card's content.\n        </Card.Text>\n        <Button variant=\"primary\">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default BasicExample;\n",o="import Card from 'react-bootstrap/Card';\n\nfunction BgColorExample() {\n  return (\n    <>\n      {[\n        'Primary',\n        'Secondary',\n        'Success',\n        'Danger',\n        'Warning',\n        'Info',\n        'Light',\n        'Dark',\n      ].map((variant) => (\n        <Card\n          bg={variant.toLowerCase()}\n          key={variant}\n          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}\n          style={{ width: '18rem' }}\n          className=\"mb-2\"\n        >\n          <Card.Header>Header</Card.Header>\n          <Card.Body>\n            <Card.Title>{variant} Card Title </Card.Title>\n            <Card.Text>\n              Some quick example text to build on the card title and make up the\n              bulk of the card's content.\n            </Card.Text>\n          </Card.Body>\n        </Card>\n      ))}\n    </>\n  );\n}\n\nexport default BgColorExample;\n",i="import Card from 'react-bootstrap/Card';\n\nfunction BodyOnlyExample() {\n  return (\n    <Card>\n      <Card.Body>This is some text within a card body.</Card.Body>\n    </Card>\n  );\n}\n\nexport default BodyOnlyExample;\n",l="import Card from 'react-bootstrap/Card';\n\nfunction BodyShorthandExample() {\n  return <Card body>This is some text within a card body.</Card>;\n}\n\nexport default BodyShorthandExample;\n",s="import Card from 'react-bootstrap/Card';\n\nfunction BorderExample() {\n  return (\n    <>\n      <Card border=\"primary\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Primary Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"secondary\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Secondary Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"success\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Success Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"danger\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Danger Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"warning\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Warning Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"info\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Info Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"dark\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Dark Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n\n      <Card border=\"light\" style={{ width: '18rem' }}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>\n          <Card.Title>Light Card Title</Card.Title>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n    </>\n  );\n}\n\nexport default BorderExample;\n",p="import Card from 'react-bootstrap/Card';\nimport Col from 'react-bootstrap/Col';\nimport Row from 'react-bootstrap/Row';\n\nfunction GridExample() {\n  return (\n    <Row xs={1} md={2} className=\"g-4\">\n      {Array.from({ length: 4 }).map((_, idx) => (\n        <Col key={idx}>\n          <Card>\n            <Card.Img variant=\"top\" src=\"holder.js/100px160\" />\n            <Card.Body>\n              <Card.Title>Card title</Card.Title>\n              <Card.Text>\n                This is a longer card with supporting text below as a natural\n                lead-in to additional content. This content is a little bit\n                longer.\n              </Card.Text>\n            </Card.Body>\n          </Card>\n        </Col>\n      ))}\n    </Row>\n  );\n}\n\nexport default GridExample;\n",C='import Card from \'react-bootstrap/Card\';\nimport CardGroup from \'react-bootstrap/CardGroup\';\n\nfunction GroupExample() {\n  return (\n    <CardGroup>\n      <Card>\n        <Card.Img variant="top" src="holder.js/100px160" />\n        <Card.Body>\n          <Card.Title>Card title</Card.Title>\n          <Card.Text>\n            This is a wider card with supporting text below as a natural lead-in\n            to additional content. This content is a little bit longer.\n          </Card.Text>\n        </Card.Body>\n        <Card.Footer>\n          <small className="text-muted">Last updated 3 mins ago</small>\n        </Card.Footer>\n      </Card>\n      <Card>\n        <Card.Img variant="top" src="holder.js/100px160" />\n        <Card.Body>\n          <Card.Title>Card title</Card.Title>\n          <Card.Text>\n            This card has supporting text below as a natural lead-in to\n            additional content.{\' \'}\n          </Card.Text>\n        </Card.Body>\n        <Card.Footer>\n          <small className="text-muted">Last updated 3 mins ago</small>\n        </Card.Footer>\n      </Card>\n      <Card>\n        <Card.Img variant="top" src="holder.js/100px160" />\n        <Card.Body>\n          <Card.Title>Card title</Card.Title>\n          <Card.Text>\n            This is a wider card with supporting text below as a natural lead-in\n            to additional content. This card has even longer content than the\n            first to show that equal height action.\n          </Card.Text>\n        </Card.Body>\n        <Card.Footer>\n          <small className="text-muted">Last updated 3 mins ago</small>\n        </Card.Footer>\n      </Card>\n    </CardGroup>\n  );\n}\n\nexport default GroupExample;\n',m='import Button from \'react-bootstrap/Button\';\nimport Card from \'react-bootstrap/Card\';\n\nfunction HeaderAndFooterExample() {\n  return (\n    <Card className="text-center">\n      <Card.Header>Featured</Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant="primary">Go somewhere</Button>\n      </Card.Body>\n      <Card.Footer className="text-muted">2 days ago</Card.Footer>\n    </Card>\n  );\n}\n\nexport default HeaderAndFooterExample;\n',u='import Card from \'react-bootstrap/Card\';\n\nfunction ImageAndTextExample() {\n  return (\n    <>\n      <Card>\n        <Card.Img variant="top" src="holder.js/100px180" />\n        <Card.Body>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card\'s content.\n          </Card.Text>\n        </Card.Body>\n      </Card>\n      <br />\n      <Card>\n        <Card.Body>\n          <Card.Text>\n            Some quick example text to build on the card title and make up the\n            bulk of the card\'s content.\n          </Card.Text>\n        </Card.Body>\n        <Card.Img variant="bottom" src="holder.js/100px180" />\n      </Card>\n    </>\n  );\n}\n\nexport default ImageAndTextExample;\n',c='import Card from \'react-bootstrap/Card\';\n\nfunction ImgOverlayExample() {\n  return (\n    <Card className="bg-dark text-white">\n      <Card.Img src="holder.js/100px270" alt="Card image" />\n      <Card.ImgOverlay>\n        <Card.Title>Card title</Card.Title>\n        <Card.Text>\n          This is a wider card with supporting text below as a natural lead-in\n          to additional content. This content is a little bit longer.\n        </Card.Text>\n        <Card.Text>Last updated 3 mins ago</Card.Text>\n      </Card.ImgOverlay>\n    </Card>\n  );\n}\n\nexport default ImgOverlayExample;\n',x='import Card from \'react-bootstrap/Card\';\nimport ListGroup from \'react-bootstrap/ListGroup\';\n\nfunction KitchenSinkExample() {\n  return (\n    <Card style={{ width: \'18rem\' }}>\n      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />\n      <Card.Body>\n        <Card.Title>Card Title</Card.Title>\n        <Card.Text>\n          Some quick example text to build on the card title and make up the\n          bulk of the card\'s content.\n        </Card.Text>\n      </Card.Body>\n      <ListGroup className="list-group-flush">\n        <ListGroup.Item>Cras justo odio</ListGroup.Item>\n        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n      </ListGroup>\n      <Card.Body>\n        <Card.Link href="#">Card Link</Card.Link>\n        <Card.Link href="#">Another Link</Card.Link>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default KitchenSinkExample;\n',k="import Card from 'react-bootstrap/Card';\nimport ListGroup from 'react-bootstrap/ListGroup';\n\nfunction ListGroupExample() {\n  return (\n    <Card style={{ width: '18rem' }}>\n      <ListGroup variant=\"flush\">\n        <ListGroup.Item>Cras justo odio</ListGroup.Item>\n        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n      </ListGroup>\n    </Card>\n  );\n}\n\nexport default ListGroupExample;\n",h="import Card from 'react-bootstrap/Card';\nimport ListGroup from 'react-bootstrap/ListGroup';\n\nfunction ListGroupWithHeaderExample() {\n  return (\n    <Card style={{ width: '18rem' }}>\n      <Card.Header>Featured</Card.Header>\n      <ListGroup variant=\"flush\">\n        <ListGroup.Item>Cras justo odio</ListGroup.Item>\n        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>\n        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>\n      </ListGroup>\n    </Card>\n  );\n}\n\nexport default ListGroupWithHeaderExample;\n",y='import Button from \'react-bootstrap/Button\';\nimport Card from \'react-bootstrap/Card\';\nimport Nav from \'react-bootstrap/Nav\';\n\nfunction NavPillsExample() {\n  return (\n    <Card>\n      <Card.Header>\n        <Nav variant="pills" defaultActiveKey="#first">\n          <Nav.Item>\n            <Nav.Link href="#first">Active</Nav.Link>\n          </Nav.Item>\n          <Nav.Item>\n            <Nav.Link href="#link">Link</Nav.Link>\n          </Nav.Item>\n          <Nav.Item>\n            <Nav.Link href="#disabled" disabled>\n              Disabled\n            </Nav.Link>\n          </Nav.Item>\n        </Nav>\n      </Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant="primary">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default NavPillsExample;\n',b='import Button from \'react-bootstrap/Button\';\nimport Card from \'react-bootstrap/Card\';\nimport Nav from \'react-bootstrap/Nav\';\n\nfunction NavTabsExample() {\n  return (\n    <Card>\n      <Card.Header>\n        <Nav variant="tabs" defaultActiveKey="#first">\n          <Nav.Item>\n            <Nav.Link href="#first">Active</Nav.Link>\n          </Nav.Item>\n          <Nav.Item>\n            <Nav.Link href="#link">Link</Nav.Link>\n          </Nav.Item>\n          <Nav.Item>\n            <Nav.Link href="#disabled" disabled>\n              Disabled\n            </Nav.Link>\n          </Nav.Item>\n        </Nav>\n      </Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant="primary">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default NavTabsExample;\n',v='import Card from \'react-bootstrap/Card\';\n\nfunction TextExample() {\n  return (\n    <Card style={{ width: \'18rem\' }}>\n      <Card.Body>\n        <Card.Title>Card Title</Card.Title>\n        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>\n        <Card.Text>\n          Some quick example text to build on the card title and make up the\n          bulk of the card\'s content.\n        </Card.Text>\n        <Card.Link href="#">Card Link</Card.Link>\n        <Card.Link href="#">Another Link</Card.Link>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default TextExample;\n',T="import Button from 'react-bootstrap/Button';\nimport Card from 'react-bootstrap/Card';\n\nfunction WithHeaderExample() {\n  return (\n    <Card>\n      <Card.Header>Featured</Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant=\"primary\">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default WithHeaderExample;\n",g="import Card from 'react-bootstrap/Card';\n\nfunction WithHeaderAndQuoteExample() {\n  return (\n    <Card>\n      <Card.Header>Quote</Card.Header>\n      <Card.Body>\n        <blockquote className=\"blockquote mb-0\">\n          <p>\n            {' '}\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer\n            posuere erat a ante.{' '}\n          </p>\n          <footer className=\"blockquote-footer\">\n            Someone famous in <cite title=\"Source Title\">Source Title</cite>\n          </footer>\n        </blockquote>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default WithHeaderAndQuoteExample;\n",f="import Button from 'react-bootstrap/Button';\nimport Card from 'react-bootstrap/Card';\n\nfunction WithHeaderStyledExample() {\n  return (\n    <Card>\n      <Card.Header as=\"h5\">Featured</Card.Header>\n      <Card.Body>\n        <Card.Title>Special title treatment</Card.Title>\n        <Card.Text>\n          With supporting text below as a natural lead-in to additional content.\n        </Card.Text>\n        <Button variant=\"primary\">Go somewhere</Button>\n      </Card.Body>\n    </Card>\n  );\n}\n\nexport default WithHeaderStyledExample;\n",B={title:"Cards",description:"Bootstrap\u2019s cards provide a flexible and extensible content container with multiple variants and options."},w=void 0,L={unversionedId:"components/cards",id:"components/cards",title:"Cards",description:"Bootstrap\u2019s cards provide a flexible and extensible content container with multiple variants and options.",source:"@site/docs/components/cards.mdx",sourceDirName:"components",slug:"/components/cards",permalink:"/docs/components/cards",draft:!1,tags:[],version:"current",frontMatter:{title:"Cards",description:"Bootstrap\u2019s cards provide a flexible and extensible content container with multiple variants and options."},sidebar:"sidebar",previous:{title:"Buttons",permalink:"/docs/components/buttons"},next:{title:"Carousels",permalink:"/docs/components/carousel"}},N={},I=[{value:"Basic Example",id:"basic-example",level:2},{value:"Content types",id:"content-types",level:2},{value:"Body",id:"body",level:3},{value:"Title, text, and links",id:"title-text-and-links",level:3},{value:"List Groups",id:"list-groups",level:3},{value:"Kitchen Sink",id:"kitchen-sink",level:3},{value:"Header and Footer",id:"header-and-footer",level:3},{value:"Images",id:"images",level:2},{value:"Image caps",id:"image-caps",level:3},{value:"Image Overlays",id:"image-overlays",level:3},{value:"Navigation",id:"navigation",level:2},{value:"Card Styles",id:"card-styles",level:2},{value:"Background Color",id:"background-color",level:3},{value:"Border Color",id:"border-color",level:3},{value:"Card layout",id:"card-layout",level:2},{value:"Card Groups",id:"card-groups",level:3},{value:"Grid cards",id:"grid-cards",level:3},{value:"API",id:"api",level:2},{value:"Card",id:"card",level:3},{value:"CardBody",id:"cardbody",level:3},{value:"CardFooter",id:"cardfooter",level:3},{value:"CardHeader",id:"cardheader",level:3},{value:"CardImg",id:"cardimg",level:3},{value:"CardImgOverlay",id:"cardimgoverlay",level:3},{value:"CardLink",id:"cardlink",level:3},{value:"CardSubtitle",id:"cardsubtitle",level:3},{value:"CardText",id:"cardtext",level:3},{value:"CardTitle",id:"cardtitle",level:3},{value:"CardGroup",id:"cardgroup",level:3}],H=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},G=H("CodeBlock"),E=H("PropsTable"),S={toc:I},j="wrapper";function O(e){let{components:t,...a}=e;return(0,n.kt)(j,(0,r.Z)({},S,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"basic-example"},"Basic Example"),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},d),(0,n.kt)("h2",{id:"content-types"},"Content types"),(0,n.kt)("h3",{id:"body"},"Body"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Body>")," to pad content inside a ",(0,n.kt)("inlineCode",{parentName:"p"},"<Card>"),"."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},i),(0,n.kt)("p",null,"Alternatively, you can use this shorthand version for Cards with body\nonly, and no other children"),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},l),(0,n.kt)("h3",{id:"title-text-and-links"},"Title, text, and links"),(0,n.kt)("p",null,"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Title>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Subtitle>"),", and\n",(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Text>")," inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Body>")," will line them up nicely.\n",(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Link>"),"s are used to line up links next to each other."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Text>")," outputs ",(0,n.kt)("inlineCode",{parentName:"p"},"<p>")," tags around the content, so you can\nuse multiple ",(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Text>"),"s to create separate paragraphs."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},v),(0,n.kt)("h3",{id:"list-groups"},"List Groups"),(0,n.kt)("p",null,"Create lists of content in a card with a flush list group."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},k),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},h),(0,n.kt)("h3",{id:"kitchen-sink"},"Kitchen Sink"),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},x),(0,n.kt)("h3",{id:"header-and-footer"},"Header and Footer"),(0,n.kt)("p",null,"You may add a header by adding a ",(0,n.kt)("inlineCode",{parentName:"p"},"<Card.Header>")," component."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},T),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"<CardHeader>")," can be styled by passing a heading element\nthrough the ",(0,n.kt)("inlineCode",{parentName:"p"},"<as>")," prop"),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},f),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},g),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},m),(0,n.kt)("h2",{id:"images"},"Images"),(0,n.kt)("p",null,"Cards include a few options for working with images. Choose from\nappending \u201cimage caps\u201d at either end of a card, overlaying images with\ncard content, or simply embedding the image in a card."),(0,n.kt)("h3",{id:"image-caps"},"Image caps"),(0,n.kt)("p",null,"Similar to headers and footers, cards can include top and bottom \u201cimage\ncaps\u201d\u2014images at the top or bottom of a card."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},u),(0,n.kt)("h3",{id:"image-overlays"},"Image Overlays"),(0,n.kt)("p",null,"Turn an image into a card background and overlay your card\u2019s text.\nDepending on the image, you may or may not need additional styles or\nutilities."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},c),(0,n.kt)("h2",{id:"navigation"},"Navigation"),(0,n.kt)("p",null,"Add some navigation to a card\u2019s header (or block) with React Bootstrap\u2019s\n",(0,n.kt)("a",{parentName:"p",href:"navs"},"Nav")," components."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},b),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},y),(0,n.kt)("h2",{id:"card-styles"},"Card Styles"),(0,n.kt)("h3",{id:"background-color"},"Background Color"),(0,n.kt)("p",null,"You can change a card's appearance by changing their ",(0,n.kt)("inlineCode",{parentName:"p"},"<bg>"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"<text>")," props."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},o),(0,n.kt)("h3",{id:"border-color"},"Border Color"),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},s),(0,n.kt)("h2",{id:"card-layout"},"Card layout"),(0,n.kt)("h3",{id:"card-groups"},"Card Groups"),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},C),(0,n.kt)("h3",{id:"grid-cards"},"Grid cards"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"Row"),"'s ",(0,n.kt)("a",{parentName:"p",href:"../layout/grid#setting-column-widths-in-row"},"grid column")," props to control how many cards to show per row."),(0,n.kt)(G,{language:"jsx",live:!0,mdxType:"CodeBlock"},p),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"card"},"Card"),(0,n.kt)(E,{name:"Card",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardbody"},"CardBody"),(0,n.kt)(E,{name:"CardBody",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardfooter"},"CardFooter"),(0,n.kt)(E,{name:"CardFooter",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardheader"},"CardHeader"),(0,n.kt)(E,{name:"CardHeader",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardimg"},"CardImg"),(0,n.kt)(E,{name:"CardImg",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardimgoverlay"},"CardImgOverlay"),(0,n.kt)(E,{name:"CardImgOverlay",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardlink"},"CardLink"),(0,n.kt)(E,{name:"CardLink",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardsubtitle"},"CardSubtitle"),(0,n.kt)(E,{name:"CardSubtitle",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardtext"},"CardText"),(0,n.kt)(E,{name:"CardText",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardtitle"},"CardTitle"),(0,n.kt)(E,{name:"CardTitle",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"cardgroup"},"CardGroup"),(0,n.kt)(E,{name:"CardGroup",mdxType:"PropsTable"}))}O.isMDXComponent=!0}}]);