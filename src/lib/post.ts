import { Account, Avatars, Query } from 'appwrite';
import { client, config, databases } from './appwrite';
import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { merge } from './helper';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getAllPosts = async () => {
    try {
      const posts = await databases.listDocuments(
        config.databaseId,
        config.postCollectionId,
        [Query.orderDesc('$createdAt')]
      );
      return posts.documents;
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  getAllPostPerPage = async (offset: number, limit: number) => {
    try {
      const posts = await databases.listDocuments(
        config.databaseId,
        config.postCollectionId,
        [Query.orderDesc('$createdAt'), Query.limit(limit), Query.offset(offset)]
      );
      return posts.documents;
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  // public getAllPostPerPage(offset:number,limit:number) : Observable<object> {
  //     return databases.listDocuments(
  //             config.databaseId,
  //             config.postCollectionId,
  //             [Query.orderDesc('$createdAt'), Query.limit(limit), Query.offset(offset)]
  //     );
  // }

  getMostViewPosts = async () => {
    try {
      const posts = await databases.listDocuments(
        config.databaseId,
        config.postCollectionId,
        [Query.orderDesc('view'), Query.limit(7)]
      );
      return posts.documents;
    } catch (error) {
      console.error(error);
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  searchPosts = async (query: string) => {
    try {
      const posts = await databases.listDocuments(
        config.databaseId,
        config.postCollectionId,
        [Query.search('title', query), Query.orderAsc('title')]
      );
      
      const details = await databases.listDocuments(
        config.databaseId,
        config.postCollectionId,
        [Query.search('detail', query), Query.orderAsc('title')]
      );
      
      const c = merge(posts.documents, details.documents);

      return c;
    } catch (error) {
      console.error(error);
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  search(query: string) {
    return from(this.searchPosts(query));
  }
}
