(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BaxB:function(t,i,a){},IJnp:function(t,i,a){"use strict";a("rB9j"),a("UxlC");var e={name:"ActivityPreview",mounted:function(){},computed:{computedSlug:function(){return this.activityData.needsCustomPage?this.activityData.slug:"/activities/".concat(this.activityData.title.replace(/ /gi,"-").replace(/[^0-9a-z-]/gi,"").toLowerCase())},coverImageBgURL:function(){return this.activityData.coverImage?(console.log(this.activityData.coverImage.file.url),console.log('url("${this.activityData.coverImage.file.url})'),'url("'.concat(this.activityData.coverImage.file.url,'")')):'url("/UI/coming-soon-placeholder.png")'}},props:{activityData:Object}},s=(a("ZVWX"),a("KHd+")),c=Object(s.a)(e,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"activityPreview"},[a("a",{attrs:{href:t.computedSlug}},[a("div",{staticClass:"dotShadow small-dots"},[a("div",{staticClass:"activityBox"},[t._m(0),a("div",{staticClass:"window",style:{"background-image":t.coverImageBgURL}})])])]),a("h5",{staticClass:"activityType"},[t._v(t._s(t.activityData.activityType))]),a("h3",{staticClass:"title"},[a("a",{staticClass:"activityLink",attrs:{href:t.computedSlug}},[t._v(t._s(t.activityData.title))])])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"window-buttons"},[i("div",{staticClass:"window-button"}),i("div",{staticClass:"window-button"}),i("div",{staticClass:"window-button"})])}],!1,null,"07205f04",null);i.a=c.exports},ZVWX:function(t,i,a){"use strict";var e=a("BaxB");a.n(e).a},"d+/s":function(t,i,a){"use strict";a.r(i);var e=a("IJnp"),s=a("/S3s"),c={metaInfo:{title:"♡ Activites & Resources ♡"},components:{ActivityPreview:e.a,Footer:s.a},mounted:function(){},methods:{}},n=a("KHd+"),o=null,r=Object(n.a)(c,(function(){var t=this.$createElement,i=this._self._c||t;return i("Layout",[i("div",{staticClass:"contentWrapperMed margin-top48",attrs:{id:"activities"}},[i("h1",{staticClass:" text-center"},[this._v("~☾~☾~ Activities & Resources ~☾~☾~")]),i("p",{staticClass:" text-center"},[this._v("Free, online activities around technology, design, and art. Come back soon for new activities and resources!")]),i("div",{staticClass:"grid-container"},this._l(this.$page.activities.edges,(function(t){return i("ActivityPreview",{key:t.node.id,staticClass:"third",attrs:{activityData:t.node}})})),1)]),i("Footer",{staticClass:"margin-top"})],1)}),[],!1,null,null,null);"function"==typeof o&&o(r);i.default=r.exports}}]);