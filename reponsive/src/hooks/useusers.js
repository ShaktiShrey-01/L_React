import { searchusers as searchUsersApi, deleteuser as deleteUserApi, updateuser as updateUserApi, createuser as createUserApi } from "../api/userapi.js";
import { useState, useEffect } from "react";
import useDebounce from "./usedebounce";

const useUsers = () => {
    const [users, setusers] = useState([]);
    const [loading, setloading] = useState({ fetch: false, create: false });
    const [deletingid, setdeletingid] = useState(null);
    const [updatingid, setupdatingid] = useState(null);

    const [searchquery, setsearchquery] = useState("");
    const debouncedsearch = useDebounce(searchquery, 500);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setloading((prev) => ({ ...prev, fetch: true }));
                const data = await searchUsersApi(debouncedsearch);
                setusers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setloading((prev) => ({ ...prev, fetch: false }));
            }
        };
        fetchUsers();
    }, [debouncedsearch]);

    const handledelete = async (id) => {
        try {
            setdeletingid(id);
            await deleteUserApi(id);
            setusers((prev) => prev.filter((user) => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        } finally {
            setdeletingid(null);
        }
    };

    const updateuser = async (id, formvalues) => {
        try {
            setupdatingid(id);
            const updateduser = await updateUserApi(id, formvalues);
            setusers((prev) => prev.map((user) => (user.id === id ? updateduser : user)));
        } catch (error) {
            console.error("Error updating user:", error);
        } finally {
            setupdatingid(null);
        }
    };

    const createuser = async (formvalues) => {
        try {
            setloading((prev) => ({ ...prev, create: true }));
            const newuser = await createUserApi(formvalues);
            setusers((prev) => [...prev, newuser]);
        } catch (error) {
            console.error("Error creating user:", error);
        } finally {
            setloading((prev) => ({ ...prev, create: false }));
        }
    };

    return {
        users,
        loading,
        deletingid,
        updatingid,
        searchquery,
        setsearchquery,
        handledelete,
        updateuser,
        createuser,
    };
};

export { useUsers };