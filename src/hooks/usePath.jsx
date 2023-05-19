import { useLocation } from "react-router-dom"

export const usePath = () => {
  const { pathname } = useLocation();
  let path = pathname;
  
  if(path.slice(0, 9) === '/projects') {
    path = '/projects';
  }



  const isCurrentPage = (link) => {

    if (link === path) return true;

    return false;
  }

  return {
    isCurrentPage,
  }

}
