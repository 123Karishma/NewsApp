import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home(props) {
    let [articles, setArticles] = useState([]);
    let [totalResults, setTotalResults] = useState(0);
    let [page, setPage] = useState(1);

    async function getAPIData() {
        setPage(1);
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&language=${props.language}&pageSize=26&page=1&sortBy=publishedAt&apiKey=2fd81aac021c4853bdef30c0d1ed23e0`);
        response = await response.json();
        if (response?.status === "ok") {
            setArticles(response.articles.filter(x => x.title !== "[Removed]"));
            setTotalResults(response.totalResults);
        }
    }

    let fetchData = async () => {
        let nextPage = page + 1;
        setPage(nextPage);
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&language=${props.language}&pageSize=26&page=${nextPage}&sortBy=publishedAt&apiKey=2fd81aac021c4853bdef30c0d1ed23e0`);
        response = await response.json();
        if (response?.status === "ok") {
            setArticles(articles.concat(response.articles.filter(x => x.title !== "[Removed]")));
        }
    };

    useEffect(() => {
        getAPIData();
    }, [props]);

    return (
        <div className="container-fluid">
            <h5 className="background text-light text-center p-2 mt-2 text-capitalize">
                {props.search ? props.search : props.q} articles
            </h5>
            <InfiniteScroll
                dataLength={articles?.length} // This is an important field to render the next data
                next={fetchData}
                hasMore={articles?.length < totalResults}
                loader={
                    <div className="my-5 text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            >
                <div className="row">
                    {articles?.map((item, index) => (
                        <Newsitem
                            key={index}
                            source={item.source.name ?? "N/A"}
                            title={item.title ?? "N/A"}
                            description={item.description}
                            url={item.url}
                            Image={item.urlToImage ?? "/images/no-img.png"}
                            date={item.publishedAt}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}
