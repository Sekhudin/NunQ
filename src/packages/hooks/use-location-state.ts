'use client';
import React from 'react';
import useMounted from './use-mounted';

type LocationState = Pick<
  Location,
  'host' | 'origin' | 'protocol' | 'hostname' | 'port' | 'pathname'
>;
function useLocationState() {
  const [value, setValue] = React.useState<LocationState>({
    protocol: '',
    host: '',
    origin: '',
    hostname: '',
    port: '',
    pathname: '',
  });

  useMounted(() => {
    const handleHashChange = () => {
      const loc = window.location;
      const newValue: LocationState = {
        protocol: loc.protocol,
        host: loc.host,
        origin: loc.origin,
        hostname: loc.hostname,
        port: loc.port,
        pathname: loc.pathname,
      };
      setValue(newValue);
    };

    handleHashChange();
  });
  return value;
}

export default useLocationState;
