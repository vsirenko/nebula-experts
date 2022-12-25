export interface Expert {
  id: string;
  name: string;
  astrology_type: string;
  image: string;
  image_mini: string;
  slogan: string;
  description: string;
  description_experience: string;
  rating: number;
  experience: number;
  feedback_count: number;
  total_orders: number;
  sort_order: number;
  joined_time: number;
  languages?: LanguagesEntity[] | null;
  specializations?: SpecializationsEntity[] | null;
  certificates?: null[] | null;
  offers?: null[] | null;
  video: Video;
  chat_offers?: ChatOffersEntity[] | null;
  subscription: Subscription;
  is_personal: boolean;
  is_followed: boolean;
  status: string;
}
export interface LanguagesEntity {
  code: string;
  name: string;
  native_name: string;
}
export interface SpecializationsEntity {
  id: number;
  name: string;
}
export interface Video {
  src?: null;
}
export interface ChatOffersEntity {
  type: string;
  price: number;
  limit: number;
  limit_is_exhausted: boolean;
  offer?: null;
}
export interface Subscription {
  type: string;
}
