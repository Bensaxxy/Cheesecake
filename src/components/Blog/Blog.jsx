import "./Blog.css";

const Blog = () => {
  return (
    <section className="b-container paddings">
      <div className="b-wrapper">
        <h1>Our Blog </h1>
        <span className="blog-sub-title">Our Recent Posts</span>
      </div>

      <div className="blog-container flexContainer">
        {/*First Card */}
        <div className="blog-card">
          <div className="blog-img">
            <img src="./images/img-blog-1.png" />
            <h4 className="card-date">23 Nov, 2023 / Cheesecake</h4>
            <h2 className="card-title">
              A Peek Behind the <br /> Cheesecake Curtain
            </h2>
            <span className="card-p">
              Step into our cheesecake haven, where <br /> the magic unfolds
              behind the scenes, <br /> whisking dreams into reality. Our
              kitchen <br /> is a symphony and very...
            </span>
            <h4 className="read-more">Read More</h4>
          </div>
        </div>
        {/*Second Card */}
        <div className="blog-card">
          <div className="blog-img">
            <img src="./images/img-blog-2.png" />
            <h4 className="card-date">18 July, 2023 / Cheesecake</h4>
            <h2 className="card-title">
              Low-Sugar & Gluten-Free <br /> Cheesecakes
            </h2>
            <span className="card-p">
              Welcome to our guilt-free indulgence <br /> zone, where we're
              redefining the art of <br /> cheesecake with our delectable low{" "}
              <br /> sugar...
            </span>
            <h4 className="read-more">Read More</h4>
          </div>
        </div>
        {/* Third Card */}
        <div className="blog-card">
          <div className="blog-img">
            <img src="./images/img-blog-3.png" />
            <h4 className="card-date">23 Nov, 2023 / Cheesecake</h4>
            <h2 className="card-title">
              Sweet Words - Customer <br /> Reviews of Cheesecakes
            </h2>
            <span className="card-p">
              Indulge in the rich tapestry of heartfelt <br /> stories within
              "Sweet Words." This curated
              <br />
              collection of customer reviews offers a <br /> iglimpse into the
              joy...
            </span>
            <h4 className="read-more">Read More</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
