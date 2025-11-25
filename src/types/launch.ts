export interface Launch {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    rocket: {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
    };
    launch_success?: boolean;
    links: {
        mission_patch?: string;
        mission_patch_small?: string;
        article_link?: string;
        wikipedia?: string;
        video_link?: string;
        flickr_images: string[];
    };
    details?: string;
}

export interface LaunchState {
    launches: Launch[];
    selectedLaunch: Launch | null;
    isLoading: boolean;
    isModalOpen: boolean;
}

export type LaunchAction =
    | { type: 'SET_LAUNCHES'; payload: Launch[] }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SELECT_LAUNCH'; payload: Launch }
    | { type: 'CLOSE_MODAL' };