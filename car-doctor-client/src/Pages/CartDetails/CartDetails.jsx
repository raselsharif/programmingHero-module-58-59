import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

const CartDetails = () => {
  const [carts, setCarts] = useState([]);
  console.log(carts);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/checkouts/rasel.it@riclbd.com`, {
        withCredentials: true,
      })
      .then((res) => setCarts(res.data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        console.log(result);
        const remaining = carts.filter((cart) => id !== cart._id);
        setCarts(remaining);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdate = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = carts.filter((cart) => cart._id !== id);
          const updated = carts.find((cart) => cart._id === id);
          console.log(updated);
          updated.status = "confirm";
          const newCarts = [updated, ...remaining];
          setCarts(newCarts);
        }
      });
  };
  return (
    <div>
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
                {cart?.status === "confirm" ? (
                  <span className="text-green-700 font-semibold">
                    Confirmed
                  </span>
                ) : (
                  <button
                    onClick={() => handleUpdate(cart._id)}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    <p>Pending</p>
                  </button>
                )}
              </Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="font-medium text-red-600 hover:underline dark:text-red-500"
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
