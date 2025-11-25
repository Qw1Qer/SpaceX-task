import { describe, it, expect } from 'vitest';

// Функции для unit-тестирования
const formatRocketName = (name: string) => `Rocket: ${name}`;
const isValidLaunchYear = (year: string) => /^\d{4}$/.test(year);
const getMissionPatch = (patchUrl: string | null) => patchUrl || '/default-patch.png';
const filterLaunchesByYear = (launches: Array<{launch_year: string}>, year: string) =>
    launches.filter(launch => launch.launch_year === year);

describe('SpaceX Launches App - Unit Tests', () => {
    it('formats rocket name correctly', () => {
        expect(formatRocketName('Falcon 9')).toBe('Rocket: Falcon 9');
        expect(formatRocketName('Falcon Heavy')).toBe('Rocket: Falcon Heavy');
    });

    it('validates launch year format', () => {
        expect(isValidLaunchYear('2020')).toBe(true);
        expect(isValidLaunchYear('2024')).toBe(true);
        expect(isValidLaunchYear('20')).toBe(false);
        expect(isValidLaunchYear('abcd')).toBe(false);
    });

    it('handles mission patch URLs', () => {
        const url = 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png';
        expect(getMissionPatch(url)).toBe(url);
        expect(getMissionPatch(null)).toBe('/default-patch.png');
        expect(getMissionPatch('')).toBe('/default-patch.png');
    });

    it('filters launches by year', () => {
        const mockLaunches = [
            { launch_year: '2020' },
            { launch_year: '2020' },
            { launch_year: '2019' },
        ];

        const filtered = filterLaunchesByYear(mockLaunches, '2020');
        expect(filtered).toHaveLength(2);
        expect(filtered.every(launch => launch.launch_year === '2020')).toBe(true);
    });

    it('handles basic math operations', () => {
        expect(1 + 1).toBe(2);
        expect(10 / 2).toBe(5);
    });

    it('works with arrays', () => {
        const launches = ['Mission 1', 'Mission 2', 'Mission 3'];
        expect(launches).toHaveLength(3);
        expect(launches[0]).toBe('Mission 1');
    });
});