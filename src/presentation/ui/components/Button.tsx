import clsx from "clsx";

interface Props {
    children?: any,
    className?: string
}
const Button = ({ children, className }: Props) => {
  return (
    <button className={clsx(`cursor-pointer m-4 p-3 text-lg flex justify-center items-center rounded-2xl font-semibold text-gray-800 min-w-[169px] min-h-12`, className)}>
      { children }
    </button>
  )
}

export { Button };