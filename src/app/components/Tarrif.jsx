import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define type for tariff data


const Tarrif = () => {
  // Dynamic tariff data
  const tariffData = [
    { roomType: "Room", category: "Standard", price: "Rs 7000", tax: "+16% GST" },
    { roomType: "Room", category: "Family", price: "Rs 8000", tax: "+16% GST" },
    { roomType: "Room", category: "Deluxe", price: "Rs 9000", tax: "+16% GST" },
    { roomType: "Room", category: "Galaxy", price: "Rs 10000", tax: "+16% GST" },
    { roomType: "Room", category: "Executive suit", price: "Rs 12000", tax: "+16% GST" },
  ];

  return (
    <div className='ml-3 mr-3'>
      <h1 className='text-3xl text-[#B19502] uppercase m-5'>Tariff</h1>
      
      <Table className="">
        <TableCaption className="text-black"></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Room</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Tax</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tariffData.map((tariff, index) => (
            <TableRow key={index} className="hover:bg-[#B19502] hover:text-white">
              <TableCell className="font-medium">{tariff.roomType}</TableCell>
              <TableCell>{tariff.category}</TableCell>
              <TableCell>{tariff.price}</TableCell>
              <TableCell className="text-right">{tariff.tax}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tarrif;