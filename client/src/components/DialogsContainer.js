import React from 'react';

import AccountDialog from 'containers/Dialogs/AccountDialog';
import InviteUserDialog from 'containers/Dialogs/InviteUserDialog';
import UserFormDialog from 'containers/Dialogs/UserFormDialog';
import ItemCategoryDialog from 'containers/Dialogs/ItemCategoryDialog';
import CurrencyFormDialog from 'containers/Dialogs/CurrencyFormDialog';
import ExchangeRateFormDialog from 'containers/Dialogs/ExchangeRateFormDialog';

import InventoryAdjustmentDialog from 'containers/Dialogs/InventoryAdjustmentFormDialog';
import PaymentViaVoucherDialog from 'containers/Dialogs/PaymentViaVoucherDialog';
import KeyboardShortcutsDialog from 'containers/Dialogs/keyboardShortcutsDialog';
import ContactDuplicateDialog from 'containers/Dialogs/ContactDuplicateDialog';
import QuickPaymentReceiveFormDialog from 'containers/Dialogs/QuickPaymentReceiveFormDialog';
import QuickPaymentMadeFormDialog from 'containers/Dialogs/QuickPaymentMadeFormDialog';
import AllocateLandedCostDialog from 'containers/Dialogs/AllocateLandedCostDialog';
import InvoicePdfPreviewDialog from 'containers/Dialogs/InvoicePdfPreviewDialog';

/**
 * Dialogs container.
 */
export default function DialogsContainer() {
  return (
    <div>
      <AccountDialog dialogName={'account-form'} />
      <CurrencyFormDialog dialogName={'currency-form'} />
      <InviteUserDialog dialogName={'invite-user'} />
      <UserFormDialog dialogName={'user-form'} />
      <ExchangeRateFormDialog dialogName={'exchangeRate-form'} />
      <ItemCategoryDialog dialogName={'item-category-form'} />
      <InventoryAdjustmentDialog dialogName={'inventory-adjustment'} />
      <PaymentViaVoucherDialog dialogName={'payment-via-voucher'} />
      <KeyboardShortcutsDialog dialogName={'keyboard-shortcuts'} />
      <ContactDuplicateDialog dialogName={'contact-duplicate'} />
      <QuickPaymentReceiveFormDialog dialogName={'quick-payment-receive'} />
      <QuickPaymentMadeFormDialog dialogName={'quick-payment-made'} />
      <AllocateLandedCostDialog dialogName={'allocate-landed-cost'} />
      <InvoicePdfPreviewDialog dialog={'invoice-pdf-preview'} />
    </div>
  );
}
