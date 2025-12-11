import ContactUsFormImg from "../../../assets/images/ContactUS/ContactUSFormImg/ContactUsFormImg.png";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col my-6 lg:my-12 mx-6 md:mx-12">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-3xl md:text-5xl font-bold mb-6 leading-snug text-center">
        <h1>Have a question?</h1>
        <h1>Ask outsource accounting!</h1>
      </div>

      {/* Content Section: Added flex-col for mobile, row for desktop, and a gap */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={ContactUsFormImg}
            alt="ContactUsFormImg"
            className="block w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Form Section */}
        <div
          className="w-full md:w-1/2 flex flex-col border border-black shadow-black 
        rounded-2xl p-4 md:p-8 text-center lg:text-start"
        >
          <h1 className="text-2xl font-bold mb-2">Message Us</h1>
          <p className="mb-6 text-gray-600">we get back to you in 24 hours</p>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="mb-4">
              <input
                type="text"
                {...register("fullname", { required: true })}
                placeholder="Enter Your Full Name"
                className="border p-2 w-full rounded"
              />
              {errors.fullname && (
                <p className="text-red-900 text-sm mt-1">Enter your name</p>
              )}
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <input
                type="text"
                {...register("companyName", { required: true })}
                placeholder="Enter Company Name"
                className="border p-2 w-full rounded"
              />
              {errors.companyName && (
                <p className="text-red-900 text-sm mt-1">
                  Enter your company name
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email"
                className="border p-2 w-full rounded"
              />
              {errors.email && (
                <p className="text-red-900 text-sm mt-1">Enter a valid email</p>
              )}
            </div>

            {/* Service Selection */}
            <div className="mb-4">
              <select
                {...register("serviceType", { required: true })}
                className="border p-2 w-full rounded"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="tax">Tax</option>
                <option value="counseling">Counseling</option>
              </select>
              {errors.serviceType && (
                <p className="text-red-900 text-sm mt-1">Select a service</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-4">
              <textarea
                rows="4"
                {...register("message", { required: true })}
                placeholder="Send Message"
                className="border p-2 w-full rounded"
              />
              {errors.message && (
                <p className="text-red-900 text-sm mt-1">Message is required</p>
              )}
            </div>

            <input
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer w-full md:w-auto transition duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
