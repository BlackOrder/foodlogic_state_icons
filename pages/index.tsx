import DeliveryStateIcon from '../components/DeliveryStateIcon';
import React, { useState } from 'react';

export default function Home() {
  const [state, setState] = useState<string | null>(null);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Delivery State Progress Test</h1>
      <DeliveryStateIcon state={state} />

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
            onClick={() => setState(s === 'null' ? null : s)}
            style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer' }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
