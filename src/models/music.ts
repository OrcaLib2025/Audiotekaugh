export interface Song {
    title: string;
    duration: string;
    genre: string;
    releaseDate: string;
    description?: string;
    rating?: number;
    artist?: string | null | undefined;
}

export interface Album {
    title: string;
    coverImage: string;
    songCount: number;
    artistTitle: string;
}

export interface Music {
    id: string;
    title: string;
    artist: string;
    albums: Album[];
    songs: Song[];
    mostPopularSong?: Song;
    genre?: string;
    artistImage?: string;
    rating?: number;
    description?: string;
}

export interface MusicState {
    music: Music[];
    loading: boolean;
    error?: string;
}
