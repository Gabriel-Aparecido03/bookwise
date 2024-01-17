export interface UserInfoType {
  userPhoto: string | null;
  userName: string | null;
  createdAt: Date;
  ratedBooks: number;
  authors: number;
  mostReadedCategory: string | undefined;
  totalPagesReaded: number;
}