// import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
//import { doc } from "firebase/firestore";

const Home = ({ userObj }) => {
  console.log(userObj);
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const dbNweets = await dbService.collection("nweets").get();
    //console.log("dbNweets" + dbNweets);
    dbNweets.forEach((document) => {
      const nweetobject = {
        ...document.data(),
        id: document.id,
        };
      setNweets((prev) => [nweetobject, ...prev]);
    });
  };
  useEffect(() => {
    getNweets();
    dbService.collection("nweets").onSnapshot(snapshot => {
      console.log("something happend");
    }
      )}, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
    console.log(nweets);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
