import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import { FaTruck } from 'react-icons/fa';
import React from 'react';

type DeliveryState = keyof typeof deliveryStateStyles;

interface DeliveryStateIconProps {
  state: DeliveryState | null;
  size?: number;
}

const deliveryStateStyles = {
  null: { color: 'gray', label: 'Not Started', steps: 0 },
  awaiting_delivery: { color: 'blue', label: 'Awaiting Delivery', steps: 1 },
  driver_assignment_pending: {
    color: 'orange',
    label: 'Driver Assignment Pending',
    steps: 2,
  },
  driver_assigned: { color: 'purple', label: 'Driver Assigned', steps: 3 },
  out_for_delivery: { color: 'yellow', label: 'Out for Delivery', steps: 4 },
  delivered: { color: 'green', label: 'Delivered', steps: 5 },
};

const DeliveryStateIcon: React.FC<DeliveryStateIconProps> = ({
  state = null,
  size = 24,
}) => {
  const { color, label, steps } = deliveryStateStyles[state || 'null'];

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <Tooltip>
        <TooltipTrigger>
          <FaTruck
            style={{ color, fontSize: `${size}px`, cursor: 'pointer' }}
          />
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>

      <div
        role="progressbar"
        aria-valuenow={steps}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-label={`Progress: ${steps}/5`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
          gap: '5px',
        }}
      >
        {[...Array(5)].map((_, index) => (
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

export default DeliveryStateIcon;
