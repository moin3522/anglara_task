import { AxiosError } from 'axios'

const AxiosResponseIntrceptorErrorCallback = (error: AxiosError) => {
    /** handle response error here */
    const data = error.response?.data as { message?: string };
    console.log(data)
    return data?.message ?? 'Unknown error'
}

export default AxiosResponseIntrceptorErrorCallback
