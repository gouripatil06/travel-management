import type { BookingData } from '../types';

interface BookingSummaryProps {
  bookingData: BookingData | null;
  onConfirm: () => void;
  onReset: () => void;
}

export const BookingSummary = ({ bookingData, onConfirm, onReset }: BookingSummaryProps) => {
  if (!bookingData) return null;

  const { package: pkg, details } = bookingData;
  const baseCost = pkg.price * details.travelers;
  const serviceCharge = baseCost * 0.05; // 5% service charge
  const gst = baseCost * 0.18; // 18% GST
  const finalTotal = baseCost + serviceCharge + gst;

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-green-200">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Booking Summary</h2>
        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
          Ready to Book
        </span>
      </div>

      <div className="space-y-4 mb-6">
        <div className="border-b pb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Package Details</h3>
          <p className="text-gray-800 font-medium">{pkg.destination}</p>
          <p className="text-sm text-gray-600">{pkg.duration}</p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Traveler Information</h3>
          <p className="text-gray-800"><span className="font-medium">Name:</span> {details.name}</p>
          <p className="text-gray-800"><span className="font-medium">Email:</span> {details.email}</p>
          <p className="text-gray-800"><span className="font-medium">Travelers:</span> {details.travelers}</p>
          <p className="text-gray-800"><span className="font-medium">Travel Date:</span> {new Date(details.travelDate).toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>

        {details.specialRequests && (
          <div className="border-b pb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Special Requests</h3>
            <p className="text-gray-600 italic">{details.specialRequests}</p>
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-xl border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 text-lg">Cost Breakdown</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-700">Package Price ({details.travelers} {details.travelers === 1 ? 'person' : 'people'}):</span>
              <span className="text-gray-900 font-semibold">₹{baseCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-700">Service Charge (5%):</span>
              <span className="text-gray-900 font-semibold">₹{serviceCharge.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-700">GST (18%):</span>
              <span className="text-gray-900 font-semibold">₹{gst.toLocaleString()}</span>
            </div>
            <div className="border-t-2 border-gray-300 pt-3 mt-3 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total Amount:</span>
              <span className="text-3xl font-bold text-green-600">₹{finalTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onConfirm}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Confirm Booking
        </button>
        <button
          onClick={onReset}
          className="flex-1 bg-gray-200 text-gray-800 py-3.5 px-4 rounded-lg hover:bg-gray-300 transition-all duration-200 font-semibold shadow-sm"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};
