export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500"
          src="https://i.pinimg.com/originals/f7/b1/cb/f7b1cbfdf8444f273f3bc3aa73f3783b.jpg"
          alt="Desi Developer"
        />
        <h2 className="text-xl font-bold text-gray-800">Raj DesiDev</h2>
        <p className="text-gray-500">Fullstack AI Developer 💻⚙️</p>
        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Say Hi 👋
        </button>
      </div>
    </div>
  );
}
