import { Search } from 'lucide-react';

const Searchbar = ({ search = "", onsearch = () => {} }) => {
    

    return (
                <div className="w-full max-w-2xl h-12 md:h-14 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-lg shadow-black/10">
                    <input type="text" placeholder="Search..." className="w-full h-full bg-transparent outline-none text-white placeholder:text-white/60" onChange={(e) => onsearch(e.target.value)} value={search} />
            
            <div className="relative h-full w-full">
                        <Search className="absolute -right-1 -top-1 h-5 w-5 cursor-pointer text-white transition-transform hover:scale-125 md:bottom-1 md:right-1 md:h-7 md:w-7 lg:bottom-1 lg:right-1" />
            </div>
        </div>
    )
}
export default Searchbar;