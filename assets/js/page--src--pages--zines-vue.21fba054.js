(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"DE+F":function(t,e,a){"use strict";a.r(e);var i=a("oOgB"),n=a("/S3s"),s={metaInfo:{title:"♡ Zines ♡"},components:{ZinePreview:i.a,Footer:n.a},mounted:function(){console.log(this.$parent)}},o=a("KHd+"),r=null,l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"contentWrapperMed margin-top48",attrs:{id:"zines"}},[a("h1",{staticClass:"text-center"},[t._v("~♡~♡~ Zines ~♡~♡~")]),a("div",{staticClass:"grid-container no-margin"},[a("p",{staticClass:"half"},[a("b",[t._v("zine: /zēn/ "),a("i",[t._v("noun")])]),a("br"),t._v("a small-circulation self-published work of original or appropriated texts and images, usually reproduced via photocopier.")]),a("p",{staticClass:"half"},[a("b",[t._v("Zines by Jackie")]),t._v(" are written, illustrated, assembled, and shipped by hand in the greater-NYC area. They are currently printed at "),a("a",{attrs:{href:"https://risolvestudio.com/",target:"_blank"}},[t._v("Risolve Studio")]),t._v(".")])]),t._l(t.$page.zines.edges,(function(t){return a("div",{key:t.node.title,staticClass:"padding-bottom24"},[a("ZinePreview",{attrs:{zineData:t.node}})],1)}))],2),a("Footer",{staticClass:"margin-top"})],1)}),[],!1,null,null,null);"function"==typeof r&&r(l);e.default=l.exports},itNh:function(t,e,a){"use strict";var i=a("mvV2");a.n(i).a},mvV2:function(t,e,a){},oOgB:function(t,e,a){"use strict";a("rB9j"),a("UxlC");var i={name:"ZinePreview",mounted:function(){},computed:{computedSlug:function(){console.log(this.zineData.relatedShopItems);this.zineData.relatedShopItems;return"/shop/".concat(this.zineData.title.replace(/ /gi,"-").replace(/[^0-9a-z-]/gi,"").toLowerCase())},coverPhotoURL:function(){return'url("'.concat(this.zineData.coverPhoto.file.url,'")')}},props:{zineData:Object}},n=(a("itNh"),a("KHd+")),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zinePreview dotShadow"},[a("div",{staticClass:"zinePreviewContent card",style:{"background-image":t.coverPhotoURL}},[a("div",{staticClass:"writtenContent"},[a("div",{staticClass:"textItems"},[a("h1",[t._v(t._s(t.zineData.title))]),a("p",[t._v(t._s(t.zineData.shorterDescription))]),a("a",{staticClass:"button",attrs:{href:t.computedSlug}},[t._v("Learn more")])])])])])}),[],!1,null,"0fd3ceba",null);e.a=s.exports}}]);