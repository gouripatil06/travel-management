# Travel Management System

A single-page React application for managing travel package bookings with dynamic cost calculation.

## Features

- ✅ Display travel packages in a grid layout
- ✅ Search functionality to filter packages
- ✅ Select and book travel packages
- ✅ Dynamic cost calculation (no page reload)
- ✅ Form validation
- ✅ Booking summary with cost breakdown
- ✅ Responsive design

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Functional Components** with React Hooks

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── TravelPackageList.tsx  # Displays available packages
│   ├── BookingForm.tsx        # User input form
│   └── BookingSummary.tsx     # Booking confirmation
├── data/
│   └── travelPackages.ts      # Sample travel packages data
├── types.ts                    # TypeScript type definitions
├── App.tsx                     # Main application component
└── main.tsx                    # Application entry point
```

## How It Works

1. **Package Display**: Shows all available travel packages with search functionality
2. **Package Selection**: User selects a package to book
3. **Booking Form**: User enters booking details (name, email, travelers, date)
4. **Cost Calculation**: Total cost is calculated dynamically:
   - Base Cost = Package Price × Number of Travelers
   - Service Charge = 5% of Base Cost
   - GST = 18% of Base Cost
   - Total = Base + Service Charge + GST
5. **Booking Summary**: Shows complete booking details and cost breakdown
6. **Confirmation**: Final booking confirmation screen

## Key React Concepts Demonstrated

- Functional Components
- useState Hook for state management
- Props for component communication
- Event handlers for user interactions
- Dynamic rendering based on state
- Form validation
- No page reloads - all updates are reactive

## Development

The application uses:
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **React Hooks** for state management
- **Component-based architecture** for code organization
