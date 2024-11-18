'use client';

import React, { useState } from 'react';
import DeliveryStateIcon from '../components/DeliveryStateIcon';
import KitchenStateIcon from '../components/KitchenStateIcon';
import OrderPaymentStateIcon from '../components/OrderPaymentStateIcon';
import ReceiptPaymentStateIcon from '../components/ReceiptPaymentStateIcon';

export default function Home() {
  const [deliveryState, setDeliveryState] = useState<string | null>(
    'awaiting_delivery'
  );
  const [kitchenState, setKitchenState] = useState<string>(
    'waiting_confirmation'
  );
  const [orderPaymentState, setOrderPaymentState] = useState<string>('pending');
  const [receiptPaymentState, setReceiptPaymentState] =
    useState<string>('pending');

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Delivery Section */}
      <h1>Delivery State</h1>
      <DeliveryStateIcon state={deliveryState} type="delivery" size={48} />
      <div style={{ marginTop: '20px' }}>
        {[
          'null',
          'awaiting_delivery',
          'driver_assignment_pending',
          'driver_assigned',
          'out_for_delivery',
          'delivered',
        ].map((s) => (
          <button
            key={s}
            onClick={() => setDeliveryState(s === 'null' ? null : s)}
            style={{
              margin: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Kitchen Section */}
      <h1 style={{ marginTop: '40px' }}>Kitchen State</h1>
      <KitchenStateIcon state={kitchenState} size={48} />
      <div style={{ marginTop: '20px' }}>
        {['waiting_confirmation', 'in_preparation', 'ready'].map((s) => (
          <button
            key={s}
            onClick={() => setKitchenState(s)}
            style={{
              margin: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Order Payment State Section */}
      <h1 style={{ marginTop: '40px' }}>Order Payment State</h1>
      <OrderPaymentStateIcon state={orderPaymentState} size={48} />
      <div style={{ marginTop: '20px' }}>
        {['pending', 'paid'].map((s) => (
          <button
            key={s}
            onClick={() => setOrderPaymentState(s)}
            style={{
              margin: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Receipt Payment State Section */}
      <h1 style={{ marginTop: '40px' }}>Receipt Payment State</h1>
      <ReceiptPaymentStateIcon state={receiptPaymentState} size={48} />
      <div style={{ marginTop: '20px' }}>
        {['pending', 'under_process', 'failed', 'refunded', 'paid'].map((s) => (
          <button
            key={s}
            onClick={() => setReceiptPaymentState(s)}
            style={{
              margin: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
