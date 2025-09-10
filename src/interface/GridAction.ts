export interface GridAction {
  name: string; // Action name
  icon?: string; // Material icon name
  label: string; // Display text
  iconPath?: string;
  condition?: (item: any) => boolean; // Optional condition to show action
}
