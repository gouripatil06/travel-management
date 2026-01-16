import type { TravelPackage } from '../types';

export const travelPackages: TravelPackage[] = [
  {
    id: 1,
    destination: 'Bali, Indonesia',
    description: 'Experience the tropical paradise with beautiful beaches, ancient temples, and vibrant culture.',
    price: 45000,
    duration: '7 Days / 6 Nights',
    features: ['Hotel Stay', 'Breakfast Included', 'Airport Transfer', 'City Tour', 'Beach Activities'],
  },
  {
    id: 2,
    destination: 'Paris, France',
    description: 'Discover the City of Light with iconic landmarks, world-class museums, and exquisite cuisine.',
    price: 85000,
    duration: '5 Days / 4 Nights',
    features: ['Hotel Stay', 'Breakfast Included', 'Eiffel Tower Visit', 'Louvre Museum', 'River Cruise'],
  },
  {
    id: 3,
    destination: 'Tokyo, Japan',
    description: 'Explore the perfect blend of traditional culture and modern technology in Japan\'s capital.',
    price: 95000,
    duration: '6 Days / 5 Nights',
    features: ['Hotel Stay', 'Breakfast Included', 'Temple Visits', 'Shopping Tour', 'Traditional Dinner'],
  },
  {
    id: 4,
    destination: 'Dubai, UAE',
    description: 'Luxury and adventure await in this modern city with stunning architecture and desert experiences.',
    price: 75000,
    duration: '5 Days / 4 Nights',
    features: ['5-Star Hotel', 'Breakfast & Dinner', 'Burj Khalifa Visit', 'Desert Safari', 'Shopping'],
  },
  {
    id: 5,
    destination: 'Switzerland',
    description: 'Breathtaking Alpine scenery, charming villages, and world-class skiing experiences.',
    price: 120000,
    duration: '8 Days / 7 Nights',
    features: ['Mountain Resort', 'All Meals', 'Ski Pass', 'Cable Car Rides', 'Swiss Chocolate Tour'],
  },
  {
    id: 6,
    destination: 'Maldives',
    description: 'Ultimate beach paradise with crystal-clear waters, overwater villas, and water sports.',
    price: 150000,
    duration: '6 Days / 5 Nights',
    features: ['Overwater Villa', 'All Meals', 'Snorkeling', 'Spa Session', 'Sunset Cruise'],
  },
];
