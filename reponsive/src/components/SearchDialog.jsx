export default function SearchDialog({ open, loading, query, onClose, children }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 px-4 py-6 backdrop-blur-sm" onClick={onClose}>
            <div
                className="mx-auto mt-12 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="border-b px-6 py-4">
                    <p className="text-sm font-medium text-slate-500">Searching for</p>
                    <h2 className="text-xl font-bold text-slate-900">{query || "Start typing..."}</h2>
                </div>

                <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
                    {loading ? (
                        <div className="flex min-h-40 items-center justify-center">
                            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                        </div>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </div>
    );
}