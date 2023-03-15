import { AiOutlineArrowRight } from "react-icons/ai";

import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout>
      <div className="m-14 ">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="capitalize">Description</th>
              <th className="capitalize">Qty</th>
              <th className="capitalize">UOM</th>
              <th className="capitalize">Unit Price</th>
              <th className="capitalize">Discount (%)</th>
              <th className="capitalize">VAT (%)</th>
              <th className="capitalize"></th>
              <th className="capitalize">Currency</th>
              <th className="capitalize">VAT Ammount</th>
              <th className="capitalize text-center">Sub Total</th>
              <th className="capitalize text-center">Total</th>
              <th className="capitalize">Change To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-px">
                <input
                  type="text"
                  className="input input-bordered w-[150px] text-black"
                  placeholder="Description"
                />
              </td>
              <td className="w-px">
                <input
                  type="number"
                  className="input input-bordered w-[80px] text-black"
                  placeholder="Qty"
                />
              </td>
              <td className="w-px">
                <select className="select select-bordered ">
                  <option>SHP</option>
                </select>
              </td>
              <td className="w-px">
                <input
                  type="text"
                  className="input input-bordered w-[100px] text-black"
                  placeholder="Unit Price"
                />
              </td>
              <td className="w-px">
                <input
                  type="number"
                  className="input input-bordered w-[80px] text-black"
                  defaultValue={0}
                />
              </td>
              <td className="w-px">
                <input
                  type="number"
                  className="input input-bordered w-[80px] text-black"
                  defaultValue={0}
                />
              </td>
              <td className="w-px">
                <AiOutlineArrowRight className="text-center" />
              </td>
              <td className="w-px">
                <select className="select select-bordered ">
                  <option>USD</option>
                  <option>IDR</option>
                  <option>AED</option>
                </select>
              </td>
              <td className="w-px">
                <p className="text-center">0.00</p>
              </td>
              <td className="w-24">
                <p className="text-center">0.00</p>
              </td>
              <td className="w-24">
                <p className="text-center">0.00</p>
              </td>
              <td>
                <select className="select select-bordered w-full">
                  <option>USD</option>
                  <option>IDR</option>
                  <option>AED</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-px">
                <input
                  type="text"
                  className="input input-bordered w-[150px] text-black"
                  placeholder="Description"
                />
              </td>
              <td className="w-px">
                <input
                  type="number"
                  className="input input-bordered w-[80px] text-black"
                  placeholder="Qty"
                />
              </td>
              <td className="w-px">
                <select className="select select-bordered ">
                  <option>SHP</option>
                </select>
              </td>
              <td className="w-px">
                <input
                  type="text"
                  className="input input-bordered w-[100px] text-black"
                  placeholder="Unit Price"
                />
              </td>
              <td className="w-px">
                <input
                  type="number"
                  className="input input-bordered w-[80px] text-black"
                  defaultValue={0}
                />
              </td>
              <td className="w-px">
                <input
                  type="number"
                  className="input input-bordered w-[80px] text-black"
                  defaultValue={0}
                />
              </td>
              <td className="w-px">
                <AiOutlineArrowRight className="text-center" />
              </td>
              <td className="w-px">
                <select className="select select-bordered ">
                  <option>USD</option>
                  <option>IDR</option>
                  <option>AED</option>
                </select>
              </td>
              <td className="w-px">
                <p className="text-center">0.00</p>
              </td>
              <td className="w-24">
                <p className="text-center">0.00</p>
              </td>
              <td className="w-24">
                <p className="text-center">0.00</p>
              </td>
              <td>
                <select className="select select-bordered w-full">
                  <option>USD</option>
                  <option>IDR</option>
                  <option>AED</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px">
                <p className="text-center">AED in Total</p>
              </td>
              <td className="w-24">
                <p className="text-center">0.00</p>
              </td>
              <td className="w-24">
                <p className="text-center">0.00</p>
              </td>
              <td>
                <p className="text-center">0.00</p>
              </td>
            </tr>
            <tr>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px"></td>
              <td className="w-px">
                <p className="text-center">USD in Total</p>
              </td>
              <td className="w-24">
                <p className="text-center">0.00</p>
              </td>
              <td className="w-24">
                <p className="text-center">0.00</p>
              </td>
              <td>
                <p className="text-center">0.00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-96 mx-14 my-5">
        <div className="flex justify-start items-center">
          <p className="mr-2">Exchange Rate 1 USD = </p>
          <input type="number" className="input input-bordered w-24 h-10"/>
          <p className="ml-2">AED</p>
        </div>
        <br />
        <div className="flex justify-end">
          <button className="btn bg-white text-black mx-5 hover:text-white hover:bg-red-500">cancel</button>
          <button className="btn bg-white text-black mr-5 hover:text-white">save draft</button>
          <button className="btn bg-green-700 border-none w-60 hover:bg-green-500">Submit</button>
        </div>
      </div>
    </Layout>
  );
};

export default index;
