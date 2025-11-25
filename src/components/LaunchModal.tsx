import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type {Launch} from '../types/launch';
import { Image, Text, Group, Button } from '@mantine/core';

interface LaunchModalProps {
    launch: Launch | null;
    isOpen: boolean;
    onClose: () => void;
}

const LaunchModal: React.FC<LaunchModalProps> = ({ launch, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !launch) return null;

    const modalContent = (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '8px',
                    maxWidth: '500px',
                    width: '90%',
                    maxHeight: '80vh',
                    overflow: 'auto',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <Group justify="space-between" mb="md">
                    <Text size="xl" fw={700}>
                        {launch.mission_name}
                    </Text>
                    <Button variant="subtle" onClick={onClose}>
                        ×
                    </Button>
                </Group>

                {launch.links.mission_patch && (
                    <Image
                        src={launch.links.mission_patch}
                        height={200}
                        alt={launch.mission_name}
                        fit="contain"
                        mb="md"
                    />
                )}

                <Text size="sm" c="dimmed" mb="md">
                    Rocket: {launch.rocket.rocket_name}
                </Text>

                <Text size="sm" mb="md">
                    {launch.details || 'No details available for this launch.'}
                </Text>

                <Button fullWidth onClick={onClose}>
                    Close
                </Button>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default LaunchModal;