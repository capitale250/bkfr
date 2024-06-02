import { useState } from "react";
import { selectData,handleInputChange} from '../utils/models';
import { RootState, useAppDispatch } from "../module/store/store";
import {
  postData
} from "../module/actions/data";
import { toast } from "react-toastify";


export default function TasksPage() {
  const dispatch = useAppDispatch();
  const citizenship:selectData = {
    Map: [
      {
        name:"rwandan",
        value:"rwandan"
      },
      {
        name:"foreigner",
        value:"foreigner"
      }
    ],
    title: 'Select citizenshop',
    name:"citizen",
  };
  const bussinessType:selectData = {
    Map: [
      {
        name:"retailer",
        value:"retailer"
      },
      {
        name:"wholesaler",
        value:"wholesaler"
      },
      {
        name:"manufacture",
        value:"manufacture"
      }
    ],
    title: 'Enter Business Type',
    name:"bussinessType"
  };
  const purpose:selectData = {
    Map: [
      {
        name:"direct sale",
        value:"directSale"
      },
      {
        name:"personal use",
        value:"personalUse"
      },
      {
        name:"trial use",
        value:"trialUse"
      },
      {
        name:"other",
        value:"other"
      }
    ],
    title: 'Select the purpose of importation',
    name:"purpose"
  };
  const category:selectData = {
    Map: [
      {
        name:"general purpose",
        value:"generalPurpose"
      },
      {
        name:"constuction materials",
        value:"constuctionMaterials"
      },
      {
        name:"chemicals",
        value:"chemicals"
      }
    ],
    title: 'Select product category',
    name:"category"
  };
  const measurement:selectData = {
    Map: [
      {
        name:"kgs",
        value:"kgs"
      },
      {
        name:"Tonnes",
        value:"tonnes"
      }
      
    ],
    title: 'Enter unit of measurement',
    name:"activities_status"
  };
  
  const [info,setInfo] =useState<any>({
    activities_status:"",
    category:"",
    purpose:"",
    bussinessType:"",
    citizen:"",

    nid:"",
passportnbr:"",
name:"",
surname:"",
nationality:"",
phone:"",
email:"",
companyName:"",
tin:"",
registrationdate:"",
location:"",
purposeOfImport:"",
productname:"",
weight:"",
descrProducts:"",
quantity:"",
  })


console.log(info)
const sendData = (e: React.SyntheticEvent) => {
  e.preventDefault();
  dispatch(postData(info))
    .unwrap()
    .then((response) => {
      toast.success(response.Message);
      // setItenary([initialItenary]);
      // setShowAddReminder(false);
    })
    .catch((error) => {
      toast.error(error);
    });
};
  return (
    <>
   <div className="mt-3">
    <div className="flex flex-col gap-9">
      {/* <!-- flight details--> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            bussiness owner details
          </h3>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                Applicant citizenship
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                {/* <Select data={breakFastData} setData={setItenary}/> */}
                                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" name={`${citizenship.name}`} required onChange={(e)=>handleInputChange(e,setInfo)}>
                                  <option value="">{citizenship.title}</option>
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
              </div>
{info.citizen === "rwandan" ?
              <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-black dark:text-white">
              Identification document number
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  name="nid"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div> :""}
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            {info.citizen === "foreigner" ?
              <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-black dark:text-white">
                passport number
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  name="passportnbr"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div> :""}

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  other names
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-black dark:text-white">
                  surname
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="surname"
                    onChange={(e) => handleInputChange(e, setInfo)}
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  nationality
                </label>
                <input
                  type="text"
                  required
                  name="nationality"
                  onChange={(e) => handleInputChange(e, setInfo)}
                 
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-black dark:text-white">
                  phone number
                </label>
                <div className="relative">
                  <input
                    type="text"
                  
                    name="phone"
                    onChange={(e) => handleInputChange(e, setInfo)}
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  placeholder="Enter Email Adress"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
   </div>
   <div className="mt-3">
    <div className="flex flex-col gap-9">
      {/* <!-- flight details--> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            bussiness  details
          </h3>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                bussiness Type
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                {/* <Select data={breakFastData} setData={setItenary}/> */}
                                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" name={`${bussinessType.name}`} onChange={(e)=>handleInputChange(e,setInfo)}>
                                  <option value="">{bussinessType.title}</option>
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
              </div>

              <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-black dark:text-white">
              company name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="companyName"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-black dark:text-white">
                tin number
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  name="tin"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  registration date
                </label>
                <input
                  type="date"
                  name="registrationdate"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-black dark:text-white">
                  location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="location"
                    onChange={(e) => handleInputChange(e, setInfo)}
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

             
            </div>
          </div>
        </form>
      </div>
    </div>
   </div>
   <div className="mt-3">
    <div className="flex flex-col gap-9">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            product information
          </h3>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                Purpose of
importation
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                {/* <Select data={breakFastData} setData={setItenary}/> */}
                                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" name={`${purpose.name}`} onChange={(e)=>handleInputChange(e,setInfo)}>
                                  <option value="">{purpose.title}</option>
                                  {purpose.Map.map((info,i) =>(
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
              </div>
{info.category==="other" ?
              <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-black dark:text-white">
              Specify purpose
of importation
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="purposeOfImport"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div> : ""}
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-black dark:text-white">
              Product
category
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                                {/* <Select data={breakFastData} setData={setItenary}/> */}
                                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" name={`${category.name}`} onChange={(e)=>handleInputChange(e,setInfo)}>
                                  <option value="">{category.title}</option>
                                  {purpose.Map.map((info,i) =>(
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
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  product name
                </label>
                <input
                  type="text"
                  name="productname"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-black dark:text-white">
                  weight
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="weight"
                    onChange={(e) => handleInputChange(e, setInfo)}
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-black dark:text-white">
                Description of
products
                </label>
                <div className="relative">
                <textarea
                rows={6}
                name="descrProducts"
                onChange={(e)=>{handleInputChange(e, setInfo)}}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
                </div>
              </div>
             
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-black dark:text-white">
                  unit of measurement
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                {/* <Select data={breakFastData} setData={setItenary}/> */}
                                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" name={`${measurement.name}`} onChange={(e)=>handleInputChange(e,setInfo)}>
                                  <option value="">{measurement.title}</option>
                                  {purpose.Map.map((info,i) =>(
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
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-black dark:text-white">
                Quantity of
product
                </label>
                <div className="relative">
                <input
                  type="number"
                  required
                  name="quantity"
                  onChange={(e) => handleInputChange(e, setInfo)}
                  className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div>
             
            </div>
          </div>
        </form>
      </div>
    </div>
   </div>
   <div className="flex items-center justify-center mt-10 w-full">
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                  onClick={sendData}
                >
                  Submit
                </button>
              </div>

      </>
  );
}
