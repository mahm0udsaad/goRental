import NavBar from "@/components/navBar";
import PageRenderer from "@/components/currentPage";


export default async function Dashboard (){
  return (
    <main className="dash">
      <section className="gap-4 flex">
        <NavBar />
        <section className="flex w-full h-[98dvh]">
          <PageRenderer />
        </section>
      </section>
    </main>
  )
}

