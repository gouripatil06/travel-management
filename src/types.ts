export interface TravelPackage {
  id: number;
  destination: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  image?: string;
}

export interface BookingDetails {
  name: string;
  email: string;
  travelers: number;
  travelDate: string;
  specialRequests: string;
}

export interface BookingData {
  package: TravelPackage;
  details: BookingDetails;
  totalCost: number;
}
