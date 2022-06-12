import React from "react";

const Nweet = ({ nweetObj, isOwner }) => (
  <div>
    <h2>{nweetObj.text}</h2>
    {isOwner && (
      <>
        <button>Delete Nweet</button>
        <button>Edit Nweet</button> 
      </>
    )}
  </div>
);

export default Nweet;