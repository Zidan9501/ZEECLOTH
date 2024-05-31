// Utökar Express namespace för att inkludera en user-egenskap i Request-gränssnittet
declare namespace Express {
  export interface Request {
    user: {
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      token: string;
    };
  }
}
