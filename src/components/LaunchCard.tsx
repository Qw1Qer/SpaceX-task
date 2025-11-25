import React from 'react';
import { Card, Image, Text, Group, Button } from '@mantine/core';
import type {Launch} from '../types/launch';

interface LaunchCardProps {
    launch: Launch;
    onSeeMore: (launch: Launch) => void;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch, onSeeMore }) => {
    return (
        <Card
            shadow="sm"
            padding="md"
            radius="md"
            withBorder
        >
            <Card.Section>
                <Image
                    src={launch.links.mission_patch_small || '/placeholder-rocket.png'}
                    height={160}
                    alt={launch.mission_name}
                    fit="contain"
                    p="md"
                />
            </Card.Section>

            <Group justify="center" mt="md" mb="xs">
                <Text fw={500} ta="center">
                    {launch.mission_name}
                </Text>
            </Group>

            <Text size="sm" c="dimmed" ta="center">
                Rocket: {launch.rocket.rocket_name}
            </Text>

            <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => onSeeMore(launch)}
            >
                See more
            </Button>
        </Card>
    );
};

export default LaunchCard;