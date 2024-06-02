import spinner from "./spinner3.gif";
export const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "300px", margin: "auto", display: "block" }}
      />
    </div>
  );
};