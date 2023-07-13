import { useState, useEffect } from "react";

import Item from "../Item";

import "./index.css";

const obj = [ 
  {
    id: 8,
    name: "Passport Application Link",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Indian_Passport.svg/1200px-Indian_Passport.svg.png",
    url: "https://www.passportindia.gov.in/AppOnlineProject/welcomeLink"
  },
  {
    id: 7,
    name: "Degree Online Service, TS (DOST)",
    img: "https://dost.cgg.gov.in/dost_template/img/che_logo.png",
    url: "https://dost.cgg.gov.in/"
  },

  {
    id: 5,
    name: "Police Recruitment (TSLPRB)",
    img: "https://www.tslprb.in/img/tsp_logo.png",
    url: "https://www.tslprb.in/"
  },
  {
    id: 6,
    name: "Group(1, 2, 3 ,4) (TSPSC)",
    img: "https://upload.wikimedia.org/wikipedia/en/8/89/TSPSC_Logo.jpg",
    url: "https://www.tspsc.gov.in/"
  },
  {
    id: 4,
    name: "Railway Recruitment (RRB)",
    img: "https://www.rrbcdg.gov.in/images/logo.png",
    url:
      "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,4,1244"
  },
  {
    id: 3,
    name: "Driving Licence Telangana (RTA)",
    img:
      "https://pbs.twimg.com/profile_images/1331914568973635586/c1PGtJN7_400x400.jpg",
    url: "https://www.transport.telangana.gov.in/html/driving-licence.html"
  },
  {
    id: 2,
    name: "Driving Licence Learning (RTA)",
    img:
      "https://pbs.twimg.com/profile_images/1331914568973635586/c1PGtJN7_400x400.jpg",
    url:
      "https://www.transport.telangana.gov.in/html/driving-licencel-learners.html"
  },
  {
    id: 1,
    name: "Driving Licence Permanent (RTA)",
    img:
      "https://pbs.twimg.com/profile_images/1331914568973635586/c1PGtJN7_400x400.jpg",
    url:
      "https://www.transport.telangana.gov.in/html/driving-licence-prmanent.html"
  }
];

const Links = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchObj, setSearchObj] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const onHandleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filteredObj = obj.filter((eachItem) =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchObj.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setSearchObj(filteredObj);
  }, [searchInput, searchObj.length]);

  return (
    <div className="cards-container">
        <div className="">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            className="search-input"
            type="search"
            onChange={onHandleSearchInput}
            placeholder="here for links"
          />
        </div>
      <div className="cards-container-outer">
        {notFound ? (
          <div>
            <p className="not-found">products not found</p>
          </div>
        ) : (
          <div className="cards-container-inner">
            {searchObj.map((eachItem) => (
              <Item key={eachItem.id} items={eachItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Links;
