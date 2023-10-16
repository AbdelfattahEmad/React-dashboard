import "./search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="search">
      <button className="search__btn">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="sm"
          style={{ color: "#878a99", marginRight: 10, fontSize: 13 }}
        />
      </button>

      <input className="search__input" placeholder="search..." alt="search" />
    </div>
  );
};

export default Search;
