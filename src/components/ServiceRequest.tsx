
// import { useState } from "react";

// const ServiceRequest = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     serviceType: "",
//     projectType: "",
//     message: "",
//   });

//   const serviceTypes = [
//     "Deep Boring Installation",
//     "Electric Motor Maintenance",
//     "Water Pump Installation",
//     "Motor Repair Service",
//   ];

//   const projectTypes = [
//     "Agricultural",
//     "Residential",
//     "Commercial",
//     "Industrial",
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Create email body with form data
//     const emailBody = `
//       New Service Request:
      
//       Name: ${formData.name}
//       Phone: ${formData.phone}
//       Service Type: ${formData.serviceType}
//       Project Type: ${formData.projectType}
//       Message: ${formData.message}
//     `;

//     // Create mailto link with form data
//     const mailtoLink = `mailto:shivramchaudhary232@gmail.com?subject=New Service Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
//     // Open email client
//     window.location.href = mailtoLink;
    
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       serviceType: "",
//       projectType: "",
//       message: "",
//     });
    
//     // Redirect to gallery after a delay
//     setTimeout(() => {
//       window.location.href = "#gallery";
//     }, 1000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="service-request" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
//             Request a Service
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Fill out the form below to request our services
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           <div className="bg-white rounded-lg shadow-xl p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Service Type
//                 </label>
//                 <select
//                   name="serviceType"
//                   value={formData.serviceType}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
//                   required
//                 >
//                   <option value="">Select a service</option>
//                   {serviceTypes.map((type) => (
//                     <option key={type} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Project Type
//                 </label>
//                 <select
//                   name="projectType"
//                   value={formData.projectType}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
//                   required
//                 >
//                   <option value="">Select project type</option>
//                   {projectTypes.map((type) => (
//                     <option key={type} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Additional Details
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-primary-accent text-white px-6 py-3 rounded-md hover:bg-blue-500 transition-colors duration-200"
//               >
//                 Submit Request
//               </button>
//             </form>
//           </div>

//           <div className="bg-white rounded-lg shadow-xl p-8">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <img
//                   src="/lovable-uploads/af5f3069-ac10-4127-bbc6-c762e2496dd7.png"
//                   alt="Owner"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               </div>
//               <div className="ml-6">
//                 <h3 className="text-xl font-semibold text-gray-900">Shivram Chaudhary</h3>
//                 <p className="text-gray-600">Owner & Technical Expert</p>
//                 <div className="mt-2 space-y-1">
//                   <p className="text-gray-600">📞 +977 9802626926</p>
//                   <p className="text-gray-600">📧 shivramchaudhary232@gmail.com</p>
//                   <p className="text-gray-600">📍 Chandrauta, Kapilvastu, Nepal</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceRequest;

import { useState } from "react";

const ServiceRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    projectType: "",
    message: "",
  });

  const serviceTypes = [
    "Deep Boring Installation",
    "Electric Motor Maintenance",
    "Water Pump Installation",
    "Motor Repair Service",
  ];

  const projectTypes = [
    "Agricultural",
    "Residential",
    "Commercial",
    "Industrial",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailBody = `
      New Service Request:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service Type: ${formData.serviceType}
      Project Type: ${formData.projectType}
      Message: ${formData.message}
    `;

    try {
      // Replace with your deployed Google Apps Script Web App URL
      const googleSheetUrl = "https://docs.google.com/spreadsheets/d/1xf6sYYheXts432iwopTP3fs24FZwLAu8ube0XNZ-8tI/edit?gid=0#gid=0";
      
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('name', formData.name);
      formDataEncoded.append('email', formData.email);
      formDataEncoded.append('phone', formData.phone);
      formDataEncoded.append('serviceType', formData.serviceType);
      formDataEncoded.append('projectType', formData.projectType);
      formDataEncoded.append('message', formData.message);

      // Submit data to the Google Apps Script web app
      await fetch(googleSheetUrl, {
        method: 'POST',
        body: formDataEncoded,
      });

      // Open default email client with pre-filled email to "satyakumarchaudhary603@gmail.com"
      const mailtoLink = `mailto:satyakumarchaudhary603@gmail.com?subject=${encodeURIComponent(
        `New Service Request from ${formData.name}`
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        projectType: "",
        message: "",
      });

      // Redirect after a short delay if needed
      setTimeout(() => {
        window.location.href = "#gallery";
      }, 1000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="service-request" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Request a Service
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below to request our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
                  required
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
                  required
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-accent text-white px-6 py-3 rounded-md hover:bg-blue-500 transition-colors duration-200"
              >
                Submit Request
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/af5f3069-ac10-4127-bbc6-c762e2496dd7.png"
                  alt="Owner"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Shivram Chaudhary</h3>
                <p className="text-gray-600">Owner & Technical Expert</p>
                <div className="mt-2 space-y-1">
                  <p className="text-gray-600">📞 +977 9802626926</p>
                  <p className="text-gray-600">📧 shivramchaudhary232@gmail.com</p>
                  <p className="text-gray-600">📍 Chandrauta, Kapilvastu, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRequest;
