import Image from "next/image";


const NotFound = () => {
  return (
    <div className="text-center py-10 flex flex-col items-center gap-1">
        <Image 
          src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-1024x499-muqmchqg.png" 
          alt="Not Found Page" 
          width={200} 
          height={180}
        />
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound;