interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View available tools from different outlets',
    'Request a tool rental from an outlet',
    'View active and past rentals',
    'Manage personal profile',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage company outlets',
    'Invite Admins to company',
    'View all rental transactions',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8520ffaf-0969-4791-8e4f-68a40965384c',
};
