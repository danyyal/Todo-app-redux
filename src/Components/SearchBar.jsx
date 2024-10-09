import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchKey } from '../Redux/actions';
export const SearchBar = () => {
  const searchKey = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const css =`
  input {
    width: 80%;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    border-color: #4CAF50; /* Changes border color when focused */
  }`
  return (
    <>
    <input
      type="text"
      value={searchKey}
      placeholder='Enter to search'
      onChange={(e) => dispatch(setSearchKey(e.target.value))}
      />
      <style>{css}</style>
      </>
  );
}