import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

const CartDetails = () => {
  const [carts, setCarts] = useState([]);
  console.log(carts);
  useEffect(() => {
    fetch(`http://localhost:5000/checkouts/rasel.it@riclbd.com`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div>
      <h2>Cart Details</h2>
      <Table>
        <Table.Head>
          <Table.HeadCell>Service Image</Table.HeadCell>
          <Table.HeadCell>Service Title</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {carts?.map((cart) => (
            <Table.Row
              key={cart._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img className="h-32 w-full" src={cart.img} alt="" />
              </Table.Cell>
              <Table.Cell>{cart.title}</Table.Cell>
              <Table.Cell>$ {cart.price}</Table.Cell>
              <Table.Cell>{cart.date}</Table.Cell>
              <Table.Cell>
                <button
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  <p>Pending</p>
                </button>
              </Table.Cell>
              <Table.Cell>
                <button
                  className="font-medium text-red-600 hover:underline dark:text-red-500"
                  href="/tables"
                >
                  <p>Delete</p>
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CartDetails;
