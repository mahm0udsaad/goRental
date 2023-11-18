import NavBar from "@/components/navBar";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Dashboard (){
  const { userId } = auth();
  const user = await currentUser()
  return (
    <main className="dash">
      <section className="gap-4 flex">
        <NavBar />
        <section className="flex w-full h-auto">
          <section className="flex-col bg-white  rounded-xl w-5/6 pt-8 px-4 text-blue-950 text-3xl font-semibold tracking-wide relative">
            <h1>Dashboard</h1>
          </section>
        </section>
      </section>
    </main>
  )
}
