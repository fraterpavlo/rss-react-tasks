import React from 'react';
import TextField from '@mui/material/TextField';
import { SearchClassProps } from '../interfaces/components/searchClass';

export default class extends React.Component<SearchClassProps> {
  state = {
    currentValue: localStorage.getItem('search-value') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('search-value', this.state.currentValue);
  }

  onSearchChangeHandler(value: string) {
    this.setState({ currentValue: value });
    this.props.passingSearchStateToParent(value);
  }

  render() {
    return (
      <TextField
        className="homepage__textfield"
        id="outlined-search"
        label="Search field"
        type="search"
        autoComplete="off"
        value={this.state.currentValue}
        onChange={(e) => {
          this.onSearchChangeHandler(e.target.value);
        }}
      />
    );
  }
}
