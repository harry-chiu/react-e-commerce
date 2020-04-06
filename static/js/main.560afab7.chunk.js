(this["webpackJsonpreact-e-commerce"]=this["webpackJsonpreact-e-commerce"]||[]).push([[0],{37:function(e){e.exports=JSON.parse('[{"id":1,"category":"Clothes","title":"Green Cloth","price":552},{"id":2,"category":"Clothes","title":"Blue Cloth","price":612},{"id":3,"category":"Clothes","title":"White Cloth","price":513},{"id":4,"category":"Pants","title":"Brown Pants","price":650},{"id":5,"category":"Pants","title":"Pink Pants","price":1083},{"id":6,"category":"Shoes","title":"White Shoes","price":1065},{"id":7,"category":"Decorations","title":"Silver Rings","price":975},{"id":8,"category":"Decorations","title":"Gold Rings","price":1089},{"id":9,"category":"Shoes","title":"Blue Shoes","price":691},{"id":10,"category":"Clothes","title":"Black Cloth","price":408},{"id":11,"category":"Pants","title":"Yellow Pants","price":854},{"id":12,"category":"Shoes","title":"Black Shoes","price":469}]')},79:function(e){e.exports=JSON.parse('[{"id":1,"category":"Clothes"},{"id":2,"category":"Pants"},{"id":3,"category":"Shoes"},{"id":4,"category":"Decorations"}]')},88:function(e,t,a){e.exports=a(98)},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(15),o=a(46),m=a(17),s=a(38),u=a(150),d=a(151),E=a(133),p=a(136),g=a(172),h=a(39),f={"/":"Home","/product":"Product","/checkout":"Check Out","/sign-in":"Sign In"},v=Object(E.a)((function(e){return{card:{margin:e.spacing(2,0),padding:e.spacing(1)},navLink:{color:"#737373",textDecoration:"none","&:hover":{textDecoration:"underline"}}}})),b=function(){var e=v(),t=Object(s.g)().pathname,a=t.split("/");return r.a.createElement(p.a,{variant:"outlined",className:e.card},r.a.createElement(g.a,null,"/"===t?r.a.createElement(h.a,{variant:"h5",color:"secondary"},f[t]):a.map((function(t,n){var c="/".concat(t),l=f[c]||t;return n===a.length-1?r.a.createElement(h.a,{key:n,variant:"h5",color:"secondary"},l):r.a.createElement(m.b,{key:n,to:c,className:e.navLink},r.a.createElement(h.a,{variant:"h5"},l))}))))},y=a(19),N=a(138),O=a(80),j=a(140),C=a(100),k=a(141),x=a(142),S=a(144),I=a(145),w=a(146),P=a(174),W=a(149),L=a(139),D=a(143),F=a(147),M=a(148),z=a(41),B="ADD_PRODUCT",A="REMOVE_PRODUCT",T="SET_FORM",J=B,R=A,Y=function(e,t){var a=JSON.parse(localStorage.getItem("cart"))||[];return a.push(Object(z.a)({},e,{amount:t})),localStorage.setItem("cart",JSON.stringify(a)),{type:J,payload:a}},q=function(e){var t=JSON.parse(localStorage.getItem("cart"))||[];return t.splice(e,1),localStorage.setItem("cart",JSON.stringify(t)),{type:R,payload:t}},G=T,$=function(e,t){return{type:G,payload:{fieldName:e,value:t}}},U=Object(E.a)((function(e){return{price:{color:e.palette.secondary.main,fontWeight:"bold",fontSize:e.typography.h6.fontSize}}})),V=function(){var e=U(),t=Object(n.useState)(0),a=Object(y.a)(t,2),c=a[0],l=a[1],o=Object(i.c)((function(e){return e.cart})).productsInCart;return Object(n.useEffect)((function(){if(o.length>0){var e=o.map((function(e){return e.price*e.amount}));l(e.reduce((function(e,t){return e+t})))}}),[o]),r.a.createElement(h.a,{variant:"subtitle1"},"Total ",r.a.createElement("span",{className:e.price},"$ ",c))},_=q,H=Object(E.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),"&:hover":{background:"#e40051"}},list:{minWidth:320,padding:0},pointer:{cursor:"pointer","&:hover":{color:"#e91e63"}},hint:{height:240,textAlign:"center",color:e.palette.text.secondary,fontSize:e.typography.subtitle2.fontSize},hintIcon:{width:64,height:64},menuBottom:{padding:e.spacing(1,2)},navLink:{textDecoration:"none"},checkout:{"&:hover":{background:"#e40051"}}}})),K=function(){var e=H(),t=Object(i.b)(),a=Object(s.g)().pathname,c=Object(n.useState)(null),l=Object(y.a)(c,2),o=l[0],u=l[1],d=Object(i.c)((function(e){return e.cart})).productsInCart,E=function(){return u(null)};return"/checkout"===a?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{color:"secondary",className:e.fab,onClick:function(e){return u(e.currentTarget)}},r.a.createElement(L.a,{fontSize:"large"})),r.a.createElement(O.a,{anchorEl:o,open:Boolean(o),onClose:E},r.a.createElement(j.a,{className:e.list},r.a.createElement(C.a,null,r.a.createElement(k.a,{primary:"Products in Cart"}),r.a.createElement(x.a,null,r.a.createElement(D.a,{onClick:E,className:e.pointer}))),r.a.createElement(S.a,null),0===d.length&&r.a.createElement(C.a,{className:e.hint},r.a.createElement(I.a,{container:!0,direction:"column"},r.a.createElement(I.a,{item:!0},r.a.createElement(L.a,{className:e.hintIcon})),r.a.createElement(I.a,{item:!0},r.a.createElement(k.a,{primary:"You don't have any product in cart."})))),d.map((function(a,n){var c=a.title,l=a.price,i=a.amount;return r.a.createElement(C.a,{button:!0,key:n},r.a.createElement(w.a,null,r.a.createElement(P.a,null,r.a.createElement(F.a,null))),r.a.createElement(k.a,{primary:"".concat(c," * ").concat(i),secondary:"$ ".concat(l*i)}),r.a.createElement(x.a,null,r.a.createElement(M.a,{onClick:function(){return function(e){return t(_(e))}(n)},className:e.pointer})))})),r.a.createElement(S.a,null),r.a.createElement(C.a,{className:e.menuBottom},r.a.createElement(k.a,{primary:r.a.createElement(V,null)}),r.a.createElement(x.a,null,r.a.createElement(m.b,{to:"/checkout",className:e.navLink},r.a.createElement(W.a,{variant:"contained",color:"secondary",className:e.checkout},"Check Out")))))))},Q=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(u.a,null),r.a.createElement("main",null,r.a.createElement(d.a,null,r.a.createElement(b,null),t)),r.a.createElement(K,null))},X=a(13),Z=a(3),ee=Object(E.a)({card:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"0.2s ease-in-out",height:200,"&:hover":{transform:"scale(1.1)"}}}),te=function(e){var t=e.category,a=ee();return r.a.createElement(p.a,{variant:"outlined",className:a.card},r.a.createElement(h.a,{variant:"h5",color:"textSecondary"},t))},ae=Object(E.a)((function(e){return{card:{transition:"0.2s ease-in-out","&:hover":{transform:"scale(1.1)"}},fakeImage:Object(X.a)({display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:function(e){return e?120:180},color:e.palette.text.secondary,fontSize:e.typography.h5.fontSize,background:"#eeeeee"},e.breakpoints.down("sm"),{height:function(e){return 240}}),price:{color:"#e91e63"},horizentalPadding:{padding:e.spacing(1)}}})),ne=function(e){var t=e.title,a=e.price,n=e.recommend,c=void 0!==n&&n,l=ae(c);return r.a.createElement(p.a,{variant:"outlined",className:l.card},r.a.createElement("div",{className:l.fakeImage},"Image"),r.a.createElement("div",{className:l.horizentalPadding},r.a.createElement(I.a,{container:!0,alignItems:"center",className:l.verticalMargin,spacing:c?null:1},r.a.createElement(I.a,{item:!0,xs:c?12:"auto"},r.a.createElement(h.a,{variant:c?"h6":"h5",color:"textSecondary"},t)),r.a.createElement(I.a,{item:!0},r.a.createElement(h.a,{variant:"subtitle1",className:l.price},"$ ",a))),!c&&r.a.createElement(h.a,{variant:"subtitle2",color:"textSecondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo quam vel aliquet sodales. Cras sit amet mollis turpis.")))},re=a(79),ce=a(37),le=Object(E.a)((function(e){return{title:{margin:e.spacing(1,0)},banner:Object(X.a)({display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:360},e.breakpoints.down("sm"),{height:240}),bannerTitle:Object(X.a)({},e.breakpoints.down("sm"),{fontSize:48}),navLink:{textDecoration:"none"}}})),ie=function(){var e=le();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{to:"/product/1",className:e.navLink},r.a.createElement(p.a,{variant:"outlined",className:Object(Z.a)(e.card,e.banner)},r.a.createElement(h.a,{variant:"h1",color:"textSecondary",className:e.bannerTitle},"Banner"))),r.a.createElement(h.a,{variant:"h4",className:e.title},"Product Categories"),r.a.createElement(I.a,{container:!0,spacing:3},re.map((function(t){var a=t.id,n=t.category;return r.a.createElement(I.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:a},r.a.createElement(m.b,{to:{category:n,pathname:"/product"},className:e.navLink},r.a.createElement(te,{category:n})))}))),r.a.createElement(h.a,{variant:"h4",className:e.title},"Popular Products"),r.a.createElement(I.a,{container:!0,spacing:3},ce.map((function(t){var a=t.id,n=t.title,c=t.price;return r.a.createElement(I.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:a},r.a.createElement(m.b,{to:"/product/".concat(a),className:e.navLink},r.a.createElement(ne,{title:n,price:c})))}))))},oe=a(168),me=a(154),se=Object(E.a)((function(e){return{navLink:{textDecoration:"none"},toolbar:{margin:e.spacing(2,0)},select:{width:120}}})),ue=function(){var e=se(),t=Object(s.g)().category,a=Object(n.useState)("All"),c=Object(y.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)([]),u=Object(y.a)(o,2),d=u[0],E=u[1];return Object(n.useEffect)((function(){i(t||"All")}),[t]),Object(n.useEffect)((function(){E("All"===l?ce:ce.filter((function(e){return e.category===l})))}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.toolbar},r.a.createElement(oe.a,{className:e.select,value:l,onChange:function(e){return i(e.target.value)}},r.a.createElement(me.a,{value:"All"},"All"),r.a.createElement(me.a,{value:"Clothes"},"Clothes"),r.a.createElement(me.a,{value:"Pants"},"Pants"),r.a.createElement(me.a,{value:"Shoes"},"Shoes"),r.a.createElement(me.a,{value:"Decorations"},"Decorations"))),r.a.createElement(I.a,{container:!0,spacing:3},d.map((function(t){var a=t.id,n=t.title,c=t.price;return r.a.createElement(I.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:a},r.a.createElement(m.b,{to:"/product/".concat(a),className:e.navLink},r.a.createElement(ne,{title:n,price:c})))}))))},de=a(155),Ee=a(176),pe=a(173),ge=a(156),he=a(158),fe=a(159),ve=Y,be=Object(E.a)((function(e){return{fakeImage:Object(X.a)({display:"flex",alignItems:"center",justifyContent:"center",height:720,background:"#eeeeee",fontSize:e.typography.h4.fontSize,color:e.palette.text.secondary},e.breakpoints.down("sm"),{height:240}),verticalMargin:{margin:e.spacing(2,0)},content:{padding:e.spacing(2)},price:{color:"#e91e63"},textField:{width:56,"& > .MuiInputBase-root > .MuiInputBase-input":{textAlign:"center"}},button:{"&:hover":{background:"#e40051"}},navLink:{textDecoration:"none"},green:{color:e.palette.success.light}}})),ye=function(){var e=be(),t=Object(s.h)().id,a=Object(i.b)(),c=Object(n.useState)(0),l=Object(y.a)(c,2),o=l[0],u=l[1],d=Object(n.useState)([]),E=Object(y.a)(d,2),g=E[0],f=E[1],v=Object(n.useState)(!1),b=Object(y.a)(v,2),N=b[0],O=b[1],j=ce.filter((function(e){return e.id===parseInt(t)}))[0],C=j.title,k=j.price;return Object(n.useEffect)((function(){var e=ce.filter((function(e){return e.id!==parseInt(t)})),a=[];!function t(){var n=Math.floor(Math.random()*e.length);a.includes(n)?t():a.push(n),a.length<3&&t()}(),f(a.map((function(t){return e[t]})))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"outlined"},r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,xs:12,md:7},r.a.createElement("div",{className:e.fakeImage},"Image")),r.a.createElement(I.a,{item:!0,xs:12,md:5},r.a.createElement("div",{className:e.content},r.a.createElement(h.a,{variant:"h4",className:e.verticalMargin},C),r.a.createElement(h.a,{variant:"h5",className:Object(Z.a)(e.price,e.verticalMargin)},"$ ",k),r.a.createElement(S.a,null),r.a.createElement(h.a,{color:"textSecondary",className:e.verticalMargin},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo quam vel aliquet sodales. Cras sit amet mollis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo quam vel aliquet sodales."),r.a.createElement(S.a,null),r.a.createElement(I.a,{container:!0,alignItems:"center",className:e.verticalMargin},r.a.createElement(I.a,{item:!0},r.a.createElement(de.a,{onClick:function(){o>0&&u(o-1)}},r.a.createElement(ge.a,null))),r.a.createElement(I.a,{item:!0},r.a.createElement(Ee.a,{size:"small",variant:"outlined",className:e.textField,value:o,onChange:function(e){var t=parseInt(e.target.value);isNaN(t)?u(0):t<1e3&&u(parseInt(t))}})),r.a.createElement(I.a,{item:!0},r.a.createElement(de.a,{onClick:function(){o<1e3&&u(o+1)}},r.a.createElement(he.a,null))),r.a.createElement(I.a,{item:!0},r.a.createElement(W.a,{variant:"contained",color:"secondary",size:"large",className:e.button,onClick:function(){a(ve(j,o)),O(!0)},disabled:!(o>0)},"Add to Cart"))),r.a.createElement(S.a,null),r.a.createElement(h.a,{variant:"subtitle1",className:e.verticalMargin},"Recommend Products"),r.a.createElement(I.a,{container:!0,spacing:2},g.map((function(t){var a=t.id,n=t.title,c=t.price;return r.a.createElement(I.a,{xs:12,md:4,item:!0,key:a},r.a.createElement(m.b,{to:"/product/".concat(a),className:e.navLink,onClick:function(){return u(0)}},r.a.createElement(ne,{recommend:!0,title:n,price:c})))}))))))),r.a.createElement(pe.a,{open:N,onClose:function(){return O(!1)},anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:5e3,message:r.a.createElement(I.a,{container:!0,alignItems:"center",spacing:1},r.a.createElement(I.a,{item:!0},r.a.createElement(fe.a,{className:e.green})),r.a.createElement(I.a,{item:!0},r.a.createElement(h.a,{variant:"subtitle2"},"Add product to cart successfully!")))}))},Ne=a(166),Oe=a(167),je=a(178),Ce=a(160),ke=a(171),xe=a(169),Se=Object(E.a)((function(e){return{stepLabel:{"& > .MuiStepLabel-iconContainer > .MuiStepIcon-root":{color:e.palette.secondary.light}}}})),Ie=function(e){var t=Se(),a=e.step;return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe.a,{smUp:!0},function(){switch(a){case 0:return"Cart";case 1:return"Delivery";case 2:return"Payment";case 3:return"Confirmation";default:return""}}()),r.a.createElement(xe.a,{smDown:!0},r.a.createElement(je.a,{activeStep:a},r.a.createElement(Ce.a,null,r.a.createElement(ke.a,{className:t.stepLabel},"Cart")),r.a.createElement(Ce.a,null,r.a.createElement(ke.a,{className:t.stepLabel},"Delivery")),r.a.createElement(Ce.a,null,r.a.createElement(ke.a,{className:t.stepLabel},"Payment")),r.a.createElement(Ce.a,null,r.a.createElement(ke.a,{className:t.stepLabel},"Confirmation")))))},we=Object(E.a)((function(e){return{buttonGroup:{float:"right"},button:{width:"80px",margin:e.spacing(0,1)},hidden:{display:"none"}}})),Pe=function(e){var t=e.step,a=e.setStep,n=we();return r.a.createElement("div",{className:n.buttonGroup},r.a.createElement(W.a,{variant:"outlined",color:"default",onClick:function(){t>0&&a(t-1)},className:Object(Z.a)(n.button,Object(X.a)({},n.hidden,0===t))},"Prev"),r.a.createElement(W.a,{variant:"contained",color:"secondary",onClick:function(){t<4&&a(t+1)},className:Object(Z.a)(n.button,Object(X.a)({},n.hidden,4===t))},"Next"),r.a.createElement(W.a,{variant:"contained",color:"secondary",onClick:function(){alert("\u78ba\u8a8d\u63d0\u4ea4 ?")},className:Object(Z.a)(n.button,Object(X.a)({},n.hidden,4!==t))},"Submit"))},We=a(161),Le=a(162),De=a(163),Fe=a(164),Me=a(165),ze=Object(E.a)((function(e){return{fakeImage:{display:"flex",alignItems:"center",justifyContent:"center",width:120,height:80,background:"#eeeeee"},hideInMobile:Object(X.a)({},e.breakpoints.down("sm"),{display:"none"})}})),Be=function(){var e=ze(),t=Object(i.c)((function(e){return e.cart})).productsInCart;return r.a.createElement(We.a,null,r.a.createElement(Le.a,null,r.a.createElement(De.a,null,r.a.createElement(Fe.a,null,"Product"),r.a.createElement(Fe.a,{align:"center"},"Amount"),r.a.createElement(Fe.a,{align:"center"},"Price"))),r.a.createElement(Me.a,null,t.map((function(t,a){var n=t.title,c=t.amount,l=t.price;return r.a.createElement(De.a,{key:a},r.a.createElement(Fe.a,null,r.a.createElement(I.a,{container:!0,alignItems:"center",spacing:2},r.a.createElement(I.a,{item:!0,className:e.hideInMobile},r.a.createElement("div",{className:e.fakeImage},"Image")),r.a.createElement(I.a,{item:!0},r.a.createElement(h.a,{variant:"subtitle1"},n)))),r.a.createElement(Fe.a,{align:"center"},c),r.a.createElement(Fe.a,{align:"center"},l*c))}))))},Ae=a(157),Te=a(177),Je=$,Re=Object(E.a)((function(e){return{container:Object(X.a)({margin:"auto",maxWidth:720},e.breakpoints.down("sm"),{maxWidth:"100%"}),textField:{minWidth:240,maxWidth:496},title:{margin:e.spacing(1,0)},formControl:{minWidth:180,maxWidth:320},content:{marginBottom:e.spacing(2)}}})),Ye=function(){var e=Re(),t=Object(i.b)(),a=Object(i.c)((function(e){return e.form}));return r.a.createElement("div",{className:e.container},r.a.createElement(h.a,{variant:"h6",className:e.title},"Info"),r.a.createElement(I.a,{container:!0,spacing:2,className:e.content},r.a.createElement(I.a,{item:!0},r.a.createElement(Ee.a,{fullWidth:!0,label:"First Name",className:e.textField,value:a.firstName||"",onChange:function(e){return t(Je("firstName",e.target.value))}})),r.a.createElement(I.a,{item:!0},r.a.createElement(Ee.a,{fullWidth:!0,label:"Last Name",className:e.textField,value:a.lastName||"",onChange:function(e){return t(Je("lastName",e.target.value))}}))),r.a.createElement(h.a,{variant:"h6",className:e.title},"Contact"),r.a.createElement(I.a,{container:!0,spacing:2,className:e.content},r.a.createElement(I.a,{item:!0},r.a.createElement(Ee.a,{fullWidth:!0,label:"Phone",className:e.textField,value:a.phone||"",onChange:function(e){return t(Je("phone",e.target.value))}})),r.a.createElement(I.a,{item:!0},r.a.createElement(Ee.a,{fullWidth:!0,label:"E-mail",className:e.textField,value:a.email||"",onChange:function(e){return t(Je("email",e.target.value))}}))),r.a.createElement(h.a,{variant:"h6",className:e.title},"Shipping"),r.a.createElement(I.a,{container:!0,spacing:2,className:e.content},r.a.createElement(I.a,{item:!0},r.a.createElement(Ae.a,{fullWidth:!0,className:e.formControl},r.a.createElement(Te.a,null,"Country"),r.a.createElement(oe.a,{fullWidth:!0,value:a.country||"",onChange:function(e){return t(Je("country",e.target.value))}},r.a.createElement(me.a,{value:"Taiwan"},"Taiwan")))),r.a.createElement(I.a,{item:!0},r.a.createElement(Ae.a,{fullWidth:!0,className:e.formControl},r.a.createElement(Te.a,null,"City"),r.a.createElement(oe.a,{fullWidth:!0,value:a.city||"",onChange:function(e){return t(Je("city",e.target.value))}},r.a.createElement(me.a,{value:"Taipei"},"Taipei")))),r.a.createElement(I.a,{item:!0},r.a.createElement(Ee.a,{fullWidth:!0,label:"Address",className:e.textField,value:a.address||"",onChange:function(e){return t(Je("address",e.target.value))}}))))},qe=a(54),Ge=$,$e=["01","02","03","04","05","06","07","08","09","10","11","12"],Ue=Object(qe.a)(Array(100).keys()),Ve=[{id:1,src:"https://image.flaticon.com/icons/svg/196/196561.svg"},{id:2,src:"https://image.flaticon.com/icons/svg/196/196578.svg"},{id:3,src:"https://image.flaticon.com/icons/svg/174/174861.svg"}],_e=Object(E.a)((function(e){return{container:Object(X.a)({margin:"auto",maxWidth:720},e.breakpoints.down("sm"),{maxWidth:"100%"}),content:{marginBottom:e.spacing(2)},textField:{minWidth:240},cvv:{width:60},active:{border:"1px solid #f50057",transition:"0.2s ease-in-out"}}})),He=function(){var e=_e(),t=Object(i.b)(),a=Object(n.useState)(1),c=Object(y.a)(a,2),l=c[0],o=c[1],m=Object(i.c)((function(e){return e.form}));return r.a.createElement("div",{className:e.container},r.a.createElement("div",null,Ve.map((function(t){var a=t.id,n=t.src;return r.a.createElement(de.a,{key:a,onClick:function(){return o(a)},className:l===a?e.active:null},r.a.createElement(P.a,{src:n}))}))),r.a.createElement(h.a,{variant:"h6"},"Card Info"),r.a.createElement(I.a,{container:!0,spacing:2,className:e.content},r.a.createElement(I.a,{item:!0},r.a.createElement(Ee.a,{fullWidth:!0,label:"Cardholder Name",className:e.textField,value:m.cardholderName||"",onChange:function(e){return t(Ge("cardholderName",e.target.value))}})),r.a.createElement(I.a,{item:!0},r.a.createElement(Ee.a,{fullWidth:!0,label:"Card Number",className:e.textField,value:m.cardNumber||"",onChange:function(e){return t(Ge("cardNumber",e.target.value))}}))),r.a.createElement(I.a,{container:!0,spacing:6},r.a.createElement(I.a,{item:!0},r.a.createElement(h.a,{variant:"h6"},"End Date"),r.a.createElement(I.a,{container:!0,spacing:2},r.a.createElement(I.a,{item:!0},r.a.createElement(oe.a,{value:m.endMonth||0,onChange:function(e){return t(Ge("endMonth",e.target.value))}},r.a.createElement(me.a,{value:0,disabled:!0},"MM"),$e.map((function(e){return r.a.createElement(me.a,{value:e,key:e},e)})))),r.a.createElement(I.a,{item:!0},r.a.createElement(oe.a,{value:m.endYear||0,onChange:function(e){return t(Ge("endYear",e.target.value))}},r.a.createElement(me.a,{value:0,disabled:!0},"YYYY"),Ue.map((function(e){return r.a.createElement(me.a,{value:1900+e,key:e},1900+e)})))))),r.a.createElement(I.a,{item:!0},r.a.createElement(h.a,{variant:"h6"},"CVV"),r.a.createElement(Ee.a,{value:m.cvv||"",className:e.cvv,onChange:function(e){return t(Ge("cvv",e.target.value))}}))))},Ke=Object(E.a)((function(e){return{card:{padding:e.spacing(2,1)}}})),Qe=function(){var e=Object(n.useState)(0),t=Object(y.a)(e,2),a=t[0],c=t[1],l=Ke();return r.a.createElement(p.a,{className:l.card,variant:"outlined"},r.a.createElement(Ne.a,{title:r.a.createElement(Ie,{step:a})}),r.a.createElement(Oe.a,null,function(){switch(a){case 0:return r.a.createElement(Be,null);case 1:return r.a.createElement(Ye,null);case 2:return r.a.createElement(He,null);case 3:return"Comfirmation";case 4:return"Review";default:return""}}()),r.a.createElement(I.a,{container:!0,justify:"flex-end",spacing:1},r.a.createElement(I.a,{item:!0},0===a&&r.a.createElement(V,null)),r.a.createElement(I.a,{item:!0},r.a.createElement(Pe,{step:a,setStep:c}))))},Xe=function(){return r.a.createElement(m.a,{basename:"/react-e-commerce"},r.a.createElement(s.d,null,r.a.createElement(Q,null,r.a.createElement(s.b,{path:"/",exact:!0,component:ie}),r.a.createElement(s.b,{path:"/product",exact:!0,component:ue}),r.a.createElement(s.b,{path:"/product/:id",component:ye}),r.a.createElement(s.b,{path:"/checkout",component:Qe})),r.a.createElement(s.a,{to:"/"})))},Ze=B,et=A,tt={productsInCart:JSON.parse(localStorage.getItem("cart"))||[]},at=T,nt={},rt=Object(o.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ze:case et:return Object(z.a)({},e,{productsInCart:Object(qe.a)(t.payload)});default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case at:return Object(z.a)({},e,Object(X.a)({},t.payload.fieldName,t.payload.value));default:return e}}}),ct=Object(o.c)(rt);l.a.render(r.a.createElement(i.a,{store:ct},r.a.createElement(Xe,null)),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.560afab7.chunk.js.map