(this.webpackJsonp=this.webpackJsonp||[]).push([["delivery-date"],{"0oVt":function(e,t){e.exports="{% block sw_order_detail_base_secondary_info_delivery %}\n\t{% block sw_order_detail_base_secondary_info_delivery_method %}\n\t\t<dt>\n\t\t\t{{ $tc('sw-order.detailBase.labelShippingMethod') }}\n\t\t</dt>\n\t\t<dd>\n\t\t\t{{ hasDeliveries ? delivery.shippingMethod.translated.name :$tc('sw-order.detailBase.labelNoDeliveriesYet')  }}\n\t\t</dd>\n\t{% endblock %}\n\t{% block sw_order_detail_base_secondary_info_delivery_date %}\n\t\t<dt>\n\t\t\t{{ $tc('sw-order.detailBase.labelDeliveryDate') }}\n\t\t</dt>\n\t\t<dd v-if=\"isEditing\">\n\t\t\t<sw-datepicker v-model=\"currentOrder.customFields.delivery_date\"\n\t\t\t\t:displayValue=\"currentOrder.customFields.delivery_date? currentOrder.customFields.delivery_date : $tc('sw-order.detailBase.labelDeliveryDate')\"\n\t\t\t\t:value=\"currentOrder.customFields.delivery_date\"\t\t\t\n\t\t\t\t@input=\"$emit('order-change')\">\n\t\t\t</sw-datepicker>\n\t\t</dd>\n\t\t<dd v-else>\n\t\t\t{{currentOrder.customFields.delivery_date | date(\"d.m.Y\") }}\n\t\t</dd>\n\t{% endblock %}\n\t{% block sw_order_detail_base_secondary_info_delivery_slot %}\n\t\t<dt>\n\t\t\t{{ $tc('sw-order.detailBase.labelDeliverySlot') }}\n\t\t</dt>\n\t\t<dd>\n\t\t\t{{ $tc('sw-order.detailBase.' + currentOrder.customFields.delivery_slot) }}\n\t\t</dd>\n\t{% endblock %}\n{% endblock %}\n"},"3UGY":function(e){e.exports=JSON.parse('{"sw-order":{"detailBase":{"labelDeliveryDate":"Delivery Day","labelDeliverySlot":"Delivery Slot","18to20":"6 to 8 pm","19to21":"7 to 9 pm","undefined":"Standard"}}}')},Xvdh:function(e,t,d){"use strict";d.r(t);var r=d("0oVt"),n=d.n(r),l=d("no9N"),a=d("3UGY");Shopware.Locale.extend("de-DE",l),Shopware.Locale.extend("en-GB",a),Shopware.Component.override("sw-order-user-card",{template:n.a})},no9N:function(e){e.exports=JSON.parse('{"sw-order":{"detailBase":{"labelDeliveryDate":"Lieferdatum","labelDeliverySlot":"Zeitfenster","18to20":"18:00 bis 20:00 Uhr","19to21":"19:00 bis 21:00 Uhr","undefined":"Standard"}}}')}},[["Xvdh","runtime"]]]);