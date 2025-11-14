"use client";

const SelectInput = () => {
  return (
    <div className="w-full sm:col-span-2 col-span-1">
      <label
        htmlFor="reason"
        className="block mb-1 text-sm font-medium text-gray-500"
      >
        Reason for contacting
      </label>

      <div className="relative">
        <select
          id="reason"
          name="reason"
          className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-8 text-sm text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          defaultValue=""
        >
          <option value="" disabled className="flex text-gray-700">
            Reason for contacting
          </option>
          <option value="support">Customer Support</option>
          <option value="sales">Sales Inquiry</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>

        {/* dropdown arrow */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
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
      </div>
    </div>
  );
};

export default SelectInput;
