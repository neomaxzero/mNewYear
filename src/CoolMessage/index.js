import React from "react";
import styles from "./styles.css";

const CoolMessage = () => (
  <div className="messageContainer">
    <div className="video-background">
      <div className="video-foreground">
        <iframe
          src="https://www.youtube.com/embed/Nu_GO0hUd0s?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"
          frameBorder="0"
          allowFullScreen
        />        
      </div>
    </div>
    <div className="Message">
        Feliz Año Nuevo
    </div>
  </div>
);

export default CoolMessage;
