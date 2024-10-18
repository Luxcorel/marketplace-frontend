import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="mt-4 h-3 bg-red-400" />
      <footer className="w-full bg-white pt-4 shadow-md drop-shadow-md">
        <div className="mx-auto flex w-8/12 flex-wrap justify-between gap-4 font-light mobile-br:w-11/12 mobile-br:justify-evenly">
          <div className="flex flex-col">
            <p className="pb-2">
              <Link className="font-bold" href="/">
                Security
              </Link>
            </p>
            <p>
              <Link href="/">Client security</Link>
            </p>
            <p>
              <Link href="/">False emails</Link>
            </p>
            <p>
              <Link href="/">Report annoying ads</Link>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="pb-2">
              <Link className="font-bold" href="/">
                Terms
              </Link>
            </p>
            <p>
              <Link href="/">User conditions</Link>
            </p>
            <p>
              <Link href="/">Cookies</Link>
            </p>
            <p>
              <Link href="/">Cookie settings</Link>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="pb-2">
              <Link className="font-bold" href="/">
                For companies
              </Link>
            </p>
            <p>
              <Link href="/">For companies</Link>
            </p>
            <p>
              <Link href="/">Open store</Link>
            </p>
            <p>
              <Link href="/">Show all stores</Link>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="pb-2">
              <Link className="font-bold" href="/">
                Marketplace
              </Link>
            </p>
            <p>
              <Link href="/">About Marketplace</Link>
            </p>
            <p>
              <Link href="/">Press</Link>
            </p>
            <p>
              <Link href="/">Work at Marketplace</Link>
            </p>
          </div>
        </div>
        <div className="mt-10 bg-gray-200 py-5">
          <p className="mx-auto w-8/12 text-sm">&copy; Marketplace Inc.</p>
        </div>
      </footer>
    </div>
  );
}
