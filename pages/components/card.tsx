type CardProps = {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className='card shadow rounded-md'>
      <div className='card-title px-8 py-6'>
        <p className='text-2xl'>{title}</p>
      </div>
      <div className='card-content px-8 py-8'>{children}</div>
    </div>
  )
}

export default Card
