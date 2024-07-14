import React, { useState } from "react";
const Projects = () => {
  const [cards, setCards] = useState([
    {
      github: "",
      title: "Kacha Bazar",
      description:
        "Developed a comprehensive full-stack eCommerce project using React, Next.js, Tailwindcss, Node, Express, and MongoDB, featuring dynamic translation, product attributes, and CRUD operations for staff, products, categories, coupons, and settings",
    },
    {
      github: "",
      title: "Portfolio",
      description:
        "Developed a cutting-edge personal portfolio website utilizing ReactJS, CSS, and Bootstrap, showcasing a wide range of skills and projects in a visually stunning and interactive manner",
    },
    {
      github: "https://github.com/turukpavan/farm-online-store.git",
      title: "Farm Vegies",
      description:
        "Developed a robust and user-friendly eCommerce website for FarmVegies using HTML, CSS, JavaScript, and Bootstrap, enhancing online vegetable shopping experience",
    },
  ]);

  return (
    <div id="Projects" className="py-3">
      <div className="container">
        <h1 className="text-center mb-5">Projects</h1>
        <div className="row g-3 ">
          {cards.map((card,index) => {
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4 ">
                <div
                  className="card mx-auto"
                  style={{ width: "18rem", height: "300px" }}
                >
                    <div className="gitHub_link">
                      <a href={card.github} target="blank" className=" text-decoration-none text-light border border-1 rounded-circle fs-3 bg-color "><i className="ri-github-fill"></i>
                      </a>
                    </div>
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
