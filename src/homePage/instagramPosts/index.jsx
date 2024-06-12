import React from "react";
import "./style.scss";
import { instagramImgs } from "../../assets/images/images";

const InstagramPosts = () => {
  return (
    <section className="instagram-posts">
      <h3>our Instagram</h3>
      <p>
        Get a sneak peek into our world! Visit our Instagram for stunning
        visuals, exclusive behind-the-scenes content, and much more. Follow us
        now to stay updated on our latest products, events, and happenings.
      </p>
      <p className="tags">@bholeeyoga #bholee</p>
      <div className="gallery-grid">
        <img src={instagramImgs} alt="images" />
      </div>
    </section>
  );
};

export default InstagramPosts;
