import { useCurrentLocation } from "./useCurrentLocation";

export default function Location() {
  const { currentLocation, getCurrentLocation, error, loading } =
    useCurrentLocation();

  if (error) {
    return <div>Error: controllare console</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex flex-col px-4 py-8 shadow-lg bg-green-200 rounded-md">
      <h1 className="text-xl mb-1 ">Current Location: {currentLocation}</h1>
      <button
        className="rounded-md bg-slate-400  "
        onClick={getCurrentLocation}>
        Get Current Location
      </button>
    </div>
  );
}
