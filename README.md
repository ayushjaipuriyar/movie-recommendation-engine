<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ayushjaipuriyar/movie-recommendation-engine">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Movie Recommendation System</h3>

  <p align="center">
    Recommend movies according to the ratings provided by the user
    <br />
    <a href="https://github.com/ayushjaipuriyar/movie-recommendation-engine"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ayushjaipuriyar/movie-recommendation-engine">View Demo</a>
    ·
    <a href="https://github.com/ayushjaipuriyar/movie-recommendation-engine/issues">Report Bug</a>
    ·
    <a href="https://github.com/ayushjaipuriyar/movie-recommendation-engine/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `ayushjaipuriyar`, `movie-recommendation-engine`, `twitter_handle`, `ayushjaipuriyar`, `gmail`, `ayushjaipuriyar21`, `project_title`, `project_description`

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]
- [![Python][python.org]][python-url]
- [![Flask][flask.com]][flask-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

2. Clone the repo
   ```sh
   git clone https://github.com/ayushjaipuriyar/movie-recommendation-engine.git
   ```
3. Backend

   ```sh
   pip install -r movie-recommendation-engine/backend/requirements.txt
   ```

4. Frontend
   ```
   cd movie-recommendation-engine/frontend/
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

I have made a recommendation system using collaborative filtering method.

This filtration strategy is based on the combination of the user’s behavior and comparing and contrasting that with other users’ behavior in the database. The history of all users plays an important role in this algorithm. The main difference between content-based filtering and collaborative filtering that in the latter, the interaction of all users with the items influences the recommendation algorithm while for content-based filtering only the concerned user’s data is taken into account. There are multiple ways to implement collaborative filtering but the main concept to be grasped is that in collaborative filtering multiple user’s data influences the outcome of the recommendation. and doesn’t depend on only one user’s data for modeling.

I have used flask for the backend api and ReactJs for the frontend

I have two endpoints on the api. One of them is used to get random movies which the user needs to rate , so that the algorithm can recommend movies.And the other is to send recommended movies to the front end

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [ ] Better filtering method

See the [open issues](https://github.com/ayushjaipuriyar/movie-recommendation-engine/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - ayushjaipuriyar21@gmail.com

Project Link: [https://github.com/ayushjaipuriyar/movie-recommendation-engine](https://github.com/ayushjaipuriyar/movie-recommendation-engine)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ayushjaipuriyar/movie-recommendation-engine.svg?style=for-the-badge
[contributors-url]: https://github.com/ayushjaipuriyar/movie-recommendation-engine/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ayushjaipuriyar/movie-recommendation-engine.svg?style=for-the-badge
[forks-url]: https://github.com/ayushjaipuriyar/movie-recommendation-engine/network/members
[stars-shield]: https://img.shields.io/github/stars/ayushjaipuriyar/movie-recommendation-engine.svg?style=for-the-badge
[stars-url]: https://github.com/ayushjaipuriyar/movie-recommendation-engine/stargazers
[issues-shield]: https://img.shields.io/github/issues/ayushjaipuriyar/movie-recommendation-engine.svg?style=for-the-badge
[issues-url]: https://github.com/ayushjaipuriyar/movie-recommendation-engine/issues
[license-shield]: https://img.shields.io/github/license/ayushjaipuriyar/movie-recommendation-engine.svg?style=for-the-badge
[license-url]: https://github.com/ayushjaipuriyar/movie-recommendation-engine/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ayushjaipuriyar
[product-screenshot]: images/screenshot.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[python.org]: https://img.shields.io/badge/Python-366B98?style=for-the-badge&logo=python&logoColor=F2C53D
[python-url]: https://www.python.org/
[flask-url]: https://flask.palletsprojects.com/en/2.2.0/
[flask.com]: https://img.shields.io/badge/Flask-000?style=for-the-badge&logo=flask&logoColor=fff
