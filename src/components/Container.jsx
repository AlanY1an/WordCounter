import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { INSTAGRAM_MAX_CHARACTERS, LINKEDIN_MAX_CHARACTERS } from "../lib/constants";


export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharacterLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    linkedinCharacterLeft: LINKEDIN_MAX_CHARACTERS - text.length,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
