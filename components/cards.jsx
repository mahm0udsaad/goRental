
export const Cards = ({card}) =>{
    return(
        <div className="justify-center items-stretch border border-[color:var(--gray-200,#E4E4E7)] bg-white flex grow basis-[0%] flex-col pl-4 pr-4 py-4 rounded-xl border-solid">
            <div className="text-zinc-500 text-xs font-medium leading-5 tracking-wider uppercase whitespace-nowrap">
              {card.title}
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-3">
              <div className="text-zinc-900 text-xl font-bold leading-8">
                {card.number}
              </div>
            </div>
          </div>
    )
} 