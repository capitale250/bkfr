import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  orderData
} from "../module/actions/data";
import { RootState, useAppDispatch } from "../module/store/store";
import { toast } from 'react-toastify';
import { orderFertilizer } from '../module/actions/data';
import { useSelector } from 'react-redux';
import { getLoggedUserInfo } from '../utils/requestInfo';



const Order = () => {
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState<any>({
    fertilizer:"",
    seed:0
  });

  const user=getLoggedUserInfo()
  const orderDatas:orderData={
farmerId:user.userid,
 ...order
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value)
    setOrder((prevState:any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const userLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!order.fertilizer || !order.seed) return toast.error('Fill all required fields please')

  dispatch(orderFertilizer(orderDatas))
    .unwrap()
    .then((response:any) => {
      console.log(response)
      toast.success(response);
    })
    .catch((error:any) => {
      toast.error(error);
    });
  };
  const orderData = useSelector(
    (state: RootState) => state.order.order
  );
  console.log(user)
  if(user.info.role=="farmer"){
  window.location.assign('/order');
  }else if(user.info.role=="admin"){
      window.location.assign('/aprove');
  }

  const styles={
    input:"w-full rounded-3xl border border-gray_border bg-transparent py-2 px-6 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
  }
  return (
    <div className="flex flex-wrap justify-center items-center px-9 py-2 mt-10">
      <div className="w-full xl:w-1/3 justify-center p-7 border-l-2 border-gray bg-gray rounded-3xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto rounded-full" />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-p_blue-2">Order Fertilizer</h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Fertilizer</label>
            <div className="mt-2">
              <input id="fertilizer" placeholder="Enter your fertilizer" name="fertilizer"  onChange={handleInputChange} required className={styles.input}/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">seed</label>
            </div>
            <div className="mt-2">
              <input id="seed" placeholder="Enter your seed" name="seed"   onChange={handleInputChange} required className={styles.input}/>
            </div>
          </div>

          <div className='pt-3'>
            <button type="submit"  onClick={userLogin} className="flex w-full justify-center rounded-3xl bg-p_blue-2 hover:bg-opacity-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-black transition">Order</button>
          </div>
          <div className='text-center cursor-pointer underline text-primary'>
          </div>
        </form>
      </div>
      
      </div>
    {/* </div> */}
    </div>
  );
};

export default Order;