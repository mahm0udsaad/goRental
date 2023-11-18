import NavBar from "@/components/navBar";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Dashboard (){
  const { userId } = auth();
  const user = await currentUser()
  return (
    <main className="dash">
      <section className="gap-5 flex">
        <NavBar />
        <section className="bg-white w-5/6 h-screen pt-8 px-4">
          <section className="flex-col text-blue-950 text-3xl font-semibold tracking-wide relative">
            Cars
          </section>
        </section>
      </section>
    </main>
  )
}
