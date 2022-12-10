type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  author: Author;
  name: string;
};

const myBook: Book = { 
  author: {
    firstname: "Donia",
    lastName: "Skima"
  },
  name:"My best book"
}