import { useReducer, useEffect } from 'react';
import { Container, Grid, Title } from '@mantine/core';
import { launchReducer, initialState } from './reducers/launchReducer';
import LaunchCard from './components/LaunchCard';
import LaunchModal from './components/LaunchModal';
import type {Launch} from './types/launch';

function App() {
    const [state, dispatch] = useReducer(launchReducer, initialState);

    useEffect(() => {
        const fetchLaunches = async () => {
            dispatch({ type: 'SET_LOADING', payload: true });
            try {
                const response = await fetch(
                    'https://api.spacexdata.com/v3/launches?launch_year=2020'
                );
                const data: Launch[] = await response.json();
                dispatch({ type: 'SET_LAUNCHES', payload: data });
            } catch (error) {
                console.error('Error fetching launches:', error);
            } finally {
                dispatch({ type: 'SET_LOADING', payload: false });
            }
        };

        fetchLaunches();
    }, []);

    const handleSeeMore = (launch: Launch) => {
        dispatch({ type: 'SELECT_LAUNCH', payload: launch });
    };

    const handleCloseModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    return (
        <Container size="xl" py="xl">
            <Title order={1} mb="xl" ta="center">
                SpaceX Launches 2020
            </Title>

            <Grid>
                {state.launches.map((launch) => (
                    <Grid.Col key={launch.flight_number} span={{ base: 12, sm: 6, md: 4 }}>
                        <LaunchCard launch={launch} onSeeMore={handleSeeMore} />
                    </Grid.Col>
                ))}
            </Grid>

            <LaunchModal
                launch={state.selectedLaunch}
                isOpen={state.isModalOpen}
                onClose={handleCloseModal}
            />
        </Container>
    );
}

export default App;
