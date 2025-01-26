import React from "react";

const SuccessStoriesPage = () => {
  const stories = [
    {
      name: "Ali's Business Loan",
      story: "Ali started his small business with the help of our interest-free loan and is now running a successful cafe in the city.",
      image: "https://finca.pk/wp-content/uploads/sites/4/2020/02/Javed-Iqbal-700x441.jpg", // Add the image URL for the story
    },
    {
      name: "Fatima's Wedding Loan",
      story: "Fatima was able to make her dream wedding come true with our wedding loan, bringing her family together to celebrate.",
      image: "https://finca.pk/wp-content/uploads/sites/4/2021/04/Sultana-Aslam.jpg", // Add the image URL for the story
    },
    {
      name: "Sara's Mother Education Loan",
      story: "Sara mother was able to continue her education without the burden of high-interest loans. She is now a graduate and working in a prestigious company.",
      image: "https://finca.pk/wp-content/uploads/sites/4/2021/05/Irshad-Bibi.jpg", // Add the image URL for the story
    },
    {
      name: "Ahmed's Home Construction Loan",
      story: "Ahmed built his own home with the help of our home construction loan and now lives comfortably with his family.",
      image: "https://finca.pk/wp-content/uploads/sites/4/2020/02/Rizwan-Shah-700x441.jpg", // Add the image URL for the story
    },
  ];

  return (
    <section className="success-stories-section">
      <div className="container">
        <h1 className="page-title">Success Stories</h1>
        <div className="stories-container">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <img src={story.image} alt={story.name} className="story-image" />
              <h3 className="story-name">{story.name}</h3>
              <p className="story-description">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesPage;
