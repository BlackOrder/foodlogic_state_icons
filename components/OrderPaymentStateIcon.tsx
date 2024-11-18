import { FaMoneyBillAlt } from 'react-icons/fa'; // Icon for Order PaymentState
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import React from 'react';

// Order Payment State styles
const orderPaymentStateStyles = {
  pending: { color: 'orange', label: 'Pending', steps: 1 }, // First step
  paid: { color: 'green', label: 'Paid', steps: 2 }, // Final step
};

type OrderPaymentState = keyof typeof orderPaymentStateStyles;

interface OrderPaymentStateIconProps {
  state: OrderPaymentState;
  size?: number; // Optional prop to adjust icon and progress bar size
}

const OrderPaymentStateIcon: React.FC<OrderPaymentStateIconProps> = ({
  state,
  size = 24,
}) => {
  const { color, label, steps } = orderPaymentStateStyles[state];

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <Tooltip>
        <TooltipTrigger>
          <FaMoneyBillAlt
            style={{ color, fontSize: `${size}px`, cursor: 'pointer' }}
          />
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>

      <div
        role="progressbar"
        aria-valuenow={steps}
        aria-valuemin={0}
        aria-valuemax={2}
        aria-label={`Progress: ${steps}/2`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
          gap: '5px',
        }}
      >
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            style={{
              width: `${size / 3}px`,
              height: `${size / 8}px`,
              backgroundColor: index < steps ? color : '#e0e0e0',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPaymentStateIcon;
