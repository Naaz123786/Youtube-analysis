import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ChannelStats {
    subscribers: string;
    views: string;
    liveWatchers: string;
    watchHours: string;
}

interface ChannelState {
    isConnected: boolean;
    stats: ChannelStats;
    setIsConnected: (connected: boolean) => void;
    setStats: (stats: ChannelStats) => void;
}

export const useChannelStore = create<ChannelState>()(
    persist(
        (set) => ({
            isConnected: false,
            stats: {
                subscribers: "0",
                views: "0",
                liveWatchers: "0",
                watchHours: "0"
            },
            setIsConnected: (connected) => set({ isConnected: connected }),
            setStats: (stats) => set({ stats }),
        }),
        {
            name: 'channel-storage',
        }
    )
);
