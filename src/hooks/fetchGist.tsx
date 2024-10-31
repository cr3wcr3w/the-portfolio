import { onMount, createSignal, onCleanup } from "solid-js";
import { itemsPerPage } from '../constant/variable'

type GistType = {
    filename: string;
    html_url: string;
    updated_at: string;
    files: Record<string, { filename: string }>;
  };

export const FetchGist = () => {

    const [data, setData] = createSignal([]);
    const [isError, setIsError] = createSignal(false);
    const [isLoading, setIsLoading] = createSignal(false);
    const [currentPage, setCurrentPage] = createSignal(0);    
    const [totalData, settotalData] = createSignal(0);

    const abortController = new AbortController();

    // there's no total gist when fetching so i need to create another function to count all of gist
    const fetchTotalGist = async (username: string) => {
        const url = `https://api.github.com/users/${username}/gists`;

        const data = await fetch(url, {
            signal: abortController.signal,
        });

        const res = await data.json();
        return res;
    }

    const fetchGists = async (username: string, page: number) => {  
        const url = `https://api.github.com/users/${username}/gists?per_page=${itemsPerPage}&page=${page}`;

        const data = await fetch(url, {
            signal: abortController.signal,
        });

        setIsLoading(true)
        const res = await data.json();
        return res;
    };

    const loadGists = async (page: number) => {
        try {
            const username = "cr3wcr3w";
            const res = await fetchGists(username, page);
            const filteredGists = res.map((repo: GistType) => ({
                html_url: repo.html_url,
                filename: repo.files[Object.keys(repo.files)[0]].filename,
                updated_at: repo.updated_at,
            }));
            const totalGist = await fetchTotalGist(username);
            settotalData(totalGist.length)

            setData(filteredGists);
            setIsLoading(false);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    };

    onMount(() => {
        loadGists(currentPage());

        onCleanup(() => {
            abortController.abort();
        });
    });


    return { data, isError, isLoading, currentPage, setCurrentPage, loadGists, totalData };
};