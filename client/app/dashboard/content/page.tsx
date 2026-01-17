"use client";

import { useState } from "react";
import {
    Search,
    Filter,
    MoreVertical,
    Eye,
    MessageSquare,
    ThumbsUp,
    Globe,
    Lock,
    EyeOff,
    Edit2,
    BarChart2,
    Trash2,
    Play
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for the content manager
const initialVideos = [
    {
        id: "1",
        title: "Building a YouTube Dashboard with Next.js",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop",
        visibility: "public",
        date: "Jan 12, 2026",
        views: "12,450",
        comments: "142",
        likes: "1,205",
        status: "None", // Restrictions
    },
    {
        id: "2",
        title: "How to use Framer Motion for Animations",
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop",
        visibility: "unlisted",
        date: "Jan 10, 2026",
        views: "3,120",
        comments: "84",
        likes: "420",
        status: "Copyright",
    },
    {
        id: "3",
        title: "SaaS Design Trends in 2026",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
        visibility: "public",
        date: "Jan 8, 2026",
        views: "45,200",
        comments: "520",
        likes: "4,800",
        status: "None",
    },
    {
        id: "4",
        title: "React Server Components Explained",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
        visibility: "private",
        date: "Jan 5, 2026",
        views: "0",
        comments: "0",
        likes: "0",
        status: "None",
    }
];

export default function ContentManagerPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [videos] = useState(initialVideos);

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getVisibilityIcon = (type: string) => {
        switch (type) {
            case 'public': return <Globe className="w-3.5 h-3.5 text-green-500" />;
            case 'unlisted': return <EyeOff className="w-3.5 h-3.5 text-amber-500" />;
            case 'private': return <Lock className="w-3.5 h-3.5 text-gray-500" />;
            default: return null;
        }
    };

    return (
        <div className="max-w-[1600px] mx-auto pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-1">Channel Content</h1>
                    <p className="text-sm text-gray-500">Manage your videos and track their performance.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
                        <Play className="w-4 h-4" /> Go Live
                    </button>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-[#141b25] border border-gray-800 rounded-t-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#0f1218] border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0f1218] border border-gray-800 rounded-lg text-xs font-medium text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                        <Filter className="w-3.5 h-3.5" /> Filter
                    </button>
                </div>
            </div>

            {/* Content Table */}
            <div className="bg-[#141b25] border-x border-b border-gray-800 rounded-b-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-800/50 bg-[#161d27]">
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Video</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Visibility</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Restrictions</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Views</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Comments</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Likes</th>
                                <th className="px-6 py-4 text-center"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800/50">
                            {filteredVideos.map((video) => (
                                <tr key={video.id} className="group hover:bg-gray-800/20 transition-colors">
                                    <td className="px-6 py-4 min-w-[300px]">
                                        <div className="flex gap-4">
                                            <div className="relative w-32 h-18 bg-gray-900 rounded-lg flex-shrink-0 overflow-hidden border border-gray-800 group-hover:border-blue-500/50 transition-colors aspect-video">
                                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <Play className="w-6 h-6 text-white fill-white" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <p className="text-sm font-semibold text-white line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
                                                    {video.title}
                                                </p>
                                                <div className="flex gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button title="Edit" className="text-gray-500 hover:text-white transition-colors">
                                                        <Edit2 className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button title="Analytics" className="text-gray-500 hover:text-white transition-colors">
                                                        <BarChart2 className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button title="Delete" className="text-gray-500 hover:text-red-500 transition-colors">
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 capitalize text-xs font-medium text-gray-300">
                                            {getVisibilityIcon(video.visibility)}
                                            {video.visibility}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "text-xs font-medium",
                                            video.status === "None" ? "text-gray-500" : "text-amber-500"
                                        )}>
                                            {video.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs text-gray-400 text-right whitespace-nowrap">
                                        {video.date}
                                        <p className="text-[10px] text-gray-600">Published</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-300 text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            {video.views}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-300 text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            {video.comments}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-300 text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            {video.likes}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                                            <MoreVertical className="w-4 h-4 text-gray-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredVideos.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-gray-700" />
                        </div>
                        <p className="text-gray-400">No videos found matching your search.</p>
                    </div>
                )}

                <div className="p-4 border-t border-gray-800/50 bg-[#161d27]/50 flex items-center justify-between">
                    <p className="text-xs text-gray-500">Showing {filteredVideos.length} videos</p>
                    <div className="flex gap-2">
                        <button disabled className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-600 disabled:opacity-50">Previous</button>
                        <button disabled className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-600 disabled:opacity-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
