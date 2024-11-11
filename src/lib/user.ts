import { Account, Avatars } from 'appwrite';
import { client, config } from './appwrite';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // const {
  //     databaseId,
  //     userCollectionId,
  //     storageId
  // } = config;

  account = new Account(client);
  avatars = new Avatars(client);

  signIn = async (form: any) => {
    try {
      const session = await this.account.createEmailPasswordSession(
        form.email,
        form.password
      );
      return session;
    } catch (error: unknown) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };
}
