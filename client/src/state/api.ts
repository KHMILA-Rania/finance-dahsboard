
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, getProductsResponse } from "./types";

export const api=createApi({
    baseQuery: fetchBaseQuery({ baseUrl : import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes:["kpis","Products"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>,void>({
            query: ()=>"kpi/kpi/",
            providesTags: ["kpis"],
           
        }),
        getProducts: build.query<Array<getProductsResponse>,void>({
            query: ()=>"product/products/",
            providesTags: ["Products"]
        }),

    }),
})

export const {useGetKpisQuery, useGetProductsQuery} =api;


