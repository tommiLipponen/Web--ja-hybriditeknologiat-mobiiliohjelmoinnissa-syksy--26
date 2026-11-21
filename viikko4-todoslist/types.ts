// Yhden tehtävän tiedot
export type Task = {
  // id toimii FlatListin yksilöllisenä avaimena
  id: string;
  text: string;
  // done kertoo, onko tehtävä merkitty tehdyksi
  done: boolean;
};
