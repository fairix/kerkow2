(this.webpackJsonp=this.webpackJsonp||[]).push([["kerkow"],{"5Vba":function(e,n){e.exports='{% block sw_order_line_items_grid %}\n    <sw-container type="row" class="sw-order-line-items-grid">\n\n        {% block sw_order_line_items_grid_actions %}\n            <sw-container class="sw-order-line-items-grid__actions-container"\n                          columns="1fr"\n                          v-show="editable">\n\n                {% block sw_order_line_items_grid_create_actions %}\n                    <div align="right">\n                        {% block sw_order_line_items_grid_create_actions_button_group %}\n                            <sw-button-group :disabled="isLoading">\n\n                                {% block sw_order_line_items_grid_add_existing_product %}\n                                    <sw-button class="sw-order-line-items-grid__actions-container-add-product-btn"\n                                               variant="ghost"\n                                               size="small"\n                                               @click="onInsertExistingItem">\n                                        {{ $tc(\'sw-order.detailBase.buttonAddProduct\') }}\n                                    </sw-button>\n                                {% endblock %}\n\n                                {% block sw_order_line_items_grid_create_actions_dropdown%}\n                                    <sw-context-button>\n                                        <template #button>\n                                            <sw-button variant="ghost"\n                                                size="small"\n                                                square>\n                                                <sw-icon name="small-arrow-small-down"\n                                                     decorative>\n                                                </sw-icon>\n                                            </sw-button>\n                                        </template>\n\n                                        {% block sw_order_line_items_grid_create_actions_dropdown%}\n                                            <sw-context-menu-item @click="onInsertBlankItem">\n                                                {{ $tc(\'sw-order.detailBase.buttonAddBlankProduct\') }}\n                                            </sw-context-menu-item>\n                                            <sw-context-menu-item\n                                                class="sw-order-line-items-grid__can-create-discounts-button"\n                                                :disabled="!canCreateDiscounts"\n                                                v-tooltip="{\n                                                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                                                    disabled: canCreateDiscounts,\n                                                    showOnDisabledElements: true\n                                                }"\n                                                @click="onInsertCreditItem">\n                                                {{ $tc(\'sw-order.detailBase.buttonAddCredit\') }}\n                                            </sw-context-menu-item>\n                                        {% endblock %}\n                                    </sw-context-button>\n                                {% endblock %}\n                            </sw-button-group>\n                        {% endblock %}\n                    </div>\n                {% endblock %}\n            </sw-container>\n        {% endblock %}\n\n        {% block sw_order_line_items_grid_grid %}\n            <sw-data-grid :dataSource="orderLineItems"\n                          :columns="getLineItemColumns"\n                          :fullPage="false"\n                          :showSettings="false"\n                          :showSelection="editable"\n                          :showActions="true"\n                          :isLoading="isLoading"\n                          :allowColumnEdit="false"\n                          :allowInlineEdit="editable"\n                          :compactMode="false"\n                          identifier="sw-order-line-item-grid"\n                          class="sw-order-line-items-grid__data-grid"\n                          @inline-edit-cancel="onInlineEditCancel"\n                          @inline-edit-save="onInlineEditSave"\n                          @selection-change="onSelectionChanged"\n                          :isRecordEditable="(item) => !isPromotionItem(item)">\n\n                {% block sw_order_line_items_grid_grid_columns %}\n                    {% block sw_order_line_items_grid_grid_columns_article_number %}\n                        <template #column-articleNumber="{ item }">\n                            {{ item.payload.productNumber }}\n                        </template>\n                    {% endblock %}\n                    {% block sw_order_line_items_grid_grid_columns_label %}\n                        <template #column-label="{ item, isInlineEdit}">\n\n                            {% block sw_order_line_items_grid_grid_columns_label_inline_edit %}\n                                <sw-order-product-select v-if="isInlineEdit"\n                                                         :item="item">\n                                </sw-order-product-select>\n                            {% endblock %}\n\n                            {% block sw_order_line_items_grid_grid_columns_label_link %}\n                                <router-link v-else-if="!isInlineEdit && isProductItem(item)"\n                                             :title="$tc(\'sw-order.detailBase.contextMenuShowProduct\')"\n                                             :to="{ name: \'sw.product.detail\', params: { id: item.identifier } }">\n\n                                    {% block sw_order_line_items_grid_column_payload_options %}\n                                        <div v-if="item.payload && item.payload.options"\n                                             class="sw-order-line-items-grid__item-payload-options">\n                                            <sw-product-variant-info :variations="item.payload.options">\n                                                {{ item.label }}\n                                            </sw-product-variant-info>\n                                        </div>\n                                    {% endblock %}\n                                </router-link>\n                            {% endblock %}\n                            \n\n                            {% block sw_order_line_items_grid_grid_columns_label_content %}\n                                <template v-else>\n                                    {{ item.label }}\n                                </template>\n                            {% endblock %}\n\n                        </template>\n                    {% endblock %}\n\n                    {% block sw_order_line_items_grid_grid_columns_unit_price %}\n                        <template #column-unitPrice="{ item, isInlineEdit}">\n\n                            {% block sw_order_line_items_grid_grid_columns_unit_price_inline_edit %}\n                                <sw-number-field v-if="isInlineEdit && !itemCreatedFromProduct(item.id)"\n                                                 v-model="item.priceDefinition.price"\n                                                 placeholder="0"\n                                                 size="small"\n                                                 :min="getMinItemPrice(item.id)"\n                                                 :max="getMaxItemPrice(item.id)">\n                                </sw-number-field>\n                            {% endblock %}\n\n                            {% block sw_order_line_items_grid_grid_columns_unit_price_content %}\n                                <template v-else>\n                                    {{ item.unitPrice | currency(order.currency.shortName) }}\n                                </template>\n                            {% endblock %}\n\n                        </template>\n                    {% endblock %}\n\n                    {% block sw_order_line_items_grid_grid_columns_total_price %}\n                        <template #column-totalPrice="{ item }">\n                            {% block sw_order_line_items_grid_grid_columns_total_price_content %}\n                                {{ item.totalPrice | currency(order.currency.shortName) }}\n                            {% endblock %}\n                        </template>\n                    {% endblock %}\n\n                    {% block sw_order_line_items_grid_grid_columns_quantity %}\n                        <template #column-quantity="{ item, isInlineEdit }">\n\n                            {% block sw_order_line_items_grid_grid_columns_quantity_inline_edit %}\n                                <sw-number-field v-if="isInlineEdit && !isCreditItem(item.id)"\n                                                 numberType="int"\n                                                 v-model="item.quantity"\n                                                 :min="1"\n                                                 size="small"\n                                                 placeholder="0">\n                                </sw-number-field>\n                            {% endblock %}\n\n                            {% block sw_order_line_items_grid_grid_columns_quantity_content %}\n                                <template v-else>\n                                    {{ item.quantity }}\n                                </template>\n                            {% endblock %}\n                        </template>\n                    {% endblock %}\n\n                    {% block sw_order_line_items_grid_grid_columns_tax %}\n                        <template #column-price.taxRules[0]="{ item, isInlineEdit }">\n\n                            {% block sw_order_line_items_grid_grid_columns_tax_inline_edit %}\n                                <sw-number-field v-if="isInlineEdit &&\n                                                !itemCreatedFromProduct(item.id) &&\n                                                item.priceDefinition &&\n                                                item.priceDefinition.taxRules &&\n                                                !isCreditItem(item.id)"\n                                                 v-model="item.priceDefinition.taxRules[0].taxRate"\n                                                 key="order-line-item-tax-edit-default"\n                                                 size="small"\n                                                 placeholder="0">\n                                </sw-number-field>\n                            {% endblock %}\n\n                            {% block sw_order_line_items_grid_grid_columns_tax_content %}\n                                <template v-else-if="item.price && item.price.taxRules.length">\n                                    {{ showTaxValue(item) }}\n                                </template>\n                            {% endblock %}\n\n                        </template>\n                    {% endblock %}\n\n                    {% block sw_order_line_items_grid_grid_columns_weight %}\n                        <template #column-referenceWeight="{ item }">\n                            <template v-if="item.price.referencePrice">\n                                {{ item.price.referencePrice.purchaseUnit }}\n                                {{ item.price.referencePrice.unitName }}\n                            </template>\n                        </template>\n                    {% endblock %}\n\n                    {% block sw_order_line_items_grid_grid_columns_reference %}\n                        <template #column-referenceBase="{ item }">\n                            <template v-if="item.price.referencePrice">\n                                {{ item.price.referencePrice.price | currency(order.currency.shortName) }} / \n                                {{ item.price.referencePrice.referenceUnit }}\n                                {{ item.price.referencePrice.unitName }}\n                            </template>\n                        </template>\n                    {% endblock %}\n\n                    {% block sw_order_line_items_grid_grid_actions %}\n                        <template #actions="{ item }">\n                            {% block sw_order_line_items_grid_grid_actions_show %}\n                            <sw-context-menu-item :disabled="!isProductItem(item)"\n                                                  icon="default-eye-open"\n                                                  :routerLink="{ name: \'sw.product.detail\', params: { id: item.productId } }">\n                                {% block sw_order_line_items_grid_grid_actions_show_label %}\n                                    {{ $tc(\'sw-order.detailBase.contextMenuShowProduct\') }}\n                                {% endblock %}\n                            </sw-context-menu-item>\n                            {% endblock %}\n                        </template>\n                    {% endblock %}\n\n                    {% block sw_order_line_items_grid_bulk_actions %}\n                        <template #bulk>\n                            {% block sw_order_line_items_grid_bulk_actions_delete %}\n                                <a class="link link-danger" @click="onDeleteSelectedItems">\n                                    {{ $tc(\'global.default.delete\') }}\n                                </a>\n                            {% endblock %}\n                        </template>\n                    {% endblock %}\n\n                {% endblock %}\n\n            </sw-data-grid>\n        {% endblock %}\n    </sw-container>\n{% endblock %}\n'},"9rrT":function(e){e.exports=JSON.parse('{"sw-order":{"detailBase":{"columnWeight":"Weight","columnReferencePrice":"Reference Price","labelCreditCard":"Cardtype"},"list":{"columnDeliveryDate":"Date of delivery","columnPaymentType":"Cardtype","articleNumber":"Article number"}}}')},EBiV:function(e){e.exports=JSON.parse('{"sw-order":{"detailBase":{"columnWeight":"Gewicht","columnReferencePrice":"Grundpreis","labelCreditCard":"Kartentyp"},"list":{"columnDeliveryDate":"Lieferdatum","columnPaymentType":"Kartentyp","articleNumber":"Artikelnummer"}}}')},I2YR:function(e,n){e.exports='    {% block sw_order_list_grid_columns %}\n    {% block sw_order_list_grid_columns_customer_name %}\n        <template #column-orderCustomer.firstName="{ item }">\n            <router-link :to="{ name: \'sw.customer.detail\', params: { id: item.orderCustomer.customerId } }">\n                {{ item.orderCustomer.firstName }} {{ item.orderCustomer.lastName }}\n            </router-link>\n        </template>\n    {% endblock %}\n\n    {% block sw_order_list_grid_columns_billing_address %}\n        <template #column-billingAddressId="{ item }">\n            {{ getBillingAddress(item).street }},\n            {{ getBillingAddress(item).zipcode }}\n            {{ getBillingAddress(item).city }}\n        </template>\n    {% endblock %}\n\n    {% block sw_order_list_grid_columns_amount %}\n        <template #column-amountTotal="{ item }">\n            {{ item.amountTotal | currency(item.currency.translated.shortName) }}\n        </template>\n    {% endblock %}\n\n    {% block sw_order_list_grid_columns_state %}\n        <template #column-stateMachineState.name="{ item }">\n            <sw-label :variant="getVariantFromOrderState(item)" appearance="pill">\n                {{ item.stateMachineState.translated.name }}\n            </sw-label>\n        </template>\n    {% endblock %}\n\n    {% block sw_order_list_grid_columns_transaction_state %}\n        <template #column-transactions.last().stateMachineState.name="{ item }">\n            <sw-label v-if="item.transactions && item.transactions[0]"\n                        :variant="getVariantFromPaymentState(item)"\n                        appearance="pill">\n                {{ item.transactions.last().stateMachineState.translated.name }}\n            </sw-label>\n        </template>\n    {% endblock %}\n\n    {% block sw_order_list_grid_columns_delivery_state %}\n        <template #column-deliveries[0].stateMachineState.name="{ item }">\n            <sw-label v-if="item.deliveries && item.deliveries[0]"\n                        :variant="getVariantFromDeliveryState(item)"\n                        appearance="pill">\n                {{ item.deliveries[0].stateMachineState.translated.name }}\n            </sw-label>\n        </template>\n    {% endblock %}\n\n    {% block sw_order_list_grid_columns_order_date %}\n        <template #column-orderDateTime="{ item }">\n            {{ item.orderDateTime | date({hour: \'2-digit\', minute: \'2-digit\'}) }}\n        </template>\n    {% endblock %}\n\n    {% block sw_order_list_grid_columns_delivery_date %}\n        <template #column-customFields="{ item }">\n            <template v-if="item.customFields.delivery_date">\n                <strong>{{ item.customFields.delivery_date | date() }}<strong>\n            </template>\n        </template>\n    {% endblock %}\n    {% block sw_order_list_grid_columns_payment_type %}\n        <template #column-paymentType="{ item }">\n            <template v-if="item.transactions && \n            item.transactions[0] && \n            item.transactions[0].customFields">\n                <template v-for="payload of item.transactions[0].customFields.payone_transaction_data" v-if="payload.transaction && payload.transaction.cardtype">\n                    <sw-label v-if="payload.transaction.cardtype == \'M\'"                        \n                        appearance="pill">                        \n                        Mastercard\n                    </sw-label>\n                    <sw-label v-else-if="payload.transaction.cardtype == \'V\'"                        \n                        appearance="pill">\n                        Visa\n                    </sw-label>\n                </template>                \n            </template>\n        </template>\n    {% endblock %}\n{% endblock %}\n\n'},QR71:function(e,n){e.exports='{% block sw_order_detail_base_order_overview_right_column_slot %}\n\t<dt>\n\t\t{{ $tc(\'sw-customer.list.columnCustomerNumber\') }}\n\t</dt>\n\t<dd>\n\t\t{{ currentOrder.orderCustomer.customerNumber }}\n\t</dd>\n{% endblock %}\n{% block sw_order_detail_base_secondary_info_payment %}\n\t{% parent %}\n\t<template v-if="currentOrder.transactions.length > 0 && currentOrder.transactions[0].customFields">\n\t\t<template v-for="payload of currentOrder.transactions[0].customFields.payone_transaction_data" v-if="payload.transaction && payload.transaction.cardtype">\n\t\t\t<dt>\n\t\t\t\t{{ $tc(\'sw-order.detailBase.labelCreditCard\') }}\n\t\t\t</dt>\n\t\t\t<dd v-if="payload.transaction.cardtype == \'M\'">\n\t\t\t\tMastercard\n\t\t\t</dd>\n\t\t\t<dd v-else-if="payload.transaction.cardtype == \'V\'">\n\t\t\t\tVisa\n\t\t\t</dd>\n\t\t</template>\n\t</template>\n{% endblock %}\n'},cEVU:function(e,n,t){"use strict";t.r(n);var i=t("QR71"),r=t.n(i),l=t("5Vba"),o=t.n(l);Shopware.Component.override("sw-order-line-items-grid",{template:o.a,computed:{getLineItemColumns(){const e=this.$super("getLineItemColumns");return e.push({property:"referenceWeight",dataIndex:"price.referencePrice",label:"sw-order.detailBase.columnWeight",allowResize:!1,align:"right",inlineEdit:!0,width:"80px"}),e.push({property:"referenceBase",dataIndex:"price.referencePrice",label:"sw-order.detailBase.columnReferencePrice",allowResize:!1,align:"right",inlineEdit:!0,width:"80px"}),e.unshift({property:"articleNumber",label:"sw-order.list.articleNumber",allowResize:!1,align:"right",width:"80px"}),e}}});var a=t("I2YR"),s=t.n(a);Shopware.Component.override("sw-order-list",{template:s.a,computed:{orderColumns(){const e=this.getOrderColumns();return e.push({property:"customFields",label:"sw-order.list.columnDeliveryDate",allowResize:!1},{property:"paymentType",label:"sw-order.list.columnPaymentType",allowResize:!1}),e}}});var d=t("EBiV"),c=t("9rrT");Shopware.Locale.extend("de-DE",d),Shopware.Locale.extend("en-GB",c);var m=Shopware;m.Component,m.Mixin;Shopware.Component.override("sw-order-user-card",{template:r.a})}},[["cEVU","runtime"]]]);