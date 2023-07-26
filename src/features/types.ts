export interface State {
  error: string | null;
  signingUp: boolean;
  signingIn: boolean;
  token: string | null;
}

export type createImg = {
  name: string;
  description: string;
  address: string;
  phone: string;
  price: string;
  image: any;
  category: string;
};
