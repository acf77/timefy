import { Button, Card, Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const handleOpenSpotify = (album) => {
  console.log(album);
};

export const AlbumCard = (album) => {
  return (
    <Card key={album.name} className="p-3 m-3">
      <Stack direction="horizontal" gap={3}>
        {album.images.slice(1, 2).map((im) => (
          <Image src={im.url} style={{ width: 120, height: 120 }} />
        ))}

        <Stack>
          <h5>Release year: {new Date(album.release_date).getFullYear()}</h5>
          <h5>
            <strong>{album.name}</strong>
          </h5>
          <span>{album.artists[0].name}</span>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <Button onClick={() => console.log(album)}>Listen on Spotify</Button>
        </Stack>
      </Stack>
    </Card>
  );
};
