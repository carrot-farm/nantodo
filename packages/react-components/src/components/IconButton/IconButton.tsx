import { Button, ButtonProps } from "@carrot-farm/mongsil-ui";

export interface IconButtonProps extends ButtonProps {
  className?: string;
  children: React.ReactNode;
}

function IconButton({ className = "", children, ...args }: IconButtonProps) {
  return (
    <Button
      className={`rounded-full w-8 h-8 p-0 flex items-center justify-center ${className}`}
      {...args}
    >
      {children}
    </Button>
  );
}

export default IconButton;
