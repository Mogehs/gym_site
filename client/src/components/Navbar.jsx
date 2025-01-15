const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-[100vw] p-3 fixed z-10">
        <div className="bg-fixed bg-no-repeat w-fit">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/gymat_dark-1.svg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center gap-[15vw]">
          <ul className="flex justify-center items-center gap-[3vw]">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
          <ul className="flex justify-center items-center gap-[3vw]">
            <li>Sign Up</li>
            <li>Log In </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
