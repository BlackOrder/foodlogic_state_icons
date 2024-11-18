import { FaReceipt } from 'react-icons/fa'; // Icon for Receipt PaymentState
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import React from 'react';

// Receipt Payment State styles
const receiptPaymentStateStyles = {
  pending: { color: 'orange', label: 'Pending', steps: 1 }, // Step 1
  failed: { color: 'red', label: 'Failed', steps: 1 }, // Same step as pending
  refunded: { color: 'purple', label: 'Refunded', steps: 1 }, // Same step as pending
  under_process: { color: 'blue', label: 'Under Process', steps: 2 }, // Step 2
  paid: { color: 'green', label: 'Paid', steps: 3 }, // Final step
};

type ReceiptPaymentState = keyof typeof receiptPaymentStateStyles;

interface ReceiptPaymentStateIconProps {
  state: ReceiptPaymentState;
  size?: number; // Optional prop to adjust icon and progress bar size
}

const ReceiptPaymentStateIcon: React.FC<ReceiptPaymentStateIconProps> = ({
  state,
  size = 24,
}) => {
  const { color, label, steps } = receiptPaymentStateStyles[state];

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <Tooltip>
        <TooltipTrigger>
          <FaReceipt
            style={{ color, fontSize: `${size}px`, cursor: 'pointer' }}
          />
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>

      <div
        role="progressbar"
        aria-valuenow={steps}
        aria-valuemin={0}
        aria-valuemax={3}
        aria-label={`Progress: ${steps}/3`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
          gap: '5px',
        }}
      >
        {[...Array(3)].map((_, index) => (
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

export default ReceiptPaymentStateIcon;
