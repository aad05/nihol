import { useQuery } from "react-query";
import { useAxiosGetDataOnly } from "../useAxios";

const useQueryHandler = () => {
  const axios = useAxiosGetDataOnly();

  const QueryHandler = (props) => {
    const { queryKey, method = "GET", queryLink, body, params } = props;

    return useQuery(
      queryKey,
      () => axios({ url: queryLink, method, body, params }),
      {
        refetchOnWindowFocus: false,
      }
    );
  };
  return QueryHandler;
};
export default useQueryHandler;
