import { Injectable } from '@angular/core';

declare var pendo: any;

@Injectable()
export class PendoService {
  public initialize(user: any): void {
    let userUniqueIdentifier: string = `${user.siteName}-${user.id}-${user.firstName.toLowerCase()}-${user.lastName.toLowerCase()}`;
    let accountUniqueIdentifier: string = `${user.siteName}-${user.accountId}`;
    pendo.initialize({
      apiKey: '7e5da402-5d29-41b0-5579-6e149b0a28f2',
      visitor: { id: userUniqueIdentifier, email: user.emailAddress },
      account: { id: accountUniqueIdentifier }
    });
  }
}