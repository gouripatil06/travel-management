# Quick Start Guide

## Run the Application

```bash
# Install dependencies (if not already done)
pnpm install

# Start development server
pnpm dev

# The app will open at http://localhost:5173
```

## Features Implemented

✅ **Single Page Application** - No page reloads
✅ **Travel Package Display** - Shows all available packages in a grid
✅ **Search Functionality** - Filter packages by destination or description
✅ **Package Selection** - Click "Select Package" to book
✅ **Booking Form** - Enter name, email, travelers, date, and special requests
✅ **Dynamic Cost Calculation** - Total cost updates automatically:
   - Base Cost = Package Price × Number of Travelers
   - Service Charge = 5% of base cost
   - GST = 18% of base cost
   - Total = All above combined
✅ **Form Validation** - Required fields with proper input types
✅ **Booking Summary** - Complete breakdown of booking and costs
✅ **Booking Confirmation** - Final confirmation screen
✅ **Responsive Design** - Works on mobile, tablet, and desktop

## Project Structure

- `src/App.tsx` - Main component with state management
- `src/components/TravelPackageList.tsx` - Package display with search
- `src/components/BookingForm.tsx` - User input form
- `src/components/BookingSummary.tsx` - Booking details and cost breakdown
- `src/data/travelPackages.ts` - Sample travel packages data
- `src/types.ts` - TypeScript type definitions

## Key React Concepts Used

- Functional Components
- useState Hook
- Props
- Event Handlers
- Conditional Rendering
- Dynamic Updates (no page reload)
