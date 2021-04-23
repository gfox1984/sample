export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const users: User[] = [
  { id: "1", firstName: "Richard", lastName: "Hendricks" },
  { id: "2", firstName: "Erlich", lastName: "Bachman" },
  { id: "3", firstName: "Nelson", lastName: "Bighetti" },
  { id: "4", firstName: "Bertram", lastName: "Gilfoyle" },
  { id: "5", firstName: "Dinesh", lastName: "Chugtai" },
  { id: "6", firstName: "Peter", lastName: "Gregory" },
  { id: "7", firstName: "Monica", lastName: "Hall" },
  { id: "8", firstName: "Jared", lastName: "Dunn" },
  { id: "9", firstName: "Gavin", lastName: "Belson" },
  { id: "10", firstName: "Jian", lastName: "Yang" },
  { id: "11", firstName: "Laurie", lastName: "Bream" },
  { id: "12", firstName: "Russ", lastName: "Hanneman" },
  { id: "13", firstName: "Jack", lastName: "Barker" },
];

export const fetchUsers = async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));

  return users;
};
