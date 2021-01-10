import React from 'react';
import CategoryComponent from '../../components/Category/CategoryComponent';
function Category({ props }) {
  return (
    <CategoryComponent hashTag={props.match.params.hashTag}></CategoryComponent>
  );
}

export default Category;
