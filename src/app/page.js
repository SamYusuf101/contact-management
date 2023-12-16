"use client";
export default function Home() {
  return (
    <div className="pl-10 mt-10">
      <h1 className="mb-5 text-3xl">Contact Management App</h1>
      <form>
        <label className="block text-sm font-medium text-gray-700 ">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-700">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-700">
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={addContact}
          className="py-2 px-4 bg-red-500 text-white font-semibold mt-3
            rounded-lg shadow-md hover:bg-yellow-400 
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
}
