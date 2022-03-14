import { AlbumCard } from "./AlbumCard";

export const filterByYear = (albumData, year) => {
  return albumData.items
    .filter((d) => {
      return new Date(d.release_date).getFullYear() == year;
    })
    .map((album) => <AlbumCard {...album} />);
};

export const filterByBirthdayYear = (albumData, birthdayYear) => {
  return albumData.items
    .filter((d) => {
      return new Date(d.release_date).getFullYear() == birthdayYear;
    })
    .map((album) => <AlbumCard {...album} />);
};

export const filterByBirthdayMonth = (albumData, birthdayMonth) => {
  return albumData.items
    .filter((d) => {
      return new Date(d.release_date).getMonth() == birthdayMonth;
    })
    .map((album) => <AlbumCard {...album} />);
};

export const filterByBirthdayDay = (albumData, birthdayDay) => {
  return albumData.items
    .filter((d) => {
      return new Date(d.release_date).getUTCDate() == birthdayDay;
    })
    .map((album) => <AlbumCard {...album} />);
};
export const filterAll = (albumData) => {
  return albumData.items.map((album) => <AlbumCard {...album} />);
};

export const monthUTCConverter = (birthday) => {
  switch (new Date(birthday).getMonth() + 1) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Month";
  }
};
