import { useLocation } from "react-router-dom";

const useAuthorName = () => {
    const { pathname } = useLocation();

    const pathSegments = pathname.split('/');
    const authorNameEncoded = pathSegments[pathSegments.length - 1]; // Последний элемент
    const authorName = decodeURIComponent(authorNameEncoded); // Преобразуем

    return authorName;
};

export default useAuthorName;
