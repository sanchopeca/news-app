(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{108:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(34),i=a.n(r),s=(a(108),a(13)),o=a(15),l=a(58),d=a.n(l);var h=a(197),b=a(204),u=a(203),j=a(201),m=a(199),x=a(200),p=a(202),g=a(205),f=a(195),O=a(2),v=function(e){var t=e.title,a=e.description,n=e.author,c=e.published,r=e.image,i=e.url;return Object(O.jsxs)(h.a,{sx:{maxWidth:345,height:400},children:[Object(O.jsx)(m.a,{sx:{height:340},children:Object(O.jsxs)(x.a,{href:i,target:"_blank",underline:"none",children:[r?Object(O.jsx)(p.a,{className:"img-hover-zoom",children:Object(O.jsx)(u.a,{component:"img",height:"140",image:r})}):null,Object(O.jsxs)(b.a,{sx:r?{height:150}:{height:300},children:[Object(O.jsx)(j.a,{gutterBottom:!0,variant:"h5",textAlign:"left",component:"span",display:"block",color:"text.primary",children:r?t.substr(0,50)+"...":t.substr(0,100)+"..."}),Object(O.jsx)(j.a,{textAlign:"left",variant:"body2",color:"text.secondary",children:Object(O.jsx)("span",{dangerouslySetInnerHTML:r?{__html:a.substr(0,100)+"..."}:{__html:a.substr(0,330)+"..."}})})]})]})}),Object(O.jsx)(g.a,{display:"flex",children:Object(O.jsxs)(f.a,{container:!0,display:"flex",justifyContent:"space-between",p:"0 12px 12px 12px",children:[Object(O.jsxs)(f.a,{item:!0,textAlign:"left",children:[Object(O.jsx)(j.a,{size:"small",variant:"body2",sx:{fontSize:"15px"},children:n?n.substr(0,20)+"...":null}),Object(O.jsx)(j.a,{size:"xs",variant:"body4",sx:{fontSize:"12px"},children:new Date(c).toLocaleDateString("en-US")})]}),Object(O.jsx)(f.a,{children:Object(O.jsx)(x.a,{href:i,size:"small",underline:"none",target:"_blank",color:"text.disabled",children:"Read more..."})})]})})]})},w=a(196),y=a(95),k={darkTheme:Object(y.a)({palette:{primary:{light:"#8095b3",main:"#4d6280",dark:"#1a212b"},secondary:{main:"#ffc400"},background:{paper:"#4c4e59",default:"#111924"},text:{primary:"#c2c4cc",secondary:"#96979c",disabled:"#99ddff"}},typography:{fontFamily:"sans-serif",h1:{fontSize:"1.5rem"},subtitle2:{fontSize:"0.9rem"},caption:{fontSize:"0.8rem"}}}),lightTheme:Object(y.a)({palette:{primary:{light:"#8095b3",main:"#4d6280",dark:"#1a212b"},secondary:{main:"#ffc400"},background:{paper:"#f2f2f2",default:"#e6e6e6"},text:{primary:"#0d0d0d",secondary:"#4d4d4d",disabled:"#333333"}},typography:{fontFamily:"sans-serif",h1:{fontSize:"1.5rem"},subtitle2:{fontSize:"0.9rem"},caption:{fontSize:"0.8rem"}}})};var S=c.a.createContext({theme:"",toggleTheme:function(){}}),z=function(e){var t=e.children,a=Object(n.useState)("darkTheme"),c=Object(s.a)(a,2),r=c[0],i=c[1],o=function(e){return k[e]}(r),l={theme:o,toggleTheme:function(){i("darkTheme"===r?"lightTheme":"darkTheme")}};return Object(O.jsx)(S.Provider,{value:l,children:Object(O.jsx)(w.a,{theme:o,children:t})})},_=function(){return Object(O.jsxs)("div",{className:"lds-ellipsis",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})},C=a(92),M=a(93),T=a.p+"static/media/sports.89a9e0d9.jpg",I=a.p+"static/media/tech.60ede481.jpg",A=function(e){var t=e.query,a=e.searchHandler,n=e.category;return Object(O.jsx)(p.a,{className:"heroSearch",sx:{height:300,backgroundImage:"url(".concat("sports"===n?T:I,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(O.jsxs)("div",{className:"heroSearch__search-box",children:[Object(O.jsx)("button",{className:"heroSearch__search-box__btn",children:Object(O.jsx)(C.a,{className:"heroSearch__search-box__icon",icon:M.a})}),Object(O.jsx)("input",{className:"heroSearch__search-box__input",type:"text",value:t,onChange:a,placeholder:"Search for news..."})]})})},E=a(206),L=a(188),N=a(207),B=a(208),R=a(194),D=a(191),F=a(189),H=a(209),P=a(210),U=a(190),V=a(94),W=a.n(V),q=a(186),J=a(5),X=a(193),G=Object(J.a)(X.a)((function(e){var t=e.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}})),Y=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(0),l=Object(s.a)(i,2),h=l[0],b=l[1],u=Object(n.useState)("sports"),j=Object(s.a)(u,2),m=j[0],x=j[1],p=Object(n.useState)("published_desc"),g=Object(s.a)(p,2),w=g[0],y=g[1],k=Object(n.useState)(!1),z=Object(s.a)(k,2),C=z[0],M=z[1],T=function(e,t,a,c){var r=Object(n.useState)(!0),i=Object(s.a)(r,2),l=i[0],h=i[1],b=Object(n.useState)(!1),u=Object(s.a)(b,2),j=u[0],m=u[1],x=Object(n.useState)([]),p=Object(s.a)(x,2),g=p[0],f=p[1],O=Object(n.useState)(!1),v=Object(s.a)(O,2),w=v[0],y=v[1];return Object(n.useEffect)((function(){f([])}),[e,a,c]),Object(n.useEffect)((function(){var n;return h(!0),m(!1),d()({method:"GET",url:"http://api.mediastack.com/v1/news?access_key=".concat("b94da5a13195473b15428cdf043efdaf"),params:{keywords:e,language:"en",countries:"us, gb, au",limit:9,offset:t,categories:a,sort:c},cancelToken:new d.a.CancelToken((function(e){return n=e}))}).then((function(e){f((function(t){return Object(o.a)(new Set([].concat(Object(o.a)(t),Object(o.a)(e.data.data.map((function(e){return{title:e.title,description:e.description,author:e.author,published:e.published_at,image:e.image,url:e.url}}))))))})),y(e.data.data.length>0),h(!1)})).catch((function(e){d.a.isCancel(e)||(m(!0),h(!1))})),function(){return n()}}),[e,t,a,c]),{loading:l,error:j,news:g,hasMore:w}}(a,h,m,w),I=T.news,V=T.hasMore,J=T.loading,X=T.error,Y=Object(n.useContext)(S),K=Y.theme,Q=Y.toggleTheme,Z=Object(n.useRef)(),$=Object(n.useCallback)((function(e){J||(Z.current&&Z.current.disconnect(),Z.current=new IntersectionObserver((function(e){e[0].isIntersecting>0&&V&&b((function(e){return e+9}))})),e&&Z.current.observe(e))}),[J,V]);Object(n.useEffect)((function(){var e=function(){window.pageYOffset>500?M(!0):M(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)(A,{query:a,searchHandler:function(e){r(e.target.value),b(0)},category:m}),Object(O.jsxs)(E.a,{maxWidth:"lg",align:"center",children:[Object(O.jsxs)(f.a,{container:!0,sx:{minWidth:120,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(O.jsx)(f.a,{item:!0,xs:12,sm:12,md:4,children:Object(O.jsxs)(L.a,{value:m,onChange:function(e,t){x(t),b(0)},centered:!0,sx:{margin:"25px"},children:[Object(O.jsx)(N.a,{value:"sports",label:"Sports"}),Object(O.jsx)(N.a,{value:"technology",label:"Technology"})]})}),Object(O.jsx)(f.a,{item:!0,xs:6,sm:4,md:4,children:Object(O.jsxs)(B.a,{sx:{margin:"25px"},children:[Object(O.jsx)(R.a,{id:"demo-simple-select-label",children:"Sort by Date"}),Object(O.jsxs)(q.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:w,label:"Sort by Date",onChange:function(e,t){y(t.props.value),b(0)},children:[Object(O.jsx)(D.a,{value:"published_desc",children:"Newest"}),Object(O.jsx)(D.a,{value:"published_asc",children:"Oldest"})]})]})}),Object(O.jsx)(f.a,{item:!0,xs:6,sm:4,md:4,children:Object(O.jsx)(G,{sx:{margin:"25px"},value:K,onChange:Q})})]}),Object(O.jsxs)(f.a,{container:!0,spacing:3,children:[I.map((function(e,t){return I.length===t+1?Object(O.jsx)(f.a,{item:!0,xs:12,sm:6,md:4,ref:$,children:Object(O.jsx)(v,{title:e.title,description:e.description,author:e.author,published:e.published,image:e.image,url:e.url})},Object(U.a)()):Object(O.jsx)(f.a,{item:!0,xs:12,sm:6,md:4,children:Object(O.jsx)(v,{title:e.title,description:e.description,author:e.author,published:e.published,image:e.image,url:e.url})},Object(U.a)())})),J&&Object(O.jsx)(_,{sx:{margin:"auto",marginBottom:"100px"}}),X&&Object(O.jsxs)(F.a,{severity:"error",sx:{margin:"auto",marginBottom:"100px"},children:[Object(O.jsx)(H.a,{children:"Error"}),Object(O.jsx)("strong",{children:"Oops! "}),"Something went wrong."]}),C&&Object(O.jsx)(P.a,{color:"primary","aria-label":"back to top",sx:{margin:"0",top:"auto",right:"10%",bottom:20,left:"auto",position:"fixed"},onClick:function(){window.scrollTo({top:0,behaviour:"smooth"})},children:Object(O.jsx)(W.a,{})})]})]})]})};a(137);var K=function(){return Object(O.jsx)(c.a.Fragment,{children:Object(O.jsx)(Y,{})})},Q=a(185);i.a.render(Object(O.jsxs)(z,{children:[Object(O.jsx)(Q.a,{}),Object(O.jsx)(K,{})]}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.7e81b1f9.chunk.js.map