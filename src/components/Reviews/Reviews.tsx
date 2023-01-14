import {
  Typography, Card, CardContent, TextField,
  TextareaAutosize, Button,
} from "@mui/material"
import React, { useState } from "react"

type Props = {}
type Review = {
  name: string
  text: string
}
const Reviews = (props: Props) => {
 
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'В нашем номере вид был на Dubai Marina (район с небоскрёбами, каналом и чуть море было видно) - невероятная красота, советую именно этот вид выбирать',
        },
        {
            name: 'Ann',
            text: 'У нас были только завтраки включены - были вкусные. Развлечений в самом отеле нет, есть только один бассейн, который особо нам и не нужен был',
        },
    ]
  const [reviews, setReviews] = useState<Review[]>(arrReviews)
  const [newReview, setNewReview] = useState<Review>({
      name: '',
      text: '',
  })
 
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
    }))
    }
        const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNewReview((prevState: Review) => ({
                ...prevState,
                text: e.target.value,
            }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === "" || newReview.text === "") {
            alert("All fields are required!")
        } else {
            setReviews((prevState: Review[]) => {
    return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text:'',
            })
        }
    }
    
    return (
        <>
            <Typography variant="h4" component={'h2'} sx={{ margin: '30px 0' }}>
                Reviews
            </Typography>
            {reviews.map(({ name, text }: Review, i) => (
                <Card
                    variant="outlined"
                    key={i}
                    sx={{
                        margin: '30px 0',
                    }}
                >
                    <CardContent>
                        <div>Name:{name}</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
        <form onSubmit={onSend}>
          <h3>Please leave a reivew</h3>
          <div>
                    <TextField size="small" placeholder="Your  name" value={newReview.name}
                    onChange={handleName} />
          </div>
          <br />
          <div>
                    <TextareaAutosize minRows={5} placeholder="Your text"
                        value={newReview.text} onChange={ handleText} />
          </div>
          <Button type="submit" variant='outlined'> Send</Button>
        </form>
        </>
    )
}
export default Reviews