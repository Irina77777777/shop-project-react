import { Typography, Card, CardContent } from "@mui/material"
import { useState } from "react"

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
        </>
    )
}
export default Reviews