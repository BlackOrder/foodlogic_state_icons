import { FaUtensils } from 'react-icons/fa';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import React from 'react';

// Kitchen State styles
const kitchenStateStyles = {
  waiting_confirmation: {
    color: 'gray',
    label: 'Waiting Confirmation',
    steps: 0,
  }, // Step 0
  in_preparation: { color: 'orange', label: 'In Preparation', steps: 1 },
  ready: { color: 'green', label: 'Ready', steps: 2 }, // Final step
};

type KitchenState = keyof typeof kitchenStateStyles;

interface KitchenStateIconProps {
  state: KitchenState;
  size?: number; // Optional prop to adjust icon and progress bar size
}

const KitchenStateIcon: React.FC<KitchenStateIconProps> = ({
  state,
  size = 24,
}) => {
  const { color, label, steps } = kitchenStateStyles[state];

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <Tooltip>
        <TooltipTrigger>
          <FaUtensils
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

export default KitchenStateIcon;
