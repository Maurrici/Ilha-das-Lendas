import { useEffect, useState } from "react"

const Pagination = ({total, page, setPage}) => {
    const [pagesLink, setPagesLink] = useState([]);
    useEffect(() => {
        setPagesLink(() => {
            var newPages = [];
            for (let index = 0; index < total; index++) {
                newPages.push(<button key={index} className="page-number" onClick={e => handlePage(index + 1)}>{index + 1}</button>);
            }

            return newPages;
        })
    }, [total]);

    const handleNext = () => {
        if(page < total) setPage(page + 1);
        console.log(page);
    }

    const handlePrevious = () => {
        if(page > 1) setPage(page - 1);
        console.log(page);
    }

    const handlePage = (page) => {
        console.log(page);
        setPage(page);
    }

    return(
        <div className="pagination">
            <button className="page-default" onClick={e => handlePrevious()}>{"<"}</button>
            {
                pagesLink
            }
            <button className="page-default" onClick={e => handleNext()}>{">"}</button>
        </div>
    )
}

export default Pagination;