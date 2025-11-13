"use client";

const ContactFields = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      {/* Name */}
      <div className="relative">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name*"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <svg
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21a8.25 8.25 0 0115 0"
          />
        </svg>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email*"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <svg
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 8.25v7.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 15.75v-7.5M21.75 8.25l-9.75 6-9.75-6"
          />
        </svg>
      </div>

      {/* Reason for contacting */}
      {/* <div className="relative">
        <select
          id="reason"
          name="reason"
          className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-8 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          defaultValue=""
        >
          <option value="" disabled>
            Reason for contacting
          </option>
          <option value="support">Customer Support</option>
          <option value="sales">Sales Inquiry</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>

        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div> */}

      {/* Phone */}
      <div className="relative">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <svg
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h.75a2.25 2.25 0 002.25-2.25v-1.386a1.125 1.125 0 00-.852-1.091l-3.374-.844a1.125 1.125 0 00-1.173.417l-.792 1.057a.75.75 0 01-1.055.155 12.034 12.034 0 01-4.448-4.448.75.75 0 01.155-1.055l1.057-.792a1.125 1.125 0 00.417-1.173l-.844-3.374a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75v0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ContactFields;
