import React, { useState, useEffect } from "react";
const cardStyle = {
  width: "300px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  margin: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export const Playlist = () => {
  const [data, setData] = useState([]); //for fetching data
  const [loading, setLoading] = useState(true); //for fetching data

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/admin/courses`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);

      setLoading(false);
      const thumbnail = await Promise.all(
        data.map(async (data) => {
          const thumbnailResponse = await data.get(
            `http://localhost:8080/admin/courses/${data.id}`
          );
          return { ...data, thumbnail: thumbnailResponse.data.url };
        })
      );
      setData(thumbnail);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        id="playlist"
        style={{ backgroundColor: "#add8e6", height: "100vh", padding: "20px" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "70px" }}>Our Playlist</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {Array.from(data).map((course) => (
            <div key={course.id} style={cardStyle}>
              {course.thumbnail && (
                <img
                  style={{ height: "150px", width: "300px" }}
                  src={`http://localhost:8080${course.thumbnail}`}
                  alt="CourseImage"
                />
              )}
              <div style={{ padding: "15px" }}>
                <h2>{course.courseTitle}</h2>
                <p>{course.courseDescription}</p>
                <h4>{course.price}</h4>
                <button style={buttonStyle}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Playlist;
