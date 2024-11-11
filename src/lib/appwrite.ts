import { Client, Account, Avatars, Databases, Storage } from 'appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.topyk.jajanyuk',
  projectId: '66cd39580025d1ee8ecc',
  databaseId: '66cd3a00000fac7a5885',
  userCollectionId: '66cd3a17002027072c06',
  postCollectionId: '66cd3c2900348c7cd0e6',
  ratingCollectionId: '66cf0c240026edd7f483',
  komenCollectionId: '66cfeacf00349a024cc0',
  likeCollectionId: '66d3ef2c0033dcf74b60',
  storageId: '66cd3df7001dafa7dafe',
};
const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  postCollectionId,
  ratingCollectionId,
  komenCollectionId,
  likeCollectionId,
  storageId,
} = config;

export const client = new Client().setEndpoint(endpoint).setProject(projectId);

// export const account = new Account(client);
// export { ID } from 'appwrite';
const avatars = new Avatars(client);
export const databases = new Databases(client);
export const storage = new Storage(client);