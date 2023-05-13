import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search By Country    '
        onChange={searchChange}
      />

      <a class="navbar-brand">Search Flight by Time Range 
        <button routerLink="/flightTime" type="submit" class="btn btn-primary mx-1">Search</button>
      </a>
      <form class="d-flex" onClick={timeBetween}>
        <div class="form-row">
          <div class="d-inline-block form-group col-lg-7">
            {/* <!-- <label for="examplelabel">Flight From</label> --> */}
            <input type="date" name="dateBeg" class="form-control" />
          </div>
          <div class="d-inline-block form-group col-lg-5">
            <input type="time" name="timeBeg" class="form-control" />
          </div>
        </div>
        
        <div class="form-row">
          <div class="d-inline-block form-group col-lg-7">
            {/* <!-- <label for="examplelabel">To</label> --> */}
            <input type="date" name="dateEnd" class="form-control" />
          </div>
          <div class="d-inline-block form-group col-lg-5">
            <input type="time" name="timeEnd" class="form-control" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary mx-2">Submit</button>
      </form>  
    </div>
  );
}

export default SearchBox;


//test sample
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}