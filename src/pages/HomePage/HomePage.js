import { HomeTitle, HomeImg, HomeText } from "./HomePage.styled";
import phonebook from "./phonebook.jpg";

function HomePage() {
  const phoneBookBackground = phonebook;
  return (
    <>
      <HomeTitle>Welcome to your phone book!</HomeTitle>
      <HomeImg src={phoneBookBackground} alt="phoneBook" />
      <HomeText>Please login or register</HomeText>
    </>
  );
}

export default HomePage;
