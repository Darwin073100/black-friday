import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Button } from "../components/Button";

const JoinArrangement = () => {
  return (
    <div className="bg-blue-950 flex flex-col justify-center items-center p-8 gap-8">
        <span className="w-[360px] max-sm:text-sm  rounded-full bg-yellow-700 p-2 flex font-semibold text-yellow-400 justify-center items-center gap-4">
          <MdOutlineAccessTimeFilled className="w-4 h-4"/>
          Oferta válida sólo durante el black friday
        </span>
        <h2 className="text-white font-bold text-5xl max-sm:text-3xl">Unete a la fase beta</h2>
        <Button className='w-[350px] p-2  bg-yellow-500 shadow-lg shadow-amber-300 hover:bg-yellow-300 transition duration-300'>
            Contratar ahora
        </Button>
      </div>
  )
}

export { JoinArrangement };