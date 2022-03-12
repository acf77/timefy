import React, { useState, useEffect } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

import { AlbumCard } from "../components/AlbumCard";

export const AlbumsByYearPage = () => {
  const { id } = useParams();
  const artistId = id;

  const [albumData, setAlbumData] = useState();
  const [year, setYear] = useState(0);

  useEffect(() => {
    const handleSearch = async (artistId) => {
      const { data } = await axios.post(
        "http://localhost:8080/api/artist/album",
        artistId
      );
      setAlbumData(data);
    };
    handleSearch(artistId);
  }, [artistId]);

  return (
    <Container>
      <h2>Albums by year</h2>
      <Stack direction="horizontal" gap={3}>
        <span>Filter by year</span>
        <Form.Control
          type="number"
          label="Year"
          onChange={(e) => setYear(e.target.value)}
        />
      </Stack>
      <span>
        {year !== 0
          ? albumData &&
            albumData.items
              .filter((d) => {
                return new Date(d.release_date).getFullYear() == year;
              })
              .map((album) => <AlbumCard {...album} />)
          : albumData &&
            albumData.items.map((album) => <AlbumCard {...album} />)}
      </span>
    </Container>
  );
};
