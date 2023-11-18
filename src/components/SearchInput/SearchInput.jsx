import css from "./SearchInput.module.css";

const SearchInput = ({onSubmit}) => {


    const updateQueryString = event => {
      event.preventDefault();
      
      const form = event.currentTarget;
      const query = form.elements.search.value;

      onSubmit(query);
      form.reset();


  };


    return <div className='container'>
        
        <form name="search-form" className={css.form} onSubmit={updateQueryString}>
        <input type="text" name="search"
          placeholder="Enter movie..."
          className={css.SearchInput}/>
        <button className={css.button} type='submit'>Search</button>
      </form>
    </div>
}

export default SearchInput;
