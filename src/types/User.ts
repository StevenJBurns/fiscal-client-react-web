export interface User {
  name: string,
  emails: Emails,
  primaryEmail: number,
};

export type Emails = Array<string>;