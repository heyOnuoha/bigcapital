import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  NavbarGroup,
  Classes,
  NavbarDivider,
  Intent,
  PopoverInteractionKind,
  Position,
  MenuItem,
  Menu,
  Popover,
} from '@blueprintjs/core';
import clsx from 'classnames';
import DashboardActionsBar from 'components/Dashboard/DashboardActionsBar';

import { useVendorDetailsDrawerContext } from './VendorDetailsDrawerProvider';

import withAlertsActions from 'containers/Alert/withAlertActions';
import withDrawerActions from 'containers/Drawer/withDrawerActions';

import { Can, Icon, FormattedMessage as T } from 'components';
import {
  AbilitySubject,
  Invoice_Abilities,
  Payment_Made_Abilities,
  Vendor_Abilities,
} from '../../../common/abilityOption';
import { safeCallback, compose } from 'utils';

/**
 * Vendor details actions bar.
 */
function VendorDetailsActionsBar({
  // #withAlertsActions
  openAlert,

  // #withDrawerActions
  closeDrawer,
}) {
  const { vendor, vendorId } = useVendorDetailsDrawerContext();
  const history = useHistory();

  // Handle edit vendor.
  const onEditContact = () => {
    history.push(`/vendors/${vendorId}/edit`);
    closeDrawer('vendor-details-drawer');
  };

  // Handle delete vendor.
  const onDeleteContact = () => {
    openAlert(`vendor-delete`, { contactId: vendorId });
  };

  const handleNewInvoiceClick = () => {
    history.push('bills/new');
    closeDrawer('vendor-details-drawer');
  };

  const handleNewPaymentClick = () => {
    history.push('payment-mades/new');
    closeDrawer('vendor-details-drawer');
  };

  return (
    <DashboardActionsBar>
      <NavbarGroup>
        <Popover
          content={
            <Menu>
              <Can I={Invoice_Abilities.Create} a={AbilitySubject.Invoice}>
                <MenuItem
                  text={<T id={'vendor.drawer.action.new_invoice'} />}
                  onClick={handleNewInvoiceClick}
                />
              </Can>
              <Can
                I={Payment_Made_Abilities.Create}
                a={AbilitySubject.PaymentMade}
              >
                <MenuItem
                  text={<T id={'vendor.drawer.action.new_payment'} />}
                  onClick={handleNewPaymentClick}
                />
              </Can>
            </Menu>
          }
          minimal={true}
          interactionKind={PopoverInteractionKind.CLICK}
          position={Position.BOTTOM_LEFT}
        >
          <Button
            className={clsx(Classes.MINIMAL)}
            text={<T id={'vendor.drawer.action.new_transaction'} />}
            icon={<Icon icon={'plus'} />}
          />
        </Popover>
        <NavbarDivider />
        <Can I={Vendor_Abilities.Edit} a={AbilitySubject.Vendor}>
          <Button
            className={Classes.MINIMAL}
            icon={<Icon icon="pen-18" />}
            text={<T id={'vendor.drawer.action.edit'} />}
            onClick={safeCallback(onEditContact)}
          />
          <NavbarDivider />
        </Can>
        <Can I={Vendor_Abilities.Delete} a={AbilitySubject.Vendor}>
          <Button
            className={Classes.MINIMAL}
            icon={<Icon icon={'trash-16'} iconSize={16} />}
            text={<T id={'vendor.drawer.action.delete'} />}
            intent={Intent.DANGER}
            onClick={safeCallback(onDeleteContact)}
          />
        </Can>
      </NavbarGroup>
    </DashboardActionsBar>
  );
}

export default compose(
  withDrawerActions,
  withAlertsActions,
)(VendorDetailsActionsBar);
