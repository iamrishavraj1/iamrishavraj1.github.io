import React, { useEffect, useState } from "react";
import moment from "moment";
import Loading from "../components/Loading";
import { RiCupFill } from "react-icons/all";

const Blog = ({ title }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = title;
  });

  const url = "https://dev.to/api/articles?username=iamrishavraj1";

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <section class="container interests ">
          <h1 class="display-1 mt-5">Blogs</h1>
          <div class="row mt-5 mb-5">
            {blog.map(
              ({
                title,
                url,
                cover_image,
                readable_publish_date,
                published_timestamp,
                reading_time_minutes,
                published_at,
              }) => {
                return (
                  <>
                    <div class="col-md-4">
                      <div class="blog-entry">
                        <a href={url} target="_blank" rel="noreferrer">
                          <img
                            class="img-fluid"
                            src={cover_image}
                            alt="rishavraj"
                          />
                        </a>
                        <div class="text p-4 d-block">
                          <div class="meta mb-3">
                            <div>
                              <p className="">
                                {moment(published_at).format("LL")},
                                <span className="text-right mx-3">
                                  <RiCupFill /> {reading_time_minutes} min read
                                </span>
                              </p>
                            </div>
                          </div>
                          <h3 class="heading">{title}</h3>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </div>
        </section>
      </>
    );
  }
};

export default Blog;
