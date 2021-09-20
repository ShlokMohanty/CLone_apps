import React, {useEffect} from "react";
import SpotifyWebApi from "Spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import {getTokenFromResponse} from "./spotify";
import "App.css";
import Login from "./Login";

const s = new SpotifyWebApi();
function App() {
  const [{token}, dispatch] = useStateValue();
  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash="";
    let _token = hash.access_token;
    if(_token) {
      s.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      s.getPlaylist("").then((response)=>
                            dispatch({
      }))
  })
