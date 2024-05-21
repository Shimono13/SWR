import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     // Fetch current location when component mounts
  //     getCurrentLocation();
  //   }, []);

  const getCurrentLocation = () => {
    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching current location:", error);
        setError(error.message);
        setIsLoading(false);
      }
    );
  };

  return {
    currentLocation,
    getCurrentLocation,
    error,
    loading: isLoading,
  };
}
