function Invitation() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="card-container max-w-lg w-full rounded-2xl shadow-xl p-8 text-center relative overflow-hidden animate-pulse-slow"
        style={{
          backgroundImage: "url('./BG1c.jpeg')",
          backgroundColor: 'rgba(255,255,255,0.8)',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Decorative baby-themed border */}
        <div className="absolute inset-0 border-4 border-dashed border-pink-300 rounded-2xl pointer-events-none"></div>

        {/* Baby photo */}
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-pink-300 shadow-md animate-bounce-slow">
            <img src="./baby.png" alt="Baby Arriane" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm text-gray-500 mt-2 font-playful">Baby Arriane</p>
        </div>

        <h1 className="text-4xl font-cursive text-pink-600 mb-4 animate-bounce-slow">You're Invited!</h1>
        <h2 className="text-2xl font-playful text-purple-700 mb-2">Christening of</h2>
        <h3 className="text-5xl font-dancing text-blue-600 mb-4">Arriane Floralde</h3>
        <p className="text-gray-700 mb-6 font-playful text-lg">Beloved daughter of Darwin & Elvie Floralde</p>

        <div className="my-8 bg-pink-50 p-6 rounded-lg">
          <p className="text-lg text-gray-800 font-playful">📅 <span className="font-bold">Date:</span> July 25, 2025</p>
          <p className="text-lg text-gray-800 font-playful">🕘 <span className="font-bold">Time:</span> 9:00 AM</p>
          <p className="text-lg text-gray-800 font-playful">⛪ <span className="font-bold">Venue:</span> St. James the Greater Parish Church, Allen, Northern Samar</p>
        </div>

        <div className="my-8">
          <h3 className="text-2xl font-cursive text-pink-600 mb-3">Reception to Follow</h3>
          <p className="text-gray-700 font-playful text-lg">Kangkong St., Sabang 1, Allen, Northern Samar</p>
        </div>

        <div className="my-8">
          <h3 className="text-2xl font-cursive text-blue-600 mb-3">Godparents</h3>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-gray-700 font-playful">Ninong Miguel Reyes</p>
            <p className="text-gray-700 font-playful">Ninang Joanna Lim</p>
            <p className="text-gray-700 font-playful">Ninong Carlo Mendoza</p>
            <p className="text-gray-700 font-playful">Ninang Rachel Dela Cruz</p>
          </div>
        </div>

        <blockquote className="text-gray-700 italic my-8 font-playful text-lg">
          “Children are a gift from the Lord; they are a reward from Him.”<br />
          — Psalm 127:3
        </blockquote>

        <p className="text-gray-800 mb-4 font-playful text-lg">With love,<br />Darwin & Elvie Floralde</p>
        <p className="text-purple-600 font-bold font-playful text-xl">#ArrianeBlessedAndBaptized</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Invitation />);
