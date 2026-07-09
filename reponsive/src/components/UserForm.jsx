import { useState } from "react";

function UserForm({ initialValues = { firstName: "", email: "" }, onSubmit, submitLabel = "Save" }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="firstName" value={values.firstName} onChange={handleChange} className="px-4 py-2 border rounded-lg" />
      <input name="email" value={values.email} onChange={handleChange} className="px-4 py-2 border rounded-lg" />
      <button type="submit" className="px-5 py-3 rounded-lg bg-blue-600 text-white">{submitLabel}</button>
    </form>
  );
}

export default UserForm;