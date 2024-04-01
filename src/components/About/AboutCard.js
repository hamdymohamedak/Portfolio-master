import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const [githubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/hamdymohamedak/repos");
        if (response.ok) {
          const data = await response.json();
          setGithubRepos(data);
        } else {
          throw new Error("Failed to fetch data from GitHub API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGithubRepos();
  }, []);

  // Function to fetch starred count for a repository
  const fetchStarCount = async (starredUrl) => {
    try {
      const response = await fetch(starredUrl);
      if (response.ok) {
        const data = await response.json();
        return data.length; // Length of the array represents the number of stars
      } else {
        throw new Error("Failed to fetch starred count");
      }
    } catch (error) {
      console.error("Error fetching starred count:", error);
      return 0;
    }
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hamdy-Mohamed </span>
            from <span className="purple"> Alexandria, Egypt.</span>
            <br />
            I worked in a motion production company
            <br />
            I Worked at UpWork and mostaqeel
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> more Learning To be special
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading in the fields of medicine and pharmacy
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hamdy-Mohamedak</footer>
        </blockquote>

        <div>
          <h4>GitHub Repositories:</h4>
          <ul>
            {githubRepos.map((repo) => (
              <li key={repo.id} id="reposParent" className="about-activity">
                <ImPointRight />{" "}
                <a id="repoText" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
