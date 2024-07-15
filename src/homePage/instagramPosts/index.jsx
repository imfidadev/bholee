import React, { useEffect, useState } from "react";
import "./style.scss";
// import { instagramImgs } from "../../assets/images/images";
import { getPosts } from "../../api/actions";
import { toast } from "react-toastify";
import { parseError } from "../../utils";

const InstagramPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getInstagramPosts = () => {
    setLoading(true);
    getPosts()
      .then((res) => {
        setLoading(false);
        setPosts(res.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(parseError(error));
      });
  };

  useEffect(() => {
    getInstagramPosts();
  }, []);

  return (
    <section className="instagram-posts">
      <h3>our Instagram</h3>
      <p>
        Get a sneak peek into our world! Visit our Instagram for stunning
        visuals, exclusive behind-the-scenes content, and much more. Follow us
        now to stay updated on our latest products, events, and happenings.
      </p>
      <p className="tags">@bholeeyoga #bholee #bholeeyoga</p>
      <div className="gallery-grid">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {posts.map((item, key) => (
              <a href={item.permalink} key={key} target="_blank">
                {item.media_type === "VIDEO" || item.media_type === "IMAGE" ? (
                  <img src={item.thumbnail_url} alt="images" />
                ) : (
                  <p>{item.caption}</p>
                )}
              </a>
            ))}
            {/* <img src={instagramImgs} alt="images" /> */}
          </>
        )}
      </div>
    </section>
  );
};

export default InstagramPosts;
