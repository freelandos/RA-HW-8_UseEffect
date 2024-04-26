export interface IUser {
  id: number;
  name: string;
}

export interface IUserDetail {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  }
}

export interface ListProps {
  users: IUser[];
}

export interface DetailsProps {
  info: IUser;
}
