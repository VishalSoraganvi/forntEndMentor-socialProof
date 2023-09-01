import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="grid-container">
          <div className="grid-item1">
            <h1>
              <span>10,000+</span> of our
              <br />
              users love our
              <br />
              products.
            </h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="grid-item2">
            <div className="box1">
              <div className="rating1">
                <div className="stars">
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                </div>
                <div className="comment">Rated 5 stars in Reviews</div>
              </div>
            </div>
            <div className="box2">
              <div className="rating2">
                <div className="stars">
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                </div>
                <div className="comment">Rated 5 stars in Report Guru</div>
              </div>
            </div>
            <div className="box3">
              <div className="rating3">
                <div className="stars">
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                  <img src="icon-star.svg" alt="" />
                </div>
                <div className="comment">Rated 5 stars in BestTech</div>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="container1">
              <div className="reviewBox">
                <div className="header">
                  <img src="image-colton.jpg" alt="" />
                  <div className="title">
                    <div className="name">Colton Smith</div>
                    <div className="role">Verified Buyer</div>
                  </div>
                </div>
                <div className="footer">
                  "We needed the same printed design as the one we had ordered a
                  week prior. Not only did they find the original order, but we
                  also received it in time. Excellent!"
                </div>
              </div>
            </div>
            <div className="container2">
              <div className="reviewBox">
                <div className="header">
                  <img src="image-colton.jpg" alt="" />
                  <div className="title">
                    <div className="name">Irene Roberts</div>
                    <div className="role">Verified Buyer</div>
                  </div>
                </div>
                <div className="footer">
                  "Customer service is always excellent and very quick turn
                  around. Completely delighted with the simplicity of the
                  purchase and the speed of delivery."
                </div>
              </div>
            </div>
            <div className="container3">
              <div className="reviewBox">
                <div className="header">
                  <img src="image-colton.jpg" alt="" />
                  <div className="title">
                    <div className="name">Anne Wallace</div>
                    <div className="role">Verified Buyer</div>
                  </div>
                </div>
                <div className="footer">
                  "Put an order with this company and can only praise them for
                  the very high standard. Will definitely use them again and
                  recommend them to everyone!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
