(this.webpackJsonp=this.webpackJsonp||[]).push([["custom-modules"],{"+0nD":function(t,o){t.exports='{% block sw_cms_block_custom_form_preview %}\n\t<div class="sw-cms-preview-custom-form">\n\t\t<h4 class="sw-cms-preview-custom-form-headline">\n\t\t\t{{ $tc(\'sw-cms.elements.form.preview.label.form\') }}\n\t\t</h4>\n\t\t<div class="sw-cms-preview-custom-form-inputs">\n\t\t\t<div class="sw-cms-preview-custom-form-input"></div>\n\t\t\t<div class="sw-cms-preview-custom-form-input"></div>\n\t\t</div>\n\t\t<div class="sw-cms-preview-custom-form-input"></div>\n\t\t<div class="sw-cms-preview-custom-form-inputs__action">\n\t\t\t{{ $tc(\'sw-cms.elements.form.preview.label.send\') }}\n\t\t</div>\n\t</div>\n{% endblock %}\n'},"+Ve1":function(t,o,e){},"/zNt":function(t,o,e){var s=e("wAhD");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("ca14dd8a",s,!0,{})},"0Xc0":function(t,o){t.exports='{% block sw_cms_block_product_four_column_badge %}\n\t<div class="sw-cms-block-product-four-column-badge">\n\t\t<slot name="one"></slot>\n\t\t<slot name="two"></slot>\n\t\t<slot name="three"></slot>\n\t\t<slot name="four"></slot>\n\t</div>\n{% endblock %}\n'},"4am9":function(t,o,e){var s=e("aIT7");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("33307696",s,!0,{})},"5Zdr":function(t,o){t.exports='{% block sw_cms_block_content_product_listing %}\n\t<div class="sw-cms-block-content-product-listing">\n\t\t<slot name="animal"></slot>\n\t\t<slot name="content"></slot>\n\t\t<slot name="products"></slot>\n\t</div>\n{% endblock %}\n\n'},"5lj8":function(t,o,e){"use strict";e.r(o);var s=e("do2C"),n=e.n(s);e("4am9");const{Component:c}=Shopware;c.register("sw-cms-block-product-four-column",{template:n.a});var r=e("w6EH"),i=e.n(r);e("kBFY");const{Component:m}=Shopware;m.register("sw-cms-preview-product-four-column",{template:i.a}),Shopware.Service("cmsService").registerCmsBlock({name:"product-four-column",label:"sw-cms.blocks.commerce.productFourColumn.label",category:"commerce",component:"sw-cms-block-product-four-column",previewComponent:"sw-cms-preview-product-four-column",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{one:"product-box",two:"product-box",three:"product-box",four:"product-box"}});var l=e("0Xc0"),a=e.n(l);e("6aBi");const{Component:p}=Shopware;p.register("sw-cms-block-product-four-column-badge",{template:a.a});var u=e("6r6Q"),d=e.n(u);e("daC5");const{Component:w}=Shopware;w.register("sw-cms-preview-product-four-column-badge",{template:d.a}),Shopware.Service("cmsService").registerCmsBlock({name:"product-four-column-badge",label:"sw-cms.blocks.commerce.productFourColumnBadge.label",category:"commerce",component:"sw-cms-block-product-four-column-badge",previewComponent:"sw-cms-preview-product-four-column-badge",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{one:"product-box",two:"product-box",three:"product-box",four:"text"}});var g=e("5Zdr"),v=e.n(g);e("t1Rg");const{Component:f}=Shopware;f.register("sw-cms-block-content-product-listing",{template:v.a});var b=e("vDYT"),x=e.n(b);e("ZG9o");const{Component:_}=Shopware;_.register("sw-cms-preview-content-product-listing",{template:x.a}),Shopware.Service("cmsService").registerCmsBlock({name:"content-product-listing",label:"sw-cms.blocks.commerce.contentProductLisitng.label",category:"commerce",component:"sw-cms-block-content-product-listing",previewComponent:"sw-cms-preview-content-product-listing",defaultConfig:{marginBottom:null,marginTop:null,marginLeft:null,marginRight:null,sizingMode:"boxed"},slots:{products:"product-listing",animal:"text",content:"text"}});var k=e("ivGY"),h=e.n(k);e("xwDF");const{Component:S}=Shopware;S.register("sw-cms-block-full-stretch-image",{template:h.a});var C=e("pXxc"),y=e.n(C);e("/zNt");const{Component:F}=Shopware;F.register("sw-cms-preview-full-stretch-image",{template:y.a}),Shopware.Service("cmsService").registerCmsBlock({name:"full-stretch-image",label:"sw-cms.blocks.image.fullStretchImage.label",category:"image",component:"sw-cms-block-full-stretch-image",previewComponent:"sw-cms-preview-full-stretch-image",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{image:{type:"image",default:{data:{media:{url:"/administration/static/img/cms/preview_mountain_large.jpg"}}}}}});var B=e("SLXv"),L=e.n(B);e("5rQz");const{Component:T}=Shopware;T.register("sw-cms-block-two-full-stretch-images",{template:L.a});var Z=e("cuTm"),j=e.n(Z);e("7Fzh");const{Component:z}=Shopware;z.register("sw-cms-preview-two-full-stretch-images",{template:j.a}),Shopware.Service("cmsService").registerCmsBlock({name:"two-full-stretch-images",label:"sw-cms.blocks.textImage.twoFullStretchImages.label",category:"text-image",component:"sw-cms-block-two-full-stretch-images",previewComponent:"sw-cms-preview-two-full-stretch-images",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{content:{type:"text",default:{config:{content:{source:"static",value:'\n                  <h2 style="text-align: center; color: #FFFFFF">Lorem Ipsum</h2>\n                  <p style="text-align: center; color: #FFFFFF">Lorem ipsum dolor sit amet, consetetur\n                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n                  lorem ipsum dolor sit amet.</p>\n                  '.trim()}}}},left:{type:"image",default:{data:{media:{url:"/administration/static/img/cms/preview_mountain_large.jpg"}}}},right:{type:"image",default:{data:{media:{url:"/administration/static/img/cms/preview_mountain_large.jpg"}}}}}});var I=e("RjzP"),R=e.n(I);const{Component:Q}=Shopware;Q.register("sw-cms-block-custom-form",{template:R.a});var D=e("+0nD"),J=e.n(D);e("r0q4");const{Component:N}=Shopware;N.register("sw-cms-preview-custom-form",{template:J.a}),Shopware.Service("cmsService").registerCmsBlock({name:"custom-form",label:"sw-cms.blocks.form.custom-form.label",category:"form",component:"sw-cms-block-custom-form",previewComponent:"sw-cms-preview-custom-form",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{content:{type:"form"}}});var P=e("I8Wt"),E=e("I/gJ");Shopware.Locale.extend("de-DE",P),Shopware.Locale.extend("en-GB",E)},"5rQz":function(t,o,e){var s=e("N9Q4");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("35d33538",s,!0,{})},"6aBi":function(t,o,e){var s=e("E1jA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("4bdd1a00",s,!0,{})},"6r6Q":function(t,o){t.exports='{% block sw_cms_block_product_four_column_badge_preview %}\n\t<div class="sw-cms-preview-product-four-column-badge">\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\t\t{% block sw_cms_block_product_four_column_badge_text_preview %}\n\t\t\t<div class="sw-cms-preview-product-four-column-badge-text">\n\t\t\t\t<h2>\n\t\t\t\t\tLorem ipsum dolor\n\t\t\t\t</h2>\n\t\t\t\t<p>\n\t\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr,\n\t\t\t\t\t\t\t\t\t\t            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n\t\t\t\t\t\t\t\t\t\t            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n\t\t\t\t\t\t\t\t\t\t            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t{% endblock %}\n\t</div>\n{% endblock %}\n'},"7Fzh":function(t,o,e){var s=e("rg7Q");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("fbf569e6",s,!0,{})},E1jA:function(t,o,e){},"I/gJ":function(t){t.exports=JSON.parse('{"sw-cms":{"blocks":{"commerce":{"productFourColumn":{"label":"Four Columns, Product Boxes"}},"productFourColumnBadge":{"label":"Four Columns, Product Boxes and Badge"}}}}')},I8Wt:function(t){t.exports=JSON.parse('{"sw-cms":{"blocks":{"commerce":{"productFourColumn":{"label":"Vier Spalten, Produkt-Boxen"},"productFourColumnBadge":{"label":"Vier Spalten, Produkt-Boxen und Störer"},"contentProductLisitng":{"label":"Kerkow Kategorie-Layout"}}}}}')},N9Q4:function(t,o,e){},NwEx:function(t,o,e){},QKsF:function(t,o,e){},RjzP:function(t,o){t.exports='{% block sw_cms_block_custom_form %}\n\t<div class="sw-cms-block-custom-form">\n\t\t<slot name="content"></slot>\n\t</div>\n{% endblock %}\n'},SLXv:function(t,o){t.exports='{% block sw_cms_block_two_full_stretch_images %}\n\t<div class="sw-cms-block-two-full-stretch-images">\n\t\t<div class="sw-cms-block-text-on-image">\n\t\t\t<slot name="content"></slot>\n\t\t</div>\n\t\t<slot name="left"></slot>\n\t\t<slot name="right"></slot>\n\t</div>\n{% endblock %}\n'},TrJR:function(t,o,e){},ZG9o:function(t,o,e){var s=e("+Ve1");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("352e14d8",s,!0,{})},aIT7:function(t,o,e){},"bTI+":function(t,o,e){},cuTm:function(t,o){t.exports='{% block sw_cms_block_two_full_stretch_images_preview %}\n\t<div class="sw-cms-preview-two-full-stretch-images">\n\t\t<img :src="\'/administration/static/img/cms/preview_mountain_small.jpg\' | asset">\n\t</div>\n\t<div class="sw-cms-preview-two-full-stretch-images">\n\t\t<img :src="\'/administration/static/img/cms/preview_mountain_small.jpg\' | asset">\n\t</div>\n{% endblock %}\n'},daC5:function(t,o,e){var s=e("TrJR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("055e6255",s,!0,{})},do2C:function(t,o){t.exports='{% block sw_cms_block_product_four_column %}\n\t<div class="sw-cms-block-product-four-column">\n\t\t<slot name="one"></slot>\n\t\t<slot name="two"></slot>\n\t\t<slot name="three"></slot>\n\t\t<slot name="four"></slot>\n\t</div>\n{% endblock %}\n'},ivGY:function(t,o){t.exports='{% block sw_cms_block_full_stretch_image %}\n\t<div class="sw-cms-block-full-stretch-image">\n\t\t<slot name="image"></slot>\n\t</div>\n{% endblock %}\n'},kBFY:function(t,o,e){var s=e("x+aa");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("39f5392b",s,!0,{})},pXxc:function(t,o){t.exports='{% block sw_cms_block_full_stretch_image_preview %}\n\t<div class="sw-cms-preview-full-stretch-image">\n\t\t<img :src="\'/administration/static/img/cms/preview_mountain_small.jpg\' | asset">\n\t</div>\n{% endblock %}\n'},r0q4:function(t,o,e){var s=e("NwEx");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("1061ed1a",s,!0,{})},rg7Q:function(t,o,e){},t1Rg:function(t,o,e){var s=e("bTI+");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("677059c3",s,!0,{})},vDYT:function(t,o){t.exports='{% block sw_cms_preview_content_product_listing %}\n\t<div class="sw-cms-preview-content-product-listing">\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\n\t\t<div class="sw-cms-preview-content-product-list__content">\n\t\t\t<h2>\n\t\t\t\tLorem ipsum dolor\n\t\t\t</h2>\n\t\t\t<p>\n\t\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n{% endblock %}\n\n'},w6EH:function(t,o){t.exports='{% block sw_cms_block_product_four_column_preview %}\n\t<div class="sw-cms-preview-product-four-column">\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\t\t<sw-cms-product-box-preview></sw-cms-product-box-preview>\n\t</div>\n{% endblock %}\n'},wAhD:function(t,o,e){},"x+aa":function(t,o,e){},xwDF:function(t,o,e){var s=e("QKsF");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("SZ7m").default)("763a9146",s,!0,{})}},[["5lj8","runtime","vendors-node"]]]);