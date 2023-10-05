import PropTypes from 'prop-types';

const Banner = ({ input, inputValue, searchName }) => {
    const bgImg = {
      backgroundImage: "url(https://i.ibb.co/WnPB0qQ/bg-img.png)",
      backgroundSize: "contain",
      backgroundPosition: "center",
    };
  
    return (
      <div style={bgImg} className="h-[400px] relative flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-opacity-90 bg-gray-100 z-10">

        </div>
        <h1 className="text-5xl font-semibold text-center items-center justify-center pt-20 relative z-20">
          I Grow By Helping People In Need
        </h1>
        <div className="justify-center text-center relative z-20">
          <input
            className="ml-3 text-center mt-10 rounded-l-lg py-2"
            type="text"
            placeholder="Search Here...."
            value={input}
            onChange={inputValue}
          />
          <button
            className="bg-[#FF444A] text-white rounded-r-lg border-l-0 py-2 px-4"
            onClick={searchName}
          >
            Search
          </button>
        </div>
      </div>
    );
  };
  Banner.propTypes = {
    input: PropTypes.string.isRequired,
    inputValue: PropTypes.func.isRequired,
    searchName: PropTypes.func.isRequired,
  
   
  }
  
  export default Banner;
  