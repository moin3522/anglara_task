import axios, { AxiosError, AxiosInstance } from 'axios'
import AxiosResponseIntrceptorErrorCallback from './AxiosResponseIntrceptorErrorCallback'
import AxiosRequestIntrceptorConfigCallback from './AxiosRequestIntrceptorConfigCallback'

let AxiosBase: AxiosInstance

// ⛔ This block runs only on server (SSR)
if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers')

    AxiosBase = axios.create({
        baseURL: `${process.env.API_URL}`,
        timeout: 600000,
        withCredentials: true,
    })

    AxiosBase.interceptors.request.use(async (config) => {
        const cookieStore = await cookies()
        const cookieString = cookieStore.toString()
        config.headers.Cookie = cookieString
        return AxiosRequestIntrceptorConfigCallback(config)
    }, (error) => {
        return Promise.reject(error)
    })

} else {
    // ✅ Client-side
    AxiosBase = axios.create({
        baseURL: `${process.env.API_URL}`,
        timeout: 600000,
        withCredentials: true,
    })

    AxiosBase.interceptors.request.use(
        (config) => {
            return AxiosRequestIntrceptorConfigCallback(config)
        },
        (error) => {
            return Promise.reject(error)
        }
    )
}

// ✅ Response interceptor for both server and client
AxiosBase.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const errorMessage = AxiosResponseIntrceptorErrorCallback(error)
        return Promise.reject(errorMessage)
    }
)

export default AxiosBase
