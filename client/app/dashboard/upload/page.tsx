"use client";

import { useState } from "react";
import { Upload, X, CheckCircle2, FileVideo, Image as ImageIcon, Globe, Lock, EyeOff, Plus, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [visibility, setVisibility] = useState<'public' | 'unlisted' | 'private'>('public');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const url = URL.createObjectURL(e.target.files[0]);
            setThumbnail(url);
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
        <div className="max-w-6xl mx-auto pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Upload Content</h1>
                    <p className="text-gray-400">Optimize your video metadata for maximum reach and engagement.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium border border-blue-500/20">
                        Connected: YouTube Channel
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Core Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-[#141b25] border border-gray-800 rounded-2xl p-6 md:p-8 space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Add a title that describes your video"
                                className="w-full bg-[#0f1218] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-gray-600"
                                required
                            />
                            <div className="flex justify-end">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">0 / 100</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300">Description</label>
                            <textarea
                                rows={8}
                                placeholder="Tell viewers about your video"
                                className="w-full bg-[#0f1218] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-gray-600 resize-none"
                                required
                            />
                            <div className="flex justify-end">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">0 / 5000</span>
                            </div>
                        </div>

                        <div className="space-y-4 pt-2">
                            <label className="text-sm font-semibold text-gray-300 flex flex-col gap-1">
                                Thumbnail
                                <span className="text-xs font-normal text-gray-500">Select or upload a picture that shows what's in your video.</span>
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <label className={cn(
                                    "aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all gap-2 group",
                                    thumbnail ? "border-blue-500/50 bg-blue-500/5" : "border-gray-800 hover:border-gray-700 bg-gray-900/50"
                                )}>
                                    {thumbnail ? (
                                        <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover rounded-lg" />
                                    ) : (
                                        <>
                                            <ImageIcon className="w-6 h-6 text-gray-500 group-hover:text-gray-400" />
                                            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Upload</span>
                                        </>
                                    )}
                                    <input type="file" className="hidden" accept="image/*" onChange={handleThumbnailChange} />
                                </label>
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="aspect-video rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center overflow-hidden relative group cursor-pointer">
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Plus className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="w-8 h-1 bg-gray-800 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#141b25] border border-gray-800 rounded-2xl p-6 md:p-8">
                        <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                            Advanced Settings
                            <Info className="w-4 h-4 text-gray-600" />
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase">Category</label>
                                <select className="w-full bg-[#0f1218] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white">
                                    <option>Education</option>
                                    <option>Entertainment</option>
                                    <option>Gaming</option>
                                    <option>Technology</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase">Language</label>
                                <select className="w-full bg-[#0f1218] border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white">
                                    <option>English (US)</option>
                                    <option>Hindi</option>
                                    <option>Spanish</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Upload & Visibility */}
                <div className="space-y-6">
                    <div className="bg-[#141b25] border border-gray-800 rounded-2xl p-6">
                        <div
                            className={cn(
                                "relative aspect-video rounded-xl border-2 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden mb-6",
                                file ? "border-green-500/50 bg-green-500/5" : "border-gray-800 hover:border-blue-500/50 bg-gray-900/50"
                            )}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                                e.preventDefault();
                                if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
                            }}
                        >
                            {file ? (
                                <div className="text-center p-4">
                                    <FileVideo className="w-10 h-10 text-green-500 mx-auto mb-2" />
                                    <p className="text-sm font-medium text-white truncate max-w-[200px] mx-auto">{file.name}</p>
                                    <p className="text-xs text-gray-500 mt-1">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                    <button
                                        type="button"
                                        onClick={() => setFile(null)}
                                        className="mt-4 text-xs text-red-500 hover:text-red-400 font-medium flex items-center gap-1 mx-auto"
                                    >
                                        <X className="w-3 h-3" /> Change Video
                                    </button>
                                </div>
                            ) : (
                                <label className="cursor-pointer text-center p-6 group w-full h-full flex flex-col items-center justify-center">
                                    <Upload className="w-10 h-10 text-gray-600 group-hover:text-blue-500 transition-colors mb-3" />
                                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white">Select Video File</span>
                                    <span className="text-xs text-gray-500 mt-1">or drag and drop here</span>
                                    <input type="file" className="hidden" accept="video/*" onChange={handleFileChange} />
                                </label>
                            )}
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-semibold text-gray-300">Visibility</label>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    { id: 'public', label: 'Public', desc: 'Everyone can see', icon: Globe },
                                    { id: 'unlisted', label: 'Unlisted', desc: 'Anyone with the link', icon: EyeOff },
                                    { id: 'private', label: 'Private', desc: 'Only you can see', icon: Lock },
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() => setVisibility(opt.id as any)}
                                        className={cn(
                                            "flex items-center gap-3 p-3 rounded-xl border transition-all text-left group",
                                            visibility === opt.id
                                                ? "bg-blue-600/10 border-blue-600/50 text-white"
                                                : "bg-[#0f1218] border-gray-800 text-gray-400 hover:border-gray-700"
                                        )}
                                    >
                                        <opt.icon className={cn("w-5 h-5", visibility === opt.id ? "text-blue-500" : "text-gray-600")} />
                                        <div>
                                            <p className="text-xs font-bold leading-none">{opt.label}</p>
                                            <p className="text-[10px] text-gray-500 mt-1">{opt.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isUploading || !file}
                            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20"
                        >
                            {isUploading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Uploading...</span>
                                </>
                            ) : (
                                <>
                                    <Upload className="w-5 h-5" />
                                    <span>Upload & Publish</span>
                                </>
                            )}
                        </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                        <p className="text-[11px] text-amber-500 leading-relaxed text-center">
                            By clicking "Upload & Publish", you agree to follow YouTube's Terms of Service and Community Guidelines.
                        </p>
                    </div>
                </div>
            </form>

            {/* Success Animation */}
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            className="bg-[#141b25] border border-gray-800 max-w-sm w-full p-8 rounded-3xl text-center shadow-2xl"
                        >
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="text-green-500 w-10 h-10" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Success!</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">Your video has been uploaded and is currently being processed by YouTube's servers.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Track in Dashboard
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

