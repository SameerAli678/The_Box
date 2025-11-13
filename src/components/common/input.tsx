export default function ReasonInput() {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="reason" className="text-sm text-gray-500 mb-1 inline-flex items-center">
        <span>Reason for Contacting</span>
        <span className="ml-1 text-red-500" aria-hidden="true">*</span>
      </label>

      <div className="relative">
        <input
          id="reason"
          name="reason"
          type="text"
          placeholder="Reason for Contacting"
          required
          className="w-full appearance-none rounded-lg bg-[#FFF0F3] border border-transparent px-4 py-3 pr-12 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
          aria-required="true"
        />

        <button
          type="button"
          aria-label="help"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-white text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          title="Why we ask this"
        >
          ?
        </button>
      </div>
    </div>
  );
}
