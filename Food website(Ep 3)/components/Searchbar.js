const Searchbar = () => {
    return (
      <div className="search-section">
        <input
          type="text"
          className="searchBar"
          placeholder="Enter restaurant Name"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    );
  };

export default Searchbar;