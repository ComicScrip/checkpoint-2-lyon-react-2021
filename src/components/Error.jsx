export default function Example() {
  return (
    <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="number text-4xl font-extrabold text-black sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-red sm:pl-6">
              <h1 className="errorTitle text-4xl font-extrabold text-english-red tracking-tight sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-english-red">
                Please check the URL in the address bar and try again.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
