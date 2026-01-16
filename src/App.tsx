import { useState, useEffect } from 'react';
import { TravelPackageList } from './components/TravelPackageList';
import { BookingForm } from './components/BookingForm';
import { BookingSummary } from './components/BookingSummary';
import { travelPackages } from './data/travelPackages';
import type { TravelPackage, BookingDetails, BookingData } from './types';

function App() {
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    name: '',
    email: '',
    travelers: 1,
    travelDate: '',
    specialRequests: '',
  });
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  // Reset booking data when package changes
  useEffect(() => {
    if (selectedPackage) {
      setBookingData(null);
      setIsBookingConfirmed(false);
    }
  }, [selectedPackage]);

  const handleSelectPackage = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
    setBookingData(null);
    setIsBookingConfirmed(false);
  };

  const handleInputChange = (field: keyof BookingDetails, value: string | number) => {
    setBookingDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Reset booking data when inputs change
    if (bookingData) {
      setBookingData(null);
    }
  };

  const calculateTotalCost = () => {
    if (!selectedPackage) return;

    const baseCost = selectedPackage.price * bookingDetails.travelers;
    const serviceCharge = baseCost * 0.05; // 5% service charge
    const gst = baseCost * 0.18; // 18% GST
    const totalCost = baseCost + serviceCharge + gst;

    const newBookingData: BookingData = {
      package: selectedPackage,
      details: bookingDetails,
      totalCost: totalCost,
    };

    setBookingData(newBookingData);
  };

  const handleConfirmBooking = () => {
    setIsBookingConfirmed(true);
    // In a real application, you would send this data to a backend API
    console.log('Booking confirmed:', bookingData);
  };

  const handleReset = () => {
    setSelectedPackage(null);
    setBookingDetails({
      name: '',
      email: '',
      travelers: 1,
      travelDate: '',
      specialRequests: '',
    });
    setBookingData(null);
    setIsBookingConfirmed(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            🌴 Travel Management System
          </h1>
          <p className="text-gray-600 text-lg font-medium">Book your dream vacation with ease</p>
        </header>

        {isBookingConfirmed ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-10 text-center border-2 border-green-300">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="w-14 h-14 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Booking Confirmed! 🎉</h2>
                <p className="text-gray-700 text-lg mb-1">
                  Thank you, <span className="font-bold text-gray-900">{bookingDetails.name}</span>!
                </p>
                <p className="text-gray-600 mt-2">
                  Your booking for <span className="font-semibold text-gray-800">{selectedPackage?.destination}</span> has been confirmed.
                </p>
                <p className="text-gray-500 text-sm mt-4">
                  A confirmation email has been sent to <span className="font-medium text-gray-700">{bookingDetails.email}</span>
                </p>
              </div>
              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-10 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book Another Package
              </button>
            </div>
          </div>
        ) : bookingData ? (
          <div className="max-w-3xl mx-auto">
            <BookingSummary
              bookingData={bookingData}
              onConfirm={handleConfirmBooking}
              onReset={handleReset}
            />
          </div>
        ) : selectedPackage ? (
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <button
                onClick={() => {
                  setSelectedPackage(null);
                  setBookingData(null);
                }}
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Packages
              </button>
            </div>
            <BookingForm
              selectedPackage={selectedPackage}
              bookingDetails={bookingDetails}
              onInputChange={handleInputChange}
              onCalculate={calculateTotalCost}
            />
          </div>
        ) : (
          <TravelPackageList
            packages={travelPackages}
            onSelectPackage={handleSelectPackage}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        )}
      </div>
    </div>
  );
}

export default App;
