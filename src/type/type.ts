type WindowItem = {
  id: string;
  text: string;
  icon: React.ReactElement;
  desc?: string;
  show: boolean;
  taskbar: boolean;
};

export type Windows = WindowItem[];