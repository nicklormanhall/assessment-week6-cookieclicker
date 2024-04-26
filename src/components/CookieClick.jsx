export default function CookieClick() {
  const handleCookieClick = () => {
    console.log("Image clicked!");
  };

  return (
    <div className="cookieBtn">
      <img src="./public/Cookie.png" alt="Image" onClick={handleCookieClick} />
    </div>
  );
}
