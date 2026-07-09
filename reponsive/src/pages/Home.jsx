import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-md md:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-5">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-white/80">
            User Management Dashboard
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Manage users with a clean, fast, responsive interface.
          </h1>
          <p className="max-w-xl text-base text-white/75 sm:text-lg">
            Search, update, create, and delete users from one consistent UI.
            This home page keeps the layout lightweight and pushes the heavy
            interactions into the dedicated users screen.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/users"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-white/90"
            >
              Open Users
            </Link>
            <Link
              to="/edit/1"
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Edit Sample User
            </Link>
          </div>
        </div>

        <div className="grid w-full max-w-md grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <p className="text-sm text-white/60">Fast search</p>
            <p className="mt-2 text-2xl font-bold">Debounced</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <p className="text-sm text-white/60">Responsive</p>
            <p className="mt-2 text-2xl font-bold">Mobile first</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <p className="text-sm text-white/60">Theme</p>
            <p className="mt-2 text-2xl font-bold">Redux ready</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <p className="text-sm text-white/60">State</p>
            <p className="mt-2 text-2xl font-bold">Clean flow</p>
          </div>
        </div>
      </section>
    </div>
  );
}