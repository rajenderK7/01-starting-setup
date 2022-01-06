const FilterYear = (props) => {
  const changeSelectedYearHandler = (event) => {
    props.getFilteredYear(event.target.value);
  };

  return (
    <div className="form-group">
      <label className="form-label">Filter Year</label>
      <select
        className="form-select mb-2"
        aria-label="Select Year"
        onChange={changeSelectedYearHandler}
      >
        <option selected>{props.selectedYear}</option>
        <option value="All">All</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default FilterYear;
