import Navbar from "@/components/Navbar";

type EventResult = {
  place: number;
  event: string;
  year?: string;
  location?: string;
  tags?: string[];
  ctfPoints: number;
  ratingPoints: number;
};

const rankings = [
  { label: "CTFtime Ranking (Tunisia)", value: "#1" },
  { label: "CTFtime Ranking (Global)", value: "#283" },
];

const results: EventResult[] = [
  {
    place: 14,
    event: "Securinets CTF Finals 2025",
    location: "Tunis, Tunisia",
    tags: ["Onsite"],
    ctfPoints: 2640,
    ratingPoints: 70.5,
  },
  {
    place: 14,
    event: "CubeCTF",
    tags: ["Online"],
    ctfPoints: 3513,
    ratingPoints: 17.594,
  },
  {
    place: 32,
    event: "BCACTF 6.0",
    tags: ["Online"],
    ctfPoints: 2850,
    ratingPoints: 28.167,
  },
  {
    place: 36,
    event: "NahamCon CTF 2025",
    tags: ["Online"],
    ctfPoints: 8559,
    ratingPoints: 30.496,
  },
];

function ordinal(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n}st`;
  if (mod10 === 2 && mod100 !== 12) return `${n}nd`;
  if (mod10 === 3 && mod100 !== 13) return `${n}rd`;
  return `${n}th`;
}

const fmt = {
  ctf: (n: number) => n.toLocaleString(),
  rating: (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 3 }),
};

export default function Achievements() {
  const sorted = [...results].sort((a, b) => a.place - b.place);

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen text-[11px] md:text-[12px]">
        <div className="w-full pb-20 py-8">
          <div className="mx-auto w-full max-w-5xl px-4">
            {/* Header */}
<div className="text-center mb-16 md:mb-20 ">
              <h2 className="text-2xl md:text-3xl text-center">Achievements🏆</h2>
              <p className="mt-2 text-[11px] md:text-sm opacity-70 italic font-sans tracking-wide">
  Always learning. Never done.
</p>
            </div>

            {/* Rankings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {rankings.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
                >
                  <div className="text-[10px] opacity-75">{r.label}</div>
                  <div className="mt-2 text-lg md:text-xl font-semibold modern-font tracking-tight">
  {r.value}
</div>
                </div>
              ))}
            </div>

            {/* Event Cards */}
            <div className="space-y-3">
              {sorted.map((r) => (
                <article
  key={`${r.place}-${r.event}`}
  className="
    group
    flex items-center justify-between gap-4
    rounded-2xl border border-white/10
    bg-black/30
    px-4 py-3
    transition-all duration-200 ease-out
    hover:-translate-y-0.5 hover:scale-[1.01]
    hover:bg-white/[0.06]
    hover:border-white/25
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.55)]
    active:scale-[0.99]
  "
>

                  {/* Left block */}
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Placement */}
                    <div className="shrink-0 w-12 sm:w-14">
                      <div className="text-base/sm:text-lg">
                        {ordinal(r.place)}
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="min-w-0">
  <div className="font-semibold text-sm sm:text-base break-words">
    {r.event}
  </div>

  {r.location && (
  <div className="text-[10px] opacity-70 mt-1 flex items-center gap-2">
    <span>{r.location}</span>
    {r.location.includes("Tunisia") && (
      <span className="fi fi-tn rounded-[2px]" aria-label="Tunisia" />
    )}
  </div>
)}


                      {/* Tag */}
                      {r.tags?.length && (
                        <div className="mt-2">
                          {r.tags.map((t) => (
  <span
    key={t}
    className={`
      px-2.5 py-1 rounded-full text-[10px]
      border transition-all duration-200
      ${
        t === "Onsite"
          ? "border-red-500/40 bg-red-500/10 text-red-400 group-hover:bg-red-500/15"
          : "border-[#8ab487]/50 bg-[#8ab487]/10 text-[#8ab487] group-hover:bg-[#8ab487]/20"
      }
    `}
  >
    {t}
  </span>
))}

                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right stats */}
                  <div className="text-right shrink-0 text-[10px] opacity-80">
                    <div>
                      POINTS:{" "}
                      <span className="font-semibold opacity-100">
                        {fmt.ctf(r.ctfPoints)}
                      </span>
                    </div>
                    <div className="mt-1">
                      Rating:{" "}
                      <span className="font-semibold opacity-100">
                        {fmt.rating(r.ratingPoints)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
