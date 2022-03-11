export const Popularity = (artist) => {
  if (artist.popularity >= 80) {
    return (
      <span>
        <strong style={{ color: "#64d762" }}>Very popular</strong>
      </span>
    );
  } else if (artist.popularity >= 60) {
    return (
      <span>
        <strong style={{ color: "white" }}>Popular</strong>
      </span>
    );
  } else if (artist.popularity >= 40) {
    return (
      <span>
        <strong style={{ color: "white" }}>Mildly popular</strong>
      </span>
    );
  } else if (artist.popularity < 40) {
    return (
      <span>
        <strong style={{ color: "white" }}>Not popular</strong>
      </span>
    );
  }
};
