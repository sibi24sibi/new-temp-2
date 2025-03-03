import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Heatmap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const salesData = [
        { region: 'New York', coordinates: [-74.006, 40.7128], sales: 5890900 },
        { region: 'San Francisco', coordinates: [-122.4194, 37.7749], sales: 4920778 },
        { region: 'Chicago', coordinates: [-87.6298, 41.8781], sales: 5012336 },
        { region: 'London', coordinates: [-0.1276, 51.5074], sales: 6989256 },
        { region: 'Tokyo', coordinates: [139.6917, 35.6895], sales: 8541232 },
        { region: 'Paris', coordinates: [2.3522, 48.8566], sales: 6234121 },
        { region: 'Berlin', coordinates: [13.405, 52.52], sales: 5322789 },
        { region: 'Sydney', coordinates: [151.2093, -33.8688], sales: 4789120 },
        { region: 'Mumbai', coordinates: [72.8777, 19.076], sales: 6798123 },
        { region: 'Toronto', coordinates: [-79.3832, 43.6532], sales: 5012001 },
        { region: 'Los Angeles', coordinates: [-118.2437, 34.0522], sales: 7123901 },
        { region: 'Beijing', coordinates: [116.4074, 39.9042], sales: 9011234 },
        { region: 'Mexico City', coordinates: [-99.1332, 19.4326], sales: 4120987 },
        { region: 'Sao Paulo', coordinates: [-46.6333, -23.5505], sales: 7081234 },
        { region: 'Buenos Aires', coordinates: [-58.3816, -34.6037], sales: 3891234 },
        { region: 'Moscow', coordinates: [37.6173, 55.7558], sales: 6723456 },
        { region: 'Cape Town', coordinates: [18.4241, -33.9249], sales: 3420987 },
        { region: 'Dubai', coordinates: [55.2708, 25.2048], sales: 7321456 },
        { region: 'Singapore', coordinates: [103.8198, 1.3521], sales: 8123456 },
        { region: 'Hong Kong', coordinates: [114.1694, 22.3193], sales: 9321234 },
        { region: 'Seoul', coordinates: [126.978, 37.5665], sales: 7590123 },
        { region: 'Bangkok', coordinates: [100.5018, 13.7563], sales: 6891234 },
        { region: 'Jakarta', coordinates: [106.8456, -6.2088], sales: 4987123 },
        { region: 'Lagos', coordinates: [3.3792, 6.5244], sales: 3821234 },
        { region: 'Istanbul', coordinates: [28.9784, 41.0082], sales: 7231234 },
        { region: 'Kuala Lumpur', coordinates: [101.6869, 3.139], sales: 4912345 }
    ];

    useEffect(() => {
        if (!map.current) {
            map.current = new maplibregl.Map({
                container: mapContainer.current,
                style: 'https://demotiles.maplibre.org/style.json',
                center: [0, 0],
                zoom: 1
            });

            // Add heatmap layer
            map.current.on('load', () => {
                map.current.addLayer({
                    id: 'heatmap-layer',
                    type: 'heatmap',
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: salesData.map(data => ({
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: data.coordinates
                                },
                                properties: {
                                    intensity: data.sales / 10000000 // Normalize for heatmap intensity
                                }
                            }))
                        }
                    },
                    paint: {
                        'heatmap-weight': ['interpolate', ['linear'], ['get', 'intensity'], 0, 0, 1, 1],
                        'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
                        'heatmap-color': [
                            'interpolate',
                            ['linear'],
                            ['heatmap-density'],
                            0,
                            'rgba(0, 0, 255, 0)',
                            0.2,
                            'rgb(0, 0, 255)',
                            0.4,
                            'rgb(0, 255, 0)',
                            0.6,
                            'rgb(255, 255, 0)',
                            0.8,
                            'rgb(255, 165, 0)',
                            1,
                            'rgb(255, 0, 0)'
                        ],
                        'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
                        'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
                    }
                });

                // Add markers for each sales region
                salesData.forEach(data => {
                    const popup = new maplibregl.Popup({ offset: 25 }).setText(
                        `${data.region}: $${data.sales.toLocaleString()}`
                    );

                    new maplibregl.Marker({ color: '#22c55e' })
                        .setLngLat(data.coordinates)
                        .setPopup(popup) // Add popup to the marker
                        .addTo(map.current);
                });
            });
        }
    }, []);

    return (
        <div
            ref={mapContainer}
            className="w-full h-full relative rounded-lg"
        />
    );
};

export default Heatmap;
