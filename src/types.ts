export type Rule = {
  id: number;
  description: string;
  validator: (password: string) => boolean;
};