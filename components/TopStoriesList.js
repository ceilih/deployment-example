import { useState, useEffect } from "react";

import Button from "@mui/material/Button";

import Story from "./Story";


export default function TopStoriesList() {

    const SLICE_SIZE = 5
    //ability to change slice size
    //state 
        //one for entirety
        //one for rendered list
    const [isLoading, setIsLoading] = useState(false)
    const [allStories, setAllStories] = useState([])

    const STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?"
    //effect that loads top stories to a list

    //lets make paginator that will increase slice size
    //(for rendering an additional five stories at a time)
    const [page, setPage] = useState(1)

    const loadAllStories = async () => {
        setIsLoading(true)  
        const response = await fetch(STORIES_URL)
        const data = await response.json()
        setAllStories(data)
        setIsLoading(false)
    }

    //this useeffect is onmount (page load)
    //useeffect cannot be async
    useEffect(() => {
        loadAllStories()
    }, []) 

    const loadMoreStories = () => {
        //increase page by 1
        setPage(page+1)
    }

    //to see all changes of a stateful instead of looking at component profile
    //this is listening to changes on allstories
    useEffect(() => {
        console.log(allStories)
    }, [allStories])


    //handle loading state
    if(isLoading) {
        return "Loading . . ."
    }

    //return
        //a list of story components that will have prop of id
        //"load more" button
    return <> 
    {
        allStories.slice(0, page*SLICE_SIZE).map((storyID) => {
            return <Story key={storyID} id={storyID} />
        })
    }
        <Button 
        onClick={loadMoreStories}
        variant="contained">
            LOAD MORE STORIES
        </Button>
    </>
    
}