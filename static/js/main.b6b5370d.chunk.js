(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1dcje",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__2TMIQ"}},13:function(e,a,t){e.exports={Overlay:"Modal_Overlay__38TEx",Modal:"Modal_Modal__1HQ-A"}},24:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2q9tf"}},25:function(e,a,t){e.exports={Button:"Button_Button__3U53i"}},27:function(e,a,t){e.exports={Loader:"Loader_Loader__2PSbU"}},32:function(e,a,t){},5:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__5Jatm",SearchForm:"Searchbar_SearchForm__2B8PK",SearchForm_button:"Searchbar_SearchForm_button__ULjzA",SearchForm_button_label:"Searchbar_SearchForm_button_label__oJOOq",SearchForm_input:"Searchbar_SearchForm_input__25yPH"}},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),o=t.n(c),l=(t(32),t(33),t(10)),s=t(4),i=t(5),u=t.n(i),m=t(1),h=function(e){var a=e.searchQuery,t=e.handleInputChange,n=e.handleSubmitForm;return Object(m.jsx)("header",{className:u.a.Searchbar,children:Object(m.jsxs)("form",{className:u.a.SearchForm,onSubmit:n,children:[Object(m.jsx)("button",{type:"submit",className:u.a.SearchForm_button,children:Object(m.jsx)("span",{className:u.a.SearchForm_button_label,children:"Search"})}),Object(m.jsx)("input",{className:u.a.SearchForm_input,type:"text",name:"searchQuery",value:a,onInput:t,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},d=t(23),b=t.n(d),j=function(e,a){var t=new URLSearchParams({image_type:"photo",orientation:"horizontal",q:e,page:a,per_page:12,key:"21324182-6e2c174a97ce868f915b55e22"});return b.a.get("".concat("https://pixabay.com/api/","?").concat(t))},_=t(12),O=t.n(_),g=function(e){var a=e.images,t=e.handleOpenModal;return a.map((function(e){var a=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(m.jsx)("li",{className:O.a.ImageGalleryItem,onClick:t,children:Object(m.jsx)("img",{src:n,"data-source":r,"data-alt":c,alt:c,className:O.a.ImageGalleryItem_image})},a)}))},f=t(24),p=t.n(f),S=function(e){var a=e.images,t=e.handleOpenModal;return Object(m.jsx)("ul",{className:p.a.ImageGallery,id:"imageGallery",children:Object(m.jsx)(g,{images:a,handleOpenModal:t})})},y=t(25),x=t.n(y),I=function(e){var a=e.handleClickLoadMore;return Object(m.jsx)("button",{type:"button",className:x.a.Button,onClick:a,children:"Load more"})},v=t(13),F=t.n(v),M=function(e){var a=e.handleCloseModal,t=e.modalImg,r=e.modalAlt;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.key&&a(e)};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}})),Object(m.jsx)("div",{className:F.a.Overlay,onClick:a,children:Object(m.jsx)("div",{className:F.a.Modal,children:Object(m.jsx)("img",{src:t,alt:r})})})},w=t(26),G=t.n(w),N=t(27),k=t.n(N),L=function(){return Object(m.jsx)("div",{className:k.a.Loader,children:Object(m.jsx)(G.a,{type:"Hearts",color:"#00BFFF",height:180,width:180})})},C=(t(73),function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(1),o=Object(s.a)(c,2),i=o[0],u=o[1],d=Object(n.useState)(""),b=Object(s.a)(d,2),_=b[0],O=b[1],g=Object(n.useState)(!1),f=Object(s.a)(g,2),p=f[0],y=f[1],x=Object(n.useState)(!1),v=Object(s.a)(x,2),F=v[0],w=v[1],G=Object(n.useState)(""),N=Object(s.a)(G,2),k=N[0],C=N[1],B=Object(n.useState)(""),E=Object(s.a)(B,2),U=E[0],A=E[1],Q=Object(n.useState)(""),q=Object(s.a)(Q,2),H=(q[0],q[1]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{searchQuery:_,handleInputChange:function(e){O(e.target.value)},handleSubmitForm:function(e){e.preventDefault(),y(!0),j(_,1).then((function(e){r(Object(l.a)(e.data.hits)),u(1)})).catch((function(e){return H(e.message)})).finally((function(){return y(!1)}))}}),Object(m.jsx)(S,{images:t,handleOpenModal:function(e){w(!0),C(e.target.dataset.source),A(e.target.dataset.alt)}}),p&&Object(m.jsx)(L,{}),0!==t.length&&Object(m.jsx)(I,{handleClickLoadMore:function(){y(!0),j(_,i+1).then((function(e){r((function(a){return[].concat(Object(l.a)(a),Object(l.a)(e.data.hits))})),u((function(e){return e+1}))})).catch((function(e){return H(e.message)})).finally((function(){y(!1),window.scrollTo({top:document.querySelector("#imageGallery").scrollHeight,behavior:"smooth"})}))}}),F&&Object(m.jsx)(M,{modalImg:k,modalAlt:U,handleCloseModal:function(e){"IMG"!==e.target.nodeName&&(w(!1),C(""),A(""))}})]})});o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.b6b5370d.chunk.js.map