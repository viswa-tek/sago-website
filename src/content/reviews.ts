export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  productMentioned?: string;
  verified: boolean;
}

export const reviews: Review[] = [];

export const averageRating = 4.9;
export const totalReviews = 32; // Based on Google Business Profile data
