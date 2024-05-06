export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 ">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
        <input
          className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none">
          Search
        </button>
      </div>
    </main>
  );
}