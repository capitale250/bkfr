
export interface selectItem {
    name: string;
    value: string;
  }
  
export  interface selectData {
    Map: selectItem[];
    title: string;
    name:string;
  }
export const handleInputChange = (e: any,setData: React.Dispatch<React.SetStateAction<any>>) => {
    const { name, value,type,checked } = e.target;
    console.log(value,"value")
    setData((prevState:any) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };