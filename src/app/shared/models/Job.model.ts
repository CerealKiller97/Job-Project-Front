export interface IPostJob {
  title: string;
  email: string;
  description: string;
}

export interface IGetJob {
 id: string;
 title: string;
 description: string;
 state: "published" | "spam" | null;
 valid_until: string;
}
