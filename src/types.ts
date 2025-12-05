export interface Toggler {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

export interface ButtonProps {
  label?: string;
  icon?: boolean;
  action?: () => void;
}

export interface Habit {
  title: string;
  description: string;
  duration: number;
}
export interface HabitCardProps {
  habit: Habit;
  range: number;
  more: () => void;
  action: () => void;
}

export type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export interface Tab {
  value: string
  label: React.ReactNode
}

export interface TabBarProps {
  tabs: Tab[]
  value: string
  onValueChange: (value: string) => void
  className?: string
}

