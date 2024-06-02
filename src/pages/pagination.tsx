import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import {
  DOTS,
  useCustomPagination,
} from "./control";

const Pagination = ({ rowsChangeHandler,pageChangeHandler, totalRows, rowsPerPage }:any) => {
  console.log(totalRows);
  const noOfPages = Math.ceil(totalRows / rowsPerPage);
  const pagesArr = [...new Array(noOfPages)];
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage)

  const [itemsPerPage,setitemsPerPage] = useState(5);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => setCurrentPage(currentPage - 1);
  const onPageSelect = (pageNo:any) => setCurrentPage(pageNo);

   const setFilterAttribute = async (id:any)=>{
    setitemsPerPage(parseInt(id))
  }
  
  useEffect(() => {
    console.log(totalRows)
    if (noOfPages === currentPage) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [noOfPages, currentPage]);


  useEffect(() => {
    const skipFactor = (currentPage - 1) * rowsPerPage;
    pageChangeHandler(currentPage);
    rowsChangeHandler(itemsPerPage)
  }, [currentPage,itemsPerPage]);
  const paginationRange = useCustomPagination({
    totalPageCount: noOfPages,
    currentPage: currentPage,
  });

  return (
    <>
      
        <>
              <span className="dark:text-zinc-100 flex ml-3 gap-3">
                <div className="rows flex flex-col text-start">
                <label className="text-sm font-medium">Rows:</label>
                    <input
                      type="number"
                        min="1"
                        max={Math.floor(totalRows / currentPage)}
                        value={rowsPerPage}
                        onChange={(e) => {
                          const pageNumber = e.target.value
                            ? Number(e.target.value)
                            : 1;
                           rowsChangeHandler(pageNumber);
                           setitemsPerPage(Number(pageNumber))
                        }}
                        className="w-[70px] pl-2 border border-[#a8a8a8] rounded dark:bg-dark-frame-bg"
                      />
                      </div>
                    {noOfPages > 1 ? (
                      <span className="dark:text-zinc-100 flex flex-col text-left">
                <label className="text-sm font-medium">Jump to:</label>
                 <input
                 type="number"
                  min="1"
                  max={noOfPages}
                  value={currentPage}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value)
                      : 1;
                    onPageSelect(pageNumber);
                  }}
                  className="w-[70px] pl-2 border border-[#a8a8a8] rounded dark:bg-dark-frame-bg"
                />
              </span>
              ) : null} 
              </span>
              {noOfPages > 1 ? (
              <div
                className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
                aria-label="Pagination"
              >
                <div
                  className="relative z-0 inline-flex items-center ml-auto mr-auto  rounded-[2px] shadow-sm space-x-2"
                  aria-label="Pagination"
                >
                  <button
                    className="my-0 mx-[5px] px-[5px] py-0 text-[#333] h-[38px] border-solid border-[1px]  border-[#a8a8a8] dark:disabled:bg-[#485970]  disabled:bg-[#E7E7E7] disabled:text-[#a8a8a8] dark:text-zinc-100"
                    onClick={() => onPageSelect(1)}
                    disabled={!canGoBack}
                  >
                    <AiIcons.AiOutlineDoubleLeft />
                  </button>
                  <button
                    className=" border-solid border-[1px]  border-[#a8a8a8] py-0 px-[10px] text-[#333] rounded-l-[5px] h-[38px] disabled:bg-[#E7E7E7] disabled:text-[#a8a8a8] dark:text-zinc-100 dark:disabled:bg-[#485970]"
                     onClick={onPrevPage}
                     disabled={!canGoBack}
                  >
                    <AiIcons.AiOutlineLeft />
                  </button>
                    {paginationRange?.map((pageNumber, idx) => {
                    if (pageNumber === DOTS) {
                      return (
                        <div key={idx} className="dark:text-zinc-100 ">
                          ...
                        </div>
                      );
                    }

                    if (pageNumber  === currentPage) {
                      return (
                        <button
                          key={idx}
                          className={`border-solid border-[1px] cursor-pointer border-[#a8a8a8] bg-[#fff] min-w-[35px] h-[38px]  active:bg-[#333] active:text-[#fff]-500 rounded-[2px] 
                        ${currentPage && "bg-[#d6dfdf] text-black"} 
                        ${currentPage === 0 && "bg-[#d6dfdf] text-black"} 
                          `}
                          onClick={() => onPageSelect(pageNumber )}
                        >
                          {pageNumber}
                        </button>
                      );
                    }

                    return (
                      <button
                        key={idx}
                        className={`border-solid border-[1px]  cursor-pointer border-[#a8a8a8] bg-[#fff] min-w-[35px] h-[38px]  active:bg-[#333] active:text-[#fff]-500 rounded-[2px]`}
                          onClick={() => onPageSelect(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
               
                  <button
                    className=" border-solid border-[1px]  border-[#a8a8a8] py-0 px-[10px] text-[#333] rounded-r-[5px] h-[38px]  disabled:bg-[#E7E7E7] disabled:text-[#a8a8a8] dark:disabled:bg-[#485970] dark:text-zinc-100"
                     onClick={onNextPage}
                    disabled={!canGoNext}
                  >
                    <AiIcons.AiOutlineRight />
                  </button>
                  <button
                    className="my-0 mx-[5px] px-[5px] py-0 text-[#333] h-[38px] border-solid border-[1px]  border-[#a8a8a8]  disabled:bg-[#E7E7E7] disabled:text-[#a8a8a8] dark:disabled:bg-[#485970] dark:text-zinc-100"
                    onClick={()=>onPageSelect(noOfPages)}
                    disabled={!canGoNext}
                  >
                    <AiIcons.AiOutlineDoubleRight />
                  </button>
                  </div>
              </div>
               ) : null} 
             
            </> 
      
    </>
  );
};

export default Pagination;