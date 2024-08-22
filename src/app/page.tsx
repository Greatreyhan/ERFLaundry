'use client'
import { useEffect, useState } from "react";
import { db } from "./firebaseconf";
import { ref, onValue } from "firebase/database";
import Navigation from "./components/navigation";

export default function Home() {
  const [listData, setListData] = useState([])
  useEffect(() => {
    const query = ref(db, "list");
    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const items:any = [];

        // Iterate over the data and push key-value pairs to the items array
        Object.keys(data).forEach(key => {
          items.push({
            key: key,
            value: data[key]
          });
        });

        setListData(items);
        console.log(items)
      } else {
        console.log('failed');
      }
    });
  }, []);


  return (
    <div className="h-screen w-full bg-slate-100">
      <Navigation />

      <h2 className="text-center pt-20 text-xl my-6">List Available Items</h2>

      <div className="flex  justify-center">

        <table className="table p-4 bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                #
              </th>
              <th className="border w-60 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                RFID
              </th>
              <th className="border w-48 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Alias
              </th>
              <th className="border w-48 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {listData ? listData.map((data,i) => {
              return (
                <tr key={i+1} className="text-gray-700">
                  <td className="border p-4 dark:border-dark-5">
                    {i+1}
                  </td>
                  <td className="border p-4 dark:border-dark-5">
                    {data.value.rfid }
                  </td>
                  <td className="border p-4 dark:border-dark-5">
                    {data.value.alias}
                  </td>
                  <td className="border p-4 dark:border-dark-5">
                    {data.value.type}
                  </td>
                </tr>
              )
            }): null}

          </tbody>
        </table>


      </div>
    </div>
  );
}
