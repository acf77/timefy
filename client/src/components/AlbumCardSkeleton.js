import { Card, Image, Stack, Button } from "react-bootstrap";

export const AlbumCardSkeleton = () => {
  const list = ["a", "b", "c", "d", "e", "f"];

  return (
    <>
      {list.map((item) => (
        <Card className="p-3 m-3 skeleton">
          <h2 className="loading" data-text="release date">
            release date
          </h2>
          <Stack direction="horizontal" gap={3}>
            <Image
              style={{ backgroundColor: "white", width: 120, height: 120 }}
            />
            <Stack>
              <h5 className="loading" data-text="Release year:">
                Release year:
              </h5>
              <h5 className="loading" data-text="album name">
                <strong>album name</strong>
              </h5>
              <span className="loading" data-text="album artists name">
                album artists name
              </span>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <Button className="loading" data-text="Listen on Spotify">
                Listen on Spotify
              </Button>
            </Stack>
          </Stack>
        </Card>
      ))}
    </>
  );
};
