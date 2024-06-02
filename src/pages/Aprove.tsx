import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../module/store/store";
import * as AiIcons from "react-icons/ai";
import { toast } from "react-toastify";
import { selectData,handleInputChange} from '../utils/models';
import { getLoggedUserInfo } from '../utils/requestInfo';
import Pagination from "./pagination";
import {
    listorder,ordercount,updateOrder
  } from "../module/actions/data";
export default function CollapsibleTable() {
  const dispatch = useAppDispatch();

  const [openRow, setOpenRow] = useState<any>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const pagination={
    page:currentPage,
    pageSize:itemsPerPage,
  }
  const [order, setOrder] = useState<any>({
    orderId:"",
    status:""
  });
  useEffect(() => {
    dispatch(listorder(pagination))
      .unwrap()
      .then((response:any) => {
        toast.success(response.Message);
      })
      .catch((error:any) => {
        toast.error(error);
      });
  }, [currentPage,itemsPerPage]);
  useEffect(() => {
    dispatch(ordercount())
      .unwrap()
      .then((response:any) => {
        toast.success(response.Message);
      })
      .catch((error:any) => {
        toast.error(error);
      });
  },[]);
const update = (e: React.SyntheticEvent) => {

    dispatch(updateOrder(order))
    .unwrap()
    .then((response:any) => {
        toast.success("successfully updated");
    })
    .catch((error:any) => {
        toast.error(error);
    });
    };
    
  
const user=getLoggedUserInfo()

  const orderData = useSelector(
    (state: RootState) => state.order.listorder
  );
  const count = useSelector(
    (state: RootState) => state.order.count
  );
  const change=count?count:5
  const citizenship = {
    Map: [
      {
        name:"Pending",
        value:"Pending"
      },
      {
        name:"Approved",
        value:"Approved"
      },
      {
        name:"Rejected",
        value:"Rejected"
      }
    ],
    name:"status",
  };
  console.log(order)
  

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Client email
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Firtilizer type
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                 seed quantity
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                 status
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orderData.values?.map((row: any, idx) => (
                <React.Fragment key={row._id}>

                  <tr>
                    <td
                      onClick={() =>
                        setOpenRow(
                          openRow === row.package_id ? null : row.package_id
                        )
                      }
                      className="cursor-pointer border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                    >
                      <h5 className="font-medium text-black dark:text-white">
                        {row.farmer.email}
                        
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {row.fertilizer}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                      {row.seed}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" name={`${citizenship.name}`} onChange={(e)=>{handleInputChange(e,setOrder),        setOrder((prevState:any) => ({
            ...prevState,
            ["orderId"]: row._id,
        }))}} >
                                  <option value={row.status}>{row.status}</option>
                                  {citizenship.Map.map((info,i) =>(
                                      <option key={i} value={`${info.value}`}>{info.name}</option>
                                  ))}
                                </select>
                                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                  <svg
                                    className="fill-current"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g opacity="0.8">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill=""
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary"
                          onClick={(e) => (

                            update(e)
                          )}
                        >
                        <AiIcons.AiOutlinePlusCircle />

                        </button>
                        
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className="py-3 flex items-center text-center justify-center pt-10">
              <Pagination
                totalRows={count}
                pageChangeHandler={setCurrentPage}
                rowsChangeHandler={setitemsPerPage}
                rowsPerPage={itemsPerPage}
              />
            </div>
        </div>
      </div>
    </>
  );
}