import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getData = async () => {
    const res = await fetch(
      "https://eduardconstantin-curly-happiness-x694jq96gg39xp4-3000.preview.app.github.dev/api/s-gpt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const response = await res.json();
    return response;
  };

  console.log(getData());
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
