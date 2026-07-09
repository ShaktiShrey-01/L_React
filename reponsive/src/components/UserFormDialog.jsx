import UserForm from "./UserForm";

function UserFormDialog({ user, onClose, onSubmit }) {
  if (!user) return null; // closed when no user is selected

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <UserForm initialValues={user} submitLabel="Update" onSubmit={onSubmit} />
        <button onClick={onClose} className="mt-4 text-slate-500">Cancel</button>
      </div>
    </div>
  );
}

export default UserFormDialog;