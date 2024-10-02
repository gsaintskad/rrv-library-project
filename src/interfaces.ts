export interface BookFormState {
  title?: string;
  author?: string;
}
export interface IBook {
  id:number;
  title?: string;
  author?: string;
  year?:number;
  isFavorite?: boolean;
}
