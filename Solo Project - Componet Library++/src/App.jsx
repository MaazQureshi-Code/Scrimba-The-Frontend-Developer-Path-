import Testimonial from "./components/testimonials/testimonial"
import Card from "./components/Cards/Cards"
import './App.css';
import img1 from "./bob.jpg"
export default function App() {
  return (
    <main>
      {/*
        Badge usage:
        - shape: "square" or "pill"
        - color: "gray", "red", "yellow", "green",
                 "blue", "indigo", "purple", or "pink"
        - If shape or color is not provided,
          the default values are used.

        Example:
        <Badges shape="square" color="pink">
          Badges
        </Badges>
      */}
      {/*
        Banner usage:
        - status: "success", "warning", "error", or "neutral"
        - The status controls the banner colors and title.
        - The text between <Banners> and </Banners>
          becomes the banner description.
        - If status is not provided,
          "neutral" is used by default.

        Example:
        <Banners status="warning">
          You won nice bro
        </Banners>
      */}

        <Testimonial image={img1}/>
        <Card  />

    </main>
  );
}
