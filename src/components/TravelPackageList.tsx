import type { TravelPackage } from '../types';

interface TravelPackageListProps {
  packages: TravelPackage[];
  onSelectPackage: (pkg: TravelPackage) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const TravelPackageList = ({
  packages,
  onSelectPackage,
  searchQuery,
  onSearchChange,
}: TravelPackageListProps) => {
  const filteredPackages = packages.filter((pkg) =>
    pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Travel Packages</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search packages by destination..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
          />
          <svg
            className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No packages found matching your search.
          </div>
        ) : (
          filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.destination}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{pkg.description}</p>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <p className="text-sm text-gray-500 mb-2 font-medium">{pkg.duration}</p>
                  <p className="text-2xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-400 mt-1">per person</p>
                </div>
                <div className="mb-5">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Features:</p>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                >
                  Select Package
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
