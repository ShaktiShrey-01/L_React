import Userlist from "../components/Userlist";
import { useState } from "react";
import UserFormDialog from "../components/UserFormDialog";
import { useUsers } from "../hooks/useusers";
import Searchbar from "../components/Searchbar";
import SearchDialog from "../components/SearchDialog";

export default function Userpage() {
    const { searchquery, setsearchquery, users, deletingid, updatingid, loading, handledelete, updateuser } = useUsers();
    const [editing, setediting] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchChange = (value) => {
        setsearchquery(value);
        setIsSearchOpen(value.trim().length > 0);
    };

    const closeSearchDialog = () => {
        setIsSearchOpen(false);
    };

    return (
        <div className="min-h-screen p-4 text-white">
            <div className="w-full flex justify-center py-6">
                <Searchbar search={searchquery} onsearch={handleSearchChange} />
            </div>
            <div className="mt-6">
                <Userlist
                    users={users}
                    onedit={(user) => setediting(user)}
                    onDelete={handledelete}
                    isupdating={updatingid}
                    isdeleting={deletingid}
                />

                <UserFormDialog
                    user={editing}
                    onClose={() => setediting(null)}
                    onSubmit={(values) => {
                        updateuser(editing.id, values);
                        setediting(null);
                    }}
                />
            </div>

            <SearchDialog
                open={isSearchOpen}
                loading={loading.fetch}
                query={searchquery}
                onClose={closeSearchDialog}
            >
                {users.length > 0 ? (
                    <Userlist
                        users={users}
                        onedit={(user) => setediting(user)}
                        onDelete={handledelete}
                        isupdating={updatingid}
                        isdeleting={deletingid}
                    />
                ) : (
                    <p className="py-10 text-center text-slate-500">No users found.</p>
                )}
            </SearchDialog>
        </div>
    );
}