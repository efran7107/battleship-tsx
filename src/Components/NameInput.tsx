import { useState } from "react";
import { usePlayer } from "../ComponentsProviders/PlayerProvider";
import "../styles/NameInput.css";

export const NameInput = () => {
  const { player, isNameSet, setName } = usePlayer();
  const [userName, setUserName] = useState(player.name);
  return (
    <>
      {!isNameSet && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setName(userName);
          }}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userName}
            onChange={(e) => {
              setUserName(e.currentTarget.value);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      )}
    </>
  );
};
