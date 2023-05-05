(this.webpackJsonpReactPokedex=this.webpackJsonpReactPokedex||[]).push([[0],{173:function(e,t,a){e.exports=a(458)},177:function(e,t,a){},456:function(e,t,a){e.exports=a.p+"static/media/PokeAPI.3fa72200.png"},458:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=a(43),l=(a(177),a(490)),s=a(492),m=a(493),u=a(494),p=a(459),h=a(495),d=a(496),f=a(499),g=a(497),x=a(487),b=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},E=a(165),k=a.n(E),v=a(70),y=a.n(v),S=(a(194),Object(x.a)((function(e){return{pokedexContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardMedia:{margin:"auto"},cardContent:{margin:"auto"},searchContainer:{display:"flex",paddingLeft:"20px",paddingRight:"20px",marginTop:"5px",marginBottom:"5px",borderRadius:"5px"},searchIcon:{alignSelf:"flex-end",marginBottom:"5px"},searchInput:{width:"200px",margin:"5px",color:"White"},about:{fontWeight:"bold",margin:"20px",height:"30px",width:"130px",background:"none",display:"inline-block",border:"none",cursor:"pointer",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontSize:"20px"},next:{},previous:{}}}))),N=function(e){var t=S(),a=e.history,o=Object(n.useState)({}),c=Object(i.a)(o,2),x=c[0],E=c[1],v=Object(n.useState)(""),N=Object(i.a)(v,2),w=N[0],C=N[1],T=Object(n.useState)(0),j=Object(i.a)(T,2),O=j[0],A=j[1],P=Object(n.useState)(20),I=Object(i.a)(P,2),M=I[0],F=I[1];Object(n.useEffect)((function(){y.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(M,"&offset=").concat(O*M)).then((function(e){var t=e.data.results,a={};t.forEach((function(e,t){a[t+1]={id:t+1+O*M,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1+O*M,".png")}})),E(a)}))}),[O,M]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement("div",{className:t.searchContainer},r.a.createElement(k.a,{className:t.searchIcon}),r.a.createElement(f.a,{className:t.searchInput,onChange:function(e){C(e.target.value)},label:"Pokemon",variant:"standard"})),r.a.createElement("div",null,r.a.createElement("button",{className:t.about,onClick:function(){return a.push("/about")}},"About")))),x?r.a.createElement(l.a,{container:!0,spacing:2,className:t.pokedexContainer},Object.keys(x).map((function(e){return x[e].name.includes(w)&&function(e){var n=x[e],o=n.id,c=n.name,i=n.sprite;return r.a.createElement(l.a,{item:!0,xs:2,key:e},r.a.createElement(s.a,{style:{cursor:"pointer"},onClick:function(){return a.push("/".concat(o))}},r.a.createElement(m.a,{className:t.cardMedia,image:i,style:{width:"130px",height:"130px"}}),r.a.createElement(u.a,{className:t.cardContent},r.a.createElement(p.a,{style:{fontFamily:"cursive"}},"".concat(o,". ").concat(b(c))))))}(e)}))):r.a.createElement(g.a,null),r.a.createElement("button",{className:t.next,onClick:function(){0!==O&&(A(O-1),F(M=20),100===O&&A(O/2-1))}},"previous page"),r.a.createElement("button",{className:t.next,onClick:function(){50!==O&&100!==O&&(A(O+1),49===O&&(F(M=10),A(2*O+2)))}},"next page"))},w=a(498),C=a(500),T=Object(x.a)((function(e){return{textStyle:{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}})),j=function(e){var t=T(),a=e.match,o=e.history,c=a.params.pokemonId,l=Object(n.useState)(void 0),s=Object(i.a)(l,2),m=s[0],u=s[1];Object(n.useEffect)((function(){y.a.get("https://pokeapi.co/api/v2/pokemon/".concat(c,"/")).then((function(e){var t=e.data;u(t)})).catch((function(e){u(!1)}))}),[c]);return r.a.createElement(r.a.Fragment,null,void 0===m&&r.a.createElement(g.a,null),void 0!==m&&m&&function(e){var a=e.name,n=e.id,o=e.species,c=e.height,i=e.weight,l=e.types,s=e.sprites.front_default;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:t.textStyle,variant:"h1"},"".concat(n,".")," ",b(a)),r.a.createElement("img",{style:{width:"128px",height:"128px"},src:s,alt:"Here should be a pokemon"}),r.a.createElement(p.a,{className:t.textStyle,variant:"h3"},"Pokemon Info"),r.a.createElement(p.a,{className:t.textStyle},"Species: ",r.a.createElement(w.a,{href:o.url},o.name," ")),r.a.createElement(p.a,{className:t.textStyle},"Height: ",c," "),r.a.createElement(p.a,{className:t.textStyle},"Weight: ",i," "),r.a.createElement(p.a,{className:t.textStyle,variant:"h6"}," Types:"),l.map((function(e){var a=e.type.name;return r.a.createElement(p.a,{className:t.textStyle,key:a}," ","".concat(a))})))}(m),!1===m&&r.a.createElement(p.a,null," Pokemon not found"),void 0!==m&&r.a.createElement(C.a,{variant:"contained",onClick:function(){return o.push("/")}},"back to pokedex"))},O=Object(x.a)((function(e){return{About:{paddingTop:"20px",margin:"auto",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"},AboutText:{marginTop:"150px",margin:"auto",width:"75%",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight:"normal"},Author:{margin:"auto",width:"100%",position:"fixed",bottom:"25px",textAlign:"center"},imageStyle:{margin:"auto",width:"250px",height:"100px",display:"block"},ButtonStyle:{marginTop:"30px",height:"50px",width:"200px"}}})),A=function(e){var t=e.history,n=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:n.About,variant:"h1"},"About"),r.a.createElement(p.a,{className:n.AboutText,variant:"h4"},"The purpose of the Pokedex is to provide information regarding the various species of Pok\xe9mon. You can also use the search bar to find them by name."),r.a.createElement(C.a,{className:n.ButtonStyle,variant:"contained",onClick:function(){return t.push("/")}},"back to pokedex"),r.a.createElement(p.a,{className:n.AboutText,variant:"h4"},"Pok\xe9mon information taken from"),r.a.createElement("a",{href:"https://pokeapi.co",target:"_blank"},r.a.createElement("img",{className:n.imageStyle,src:a(456),alt:"PokeAPI"})),r.a.createElement(p.a,{className:n.Author,variant:"h6"},"This page was created as a WEB2Y 2nd assingment by Matas Kairys and Nerijus Savickas, two software engineer students at VIA University College.")))},P=a(501);var I=function(){return r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(N,e)}}),r.a.createElement(P.a,{exact:!0,path:"/about",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(P.a,{exact:!0,path:"/:pokemonId",render:function(e){return r.a.createElement(j,e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(30),F=Object(M.a)();c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P.b,{history:F},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.09b2315f.chunk.js.map