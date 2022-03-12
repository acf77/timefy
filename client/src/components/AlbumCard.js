import { Button, Card, Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AlbumCard = (album) => {
  const navigate = useNavigate();

  //   const handleYear = () => {
  //     navigate(`/album/${artist.id}`);
  //   };

  return (
    <Card key={album.name} className="p-3 m-3">
      <h2>{album.release_date}</h2>
      <Stack direction="horizontal" gap={3}>
        {album.images.slice(1, 2).map((im) => (
          <Image src={im.url} style={{ width: 80, height: 80 }} />
        ))}
        <Stack>
          <h5>
            <strong>{album.name}</strong>
          </h5>
        </Stack>
        {/* <Stack direction="horizontal" gap={3}>
          <Button onClick={handleYear}>Albums by Year</Button>
        </Stack> */}
      </Stack>
    </Card>
  );
};
