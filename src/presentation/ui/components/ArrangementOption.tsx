import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "./Button";
import clsx from "clsx";

interface Props {
    title: string,
    description: string,
    important?: boolean
    btnText: string,
}

const ArrangementOption = ({title, important=false, description, btnText}:Props) => {
  return (
    <div className={clsx(`${important? 'border-2': 'border'} border-yellow-500 bg-white rounded-2xl font-bold p-8 w-[373px] flex flex-col items-center gap-4`)}>
        {important && <span className="bg-yellow-500 rounded-2xl px-2 text-gray-600 font-semibold">Más popular</span>}
        <h3 className="text-gray-700 text-2xl">{title}</h3>
        <p className="text-gray-700 text-center">{description}</p>
        <Button className='text-white bg-blue-500 hover:bg-blue-400 transition duration-300'>
            <IoLogoWhatsapp className="mr-4" />{btnText}
        </Button>
    </div>
  )
}

export { ArrangementOption };
