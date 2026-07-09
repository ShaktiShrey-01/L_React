import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
export default function Form({ setUsers }) {
const {setusers}=useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        if (!res.ok) throw new Error("Could not fetch user profile details.");
        
        const data = await res.json();
        
        if (isMounted) {
          setFormData({
            username: data.username || "",
            email: data.email || "",
          });
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save changes. Please try again.");

      const updatedUser = await res.json();

      setUsers((currentUsers) =>
        currentUsers.map((user) => (user.id === parseInt(id) ? { ...user, ...updatedUser } : user))
      );

      navigate("/");
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center text-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl bg-neutral-800 p-6 text-white shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">Edit Profile</h2>

      {error && (
        <div className="mb-4 rounded-xl bg-red-900/50 p-3 text-sm text-red-200 border border-red-500/30">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block text-sm font-semibold text-neutral-300">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-neutral-700 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-neutral-300">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-neutral-700 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            disabled={isSubmitting}
            className="w-1/2 rounded-xl bg-neutral-600 py-3 font-bold transition hover:bg-neutral-500 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-1/2 rounded-xl bg-blue-600 py-3 font-bold transition hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}