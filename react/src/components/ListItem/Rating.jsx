function Rating({ rating }) {
  const stars = Math.round(rating);
  const starIcons = Array.from({ length: 5 }, (element, index) => (index < stars ? "★" : "☆"));

  return <p>{starIcons.join(" ")}</p>;
}

export default Rating;
