import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../config/HttpRequest";
import { toast } from 'react-toastify';
import authToken from '../../utils/authToken';
import { useEffect, useState } from "react";
import { getLoggedUserInfo } from '../../utils/requestInfo';

export interface loginData{
    email:string,
    password:string,
}
export interface registerData{
    email:string,
    password:string,
    landSize:number
}
export interface orderData{
    farmerId:string,
    fertilizer:string,
    seed:number,
}


export const postData = createAsyncThunk("email/send", async (data:any) => {
    try {
        const response = await API.post(`/email`,data)
        toast.success("added successfuly")
        return response;
    } catch (e:any) {
        console.log(e)
        if (e.response && e.response.data) {
            return toast.error(e.response.data.error);
        }
    }
})
export const login = createAsyncThunk("auth/login", async (cridentials: loginData) => {
    try {
        
        const response = await API.post(`/api/login`,cridentials)
        authToken.setToken(response);
        window.location.assign('/order');
        return response.data;
    } catch (e:any) {
        if (e.response && e.response.data) {
            return toast.error(e.response.data.error);
        }
    }
})
export const register = createAsyncThunk("auth/register", async (cridentials: registerData) => {
    try {
        const response = await API.post(`/api/authanticate`,cridentials)
        window.location.assign('/');
        return response.data;
    } catch (e:any) {
        if (e.response && e.response.data) {
            return toast.error(e.response.data.error);
        }
    }
})
export const orderFertilizer = createAsyncThunk("order", async (data: orderData) => {
    try {
        const response = await API.post(`/api/orders`,data)
        return response.data;
    } catch (e:any) {
        if (e.response && e.response.data) {
            return toast.error(e.response.data.error);
        }
    }
})
export const listorder = createAsyncThunk("order/list", async (data: any) => {
    try {
        console.log(data,"data")

        const response = await API.get(`/api/orders`,data)
        return response;
    } catch (e:any) {
        if (e.response && e.response.data) {
            return toast.error(e.response.data.error);
        }
    }
})
export const ordercount = createAsyncThunk("order/count", async () => {
    try {
        const response = await API.get(`/api/orders/count`)
        return response;
    } catch (e:any) {
        if (e.response && e.response.data) {
            return toast.error(e.response.data.error);
        }
    }
})
export const updateOrder = createAsyncThunk("order/update", async (data: any) => {
    try {
        const response = await API.patch(`/api/orders/status`,data)
        return response;
    } catch (e:any) {
        if (e.response && e.response.data) {
            return toast.error(e.response.data.error);
        }
    }
})