export default function InstaProfile({ user = null }) {
  const sample = {
    name: "Joana Silva",
    username: "joana.s",
    avatarAlt: "Avatar de Joana",
    bio: "Jogadora da escolinha do Sport Recife 15 Anos",
    website: "https://example.com",
    posts: 128,
    followers: "24.3k",
    following: 312,
    highlights: ["Viagem", "Pets", "Comida"],
    grid: Array.from({ length: 9 }).map((_, i) => ({ id: i + 1 }))
  };

  const u = user || sample;

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              {/* Placeholder avatar */}
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#E5E7EB" />
                <circle cx="12" cy="9" r="3" fill="#D1D5DB" />
                <path d="M4 20c0-3.5 4.5-6 8-6s8 2.5 8 6" fill="#D1D5DB" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-semibold">{u.username}</h1>
                <button className="px-3 py-1 rounded-md border text-sm font-medium">Seguir</button>
                <button className="p-1 rounded-md border text-sm">⋯</button>
              </div>
              <div className="mt-3 flex gap-6 text-sm">
                <div><span className="font-semibold">{u.posts}</span> posts</div>
                <div><span className="font-semibold">{u.followers}</span> seguidores</div>
                <div><span className="font-semibold">{u.following}</span> seguindo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio & Website */}
        <div className="mt-5 md:mt-6">
          <div className="text-sm">
            <div className="font-medium">{u.name}</div>
            <div className="text-gray-700 mt-1">{u.bio}</div>
            {u.website && (
              <a
                href={u.website}
                className="block mt-2 text-sm text-blue-600 truncate"
                target="_blank"
                rel="noreferrer"
              >
                {u.website}
              </a>
            )}
          </div>

          {/* Highlights */}
          <div className="mt-4 flex gap-3">
            {u.highlights.map((h, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">{h[0]}</div>
                <span className="text-xs mt-1">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 border-t pt-4">
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/></svg>
              Posts
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              Reels
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/></svg>
              Marcados
            </div>
          </div>
        </div>

        {/* Grid of posts */}
        <div className="mt-4 grid grid-cols-3 gap-1">
          {u.grid.map(item => (
            <div key={item.id} className="w-full pb-full relative bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">Imagem {item.id}</div>
            </div>
          ))}
        </div>

        <style>{`.pb-full{padding-bottom:100%;}`}</style>
      </div>
    </div>
  );
}
