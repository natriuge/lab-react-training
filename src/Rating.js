function Rating(props) {
    const noStar = '☆☆☆☆☆'
    const oneStar = '★☆☆☆☆'
    const twoStars = '★★☆☆☆'
    const threeStars = '★★★☆☆'
    const fourStars = '★★★★☆'
    const fiveStars = '★★★★★'

    const ratingNumber = parseFloat(props.children)
    
    if (Math.floor(ratingNumber) === 0) {
        return <h1>{noStar}</h1>
    } else if (ratingNumber <= 1.49) {
        return <h1>{oneStar}</h1>
    } else if (ratingNumber <= 2.49) {
        return <h1>{twoStars}</h1>
    } else if (ratingNumber <= 3.49) {
        return <h1>{threeStars}</h1>
    } else if (ratingNumber <= 4.49) {
        return <h1>{fourStars}</h1>
    } else {
        return <h1>{fiveStars}</h1>
    }
}

export default Rating;