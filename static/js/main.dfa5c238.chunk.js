(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{38:function(e,a,t){e.exports=t(69)},43:function(e,a,t){},44:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(34),l=t.n(r),i=t(8),o=t(14),s=t(4),m=(t(43),t(44),t(35)),u=t.n(m),d=t(36),_=t.n(d),p=Object(n.createContext)(),E=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},r)},g=function(){return Object(n.useContext)(p)},h=t(26),v=t.n(h),b=(v.a.initializeApp({apiKey:"AIzaSyA-Pbey8t97aF-6JC3EKeGxF16r5jWgXus",authDomain:"clone-c369a.firebaseapp.com",databaseURL:"https://clone-c369a.firebaseio.com",projectId:"clone-c369a",storageBucket:"clone-c369a.appspot.com",messagingSenderId:"675882484789",appId:"1:675882484789:web:6d1dcaa83f6cdc39891d7c",measurementId:"G-QMP3LL1PQF"}).firestore(),v.a.auth());var f=function(){var e=g(),a=Object(i.a)(e,1)[0],t=a.basket,n=a.user;return c.a.createElement("nav",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(u.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(o.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&b.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__option__line1"},null===n||void 0===n?void 0:n.email),c.a.createElement("span",{className:"header__option__line2"},n?"SIgn out":"Sign in"))),c.a.createElement(o.b,{to:"/login",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__option__line1"},"Returns"),c.a.createElement("span",{className:"header__option__line2"},"Orders"))),c.a.createElement(o.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__option__line1"},"Yours"),c.a.createElement("span",{className:" header__option__line2"},"Prime"))),c.a.createElement(o.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(_.a,null),c.a.createElement("span",{className:"header__option__line2 header__basketCount"},t.length)))))};t(60),t(61);var k=function(e){var a=e.id,t=e.title,n=e.price,r=e.rating,l=e.image,o=g(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"product__rating"},Array(r).fill().map((function(e){return c.a.createElement("p",null,"*")})))),c.a.createElement("img",{src:l,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,price:n,rating:r,image:l}})}},"Add to basket"))};var N=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(k,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),c.a.createElement(k,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(k,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),c.a.createElement(k,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),c.a.createElement(k,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(k,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})))};t(62),t(63);var S=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,o=g(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutproduct"},c.a.createElement("img",{className:"checkoutproduct__image",src:n,alt:""}),c.a.createElement("div",{className:"checkoutproduct__info"},c.a.createElement("p",{className:"checkoutproduct__info"},t),c.a.createElement("p",{className:"checkoutproduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutproduct__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"*")})))),c.a.createElement("button",{className:"checkoutProduct__button",onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from basket"))},O=t(25),A=t.n(O),C=t(29),j=t(16),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},w=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(j.a)(Object(j.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(j.a)(Object(j.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(C.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(j.a)(Object(j.a)({},e),{},{basket:n});case"SET_USER":return Object(j.a)(Object(j.a)({},e),{},{user:a.user});default:return e}};t(65);var x=function(){var e=g(),a=Object(i.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(A.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:y(t),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed to checkout"))};var z=function(){var e=g(),a=Object(i.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===a||void 0===a?void 0:a.length)?c.a.createElement("div",null,c.a.createElement("h2",null,"Your basket is empty"),c.a.createElement("p",null,'Click "Add to basket" to add one or more items to the basket')):c.a.createElement("div",{className:"checkout__title"},c.a.createElement("h2",null,"Your shopping basket "),null===a||void 0===a?void 0:a.map((function(e,a){return c.a.createElement(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),a.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(x,null)))};t(66);var B=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),u=m[0],d=m[1],_=Object(s.f)();return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h2",null,"Sign In"),c.a.createElement("form",null,c.a.createElement("h5",null,"Email"),c.a.createElement("input",{type:"text",value:t,onChange:function(e){return r(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),b.signInWithEmailAndPassword(t,u).then((function(e){_.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Login")),c.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{type:"submit",className:"login__registerButton",onClick:function(e){e.preventDefault(),b.createUserWithEmailAndPassword(t,u).then((function(e){_.push("/")})).catch((function(e){return alert(e.message)}))}},"Create your Amzon account")))};var I=function(){var e=g(),a=Object(i.a)(e,2),t=(a[0].basket,a[1]);return Object(n.useEffect)((function(){var e=b.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),c.a.createElement(o.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/checkout"},c.a.createElement(f,null),c.a.createElement(z,null)),c.a.createElement(s.a,{path:"/login"},c.a.createElement(B,null)),c.a.createElement(s.a,{path:"/"},c.a.createElement(f,null),c.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(67);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,{initialState:{basket:[],user:null},reducer:w},c.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.dfa5c238.chunk.js.map