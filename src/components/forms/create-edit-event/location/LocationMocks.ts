const LocationMocks = () => {
    const mockResponse = [
        {
            id: 1,
            city: 'Kaunas',
            street: 'Juozapaviciaus pr.',
            building: '11D',
            zip: '45252',
            venueName: 'Cognizant office',
        },
        {
            id: 2,
            city: 'Vilnius',
            street: 'Gedimino pr.',
            building: '20',
            zip: '01152',
            venueName: 'TechHub Vilnius',
        },
    ];

    return mockResponse.map((location) => ({
        label: `${location.venueName}, ${location.street} ${location.building}, ${location.city}`,
        id: location.id,
    }));
}

export default LocationMocks;