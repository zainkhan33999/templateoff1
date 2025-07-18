import Image from 'next/image'
import pic1 from "../../asset/pic1.jpeg"
import pic2 from "../../asset/pic2.jpeg"
import pic3 from "../../asset/pic3.jpeg"
import pic4 from "../../asset/pic4.jpeg"
import pic5 from "../../asset/pic5.jpeg"
import pic6 from "../../asset/pic6.jpeg"
import pic7 from "../../asset/pic7.jpeg"
import pic8 from "../../asset/pic8.jpeg"
import pic9 from "../../asset/pic9.jpeg"
import pic10 from "../../asset/pic10.jpeg"

const Card = () => {
 

const roomTypes = [
  { 
    roomType: "Room", 
    category: "Standard", 
    price: "Rs 7000", 
    tax: "+16% GST",
    image: pic1,
    alt: "Standard Room"
  },
  { 
    roomType: "Room", 
    category: "Family", 
    price: "Rs 8000", 
    tax: "+16% GST",
    image: pic6,
    alt: "Family Room"
  },
  { 
    roomType: "Room", 
    category: "Deluxe", 
    price: "Rs 9000", 
    tax: "+16% GST",
    image: pic3,
    alt: "Deluxe Room"
  },
  { 
    roomType: "Room", 
    category: "Galaxy", 
    price: "Rs 10000", 
    tax: "+16% GST",
    image: pic4,
    alt: "Galaxy Room"
  },
  { 
    roomType: "Room", 
    category: "Executive suit", 
    price: "Rs 12000", 
    tax: "+16% GST",
    image: pic5,
    alt: "Executive Suite"
  },
  { 
    roomType: "Room", 
    category: "Custom", 
    price: "", 
    tax: "+16% GST",
    image: pic8,
    alt: "Executive Suite"
  }
];
  
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  gap-6 w-full px-4 sm:px-6 lg:px-8 py-8'>
      {roomTypes.map((room, index) => (
        <div key={index} className='h-full w-full flex justify-center items-center rounded-lg bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
          <div className='w-full'>
            <Image 
              className='w-full h-48 sm:h-56 object-cover'
              src={room.image}
              alt={room.category}
              width={400}
              height={300}
            />
            <div className='p-4'>
              <div className='flex justify-between items-center mb-3'>
                <h1 className='text-xl sm:text-2xl font-medium text-gray-800'>{room.category}</h1>
                <p className='text-md font-semibold text-green-500'>{room.price}</p>
              </div>
              <div className='flex flex-col gap-3'>
                <button className='py-2 px-5 border-2 cursor-pointer border-gray-300 mt-4 text-[#B19502] font-medium rounded-md hover:bg-[#B19502] hover:text-white transition-colors duration-300'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card