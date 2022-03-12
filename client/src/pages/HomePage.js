import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
  Stack,
} from "react-bootstrap";
import axios from "axios";

import { SearchCard } from "../components/SearchCard";

export const HomePage = () => {
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState();

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8080/api/artist/search",
      search
    );
    setSearchData(data);
  };

  return (
    <Container className="p-3">
      <Form onSubmit={handleSearch}>
        <FormLabel>Timefy</FormLabel>
        <FormControl onChange={(e) => setSearch(e.target.value)} />
        <Stack direction="horizontal" gap={3}></Stack>
        <Button type="submit">
          {" "}
          <strong>Search</strong>{" "}
        </Button>
      </Form>
      {searchData &&
        searchData.artists.items.map((artist) => (
          <SearchCard key={artist.id} {...artist} />
        ))}
    </Container>
  );
};
