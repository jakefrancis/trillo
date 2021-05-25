(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(e,c,t){},11:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t(3),a=t.n(i),n=t(0),r=function(e){var c=e.iconName,t=e.component,s=e.componentTrail,i=void 0===s?"":s;return Object(n.jsx)("svg",{className:"".concat(t,"__icon").concat(i),fill:"black",width:"16px",height:"16px",viewBox:"0 0 20 20",children:Object(n.jsx)("use",{xlinkHref:"/sprite.svg#icon-".concat(c)})})},o=function(e){var c=e.iconName,t=e.component,s=e.notifications;return Object(n.jsxs)("div",{className:"".concat(t,"__icon-box"),children:[Object(n.jsx)(r,{component:t,iconName:c}),Object(n.jsx)("span",{className:"".concat(t,"__notification"),children:s})]})},l=function(e){var c=e.source,t=e.component,s=e.userName;return Object(n.jsxs)("div",{className:"".concat(t,"__user"),children:[Object(n.jsx)("img",{src:c,alt:"User",className:"".concat(t,"__user-photo")}),Object(n.jsx)("span",{className:"".concat(t,"__user-name"),children:s})]})},j=function(){return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)("img",{src:"img/logo.png",alt:"trillo logo",className:"logo"}),Object(n.jsxs)("form",{action:"#",className:"search",children:[Object(n.jsx)("input",{type:"text",className:"search__input",placeholder:"Search hotels"}),Object(n.jsx)("button",{className:"search__button",children:Object(n.jsx)(r,{component:"search",iconName:"magnifying-glass"})})]}),Object(n.jsxs)("nav",{className:"user-nav",children:[Object(n.jsx)(o,{component:"user-nav",iconName:"bookmark",notifications:"13"}),Object(n.jsx)(o,{component:"user-nav",iconName:"chat",notifications:"7"}),Object(n.jsx)(l,{source:"img/user.jpg",userName:"Jonas",component:"user-nav"})]})]})},m=(t(10),function(){return Object(n.jsxs)("div",{className:"cta",children:[Object(n.jsx)("h2",{className:"cta__book-now",children:"Good news! We have 4 free rooms for your selected dates!"}),Object(n.jsxs)("button",{className:"btn",children:[Object(n.jsx)("span",{className:"btn__visible",children:"Book Now"}),Object(n.jsx)("span",{className:"btn__hidden",children:"Only 4 rooms left!"})]})]})}),d=function(){return Object(n.jsxs)("div",{className:"description",children:[Object(n.jsx)("p",{className:"paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate."}),Object(n.jsx)("p",{className:"paragraph",children:"Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam."}),Object(n.jsx)("ul",{className:"list",children:["Close to the Beach","Breakfast Included","Free Aiport Shuttle","Free Wifi in all Rooms","Air conditioning and heating","Pets Allowed","We speak all languages","Perfect for families"].map((function(e){return Object(n.jsxs)("li",{className:"list__item",children:[Object(n.jsx)(r,{component:"list__item",iconName:"chevron-thin-right"}),e]})}))}),Object(n.jsxs)("div",{className:"recommend",children:[Object(n.jsx)("p",{className:"recommend__count",children:"Lucy and Three other friends recommend this hotel."}),Object(n.jsx)("div",{className:"recommend__friends",children:[{src:"img/user-3.jpg",alt:"Friend 3"},{src:"img/user-4.jpg",alt:"Friend 4"},{src:"img/user-5.jpg",alt:"Friend 5"},{src:"img/user-6.jpg",alt:"Friend 6"}].map((function(e){return Object(n.jsx)("img",{className:"recommend__photo",src:e.src,alt:e.alt})}))})]})]})},u=function(e){var c=e.alt,t=e.src,s=e.rating,i=e.name,a=e.date,r=e.review;return Object(n.jsxs)("figure",{className:"review",children:[Object(n.jsx)("blockquote",{className:"review__paragraph",children:r}),Object(n.jsxs)("div",{className:"review__box",children:[Object(n.jsx)("img",{className:"review__box--photo",src:t,alt:c}),Object(n.jsxs)("div",{className:"review__box__info",children:[Object(n.jsx)("p",{className:"review__box__info--name",children:i}),Object(n.jsx)("p",{className:"review__box__info--date",children:a})]}),Object(n.jsx)("div",{className:"review__rating",children:s})]})]})},h=function(){return Object(n.jsxs)("div",{className:"user-reviews",children:[[{alt:"friend 1",src:"img/user-1.jpg",rating:7.6,name:"Nick Smith",date:"Feb 23rd, 2019",review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."},{alt:"friend 2",src:"img/user-2.jpg",rating:9.3,name:"Mary Thomas",date:"June 10th, 2018",review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."}].map((function(e){return Object(n.jsx)(u,{alt:e.src,src:e.src,rating:e.rating,name:e.name,date:e.date,review:e.review})})),Object(n.jsxs)("button",{className:"btn-inline",children:["Show All ",Object(n.jsx)("span",{children:"\u2192"})]})]})},b=function(){return Object(n.jsxs)("div",{className:"detail",children:[Object(n.jsx)(d,{}),Object(n.jsx)(h,{})]})},v=function(e){var c=e.src,t=e.alt;return Object(n.jsx)("figure",{className:"Gallery__item",children:Object(n.jsx)("img",{src:c,alt:t,className:"gallery__photo"})})},p=function(){return Object(n.jsx)("div",{className:"gallery",children:[{src:"/img/hotel-1.jpg",alt:"hotel at night"},{src:"/img/hotel-2.jpg",alt:"hotel pool"},{src:"/img/hotel-3.jpg",alt:"hotel beach"}].map((function(e){return Object(n.jsx)(v,{src:e.src,alt:e.alt})}))})},x=function(e){var c=e.hotelName,t=e.rating;return Object(n.jsxs)("div",{className:"overview",children:[Object(n.jsx)("h1",{className:"overview__heading",children:c}),Object(n.jsx)("div",{className:"overview__stars",children:function(){for(var e=Math.round(t/2),c=[],s=0;s<5;s++)s<e?c.push("star"):c.push("star-outlined");return c}().map((function(e){return Object(n.jsx)(r,{component:"overview",iconName:e,componentTrail:"--star"})}))}),Object(n.jsxs)("div",{className:"overview__location",children:[Object(n.jsx)(r,{component:"overview",iconName:"location-pin",componentTrail:"--location"}),Object(n.jsx)("button",{className:"btn-inline",children:"Albufeira, Portugal"})]}),Object(n.jsxs)("div",{className:"overview__rating",children:[Object(n.jsx)("div",{className:"overview__rating--average",children:t}),Object(n.jsx)("div",{className:"overview_rating--count",children:"429 votes"})]})]})},O=function(){return Object(n.jsxs)("div",{className:"hotel-view",children:[Object(n.jsx)(p,{}),Object(n.jsx)(x,{hotelName:"Hotel Las Palmas",rating:8.6}),Object(n.jsx)(b,{}),Object(n.jsx)(m,{})]})},N=t(4),_=function(e){var c=e.component,t=e.iconName,s=e.description,i=e.href,a=e.handler,o=e.active;return Object(n.jsx)("li",{onFocus:a,className:o?"".concat(c,"__item ").concat(c,"__item--active"):"".concat(c,"__item"),children:Object(n.jsxs)("a",{href:i,className:"".concat(c,"__link"),children:[Object(n.jsx)(r,{component:c,iconName:t}),Object(n.jsx)("span",{children:s})]})})},g=function(){var e=Object(s.useState)([{iconName:"home",description:"Hotel",active:!0,key:1},{iconName:"aircraft-take-off",description:"Flight",active:!1,key:2},{iconName:"key",description:"Car Rental",active:!1,key:3},{iconName:"map",description:"Tours",active:!1,key:4}]),c=Object(N.a)(e,2),t=c[0],i=c[1];return Object(n.jsxs)("nav",{className:"sidebar",children:[Object(n.jsx)("ul",{className:"side-nav",children:t.map((function(e){return Object(n.jsx)(_,{handler:function(){!function(e){console.log(e);var c=t.map((function(c){return c.key===e?c.active=!0:c.active=!1,c}));i(c)}(e.key)},component:"side-nav",iconName:e.iconName,description:e.description,href:"#",index:e.key,active:e.active},e.key)}))}),Object(n.jsx)("div",{className:"legal",children:"\xa9 2017 by trillo, All rights reserved"})]})},f=function(){return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(g,{}),Object(n.jsx)(O,{})]})};function w(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsx)(f,{})]})}var k=document.getElementById("root");a.a.render(Object(n.jsx)(s.StrictMode,{children:Object(n.jsx)(w,{})}),k)}},[[11,1,2]]]);
//# sourceMappingURL=main.038584ce.chunk.js.map