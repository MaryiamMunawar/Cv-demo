import React, { useState } from 'react';

const CVForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    graduation: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const education = formData.get('education');
    const graduation = formData.get('graduation');

    setFormData({ ...formData, name, email, phone, education, graduation });

    setIsEditing(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex justify-end">
        {isEditing ? (
          <button
            className="bg-yellow-500  text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        ) : (
          <button
            className="bg-yellow-500  text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              defaultValue={formData.name} 
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
              defaultValue={formData.email}  
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
              defaultValue={formData.phone}  
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Degree
            </label>
            <input
              type="text"
              placeholder="Enter Degree"
              name="education"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              defaultValue={formData.education}  
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
              defaultValue={formData.graduation}  
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
            Submit
          </button>
        </form>
      ) : (
        <div className="mt-4">
          <>
            Name: {formData.name} <br />
            Email: {formData.email} <br />
            Phone: {formData.phone} <br />
            Education: {formData.education} <br />
            Graduation Date: {formData.graduation}
          </>
          <br />
          <button  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">Submit</button>
        </div>
      )}
    </div>
  );
};

export default CVForm;
