import React from "react";

import "./Home.css";

export function Home() {
  return (
    <>
      <div className="home-main-container">
        <div className="top-text">
          <p>Keyword Explore</p>
          <div className="keyword">
            <h4>Keyword:</h4>
            <span>Shopping in India </span>
          </div>
          <div className="keyword">
            <h5>database:</h5>
            <p>United State</p>
            <span style={{ marginRight: "10px" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hopkinson_Flag_for_the_U.S._Navy.png/220px-Hopkinson_Flag_for_the_U.S._Navy.png"
                style={{ width: "25px", height: "15px", marginLeft: "10px" }}
                alt="kshit"
              />
            </span>
          </div>
        </div>
        <div className="middle-top-container">
          <div className="top-container">
            <div className="left-container">
              <div style={{ borderBottom: "1px solid black", padding: "10px" }}>
                <p>Volume</p>
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <h3>480</h3>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hopkinson_Flag_for_the_U.S._Navy.png/220px-Hopkinson_Flag_for_the_U.S._Navy.png"
                    style={{
                      width: "30px",
                      height: "20px",
                      marginLeft: "15px",
                    }}
                    alt="kshit"
                  />
                </div>
              </div>
              <div style={{ padding: "10px" }}>
                <p>Keyword Difficulty</p>
                <h3>46%</h3>
                <p>Possible</p>
                <p>
                  Slightly more competition. You will need well structure and
                  unique content
                </p>
              </div>
            </div>
            <div className="right-container">
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "8px",
                  margin: "10px",
                }}
              >
                <p>Internet</p>
                <buuton style={{ backgroundColor: "yellow" }}>
                  Commercial
                </buuton>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "8px",
                  margin: "10px",
                }}
              >
                <p>Results</p>
                <h3>313M</h3>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "8px",
                  margin: "10px",
                  display: "flex",
                  gap: "60px",
                }}
              >
                <div>
                  <p>CPC</p>
                  <h3>$0.12</h3>
                </div>
                <div>
                  <p>Com</p>
                  <h3>0.24</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="tableData-container">
            <div
              className="middle-div"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <button className="middle-btn Broad" >Broad Match</button>
                <button className="middle-btn">Related</button>
                <button className="middle-btn">Questions</button>
              </div>
              <div>
                <button className="add-btn">Add To List</button>
              </div>
            </div>
            <div className="table-data">
              <h4>tableData</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
