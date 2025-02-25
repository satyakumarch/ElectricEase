
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
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

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

//   // This function will handle the form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Format the email content
//     const emailContent = `
//       New Service Request:

//       Name: ${formData.name}
//       Email: ${formData.email}
//       Phone: ${formData.phone}
//       Service Type: ${formData.serviceType}
//       Project Type: ${formData.projectType}
//       Message: ${formData.message}
//     `;

//     try {
//       // For a real solution, you would need a server-side API endpoint to handle the email sending
//       // This is just a demonstration of how to construct the request

//       // Example using a theoretical backend API (you'd need to implement this)
//       // const response = await fetch('https://your-backend-api.com/send-email', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify({
//       //     to: 'satyakumarchaudhary603@gmail.com',
//       //     subject: `New Service Request from ${formData.name}`,
//       //     body: emailContent
//       //   }),
//       // });

//       // Alternative: Easier solution using EmailJS or similar service
//       // This would be configured with your EmailJS account
//       // import emailjs from 'emailjs-com';
//       // await emailjs.send(
//       //   'your_service_id',
//       //   'your_template_id',
//       //   {
//       //     to_email: 'satyakumarchaudhary603@gmail.com',
//       //     from_name: formData.name,
//       //     from_email: formData.email,
//       //     from_phone: formData.phone,
//       //     service_type: formData.serviceType,
//       //     project_type: formData.projectType,
//       //     message: formData.message,
//       //   },
//       //   'your_user_id'
//       // );

//       // Simplified approach: open email client (requires user to send manually)
//       const mailtoLink = `mailto:satyakumarchaudhary603@gmail.com?subject=${encodeURIComponent(
//         `New Service Request from ${formData.name}`
//       )}&body=${encodeURIComponent(emailContent)}`;

//       window.location.href = mailtoLink;

//       // Reset form and show success message
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         serviceType: "",
//         projectType: "",
//         message: "",
//       });

//       setIsSubmitted(true);
//       setIsSubmitting(false);

//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);

//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error submitting the form. Please try again.");
//       setIsSubmitting(false);
//     }
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
//             {isSubmitted ? (
//               <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
//                 Thank you! Your service request has been submitted. We will contact you shortly.
//               </div>
//             ) : null}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
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
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
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
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
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
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
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
//                 disabled={isSubmitting}
//                 className="w-full bg-primary-accent text-white px-6 py-3 rounded-md hover:bg-blue-500 transition-colors duration-200 disabled:opacity-70"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Request"}
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




// You'll need to install EmailJS: npm install @emailjs/browser

// const ServiceRequest = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     Address: "",
//     serviceType: "",
//     projectType: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   // Initialize EmailJS on component mount (you'll need your actual public key)
//   useEffect(() => {
//     // Replace with your actual EmailJS public key
//     emailjs.init("fmLfz3g3TW7NhJlPc");
//   }, []);

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

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError("");

//     try {
//       // Send email using EmailJS
//       // Replace these parameters with your actual EmailJS service ID and template ID
//       const result = await emailjs.send(
//         "service_qt5bdoa", // Create this in the EmailJS dashboard
//         "template_aqdlar9", // Create this in the EmailJS dashboard
//         {
//           // These field names should match your EmailJS template variables
//           to_email: "satyakumarchaudhary603@gmail.com",
//           from_name: formData.name,
//           from_email: formData.email,
//           from_phone: formData.phone,
//           from_Address: formData.Address,
//           service_type: formData.serviceType,
//           project_type: formData.projectType,
//           message: formData.message,
//         }
//       );

//       console.log("Email sent successfully:", result.text);

//       // Reset form and show success message
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         Address: "",
//         serviceType: "",
//         projectType: "",
//         message: "",
//       });

//       setIsSubmitted(true);

//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);

//     } catch (error) {
//       console.error("Error sending email:", error);
//       setError("There was an error submitting your request. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
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
//             {isSubmitted && (
//               <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
//                 Thank you! Your service request has been submitted. We will contact you shortly.
//               </div>
//             )}

//             {error && (
//               <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
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
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
//   <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//   <input
//     type="text"
//     name="Address"
//     value={formData.Address}
//     onChange={handleChange}
//     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-accent focus:border-primary-accent"
//     required
//   />
// </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
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
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
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
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
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
//                 disabled={isSubmitting}
//                 className="w-full bg-primary-accent text-white px-6 py-3 rounded-md hover:bg-blue-500 transition-colors duration-200 disabled:opacity-70"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Request"}
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

// export default ServiceRequest
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

// You'll need to install EmailJS: npm install @emailjs/browser

const ServiceRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "", // Changed from "Address" to "address" for consistency
    serviceType: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS on component mount
  useEffect(() => {
    // Replace with your actual EmailJS public key
    emailjs.init("fmLfz3g3TW7NhJlPc");
  }, []);

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
    setIsSubmitting(true);
    setError("");

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_qt5bdoa",
        "template_8ega5ub",
        {
          // These field names should match your EmailJS template variables
          to_email: "satyakumarchaudhary603@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_address: formData.address, // Changed to match state property name
          service_type: formData.serviceType,
          project_type: formData.projectType,
          message: formData.message,
        }
      );

      console.log("Email sent successfully:", result.text);

      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "", // Changed from "Address" to "address"
        serviceType: "",
        projectType: "",
        message: "",
      });

      setIsSubmitted(true);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error("Error sending email:", error);
      setError("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            {isSubmitted && (
              <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
                Thank you! Your service request has been submitted. We will contact you shortly.
              </div>
            )}

            {error && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                {error}
              </div>
            )}

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
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address" // Changed from "Address" to "address"
                  value={formData.address}
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
                disabled={isSubmitting}
                className="w-full bg-primary-accent text-white px-6 py-3 rounded-md hover:bg-blue-500 transition-colors duration-200 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
  <div className="flex items-center space-x-6">
    <div className="flex-shrink-0">
      <img
        src="/lovable-uploads/af5f3069-ac10-4127-bbc6-c762e2496dd7.png"
        alt="Owner"
        className="w-24 h-80 rounded-full object-cover"
      />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900">Shivram Chaudhary</h3>
      <p className="text-gray-600">Owner & Technical Expert</p>
      <div className="mt-2 space-y-1">
        <p className="text-gray-600"><strong>📞</strong> +977 9802626926</p>
        <p className="text-gray-600"><strong>📧</strong> shivramchaudhary232@gmail.com</p>
        <p className="text-gray-600"><strong>📍</strong> Chandrauta, Kapilvastu, Nepal</p>
        <p className="text-gray-600"><strong>📍 Profile:</strong> Technical specialist with 10+ years' experience on Chandrauta. Expert in deep boring systems, electric motor manufacturing.</p>
        <h1 className="text-gray-600"><strong>Key Expertise</strong></h1>
        <ul className="list-disc list-inside text-gray-600">
          <li>Deep Boring Installation</li>
          <li>Electric Motor Maintenance</li>
          <li>Water Pump Installation</li>
          <li>Motor Repair Service</li>
        </ul>
        <h1 className="text-gray-600"><strong>Background</strong></h1>
        <p className="text-gray-600">
          Started career in Butwal, building technical foundation before establishing business in Chandrauta. With specialized certifications in electric motor engineering and deep boring systems. Successfully implemented over 75 deep boring projects across western Nepal, providing water solutions to multiple communities and agricultural operations. Designed and manufactured custom electric motors for various applications, with over 100 units currently in operation. Known for developing innovative motor modifications that improve efficiency and longevity in rural conditions.
        </p>
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