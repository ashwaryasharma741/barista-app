const Card = ({heading, children, footer}) => {
  return (
    <div className="flex justify-center min-w-[200px] my-10">
      <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center min-w-[500px]">
        <div className="py-3 px-6 border-b border-gray-300 capitalize font-bold text-lg">
          {heading}
        </div>
        <div className="p-6">
          {children}
        </div>
        {footer && <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          {footer}
        </div>}
      </div>
    </div>
  )
}

export default Card;