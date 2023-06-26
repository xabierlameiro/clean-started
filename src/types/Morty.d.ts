type LocationType = { name: 'Citadel of Ricks'; url: 'https://rickandmortyapi.com/api/location/3' };
type OriginType = { name: 'Earth (C-137)'; url: 'https://rickandmortyapi.com/api/location/1' };

export type MortyType = {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: LocationType;
    name: string;
    origin: OriginType;
    species: string;
    status: string;
    type: string;
    url: string;
};
