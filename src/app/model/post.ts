export interface Post {
  title: string;
  image: string;
  detail: string;
  lokasi: string;
  link: string;
  view: number;
  imageId: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permission: [];
  creator: {
    username: string;
    email: string;
    avatar: string;
    accountId: string;
    imageId: string;
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    $permission: [];
    $databseId: string;
    $collectionId: string;
  };
  $databseId: string;
  $collectionId: string;
}
