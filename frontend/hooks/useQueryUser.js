import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useQueryUser = () => {
  const router = useRouter()
  const getUser = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`)
    return data
  }
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    onError: (error) => {
      if (error.response.status === 404) {
        router.push('/404')
        return
      }
      if (error.response.status === 401 || err.response.status === 403) router.push('/')
    }
  })
}
