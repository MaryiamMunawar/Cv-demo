import React, { useState } from 'react';

const CVForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    education: '',
    graduation: ''
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic here if needed
    setIsEditing(true);
  };

  const handleEdit = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {isEditing ? (
        <form>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter Phone"
              name="phone"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Education
            </label>
            <input
              type="text"
              placeholder="Enter Degree"
              name="education"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.education}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Graduation Date
            </label>
            <input
              type="date"
              placeholder="Enter Graduation Date"
              name="graduation"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.graduation}
              onChange={handleChange}
            />
          </div>
        </form>
      ) : (
        <div className="mt-4">
          <>
           <p>My name is {formData.name}</p> <br />
           <p>My Email address is {formData.email}</p> <br />
           <p>You can contact me on {formData.phone}</p> <br />
           <p>My highest level of education is {formData.education}</p> <br />
           <p>I have completed my graduation on {formData.graduation}</p> 
          </>
        </div>
      )}

      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={isEditing ? handleEdit : handleSubmit}
        >
          {isEditing ? 'Submit' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default CVForm;
