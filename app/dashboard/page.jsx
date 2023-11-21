
import NavBar from "@/components/navBar";
import PageRenderer from "@/components/currentPage";

export default  function Dashboard (){

  return (
    <main className="dash">
      <section className="gap-4 flex">
        <NavBar />
        <section className="flex w-full sm:h-[98dvh]">
          <PageRenderer />
        </section>
      </section>
    </main>
  )
}

