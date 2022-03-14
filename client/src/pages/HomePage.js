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
  const [birthday, setBirthday] = useState();

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8080/api/artist/search",
      search
    );
    setSearchData(data);
    console.log(
      data.artists.items
      // data.items.filter((item) => {
      //   return item.release_date === "1992-03-23";
      // })
    );
  };

  const handleBirthdaySave = () =>
    localStorage.setItem("timefy-birthday", birthday);

  return (
    <Container className="p-3">
      <Form onSubmit={handleSearch}>
        <h2>Timefy</h2>
        <Stack direction="horizontal" gap={3}>
          <FormControl
            className="my-3"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit">
            <strong>Search</strong>
          </Button>
        </Stack>
      </Form>
      <Stack direction="horizontal" gap={3}>
        <span>Released on my birthday</span>
        <Form.Control
          type="date"
          onChange={(e) => setBirthday(e.target.value)}
        />
        <Button onClick={handleBirthdaySave}>
          <strong>Save</strong>
        </Button>
      </Stack>
      {searchData &&
        searchData.artists.items.map((artist) => (
          <SearchCard key={artist.id} {...artist} />
        ))}
    </Container>
  );
};
