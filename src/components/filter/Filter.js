export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <span> Find contacts by name</span>

      <input
        type="text"
        name="filter"
        // placeholder="Find contacts by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
