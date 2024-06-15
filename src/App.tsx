import Link from "./components/Link";
import { Links } from "./constants/links";

function App() {
  return (
    <div className="h-screen w-screen py-16">
      <div className="w-full h-32 flex items-center justify-center">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-white font-semibold text-4xl">Igor Duca</h1>
          <h3 className="text-zinc-300 text-center">Software Engineer</h3>
        </div>
      </div>

      <div className="mt-8 h-fit w-full flex items-center justify-center">
        <div className="flex flex-col space-y-4">
          {Links.map((link, index) => (
            <Link key={index} title={link.name} href={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
