import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ backgroundColor: 'lightblue',height:'70vh', padding: '50px' }}>
      <div style={{ maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center', marginTop: '70px' }}>Our Courses</h1>
        <p>
          Welcome to our online learning platform where we offer a wide range of courses to enhance
          your knowledge and skills. Whether you are a beginner looking to learn something new or
          an experienced professional seeking advanced courses, we have something for everyone.
        </p>
        <p>
          Our expert instructors are dedicated to providing high-quality and engaging content to
          make your learning experience enjoyable and effective. We believe in the power of
          education to transform lives, and our mission is to make learning accessible to
          individuals around the world.
        </p>
        <h3>Why Choose Us?</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>&#10004; Diverse range of courses in various domains.</li>
          <li>&#10004; Experienced and knowledgeable instructors.</li>
          <li>&#10004; Flexible learning schedules to fit your lifestyle.</li>
          <li>&#10004; Interactive and engaging learning materials.</li>
          <li>&#10004; Affordable pricing with options for financial assistance.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
