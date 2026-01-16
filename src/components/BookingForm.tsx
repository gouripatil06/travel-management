import type { TravelPackage } from '../types';
import type { BookingDetails } from '../types';

interface BookingFormProps {
  selectedPackage: TravelPackage;
  bookingDetails: BookingDetails;
  onInputChange: (field: keyof BookingDetails, value: string | number) => void;
  onCalculate: () => void;
}

export const BookingForm = ({
  selectedPackage,
  bookingDetails,
  onInputChange,
  onCalculate,
}: BookingFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
      
      <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-100">
        <h3 className="font-bold text-gray-900 mb-2 text-lg">Selected Package: {selectedPackage.destination}</h3>
        <p className="text-sm text-gray-600 mb-2">{selectedPackage.duration}</p>
        <p className="text-xl font-bold text-blue-600 mt-2">₹{selectedPackage.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">per person</span></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={bookingDetails.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={bookingDetails.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Travelers <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="travelers"
            required
            min="1"
            max="10"
            value={bookingDetails.travelers}
            onChange={(e) => onInputChange('travelers', parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
            Travel Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="travelDate"
            required
            min={today}
            value={bookingDetails.travelDate}
            onChange={(e) => onInputChange('travelDate', e.target.value)}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            value={bookingDetails.specialRequests}
            onChange={(e) => onInputChange('specialRequests', e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
            placeholder="Any special requests or requirements..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3.5 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Calculate Total Cost
        </button>
      </form>
    </div>
  );
};
