import type { IconType } from "react-icons";

interface Props{
    Icon: IconType,
    title: string,
    description: string,
}

const InfoSummary = ({ Icon, description, title }: Props) => {
    return (
        <div className='w-[260px] max-sm:w-full p-4 border border-blue-600 rounded-2xl shadow-md shadow-gray-700 flex flex-col justify-center items-center gap-4'>
            <div className="flex flex-col justify-center items-center max-sm:flex-row max-sm:justify-start w-full gap-2">
                <span className='flex justify-center text-white'><Icon className='font-semibold bg-blue-600 rounded-lg p-1 w-8 h-8' /></span>
                <h3 className='font-semibold text-2xl text-center text-gray-800'>{title}</h3>
            </div>
            <p className='font-semibold text-center text-gray-800'>{description}</p>
        </div>
    )
}

export { InfoSummary };
