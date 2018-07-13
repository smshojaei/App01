export class Contact {
    constructor(
      public firstName: string,
      public lastName: string,
      public militaryStatus?: string,
      public married?: boolean,
      public address?: string,
      public phoneNumber?: string,
      public email?: string) {
    }
  }
  