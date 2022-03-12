import { Button, Card, Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Popularity } from "./Popularity";

export const SearchCard = (artist) => {
  const navigate = useNavigate();

  const handleYear = () => {
    navigate(`/album/${artist.id}`);
  };

  return (
    <Card key={artist.name} className="p-3 m-3">
      <Stack direction="horizontal" gap={3}>
        {artist.images.slice(1, 2).map((im) => (
          <Image
            key={artist.id}
            src={im.url}
            style={{ width: 80, height: 80, borderRadius: 80 }}
          />
        ))}
        <Stack>
          <h5>
            <strong>{artist.name}</strong>
          </h5>
          <span>
            {Intl.NumberFormat("en-us").format(artist.followers.total)}{" "}
            followers
          </span>
          <span>{Popularity(artist)}</span>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <Button onClick={handleYear}>Albums by Year</Button>
        </Stack>
      </Stack>
    </Card>
  );
};
