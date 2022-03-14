import React, { useState, useEffect } from "react";
import { Container, Form, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

import { AlbumCardSkeleton } from "../components/AlbumCardSkeleton";
import {
  filterByYear,
  filterAll,
  filterByBirthdayYear,
  filterByBirthdayMonth,
  filterByBirthdayDay,
  monthUTCConverter,
} from "../components/Functions";

export const AlbumsByYearPage = () => {
  const { id } = useParams();
  const artistId = id;

  const [albumData, setAlbumData] = useState();
  const [year, setYear] = useState(0);
  const [loading, setLoading] = useState(true);
  const [birthday] = useState(localStorage.getItem("timefy-birthday"));
  const [checkedByYear, setCheckedByYear] = useState(false);
  const [checkedByYearMonth, setCheckedByYearMonth] = useState(false);
  const [checkedByYearMonthDay, setCheckedByYearMonthDay] = useState(false);

  const birthdayYear = new Date(birthday).getFullYear();
  const birthdayMonth = new Date(birthday).getMonth();
  const birthdayDay = new Date(birthday).getUTCDate();

  useEffect(() => {
    const handleSearch = async (artistId) => {
      const { data } = await axios.post(
        "http://localhost:8080/api/artist/album",
        artistId
      );
      setAlbumData(data);
      setLoading(false);
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={`Filter by birthday year (${new Date(
            birthday
          ).getFullYear()})`}
          onChange={() => setCheckedByYear(!checkedByYear)}
        />
        <Form.Check
          type="checkbox"
          label={`Filter by birthday month (${monthUTCConverter(birthday)})`}
          onChange={() => setCheckedByYearMonth(!checkedByYearMonth)}
        />
        <Form.Check
          type="checkbox"
          label={`Filter by birthday (${birthdayDay})`}
          onChange={() => setCheckedByYearMonthDay(!checkedByYearMonthDay)}
        />
      </Form.Group>{" "}
      {loading ? (
        <AlbumCardSkeleton />
      ) : checkedByYear ? (
        albumData && filterByBirthdayYear(albumData, birthdayYear)
      ) : checkedByYearMonth ? (
        albumData && filterByBirthdayMonth(albumData, birthdayMonth)
      ) : checkedByYearMonthDay ? (
        albumData && filterByBirthdayDay(albumData, birthdayDay)
      ) : year === 0 ? (
        albumData && filterAll(albumData)
      ) : (
        albumData && filterByYear(albumData, year)
      )}
    </Container>
  );
};
