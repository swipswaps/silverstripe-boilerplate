!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=27)}([function(e,t){e.exports=jQuery},function(e,t){e.exports=i18n},function(e,t){e.exports=Injector},function(e,t){e.exports=ReactApollo},function(e,t){e.exports=React},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=InsertLinkModal},function(e,t){e.exports=ReactDom},function(e,t){e.exports=ShortcodeSerialiser},function(e,t){e.exports=TinyMCEActionRegistrar},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),a=n(9),l=r(a),s=n(4),c=r(s),u=n(7),d=r(u),f=n(3),p=n(5),g=n(0),h=r(g),m=n(8),_=r(m),k=n(6),A=n(2);l.default.addAction("sslink",{text:o.default._t("CMS.LINKLABEL_ANCHOR","Anchor on a page"),onclick:function(e){return e.execCommand("sslinkanchor")},priority:52}).addCommandWithUrlTest("sslinkanchor",/^\[sitetree_link.+]#[^#\]]+$/);var x={init:function(e){e.addCommand("sslinkanchor",function(){(0,h.default)("#"+e.id).entwine("ss").openLinkAnchorDialog()})}},v="insert-link__dialog-wrapper--anchor",C=(0,A.provideInjector)((0,k.createInsertLinkModal)("SilverStripe\\CMS\\Controllers\\CMSPageEditController","editorAnchorLink"));h.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkAnchorDialog:function(){var t=e("#"+v);t.length||(t=e('<div id="'+v+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+v).entwine({renderModal:function(t){var n=this,r=ss.store,i=ss.apolloClient,a=function(){return n.close()},l=function(){return n.handleInsert.apply(n,arguments)},s=this.getOriginalAttributes(),u=tinymce.activeEditor.selection,g=u.getContent()||"",h=u.getNode().tagName,m="A"!==h&&""===g.trim(),_=Number(e("#Form_EditForm_ID").val()||0);d.default.render(c.default.createElement(f.ApolloProvider,{client:i},c.default.createElement(p.Provider,{store:r},c.default.createElement(C,{isOpen:t,onInsert:l,onClosed:a,title:o.default._t("CMS.LINK_ANCHOR","Link to an anchor on a page"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--anchor",fileAttributes:s,identifier:"Admin.InsertLinkAnchorModal",requireLinkText:m,currentPageID:_}))),this[0])},buildAttributes:function(e){return{href:_.default.serialise({name:"sitetree_link",properties:{id:e.PageID}},!0)+(e.Anchor&&e.Anchor.length?"#"+e.Anchor:""),target:e.TargetBlank?"_blank":"",title:e.Description}},getOriginalAttributes:function(){var t=this.getElement().getEditor(),n=e(t.getSelectedNode()),r=(n.attr("href")||"").split("#");if(!r[0])return{};var i=_.default.match("sitetree_link",!1,r[0]);return i?{PageID:i.properties.id?parseInt(i.properties.id,10):0,Anchor:r[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}:{}}})}),tinymce.PluginManager.add("sslinkanchor",function(e){return x.init(e)}),t.default=x}]);