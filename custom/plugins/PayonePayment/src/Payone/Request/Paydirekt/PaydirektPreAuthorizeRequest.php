<?php

declare(strict_types=1);

namespace PayonePayment\Payone\Request\Paydirekt;

use PayonePayment\Struct\PaymentTransaction;
use Shopware\Core\Checkout\Customer\Aggregate\CustomerAddress\CustomerAddressEntity;
use Shopware\Core\Framework\Context;

class PaydirektPreAuthorizeRequest extends AbstractPaydirektAuthorizeRequest
{
    public function getRequestParameters(
        PaymentTransaction $transaction,
        Context $context,
        CustomerAddressEntity $shippingAddress
    ): array {
        return array_merge(parent::getRequestParameters($transaction, $context, $shippingAddress), [
            'request' => 'preauthorization',
        ]);
    }
}
