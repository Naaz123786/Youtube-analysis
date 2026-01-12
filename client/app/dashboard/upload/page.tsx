"use client";

import { useState } from "react";
import { Upload, X, CheckCircle2, AlertCircle, FileVideo } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsUploading(true);
        // Simulate upload for now
        setTimeout(() => {
            setIsUploading(false);
            setIsSuccess(true);
        }, 3000);
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold mb-2">Upload Content</h1>
                <p className="text-gray-400">Publish your videos directly to YouTube with optimized metadata.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Column: File Dropzone */}
                <div
                    className="glass border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-10 transition-all hover:border-red-600/50"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();
                        if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
                    }}
                >
                    {file ? (
                        <div className="text-center w-full">
                            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileVideo className="text-red-500 w-8 h-8" />
                            </div>
                            <p className="font-medium mb-1 truncate px-4">{file.name}</p>
                            <p className="text-xs text-gray-500 mb-4">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                            <button
                                onClick={() => setFile(null)}
                                className="text-xs text-red-500 hover:underline flex items-center justify-center gap-1 mx-auto"
                            >
                                <X className="w-3 h-3" /> Remove File
                            </button>
                        </div>
                    ) : (
                        <label className="text-center cursor-pointer group">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/10 transition-colors">
                                <Upload className="text-gray-400 w-8 h-8 group-hover:text-red-500 transition-colors" />
                            </div>
                            <p className="font-semibold mb-1">Select Video</p>
                            <p className="text-xs text-gray-500">Drag and drop or click to browse</p>
                            <input type="file" className="hidden" accept="video/*" onChange={handleFileChange} />
                        </label>
                    )}
                </div>

                {/* Right Column: Metadata Form */}
                <div className="space-y-6">
                    <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Video Title</label>
                            <input
                                type="text"
                                placeholder="Enter title..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Description</label>
                            <textarea
                                rows={4}
                                placeholder="What is this video about?"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors resize-none"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Tags (comma separated)</label>
                            <input
                                type="text"
                                placeholder="youtube, analytics, growth..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                            />
                        </div>

                        <button
                            disabled={isUploading || !file}
                            className="w-full bg-red-600 py-4 rounded-xl font-bold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isUploading ? "Uploading..." : "Publish to YouTube"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Status Overlay */}
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="glass max-w-sm w-full p-8 text-center"
                        >
                            <CheckCircle2 className="text-green-500 w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-2">Success!</h2>
                            <p className="text-gray-400 mb-6">Your video has been successfully published to your channel.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                            >
                                Done
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
