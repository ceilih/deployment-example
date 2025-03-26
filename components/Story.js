import { useEffect, useState } from "react"

import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"

import Link from "@mui/material/Link"
import { Typography } from "@mui/material"

//destructure the prop (add {} around otherwise error)
export default function Story({id}) {
//make effect that listens to changes on id
//when id rendered fetch story url

//create stateful value isLoading default true
//make effect that is going to listen to change on id

const [isLoading, setIsLoading] = useState(true)
const [story, setStory] = useState(true)
const [comments, setComments] = useState([])

const loadStory = async () => {

    //use a try catch here
    const STORY_URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json?`
    const response = await fetch(STORY_URL)
    const data = await response.json()

    setStory(data)
    setIsLoading(false)
}

useEffect(() => {
    loadStory()
}, [id])
//listening to change on prop

//handle loading state and print the title

//here we will make cards with links and comments etc

//handle the loadin state
if(isLoading) {
    //so many options to display loading
    return `Loading story ${id}. . .`
}
//before the isloading is set to false, the story and story info is null
//if card were to execute before loading completed, would have an error because all the story data is null

//if we get here -> we'll have story

const loadComments = async () => {
    const COMMENTS_URL = `https://hacker-news.firebaseio.com/v0/item/${id}/kids.json?`

    const response = await fetch(COMMENTS_URL)
    const data = await response.json()

    console.log(data)
    //this is getting an array of the ids of the comments
    setComments(data)
}

if(comments.length > 0) {
    //need to map through comments in order to get id and fetch each comment individually 

    comments.map((id) => {
        
    })
}


    return <Card sx={{mt:5}}>
        <CardContent>
            <Link href={story.url} underline="none">
                {story.title}
            </Link>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}>
                score {story.score} by: {story.by}
            </Typography>
        </CardContent>
        <CardActions>
            {/* as a challenge, build a comment component using the
            same ideas (is in a whole different link)
            all the comments have ids -- story kids r the comment ids */}
            {/* <Button size="small" variant="contained" onClick={loadComments}>load comments</Button> */}
        </CardActions>
    </Card>
}