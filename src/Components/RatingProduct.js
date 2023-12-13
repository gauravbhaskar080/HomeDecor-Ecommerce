import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function RatingProduct() {
  const starIcon = <StarIcon style={{ color: 'black',fontSize: '18px' }} />;
  const emptyStarIcon = <StarBorderIcon style={{ color: 'black' ,fontSize: '18px'}} />;
  const [ratingValue, setRatingValue] = useState(3.5)
  return (
    <div
      style={{
        marginTop: "5px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginLeft: "27px"
      }}
    >
      <div style={{ width: "50%" }}>
        <Rating
          name="half-rating-read"
          defaultValue={ratingValue}
          precision={0.5}
          readOnly
          emptyIcon={emptyStarIcon}
          icon={starIcon}
        />
      </div>
      <div
        style={{
          width: "45%",
          display: "flex",
          justifyContent: "flex-start",
          fontSize: "16px",
          color: "#333",
          marginRight: "13px",
        }}
      >
        0 reviews
      </div>
    </div>
  );
}
