import { useCallback, useMemo, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export type MapJob = {
  id: string;
  lat: number;
  lng: number;
  title: string;
  trade?: string;
};

export type UserLocation = {
  lat: number;
  lng: number;
};

// TODO: replace mock jobs with real nearby-jobs data source
export const sampleUserLocation: UserLocation = {
  lat: -37.8136,
  lng: 144.9631,
};

// TODO: replace mock jobs with real nearby-jobs data source
export const sampleMapJobs: MapJob[] = [
  {
    id: 'job-101',
    lat: -37.7984,
    lng: 144.9788,
    title: 'Bathroom Renovation - Leaking Shower Resealing',
    trade: 'Plumbing',
  },
  {
    id: 'job-102',
    lat: -37.8183,
    lng: 144.991,
    title: 'Switchboard Upgrade - 3 Phase',
    trade: 'Electrical',
  },
  {
    id: 'job-103',
    lat: -37.8025,
    lng: 144.988,
    title: 'Emergency Burst Pipe Repair',
    trade: 'Plumbing',
  },
  {
    id: 'job-104',
    lat: -37.838,
    lng: 144.992,
    title: 'Kitchen Tiling - 12sqm Floor',
    trade: 'Tiling',
  },
];

type JobsNearYouMapProps = {
  userLocation: UserLocation;
  jobs: MapJob[];
  onJobClick?: (jobId: string) => void;
};

const MAP_HEIGHT = 300;

const mapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  zoomControl: true,
  mapTypeControl: false,
} satisfies google.maps.MapOptions;

function MapSkeleton() {
  return (
    <div
      className="w-full animate-pulse rounded-xl bg-slate-100"
      style={{ height: MAP_HEIGHT }}
      aria-label="Loading map"
    >
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-slate-200 border-t-slate-400" />
      </div>
    </div>
  );
}

function MapUnavailable() {
  return (
    <div
      className="flex w-full flex-col items-center justify-center rounded-xl bg-slate-100 text-center"
      style={{ height: MAP_HEIGHT }}
    >
      <MapPin className="mb-2 h-6 w-6 text-slate-400" aria-hidden="true" />
      <p className="text-sm font-medium text-slate-600">Map unavailable</p>
      <p className="mt-1 max-w-xs text-xs text-slate-400">
        Add your Google Maps API key to <code className="text-slate-500">.env.local</code> to enable
        the map.
      </p>
    </div>
  );
}

export function JobsNearYouMap({ userLocation, jobs, onJobClick }: JobsNearYouMapProps) {
  const navigate = useNavigate();
  const [activeJobId, setActiveJobId] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'tradehub-google-maps',
    googleMapsApiKey: apiKey ?? '',
  });

  const handleJobClick = useCallback(
    (jobId: string) => {
      if (onJobClick) {
        onJobClick(jobId);
      } else {
        navigate(`/jobs/${jobId}`);
      }
    },
    [navigate, onJobClick],
  );

  const userMarkerIcon = useMemo((): google.maps.Symbol | undefined => {
    if (!isLoaded) return undefined;
    return {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: '#2563EB',
      fillOpacity: 1,
      strokeColor: '#FFFFFF',
      strokeWeight: 2,
    };
  }, [isLoaded]);

  const activeJob = jobs.find((job) => job.id === activeJobId);

  if (!apiKey || apiKey === 'YOUR_KEY_HERE') {
    return <MapUnavailable />;
  }

  if (loadError) {
    return <MapUnavailable />;
  }

  if (!isLoaded) {
    return <MapSkeleton />;
  }

  return (
    <GoogleMap
      mapContainerClassName="w-full rounded-xl overflow-hidden"
      mapContainerStyle={{ height: MAP_HEIGHT, width: '100%' }}
      center={userLocation}
      zoom={12}
      options={mapOptions}
    >
      <Marker position={userLocation} icon={userMarkerIcon} title="Your location" />

      {jobs.map((job) => (
        <Marker
          key={job.id}
          position={{ lat: job.lat, lng: job.lng }}
          title={job.title}
          onMouseOver={() => setActiveJobId(job.id)}
          onMouseOut={() => setActiveJobId((current) => (current === job.id ? null : current))}
          onClick={() => {
            setActiveJobId(job.id);
            handleJobClick(job.id);
          }}
        />
      ))}

      {activeJob && (
        <InfoWindow
          position={{ lat: activeJob.lat, lng: activeJob.lng }}
          onCloseClick={() => setActiveJobId(null)}
        >
          <div className="max-w-[200px] pr-2">
            <p className="text-sm font-medium text-[#0F172A]">{activeJob.title}</p>
            {activeJob.trade && (
              <p className="mt-0.5 text-xs text-[#2563EB]">{activeJob.trade}</p>
            )}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
